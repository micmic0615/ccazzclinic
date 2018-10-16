exports.globals = ()=>{
	let return_global = {};
	return_global.appRequire = name => require(`${__dirname}/app/${name}`);
	return_global.rootRequire = name => require(`${__dirname}/${name}`);

	return_global._ = require("./app/scripts/lodashExtended")();		
	return_global.logToFile = function(text, name="debug") {
		const fs = require('fs');
		const util = require('util');

		let directory = __dirname + "/debug/"
		
		if (!fs.existsSync(directory)) {
			fs.mkdirSync(directory)
		}

		const log_file = fs.createWriteStream(directory+name+".log", {flags : "w"});
		const log_stdout = process.stdout;

		log_file.write(util.format(text) + '\n');
		log_stdout.write(util.format(text) + '\n');
	};

	
	const globalFunctions = return_global;
	Object.keys(globalFunctions).forEach((g_func)=>{ global[g_func] = globalFunctions[g_func] });

	global.DB = {};
};

exports.models = ()=>{
	const glob = require("glob");
	let models = glob.sync("./app/models/*.js", {});
	models.forEach((model_path)=>{
		let model_name = model_path.replace("./app/models/", "").replace(".js", "");
		if (model_name.charAt(0) != "_"){global.DB[model_name] = require(model_path)};
	});
}

exports.routes = (app, src)=>{
	const path = require('path');
	const glob = require("glob");
	let routes = glob.sync("./app/routes/*.js", {});
	routes.forEach((route)=>{
		let rotue_details = route.replace("./app/routes/", "").split(".");

		let route_crud = rotue_details[0];
		let route_name = rotue_details[1];
		let route_function = require(route);

		if (_.isFunction(route_function)){
			app[route_crud]("/api/" + route_name, route_function)
		} else {
			
			Object.keys(route_function).forEach((route_key)=>{
				app[route_crud]("/api/" + route_name + "/" + route_key, route_function[route_key]);
			})
		}
	})

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname + src));
	});
}

exports.mongoose = (callback)=>{
	const mongoose = require('mongoose');
	mongoose.connect("mongodb://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_NAME);

	mongoose.connection.on('open', ()=>{callback(mongoose)})

	mongoose.connection.on('error',function (err) {  
		console.log('Mongoose default connection error: ' + err);
	}); 
	
	mongoose.connection.on('disconnected', function () {  
		console.log('Mongoose default connection disconnected'); 
	});
}


exports.app = (mongoose)=>{
	const express = require('express');
	const app = express();

	const session = require('express-session');
	const MongoStore = require('connect-mongo')(session);
	const passport = require('passport');
	const bodyParser = require('body-parser');
	const cookieParser = require('cookie-parser');
	const compression = require('compression');
	const cors = require('cors');

	passport.serializeUser(function(user, done) {done(null, user._id)});

	passport.deserializeUser(function(id, done) {
		DB["sessions"].findOne({"_id": id}, function(err, user_session){
			if (!_.isNil(user_session)){done(null, user_session)} 
			else {done(null, false)}
		})
	});

	app.use(cors())

	app.use(cookieParser());
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

	app.use(session({
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			collection:"connect_sessions",
			autoRemove: 'interval',
     		autoRemoveInterval: 5,
			ttl: 3 * 24 * 60 * 60
		}), 
		secret: 'greymattercapsecretkey',		
		resave: true,
		saveUninitialized: true,
		cookie: { httpOnly: true, secure: false }
	}))

	app.use(passport.initialize());
	app.use(passport.session());

	app.use(compression())
	app.use(express.static(__dirname + '/src'));

	

	return app;
}
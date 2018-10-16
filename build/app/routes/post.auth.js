let checkDb = (req)=>{return Object.keys(DB).includes(req.body.db)}
let errorDb = (res)=>{res.status(400).send("invalid db name")}

exports.register = function(req, res){
    let user_data = req.body;
    user_data.is_parent = true;
    
    let new_user = new DB["users"](user_data);
    new_user.token = _.uuid();
    new_user.save((err)=>{
        if (_.isNil(err)){
            res.json(new_user)
        } else {
            res.status(400).send(err)
        }
    })
}



exports.login = function(req, res){
    DB["users"].findOne({username: req.body.email, password: req.body.password}, (err, user)=>{
        if (!_.isNil(user)){
            user.token = _.uuid();
            user.save((err)=>{
                res.json(user)
            })
        } else {
            res.status(400).send(err)
        }
    })
}

exports.validateToken = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            res.json(user)
        } else {
            res.status(400).send(err)
        }
    })
}
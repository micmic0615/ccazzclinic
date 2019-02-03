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
    DB["users"].findOne({username: req.body.username, password: req.body.password}, (err, user)=>{
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
    if (!_.isNil(req.body.token)){
        DB["users"].findOne({token: req.body.token}, (err, user)=>{
            if (!_.isNil(user)){
                res.json(user)
            } else {
                res.status(400).send(err)
            }
        })
    } else {
        res.status(400).send("")
    }
    
}

exports.changePassword = function(req, res){
    if (!_.isNil(req.body.token)){
        if (req.body.new_password == req.body.confirm_password && req.body.new_password != "" && !_.isNil(req.body.new_password)){
            DB["users"].findOne({username: "ccazzadmin"}, (err, user)=>{
                if (!_.isNil(user)){
                    if (user.password == req.body.old_password){
                        user.password = req.body.new_password;
                        user.markModified("password");
                        user.save(()=>{
                            res.json("success")
                        })
                    } else {
                        res.json("Wrong old password")
                    }
                } 
            })
        } else {
            res.json("New password does not match the confirm password")
        }
    }
}
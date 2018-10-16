let checkDb = (req)=>{return Object.keys(DB).includes(req.body.db)}
let errorDb = (res)=>{res.status(400).send("invalid db name")}

exports.getMyChildren = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            DB["users"].find({_id: {"$in" : user.children}}, (err, children)=>{
                res.json(children || [])
            })
        } else {
            res.status(400).send(err)
        }
    })
}

exports.getMySpouse = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            DB["users"].findOne({_id: user.spouse}, (err, spouse)=>{
                res.json(spouse)
            })
        } else {
            res.status(400).send(err)
        }
    })
}

exports.getMyFriends = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            DB["users"].find({_id: {"$in" : user.friends}}, (err, friends)=>{
                res.json(friends || [])
            })
        } else {
            res.status(400).send(err)
        }
    })
}


exports.addMyChild = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            let child_data = req.body;
            child_data.is_parent = false;
            child_data.parent = [user._id, user.spouse];

            if (!_.isEmptyString(child_data.username) && !_.isEmptyString(child_data.grade) && !_.isEmptyString(child_data.school)){
                let new_child = new DB["users"](child_data);
                new_child.save((err)=>{
                    console.log(err)
                    user.children  = [...user.children, new_child._id];
                    user.markModified("children")
                    user.save((err)=>{
                        DB["users"].findOne({_id: user.spouse}, (err, spouse)=>{
                            if (_.isNil(spouse)){
                                res.json(new_child)
                            } else {
                                spouse.children  = [...spouse.children, new_child._id];
                                spouse.markModified("children")
                                spouse.save((err)=>{
                                    res.json(new_child)
                                })
                            }
                        })
                    })
                })
            } else {
                let err =  new Error("required fields")
                res.status(400).send(err)
            }
        } else {
            res.status(400).send(err)
        }
    })
}

exports.addMySpouse = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){
            DB["users"].findOne({_id: req.body.user_id}, (err, spouse)=>{
                if (!_.isNil(spouse)){
                    user.spouse = spouse._id;
                    spouse.spouse = user._id;

                    let children_list = _.uniqWith([...user.children, ...spouse.children], _.isEqual);

                    user.children = children_list;
                    spouse.children = children_list;

                    user.markModified("spouse")
                    user.markModified("children")
                    spouse.markModified("spouse")
                    spouse.markModified("children")

                    user.save(()=>{spouse.save(()=>{
                        res.json("success")
                        DB["users"].find({_id: {"$in": user.children}}, (err, children)=>{
                            children.forEach((child)=>{
                                child.parent = [user._id, spouse._id];
                                child.markModified("parent");
                                child.save()
                            })
                        })
                    })})
                } else {
                    res.status(400).send(err)
                }
            })
        } else {
            res.status(400).send(err)
        }
    })
}

exports.addMyFriend = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){ 
            DB["users"].findOne({_id: req.body.user_id}, (err, friend)=>{
                if (!_.isNil(friend)){
                    user.friends = _.uniqWith([...user.friends, friend._id], _.isEqual);
                    friend.friends = _.uniqWith([...friend.friends, user._id], _.isEqual);

                    user.markModified("friends");
                    friend.markModified("friends");

                    user.save(()=>{friend.save(()=>{
                        res.json("success");
                    })})
                }
            })
        }
    })
}

exports.updateMyProfilePic = function(req, res){
    DB["users"].findOne({token: req.body.token}, (err, user)=>{
        if (!_.isNil(user)){ 
            user.profile_pic = req.body.profile_pic;
            user.markModified("profile_pic");
            user.save(()=>{
                res.json("success")
            })
        }
    })
}
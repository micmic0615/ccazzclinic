let checkDb = (req)=>{return Object.keys(DB).includes(req.body.db)}
let errorDb = (res)=>{res.status(400).send("invalid db name")}

exports.read = function(req, res){
    if (!checkDb(req)){return errorDb(res)};

    let query = DB[req.body.db].find((req.body.filter || {}), (req.body.project || ""))
    if (!_.isNil(req.body.populate)){query.populate(req.body.populate)}
    if (!_.isNil(req.body.sort)){query.sort(req.body.sort)}
    if (!_.isNil(req.body.limit)){query.limit(req.body.limit)}
    if (!_.isNil(req.body.skip)){query.skip(req.body.skip)}

    query.exec((err, result)=>{
        if (_.isNil(err)){
            res.json(result)
        } else {
            res.status(400).send(err)
        }
    })
}

exports.create = function(req, res){
    if (!checkDb(req)){return errorDb(res)};

    let new_item = new DB[req.body.db](req.body.data);
    new_item.save((err)=>{
        if (_.isNil(err)){
            res.json(new_item)
        } else {
            res.status(400).send(err)
        }
    })
}

exports.update = function(req, res){
    if (!checkDb(req)){return errorDb(res)};
    if (_.isNil(req.body.filter)){return res.status(400).send("filter is required")};

    DB[req.body.db].find(req.body.filter).exec((err, result)=>{
        result.forEach((item)=>{
            Object.keys(req.body.data).forEach((key)=>{
                console.log(req.body.data[key], key)
                item[key] = req.body.data[key];
                item.save()
            })
        });
        
        if (_.isNil(err)){
            res.json(result)
        } else {
            res.status(400).send(err)
        }
    });
}

exports.destroy = function(req, res){
    if (!checkDb(req)){return errorDb(res)};
    if (_.isNil(req.body.filter)){return res.status(400).send("filter is required")};

    DB[req.body.db].find(req.body.filter).exec((err, result)=>{
        result.forEach((item)=>{item.remove()});
        
        if (_.isNil(err)){
            res.json(result)
        } else {
            res.status(400).send(err)
        }
    });
}

exports.email = function(req, res){
    var nodemailer = require('nodemailer');

    DB["pages"].findOne({page_id: "contact_us"}).exec((err, result)=>{
        if (!_.isNil(result) && !_.isNil(result.content)){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: result.content.form_sender_email,
                    pass: result.content.form_sender_passwords
                }
            });
        
            var mailOptions = {
                from: result.content.form_sender_email,
                to: req.body.email,
                subject: result.content.form_sender_subject,
                text: `Name: ` + req.body.name + ` \nContact No: ` + req.body.contact + `\nMessage: ` + req.body.message
            }
        
            transporter.sendMail(mailOptions, function(err, info){
                if (err) {
                  res.status(400).send(err)
                } else {
                  res.json("success")
                }
            });
        } else {
            res.status(400).send(new Error("Email Data not set"))
        }
    })
}
var dao = require('../dao');
var usernameRE = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
var passwordRE = /^[a-zA-Z0-9]{5,20}$/;
var nicknameRE = /^[a-zA-Z\u4e00-\u9fa50-9]+$/;
var genderRE = /^[fmu]$/;
function validateRequired(va, re){
    if(va != undefined && re.test(va)){
        return true;
    }else{
        return false;
    }
}

exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.register = function(req, res){
    var body = req.body;
    var username = body.username;
    var password = body.password;
    var nickname = body.nickname;
    var gender = body.gender;
    if(!validateRequired(username, usernameRE)){
        res.json({
            code: 1,
            error: 'invalid username'
        });
        return;
    }
    if(!validateRequired(password, passwordRE)){
        res.json({
            code: 1,
            error: 'invalid password'
        });
        return;
    }
    if(!validateRequired(nickname, nicknameRE)){
        res.json({
            code: 1,
            error: 'invalid nickname'
        });
        return;
    }
    if(!validateRequired(gender, genderRE)){
        res.json({
            code: 1,
            error: 'invalid gender'
        });
        return;
    }
    
    dao.user_collection.insert({
        'username': username,
        'password': password,
        'nickname': nickname,
        'gender': gender
    }, function(err, result){
        if(err == null){
            res.json({
                code: 0,
                result: 'success'
            });
        }else{
            res.json({
                code: 0,
                error: err
            });
        }
    });
}
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var usersDataSchema = require('../../public/models/usersData');
var usersData = mongoose.model('UserData',usersDataSchema);
var chatSchema = require('../../public/models/chat');
var chatData = mongoose.model('chatData',chatSchema);


router.post('/login',function (req,res) {

  console.log(req.body);
  var username = req.body.username;
  var pwd = req.body.password;
  // console.log('SocID:'+socket.id +' ' + id);

  usersData.find({username:username},function (err1,data1) {
    if(err1){
      console.log(err1);
    }
    else if (data1.length > 0) {

      if (data1[0].password == pwd) {

        usersData.update({username: username}, {socketId: '',activity:true}, function (err2, data2) {
          if (err2) {
            console.log(err2);
          }
          else {
            console.log(data2);
          }
        });
        res.send({username:username,url:data1[0].url,success: true});
      }
    }

    else if(data1.length == 0) {
      res.send({username: username,success: false});
    }

  });

});


// router.post('signup',function (data) {
//
// });



module.exports = router;

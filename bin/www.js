
var app = require('../app');
var debug = require('debug')('angular2-nodejs:server');



var express = require('express');
var router = express.Router();

var http = require('http');

var crypto = require('crypto');
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var methodOverride = require('method-override');

var mongoose = require('mongoose');
var usersDataSchema = require('../public/models/usersData');
var usersData = mongoose.model('UserData',usersDataSchema);
var chatSchema = require('../public/models/chat');
var chatData = mongoose.model('chatData',chatSchema);

var port = process.env.PORT || '8080';
app.set('port', port);

let gfs;

// const uri = "mongodb+srv://rf:thebest1@ecom-95a4a.mongodb.net/ecom";
 const uri = "mongodb://roger:thebest1@ds061631.mlab.com:61631/chatapp";
// const uri = "mongodb+srv://ganeshbilla4u:thebest1@cluster0-hihoh.mongodb.net/test?retryWrites=true&w=majority";
//   const uri = "mongodb://localhost:27017/chat";
mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection succeeded.");
});




var server = http.createServer(app);

var io = require('socket.io').listen(server);
// var jwtAuth = require('socketio-jwt');
 var users=[];
 var userList=[];
var  RPobj = null;
var RandomPobj = null ;
var Username = null;
var ID = null;
var FoundPersonID=null;



io.on('connection',(socket) => {

  console.log('new connection made. '+socket.id);
  if(ID != socket.id){
    RPobj.from.id = socket.id;
    RandomPobj.to.id = socket.id;

    io.in(RPobj.from.id).emit('found person', RandomPobj);
    io.in(RPobj.to.id).emit('found person', RPobj);
    usersData.update({username: Username}, {socketId: socket.id}, function (err2, data2) {
      if (err2) {
        console.log(err2);
      }
      else {
        console.log(data2);
      }
    });

  }

    socket.on('enter',function (data) {


      var username = data.user;
      Username = username;
      ID = socket.id;
      var id = socket.id;

      usersData.update({username: username}, {socketId: id,activity:true}, function (err2, data2) {
        if (err2) {
          console.log(err2);
        }
        else {
          console.log(data2);
        }
      });



      var key= data.user;
      var userInfo={};

      userInfo[key]=socket.id;

      userList.push(userInfo);

        users.push(data.user);
        console.log(socket.id);
        io.emit('new user entered',users);

    });
    socket.on('signup',function (data) {
      console.log('hi');
      var username = data.username;
      var email = data.email;
      var pwd = data.password;
      var url = data.url;
      var gender = data.gender;
      var dob = data.dob;

      usersData.find({username:username},function (err1,data1) {
        if(data1.length == 0 ) {

          var rog = new usersData({
            username: username,
            email:email,
            password:pwd,
            socketId:socket.id,
            gender:gender,
            dob:dob,
            languages:'english',
            requiredLanguages:'english',
            requiredAge:'4',
            requiredGender:'any',
            url:url,
            activity:true
          });
          console.log(dob);
          rog.save(function (error) {
            if(error){
              console.log(error);
            }
            else {
              console.log('Your data has been saved');
              socket.emit('signupStatus',{username:username,url:url,success:true});
            }
          });
        }
        else if (data1.length > 0){
            console.log(data1);
          socket.emit('signupStatus',{username:username,success:false})
        }
      })

    });

    socket.on('login',function (data) {
      var id = socket.id;
      var username = data.username;
      var pwd = data.password;
   console.log('SocID:'+socket.id +' ' + id);

      usersData.find({username:username},function (err1,data1) {
        if(err1){
          console.log(err1);
        }
        else if (data1.length > 0) {

          if (data1[0].password == pwd) {

            usersData.update({username: username}, {socketId: id,activity:true}, function (err2, data2) {
              if (err2) {
                console.log(err2);
              }
              else {
                console.log(data2);
              }
            });
            socket.emit('loginStatus', {username:username,url:data1[0].url,success: true});
          }
        }

        else if(data1.length == 0) {
            socket.emit('loginStatus', {username: username,success: false});
          }

      });
      });

  socket.on('find',function (data) {
    var username= data.user;
    var count;
    var conditions = {
      username : { $ne : username},
      activity: true
    };
    usersData.find(conditions, function (err, data1) {
      if (err) {console.error(err);}
      else if(data1.length == 0){
        usersData.find({username:username},{_id:0},function (err2,data2) {
          if(err2){console.log(err2); }
          else {
            io.in(data2[0].socketId).emit('left message',{user:username,
              message:"- Sorry, There aren't any people available at this moment. Please try again after sometime. "});
          }
        });
      }

      else {
        // console.log(data1);
        count = data1.length;
        usersData.find({username:username},{_id:0},function (err2,data2) {
          if(err2){console.log(err2); }
          else{
            var random = Math.floor(Math.random() * count);

            var FoundName = data1[random].username;
            var FSI = data1[random].socketId;
            FoundPersonID = FSI;
            var FUrl = data1[random].url;
            // console.log(FoundName);

            function calculateAge(birthday) { // birthday is a date
              const moonLanding = new Date(birthday);
              var ageDifMs = Date.now() -  moonLanding.getTime();
              var ageDate = new Date(ageDifMs); // miliseconds from epoch
              return Math.abs(ageDate.getUTCFullYear() - 1970);
            }

            RPobj={

              to:{
                name:FoundName,
                id:FSI,
                url:FUrl,
                gender:data1[0].gender,
                age:calculateAge(data1[0].dob),
                language:data1[0].languages
              },
              from: {
                name: data2[0].username,
                id: data2[0].socketId,
                url:data2[0].url,
                gender:data2[0].gender,
                age:calculateAge(data2[0].dob),
                language:data2[0].languages
              }
            };
            RandomPobj={
              to: {
                name: data2[0].username,
                id: data2[0].socketId,
                url:data2[0].url,
                gender:data2[0].gender,
                age:calculateAge(data2[0].dob),
                language:data2[0].languages
              },
              from:{
                name:FoundName,
                id:FSI,
                url:FUrl,
                gender:data1[0].gender,
                age:calculateAge(data2[0].dob),
                language:data1[0].languages
              }
            };
            var RName= data2[0].username;

            var conditions = { 'username':{
                $in:[
                  RName, FoundName]}}
              , update={activity:false},options={multi: true};

            usersData.updateMany(conditions,update,options,function (err3,data3) {
              if (err3) {
                console.error(err);
              }
              else {
                console.log(data3);
              }

            });
            console.log(socket.id,FSI);


            io.in(FSI).emit('found person', RandomPobj);
            io.in(data2[0].socketId).emit('found person', RPobj);
            io.in(FSI).emit('new message',{user: RandomPobj.from.name, message: RandomPobj.to.name+ ' connected'});
            io.in(data2[0].socketId).emit('new message',{user:RandomPobj.to.name, message: RPobj.to.name+ ' connected'});
            console.log(RPobj.to);

          }
        })
      }
    });

  });

    socket.on('leave', function(data){
    var RName=data.toName,FoundName=data.fromName;
    var To=data.to,From=data.from;
    FoundPersonName = null;

      var conditions = {'username':{
          $in:[RName,FoundName]
      }},update={activity:true},options={multi:true};
      usersData.update(conditions,update,options,function (err1,data1) {

          if (err1) {
              console.error(err);
          }
          else {
              console.log(data1);
          }
      });

      //socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left the chat.',activity:false});
        io.in(To).emit('left message', {user: data.user, message: '- has left the chat.',activity:false});
        io.in(From).emit('left message', {user: data.user, message:'- You left the chat.',activity:false});
        RPobj = null;
        RandomPobj = null;

      socket.leave(data.room);


    });
socket.on('signout', function(data){
  var RName=data.user;

  var update={activity:false},options={multi:true};
  usersData.update({'username':RName},update,options,function (err1,data1) {

    if (err1) {
      console.error(err);
    }
    else {
      console.log(data1);
    }
  });



});

  socket.on('userSettings',function (data) {
    var language = data.language;
    var url = data.url;
    var username1 = data.username;

    var conditions = {'username':username1},update={languages:language,url:url},options={multi:true};
    usersData.update(conditions,update,options,function (err1,data1) {

      if (err1) {
        console.error(err1);
        socket.emit('settings save info',{message:'Unable to save Settings, please try again .',status:false});
      }
      else {
        console.log(data1);
        socket.emit('settings save info',{message:'Settings saved',status:true});
      }
    });


  });
  socket.on('matchSettings',function (data) {
    var age = data.age;
    var gender = data.gender;
    var language = data.language;
    var username1 = data.username;
    usersData.update({'username':username1},{requiredAge:age,requiredGender:gender,requiredLanguages:language},{multi:true},function (err,data1) {

      if (err) {
        console.error(err);
        socket.emit('settings save info',{message:'Unable to save Settings, please try again .',status:false});
      }
      else {
        console.log(data1);
        socket.emit('settings save info',{message:'Settings saved',status:true});
      }
    });
  });

    socket.on('message',function(data){
        console.log(data);

                var To = data.to;
                var From= data.from;
                var toName = data.toName;
                if(toName > data.user) {
                  console.log('True');
                  var chatName = toName + data.user;

                  chatData.find({chatName: chatName}, function (err1, data1) {

                    if (data1.length > 0) {

                      var update = {
                        to: data.toName,
                        from: data.user,
                        message: data.message
                      };


                      chatData.update({chatName: chatName}, {$push:{messages: update}}, function (err2, data2) {
                        if (err2) {console.log(err2);}
                        else {console.log(data2);}
                      });
                    }
                    else {
                      var update = new chatData({
                        chatName:chatName,
                        messages:{
                          to: data.toName,
                          from: data.user,
                          message: data.message}
                      });
                      update.save(function (error) {
                        console.log("Your data has been saved!");
                        if (error) {
                          console.error(error + " enter");
                        }
                      });
                    }
                  });
                }
                else if (toName < data.user){
                  console.log('False');

                  var chatName1 = data.user + toName;

                  chatData.find({chatName: chatName1}, function (err1, data1) {

                    if (data1.length > 0) {
                      var update = {
                        to: data.toName,
                        from: data.user,
                        message: data.message
                      };
                      chatData.update({chatName: chatName1}, {$push:{messages: update}}, function (err2, data2) {
                        if (err2) {
                          console.log(err2);
                        }
                        else {
                          console.log(data2);
                        }
                      });
                    }
                    else {
                      var update = new chatData({
                        chatName:chatName1,
                        messages:{
                        to: data.toName,
                        from: data.user,
                        message: data.message}
                      });
                      update.save(function (error) {
                              console.log("Your data has been saved!");
                              if (error) {
                                  console.error(error + " enter");
                              }
                          });
                    }
                  });
                }

                console.log(To);
                io.in(To).emit('new message', {user: data.user, message: data.message});
              // io.in(From).emit('new message', {user: data.user, message: data.message});


    });
    socket.on('profilePicUpdate',function (data) {
      var to = data.to;
      var url = data.url;
      io.in(to).emit('to image update',{url:url});
      console.log('ProfilePicUpdated');
    });

    socket.on('keyPress',function (data) {
      var to = data.to;

      io.in(to).emit('typing message',{message:'typing...'});
    });
socket.on('connectionLost',function (data) {

  if(RPobj != null) {
    var to = RPobj.to.id;
    var fromName = RPobj.from.name;
    io.in(to).emit('connection lost message', {
      from: fromName, message: 'connection has lost or network is down , you can wait till he/she reconnects or you ' +
      'can click on Leave button to leave the chat'
    });
  }
});

socket.on('reconnectError',function () {
  var id = socket.id;
  usersData.update({socketId:id},{socketId:'',activity:false},function (err1,data1) {
    if(err1){console.log(err1);}
    else{console.log(data1)}
  });
  if(FoundPersonID!= null){
    usersData.update({socketId:FoundPersonID},{activity:true},function (err1,data1) {
      if(err1){console.log(err1);}
      else{console.log(data1);
        io.in(FoundPersonID).emit('left message', {user: Username, message: 'has left the chat.',activity:false});}
    });
  }

  });

// socket.on('reconnect',function () {
//
//
// });

socket.on('disconnect', function () {
  var id = socket.id;
  console.log(id+': Disconnected.');
// io.in(RandomPobj.from.id).emit('connection lost message' ,{user:Username,message:'connection has lost or network is down , you can wait till he/she reconnects or you ' +
//   'can click on Leave button to leave the chat'});


});


});




server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}



function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}



function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

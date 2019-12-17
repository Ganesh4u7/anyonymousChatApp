var ids = data1.map(function (doc) {
  return doc._id;
});

var query= usersData.find({username:{$in:ids}}).where({language:language,age:age,gender:gender});

query.exec(function (err2,data2) {
  if(err2){console.log(err2)}
  else if(data2.length == 0){
    var query = usersData.find({username:{$in:ids}}).where({language:language,gender:gender});
        query.exec(function (err3,data3) {
          if(err3){console.log(err3)}
          else if(data3.length == 0 ){
           var query = usersData.find({username:{$in:ids}}).where({language:language,age:age});
            query.exec(function (err4,data4) {
              if(err4){console.log(err4)}
              else if(data4.length == 0){
                var query = usersData.find({username:{$in:ids}}).where({gender:gender,age:age});
                query.exec(function (err5,data5) {
                  if(err5){console.log(err5)}
                  else if (data5.length==0){
                    var query = usersData.find({username:{$in:ids}}).where({language:language});
                    query.exec(function (err6,data6) {
                      if (err6){console.log(err6)}
                      else if(data6.length == 0){
                        var query = usersData.find({username:{$in:ids}}).where({gender:gender});
                        query.exec(function (err7,data7) {
                          if(err7){console.log(err7)}
                          else if (data7.length==0) {
                            var query = usersData.find({username:{$in:ids}}).where({age:age});
                             query.exec(function (err8,data8) {
                               if(err8){console.log(err8)}
                               else if (data8.length==0){
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
                                       var ageDifMs = Date.now() - birthday.getTime();
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
                               else{
                                 count = data8.length;
                                 usersData.find({username:username},{_id:0},function (err22,data22) {
                                   if(err22){console.log(err22); }
                                   else{
                                     var random = Math.floor(Math.random() * count);

                                     var FoundName = data8[random].username;
                                     var FSI = data8[random].socketId;
                                     FoundPersonID = FSI;
                                     var FUrl = data8[random].url;
                                     // console.log(FoundName);

                                     function calculateAge(birthday) { // birthday is a date
                                       var ageDifMs = Date.now() - birthday.getTime();
                                       var ageDate = new Date(ageDifMs); // miliseconds from epoch
                                       return Math.abs(ageDate.getUTCFullYear() - 1970);
                                     }

                                     RPobj={

                                       to:{
                                         name:FoundName,
                                         id:FSI,
                                         url:FUrl,
                                         gender:data8[0].gender,
                                         age:calculateAge(data8[0].dob),
                                         language:data8[0].languages
                                       },
                                       from: {
                                         name: data22[0].username,
                                         id: data22[0].socketId,
                                         url:data22[0].url,
                                         gender:data22[0].gender,
                                         age:calculateAge(data22[0].dob),
                                         language:data22[0].languages
                                       }
                                     };
                                     RandomPobj={
                                       to: {
                                         name: data22[0].username,
                                         id: data22[0].socketId,
                                         url:data22[0].url,
                                         gender:data22[0].gender,
                                         age:calculateAge(data22[0].dob),
                                         language:data22[0].languages
                                       },
                                       from:{
                                         name:FoundName,
                                         id:FSI,
                                         url:FUrl,
                                         gender:data8[0].gender,
                                         age:calculateAge(data8[0].dob),
                                         language:data8[0].languages
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
                             })// err8
                          } //ee7 else if
                        })// ee7
                      } //ee6 else if
                    }) //ee6
                  } //eer5 else if
                }) //eer5

              } //eer4 else if
            }) //eer4

          } //eer3 else if

        }) //eer3
      } //ee2 else if
    }) //eer2

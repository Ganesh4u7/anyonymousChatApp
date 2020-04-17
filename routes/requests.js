var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var userDataSchema = require('../models/usersSchema');
var userData = mongoose.model('userData',userDataSchema);


router.post('/login',function (req,res) {

 // console.log(req.body);
  let username = req.body.username;
  let pwd = req.body.password;

  userData.find({username:username},function (err1,data1) {
  //  console.log(data1[0]);
    if(err1){
      console.log(err1);
    }
    else if (data1.length > 0) {


      // if (data1[0].password == pwd) {
      //   let username = data1[0].username;
      //   let dob = data1[0].dob;
      //   let gender = data1[0].gender;
      //   let weight = data1[0].weight;
      //   let feet = data1[0].feet;
      //   let inch = data1[0].inch;
      //   let plans = data1[0].plans;
      //   let workoutPlans = data1[0].workoutPlans;
      //
      //   res.send({username:username,dob:dob,gender:gender,weight:weight,feet:feet,inch:inch,plans:plans,workoutPlans:workoutPlans,success:true});

      jwt.sign({username:data1[0].username,email:data1[0].email},'rogerFederer',(error,token)=>{
        res.json({token});
      })

         }


    else if(data1.length == 0) {
      res.send({username: username,success: false});
    }

  });

});

router.post('/getData',verifyToken,function(req,res){
  console.log(req.token);
  jwt.verify(req.token,'rogerFederer',(err,authData)=>{
    console.log('hi2');
    if(err){
      res.sendStatus(403);
    }else{
      let username = req.body.username;
      console.log('hi3');
      userData.find({username:username},function (err1,data1) {
        //  console.log(data1[0]);
        if(err1){
          console.log(err1);
        }
        else if (data1.length > 0) {
     console.log('hi');
              let username = data1[0].username;
              let dob = data1[0].dob;
              let gender = data1[0].gender;
              let weight = data1[0].weight;
              let feet = data1[0].feet;
              let inch = data1[0].inch;
              let plans = data1[0].plans;
              let workoutPlans = data1[0].workoutPlans;

              res.send({username:username,dob:dob,gender:gender,weight:weight,feet:feet,inch:inch,plans:plans,workoutPlans:workoutPlans,success:true});



        }

        else if(data1.length == 0) {
          res.send({username: username,success: false});
        }

      });
    }

  });
});


router.post('/signup',function (req,res) {

  let username = req.body.username;
  let email = req.body.email;
  let pwd = req.body.password;
  let dob = req.body.dob;
  let gender = req.body.gender;
  let weight = req.body.weight;
  let feet = req.body.feet;
  let inch = req.body.inch;

  let data = new userData({
    username:username,email:email,password:pwd,dob:dob,gender:gender,weight:weight,feet:feet,inch:inch
  });

  data.save(function (err,userData) {
    if(err){
      console.log(err);
      res.send({username: username,success: false});
    }
    else {
      console.log('user created with name '+ userData.username);
      res.send({username: username,success: true});
    }
  });

});

router.post('/plans',function (req,res) {

  let plan = req.body[0];
 // console.log(plan);
 let nameTags = req.body[1];
  let totals = req.body[2];
  let username = req.body[3].username;
  let tot = req.body[3].tot;

  userData.find({username:username},function (err,data) {
    if(err){console.log(err)}
    else{

      const info = data[0];

      const changes = {"nameTags": nameTags,"plan" : plan, "totals": totals};

      info.plans.push(changes);
      info.save(function(err,data) {
        if (err) {
          console.log(err);
        }
        else{
         // console.log(data);
        }
        let id1;
        if(tot != 0){
          return res.send({id:id1,success:true});
        }
        else if(tot == 0){
          console.log(data.plans[0].id)
          id1 = data.plans[0].id;
          return res.send({id:id1,success:true});
        }


       // console.log(id1)

      })
    }
  });


});

router.post('/editname',function (req,res) {

  let editedName = req.body.nameTag;
  let index = req.body.index;
  let id = req.body._id;
  let username = req.body.username;

  userData.findOne({username:username,"plans._id": id},function (err,data) {
       data.plans[index].nameTags.nameTag = editedName;

  data.save((function(err) {
    if (err) {
      console.log(err)
    }
    return res.send('name changed');
  }))

  });


});

router.post('/deletePlan',function (req,res) {
  let index = req.body.index+1;
  let id = req.body.id;
  let username = req.body.username;
  // console.log(plans);

  userData.updateOne({username:username,"plans._id": id},{$pull: {"plans": {_id:id} }},{multi:true},function (err,data) {
    if(err){console.log(err)}
    else{console.log(data);
    }
  });

});


router.post('/saveRecipeName',function (req,res) {
  let username = req.body.username;
  let id = req.body.id;
  let index = req.body.index;
  let recipe = req.body.recipe;

  userData.findOne({username:username,"plans._id": id},function (err,data) {
   console.log(id);

    data.plans[index].nameTags.recipe = recipe;
    data.plans[index].nameTags.editMode = 1;

    data.save((function(err) {
      if (err) {
        console.log(err)
      }
      return res.send('recipe Updated');
    }))

  });
});

router.post('/workoutPlans',function (req,res) {

  let plan = req.body[0];
  // console.log(plan);
  let nameTags = req.body[1];
  let totals = req.body[2];
  let username = req.body[3].username;
  let tot = req.body[3].tot;

  userData.find({username:username},function (err,data) {
    if(err){console.log(err)}
    else{

      const info = data[0];

      const changes = {"nameTags": nameTags,"workoutPlan" : plan, "workoutTotals": totals};

      info.workoutPlans.push(changes);
      info.save(function(err,data) {
        if (err) {
          console.log(err);
        }
        else{
          // console.log(data);
        }
        let id1;
        if(tot != 0){
          return res.send({id:id1,success:true});
        }
        else if(tot == 0){
          console.log(data.plans[0].id)
          id1 = data.plans[0].id;
          return res.send({id:id1,success:true});
        }


        // console.log(id1)

      })
    }
  });


});


router.post('/deleteWorkoutPlan',function (req,res) {
  let index = req.body.index+1;
  let id = req.body.id;
  let username = req.body.username;
  // console.log(plans);

  userData.updateOne({username:username,"workoutPlans._id": id},{$pull: {"workoutPlans": {_id:id} }},{multi:true},function (err,data) {
    if(err){console.log(err)}
    else{console.log(data);
    }
  });

});

router.post('/editWorkoutName',function (req,res) {

  let editedName = req.body.nameTag;
  let index = req.body.index;
  let id = req.body._id;
  let username = req.body.username;

  userData.findOne({username:username,"workoutPlans._id": id},function (err,data) {
    data.workoutPlans[index].nameTags.nameTag = editedName;

    data.save((function(err) {
      if (err) {
        console.log(err)
      }
      return res.send('name changed');
    }))

  });


});

function verifyToken(req,res,next){

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    console.log(bearerToken);
    req.token = bearerToken;
    next();

  }
  else {
    res.sendStatus(403);
  }

}

    module.exports =router;



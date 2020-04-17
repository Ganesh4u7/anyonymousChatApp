var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userData =  new schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  email:{
    type:String,
    unique: true,
    required: true
  },
  password:String,
  gender:String,
  dob:Date,
  weight:Number,
  feet:Number,
  inch:Number,
  plans:[{
    nameTags: {
      nameTag: String, date: Date, editMode: Number, recipe: String, editPlanName: Number
    },
    plan: [{
      name: String,
      itemType: String,
      weight: Number,
      metric: String,
      kcal: Number,
      protein: Number,
      carbs: Number,
      fat: Number,
      sfat: Number,
      DFib: Number,
      sugar: Number,
      sodium: Number,
      sWeight: Number,
      click: Number
    }],
    totals:
      {
        kcal: Number,
        protein: Number,
        carbs: Number,
        fat: Number,
        sfat: Number,
        DFib: Number,
        sugar: Number,
        sodium: Number,
        weight: Number
      }
  }],
  workoutPlans:[{
    nameTags: {
      nameTag: String, date: Date, editMode: Number, recipe: String, editPlanName: Number
    },
    workoutPlan: [{
      name: String,
      description: String,
      met: Number,
      mins: Number,
      click: Number
    }],
    workoutTotals:{
      calories:Number,
      mins:Number
    }


  }]



});


module.exports =userData;

/**
 * Created by zendynamix on 25-11-2016.
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    projectDetailsModel = mongoose.model('projectDetails');
projectFromConfig=require('../fromConfig/project.json')
schemaUtility=require('../utility').fromSchema
module.exports = function (app){
    app.use('/', router);
};
var moment = require('moment');

router.get('/projectJsonConfig', function (req, res) {
    res.send(projectFromConfig);
});

router.post('/projectDetails', function(req, res, next) {
    var newprojectDetails = new projectDetailsModel(req.body);
    newprojectDetails.save(function(err) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send("project Details added sucessfully");
    });

})

router.get('/projectDetails/count', function (req, res){
    projectDetailsModel.count(function(err,projectCount){
        if(err)
            res.send(err);
        var count = {projectCount: projectCount};
        res.send(count);
    });
})

router.get('/projectDetails/:start/:range', function (req, res) {
    console.log("server side")
    projectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})

router.delete('/projectDetails/:id', function (req, res){
    projectDetailsModel.remove({_id:req.params.id},function (err) {
        if(err)
            res.send(err)
        res.send(' projectDetails   Deleted')
    });
})

router.get('/projectDetails', function (req, res) {
    projectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/projectDetails/update', function (req, res) {
    projectDetailsModel.findOneAndUpdate(
        { "_id" : req.body.mondbId},
        req.body, // document to insert
        {upsert: true, new: true}, // options
        function (err, updatedBike) { // callback
            if (err) console.log('ERROR '+ err);
            else res.json(updatedBike)

        });

})


router.get('/projectDetails/:projectId', function (req, res) {
    console.log(req.params.projectId)
    projectDetailsModel.find({_id:req.params.projectId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/projectDetails/Name', function (req, res) {
    projectDetailsModel.find({'Employee':req.body.Name},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/projectDetailsName', function (req, res) {
    projectDetailsModel.find({},{"_id":0,"Employee":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})




router.get('/employeeIdProjectDetails', function (req, res) {
    projectDetailsModel.find({},{"_id":0,"Employee":1,"Employeeid":1,"Clientproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})



router.get('/employeeIdClientProject', function (req, res) {
    projectDetailsModel.find({},{"Employee":1,"Employeeid":1,"Clientproject":1,"Projectstartdate":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})



router.post('/lastmeetupupdate/:mongodiddata', function (req, res) {
console.log(req.body.Latestmeetup);
    projectDetailsModel.findOneAndUpdate({_id:req.params.mongodiddata},{"Latestmeetup":req.body.Latestmeetup},{upsert:false},function(err,result)
    {
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})












//
//router.post('/meetingFollowup/:mongodid', function (req, res) {
//var y=req.body.year;
//var m=req.body.month;
//var d=req.body.day;
//console.log(y,m,d);
////var meetingdate=new Date(y-m-d);
////console.log(meetingdate);
//var meetingdate=new Date(y,m,d);
//console.log(meetingdate);
//
//    projectDetailsModel.findOneAndUpdate({_id:req.params.mongodid},{$set:{"Meetingfollowup":meetingdate}},{upsert:false},function(err,result)
//    {
//        if(err){
//            res.send(err)
//            console.log(err.stack)
//        }else{
//            res.send(result)
//        }
//
//    })
//})




router.route('/getYearlyProjectStatus')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {

                     "$exists":true

                    },
                    $or: [{ Projectstatus: 'Active' }]


                           }


              },




            {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},


                   "Activestatus":"$Projectstatus"



            }


            },
            {$match:{
              "yr":true
            }
            },

             {$project:
                            {

                               "year": 1,
                               "mth":1,

                               "Activestatus":1
                            }
             }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForActive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Active'
                         }

            },

       {$project:
                {

                 "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                "mth": { $month:"$Projectstartdate"},
                "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });



router.route('/getYearlyProjectStatusForInactive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Inactive'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:
                 {
                            "yr":true
                          }
                          },

                           {$project:
                                          {

                                             "year": 1,
                                             "mth":1,

                                             "Activestatus":1
                                          }
                           }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForProduction')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Production'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForMaintanence')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Maintanence'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForSlack')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Slack'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.get('/getAlltheLiveProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})

router.get('/getAllTheMaintanenceProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/getNoOfPeopleInTheLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getNoOfPeopleInTheMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})




router.get('/getCostPerLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getCostPerMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})



router.get('/getEmployeeAlltheProjectByEmployeeid/:employeeid', function (req, res) {
var emp=req.params.employeeid;
    projectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
//        console.log(result);
        var employeeresult=[];
        for(var i=0;i<result.length;i++)
        {
           var employee=result[i].Employeeid;
           if(employee.indexOf(emp)> -1) {
           employeeresult.push(result[i]);

           }
        }
    res.send(employeeresult)

        }

    })
})















//
//router.post('/meetingFollowup/:mongodid', function (req, res) {
//var y=req.body.year;
//var m=req.body.month;
//var d=req.body.day;
//console.log(y,m,d);
////var meetingdate=new Date(y-m-d);
////console.log(meetingdate);
//var meetingdate=new Date(y,m,d);
//console.log(meetingdate);
//
//    projectDetailsModel.findOneAndUpdate({_id:req.params.mongodid},{$set:{"Meetingfollowup":meetingdate}},{upsert:false},function(err,result)
//    {
//        if(err){
//            res.send(err)
//            console.log(err.stack)
//        }else{
//            res.send(result)
//        }
//
//    })
//})






router.route('/getYearlyProjectStatus')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {

                     "$exists":true

                    },
                    $or: [{ Projectstatus: 'Active' }]


                           }


              },




            {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},


                   "Activestatus":"$Projectstatus"



            }


            },
            {$match:{
              "yr":true
            }
            },

             {$project:
                            {

                               "year": 1,
                               "mth":1,

                               "Activestatus":1
                            }
             }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForActive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Active'
                         }

            },

       {$project:
                {

                 "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                "mth": { $month:"$Projectstartdate"},
                "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });



router.route('/getYearlyProjectStatusForInactive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Inactive'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:
                 {
                            "yr":true
                          }
                          },

                           {$project:
                                          {

                                             "year": 1,
                                             "mth":1,

                                             "Activestatus":1
                                          }
                           }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForProduction')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Production'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForMaintanence')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Maintanence'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForSlack')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Slack'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.get('/getAlltheLiveProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})

router.get('/getAllTheMaintanenceProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/getNoOfPeopleInTheLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getNoOfPeopleInTheMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})




router.get('/getCostPerLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getCostPerMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})



router.get('/getEmployeeAlltheProjectByEmployeeid/:employeeid', function (req, res) {
var emp=req.params.employeeid;
    projectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
//        console.log(result);
        var employeeresult=[];
        for(var i=0;i<result.length;i++)
        {
           var employee=result[i].Employeeid;
           if(employee.indexOf(emp)> -1) {
           employeeresult.push(result[i]);

           }
        }
    res.send(employeeresult)

        }

    })
})















//
//router.post('/meetingFollowup/:mongodid', function (req, res) {
//var y=req.body.year;
//var m=req.body.month;
//var d=req.body.day;
//console.log(y,m,d);
////var meetingdate=new Date(y-m-d);
////console.log(meetingdate);
//var meetingdate=new Date(y,m,d);
//console.log(meetingdate);
//
//    projectDetailsModel.findOneAndUpdate({_id:req.params.mongodid},{$set:{"Meetingfollowup":meetingdate}},{upsert:false},function(err,result)
//    {
//        if(err){
//            res.send(err)
//            console.log(err.stack)
//        }else{
//            res.send(result)
//        }
//
//    })

router.route('/getYearlyProjectStatus')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {

                     "$exists":true

                    },
                    $or: [{ Projectstatus: 'Active' }]


                           }


              },




            {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},


                   "Activestatus":"$Projectstatus"



            }


            },
            {$match:{
              "yr":true
            }
            },

             {$project:
                            {

                               "year": 1,
                               "mth":1,

                               "Activestatus":1
                            }
             }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForActive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Active'
                         }

            },

       {$project:
                {

                 "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                "mth": { $month:"$Projectstartdate"},
                "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });



router.route('/getYearlyProjectStatusForInactive')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Inactive'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:
                 {
                            "yr":true
                          }
                          },

                           {$project:
                                          {

                                             "year": 1,
                                             "mth":1,

                                             "Activestatus":1
                                          }
                           }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.route('/getYearlyProjectStatusForProduction')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Production'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },

            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForMaintanence')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Maintanence'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });


router.route('/getYearlyProjectStatusForSlack')
    .get(function(req,res){
        projectDetailsModel.aggregate([

            {
                '$match': {
                'Projectstartdate':
                    {
              "$exists":true
                     },
                    Projectstatus:'Slack'
                         }

            },

       {$project:
                {

                   "yr":{"$eq":[ { $year:"$Projectstartdate"},{ $year:new Date}]},
                   "mth": { $month:"$Projectstartdate"},
                   "Activestatus":"$Projectstatus"
                }

            },
            {$match:{
                          "yr":true
                        }
                        },

                         {$project:
                                        {

                                           "year": 1,
                                           "mth":1,

                                           "Activestatus":1
                                        }
                         }



                        ],function (err, result) {
                if (err) {
                    res.send(err)
                }
                else{
                    res.send(result)
                }

            })


    });




router.get('/getAlltheLiveProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})

router.get('/getAllTheMaintanenceProjectHours', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Projectstartdate":1,"Projectstatus":1,"Nameoftheproject":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/getNoOfPeopleInTheLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getNoOfPeopleInTheMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Noofemployees":1,"Nameoftheproject":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})




router.get('/getCostPerLiveProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Active"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/getCostPerMaintanenceProject', function (req, res) {
    projectDetailsModel.find({"Projectstatus":"Maintanence"},{"Nameoftheproject":1,"Projectstartdate":1,"CostPerHour":1,_id:0},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})



router.get('/getEmployeeAlltheProjectByEmployeeid/:employeeid', function (req, res) {
var emp=req.params.employeeid;
    projectDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
//        console.log(result);
        var employeeresult=[];
        for(var i=0;i<result.length;i++)
        {
           var employee=result[i].Employeeid;
           if(employee.indexOf(emp)> -1) {
           employeeresult.push(result[i]);

           }
        }
    res.send(employeeresult)

        }

    })
})















//
//router.post('/meetingFollowup/:mongodid', function (req, res) {
//var y=req.body.year;
//var m=req.body.month;
//var d=req.body.day;
//console.log(y,m,d);
////var meetingdate=new Date(y-m-d);
////console.log(meetingdate);
//var meetingdate=new Date(y,m,d);
//console.log(meetingdate);
//
//    projectDetailsModel.findOneAndUpdate({_id:req.params.mongodid},{$set:{"Meetingfollowup":meetingdate}},{upsert:false},function(err,result)
//    {
//        if(err){
//            res.send(err)
//            console.log(err.stack)
//        }else{
//            res.send(result)
//        }
//
//    })
//})


















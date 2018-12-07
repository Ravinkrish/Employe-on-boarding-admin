
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    employeeDetailsModel = mongoose.model('employeeDetails'),
employeeFromConfig=require('../fromConfig/employee.json'),
bodyParser = require('body-parser')

schemaUtility=require('../utility').fromSchema
module.exports = function (app){

    app.use('/', router);

};
var nodemailer = require('nodemailer');
router.get('/employeeJsonConfig', function (req, res) {
res.send(employeeFromConfig)
});

router.post('/employeeDetails', function(req, res, next) {
employeeDetailsModel.count({},function(err,result){
                                   if(err){
                                       res.send(err)
                                       console.log(err.stack)
                                   }else{
                                   result:result
                        req.body.Employeenumber=result+1
                        console.log(req.body.Employeenumber);
        var newemployeeDetails = new employeeDetailsModel(req.body);
        console.log(req.body);
        newemployeeDetails.currentemployee=1;
        newemployeeDetails.servingnoticeperiod=0;
        newemployeeDetails.releavedemployee=0;

        newemployeeDetails.save(function(err) {
               if (err){
                   console.log('Error in Saving user: '+err);
               }
               res.send(newemployeeDetails._id);
           })
           };
});
})


router.post('/employeeskilldetails',function(req,res,next){
console.log(req.body);
console.log(req.body.SkillDetails);
console.log(req.body.Skill);
var s=res.body;
console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Skillsdata:{Skill:req.body.Skill,SkillDetails:req.body.SkillDetails}}
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result);


                              });

        });




router.post('/employeequalificationdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Qalificationdata: {
                            "Qualification":req.body.Qualification,
                            "InstituteName":req.body.InstituteName,
                            "StartDate":req.body.StartDate,
                            "CompletedOn":req.body.CompletedOn
                          }
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result)


                              });

        });
router.post('/employeecertificationdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Certificationdata: {
                            "Certification":req.body.Certification,
                            "Institute":req.body.Institute,
                            "GrantedOn":req.body.GrantedOn,
                            "ValidThru":req.body.ValidThru
                          }
                          }
                        },
                          function(err,result){
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result)


                              });

        });

router.post('/employeelanguagedetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Languagedata: {
                            "Language":req.body.Language,
                            "Reading":req.body.Reading,
                            "Speaking":req.body.Speaking,
                            "Writing":req.body.Writing,
                            "Understanding":req.body.Understanding
                          }
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result);


                              });

        });

router.post('/employeedependentdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Dependentdata:{
                            "DependentName":req.body.DependentName,
                            "DateOfBirth":req.body.DateOfBirth,
                            "IdProofNumber":req.body.IdProofNumber
                          }
                          }
                        },
                          function(err,result){
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result)


                              });

        });

router.post('/employeecontactdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Emergencycontactdata: {
                            "EmployeeRelationship":req.body.EmployeeRelationship,
                            "HomePhone":req.body.HomePhone,
                            "WorkPhone":req.body.WorkPhone,
                            "EmergencyMobilePhone":req.body.EmergencyMobilePhone
                          }
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result)


                              });

        });


router.post('/employeedocumentdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $push:{Documentdata: {
                            "Document":req.body.Document,
                            "Details":req.body.Details,
                            "DateAdded":req.body.DateAdded,
                            "Status":req.body.Status
                          }
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result)


                              });

        });

router.post('/employeebankaccountdetails',function(req,res,next){
console.log(req.body);


console.log(req.body._id);

 employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $set: {
                            "BankAccountHolderName":req.body.BankAccountHolderName,
                            "AccountNo":req.body.AccountNo,
                            "IFSCCode":req.body.IFSCCode,
                            "NameOfTheBank":req.body.NameOfTheBank,
                            "AddressOfTheBank":req.body.AddressOfTheBank
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result);


                              });

        });




router.post('/uploadEmployeeImage',function(req,res,next){
employeeDetailsModel.update(
                        {"_id":req.body._id},
                        {
                          $set: {

                  "images":req.body.images
                          }
                        },
                          function(err,result) {
                                  if (err){
                                      console.log('Error in Saving user: '+err);
                                  }
                                  res.send(result);


                              });



})


router.get('/employeeRegisteredEmployeeId',function (req, res){
    employeeDetailsModel.find({"isapproved":"true"},{"Employeenumber":1,"isapproved":1},function(err,result){
        if(err)
            res.send(err);

        res.send(result);
    });
})



router.get('/employeeDetails/count', function (req, res){
    employeeDetailsModel.count(function(err,employeeCount){
        if(err)
            res.send(err);
        var count = {employeeCount: employeeCount};
        res.send(count);
    });
})

router.get('/employeeDetails/:start/:range', function (req, res) {
    console.log("server side")
    employeeDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})

router.delete('/employeeDetails/:id', function (req, res){
    employeeDetailsModel.remove({_id:req.params.id},function (err) {
        if(err)
            res.send(err)
        res.send(' employeeDetails Deleted')
    });
})

router.get('/employeeDetails', function (req, res) {
    employeeDetailsModel.find({ "currentemployee" : true},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.post('/employeeDetails/update', function (req, res) {
    employeeDetailsModel.findOneAndUpdate(
        { "_id" : req.body.mondbId},
        req.body, // document to insert
        {upsert: true, new: true}, // options
        function (err, updatedBike) { // callback
            if (err) console.log('ERROR '+ err);
            else res.json(updatedBike)

        });

})


router.get('/employeeDetails/:employeeId', function (req, res) {
    console.log(req.params.employeeId)
    employeeDetailsModel.find({"Employeenumber":req.params.employeeId},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
        console.log(result);
            res.send(result)
        }

    })
})


router.post('/employeeDetails/Name', function (req, res) {
    employeeDetailsModel.find({'Name':req.body.Name},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
})


router.get('/employeeDetailsName', function (req, res) {
    employeeDetailsModel.find({"currentemployee":true},{"_id":0,"Name":1,'Employeenumber':1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
});

router.post('/emailSending/:emailid/:employeeid',function(req,res){
console.log(req.params.emailid);
nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({

       service: 'gmail',
        host: 'smtp.gmail.com',
       port: 587,
         secure: false,
         secureConnection: false,// true for 465, false for other ports
        auth: {
            user:'careers.dshan@gmail.com', // generated ethereal user
            pass:'Dinesh@123'  // generated ethereal password
        },
        tls:{
                  rejectUnauthorized:false
                  }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'careers.dshan@gmail.com', // sender address
        to:req.params.emailid, // list of receivers
        subject: 'WELCOME TO RESOURCE MANAGEMENT', // Subject line
        text: 'thi is node mailer mail', // plain text body
        html: '<b>your Employeeid is</b>'+req.params.employeeid+'<b>please set the password to login to our website</b>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
       else
       {
       console.log(req.params.employeeid);
        employeeDetailsModel.findOneAndUpdate({'Employeenumber':Number(req.params.employeeid)},{$set:{"Emailsent":true}},function(err,result){
        if(err)
        {
        res.send(err)
        }
        else
        {
        res.send({"Emailsent":true})
        }
        })

       }

    });
});
})




router.get('/emailIsSent', function (req, res) {
    employeeDetailsModel.find({},{"Emailsent":1},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
});





router.post('/approveEmployee/:employeeid', function (req, res) {
    employeeDetailsModel.findOneAndUpdate({"Employeenumber":req.params.employeeid},{$set:{"isapproved":true}},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
});

router.post('/employeeNoticeInfo', function (req, res){
console.log(req.body.employeeid);

    employeeDetailsModel.findOneAndUpdate({"Employeenumber":req.body.employeeid},{$set:req.body},function(err,result){
        if(err)
        {
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })
});



//router.post('/setNoticePeriodTrue/:employeed', function (req, res) {
//    employeeDetailsModel.find({'Employeenumber':req.params.employeed,"releaveStartDate":{$exists: true,$eq:new Date()}},{"servingnoticeperiod":true},function(err,result){
//
//        if(err){
//            res.send(err)
//            console.log(err.stack)
//        }else{
//            res.send(result)
//        }
//
//    })
//})




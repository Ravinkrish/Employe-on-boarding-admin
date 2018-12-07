var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    RouteModel = mongoose.model('routeDetails');

    module.exports = function (app){
        app.use('/', router);
    };


var saveImageAsFile = function(docUpload, fileName){
    var base64Data = docUpload.replace(/^docUpload:image\/jpeg;base64,/, "");
    require("fs").writeFile("public/photos/" + fileName + ".jpg", base64Data, {encoding: 'base64'}, function(err) {
        if(err){
            console.log("photo save failed: ", err);
            return;
        }
        console.log('File created');
        return;
    });
};
router.post('/setLogo', function(req, res, next) {
var routeModel=new RouteModel(req.body);
    routeModel.save(function(err,result){
            if(err){
                console.log(err.stack)
            }else{
                res.send(result)
            }

        });
        });


router.post('/routeDetails', function(req, res, next) {
console.log('doiuIUodusuysao',req.body);
saveImageAsFile(req.body.docUpload, req.body.fullName);
var user = req.body;
user.docUpload = req.body.docUpload;
    var routeModel = new RouteModel(req.body);
    routeModel.save(function(err, result) {
        if (err){
            console.log('route Detailspost failed: ' + err);
        }
        res.send(result);
    });
});


router.get('/allRouteDetails', function(req, res, next) {
    RouteModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))
})


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
        RouteModel.findOneAndUpdate({'Employeenumber':Number(req.params.employeeid)},{$set:{"Emailsent":true}},function(err,result){
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


//router.get('/employeeBymongoId/:employeeMongoId',function(req,res,next){
//        console.log('employeeMongoId', req.params.employeeMongoId);
//        RouteModel.findOne({"employeeId":req.params.employeeMongoId},function(err,result){
//                      if(err)
//                      {
//                     console.log(err);
//                      }
//                      else
//                      {
//                         console.log(result);
//                         res.send(result);
//
//                      }
//                      })
//
//});
//
//router.get('/singleemployeeBymongoId/:employeeMongoId',function(req,res,next){
//        console.log('employeeMongoId', req.params.employeeMongoId);
//        RouteModel.findOne({"_id":req.params.employeeMongoId},function(err,result){
//                      if(err)
//                      {
//                     console.log(err);
//                      }
//                      else
//                      {
//                         console.log(result);
//                         res.send(result);
//
//                      }
//                      })
//
//});
//
//
//
//router.post('/editEmployeeBymongoId', function(req, res, next) {
//        console.log("******", req.body)
//        console.log(req.body._id);
//        console.log('employeeMongoId', req.params.employeeMongoId);
//        RouteModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},
//        function(err,result)
//            {
//                if(err){
//                    console.log(err.stack)
//                }
//                else{
//                    res.send(result)
//                }
//
//            });
//
//})
//
//
//router.delete('/employeeBymongoId/:employeeMongoId',function(req, res, next){
//        console.log('employeeMongoId', req.params.employeeMongoId);
//            RouteModel.remove({"_id":req.params.employeeMongoId},function(err,result)
//            {
//            if(err)
//            {
//            console.log(err);
//            }
//            else
//            {
//            res.send(result)
//            }
//
//            });
//            });
//




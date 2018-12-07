/**
 * Created by Pro on 8/9/2017.
 */
singapp.factory("employeeService", function ($http) {
    var formConfigObj={};
    var employeeCount;
    var sendingid;

    var getemployeeJsonConfig = function(){
        return $http.get('/employeeJsonConfig');
    }
    var setemployeeFromConfig=function(formConfig){
        formConfigObj=formConfig
     }
    var getemployeeFromConfig=function(){
    console.log(formConfigObj);
        return formConfigObj
    }

    var saveemployeeDetails = function(employeeData){
        return $http.post('/employeeDetails',employeeData);
    }
    var getEmployeeId=function(){
      return $http.get('/EmployeeNumberCount');
    }
    var saveemployeeskilldetails=function(employeeskill){
    console.log("i am going inside of skill");

  return $http.post('/employeeskilldetails',employeeskill);
    }

    var getemployeeDetailsByRange=function(start,range){
        return $http.get('/employeeDetails/'+start+'/'+range);
    }
    var getemployeeDetailsCount = function(){
        return $http.get('/employeeDetails/count');
    }
    var getemployeeCount = function(){
        return employeeCount;
    }
    var setemployeeCount = function(val){
        employeeCount=val;
    }
    var updateemployeeDetails = function(companyDetails){
        return $http.post('/employeeDetails/update',companyDetails)
    }
    var deleteemployeeDetails = function(id){
        return $http.delete('/employeeDetails/'+id);
    }
    var getemployeeDetailsById = function(id){
        return $http.get('/employeeDetails/'+id);
    }

    var getemployeeDetailsByName = function(employeeName){
        return $http.post('/employeeDetails/name',employeeName);
    }

    var getAllemployeeName = function(){
        return $http.get('/employeeDetailsName');
    }

var setidforskilluses=function(iddetails)
{
sendingid=iddetails;
}

var getidforskiluses=function()
{
return sendingid;
}
var saveemployeequalificationdetails=function(qualificationdata)
{
console.log(qualificationdata);
return $http.post('/employeequalificationdetails',qualificationdata)
}

var saveemployeecertificationdetails=function(certificationdata)
{
return $http.post('/employeecertificationdetails',certificationdata)
}

var saveemployeelanguagedetails=function(languagedata)
{
return $http.post('/employeelanguagedetails',languagedata)
}
var saveemployeeemployeedependentdetails=function(dependentdata)
{
return $http.post('/employeedependentdetails',dependentdata)
}
var saveemployeeemergencycontactdetails=function(emergencydata)
{
return $http.post('/employeecontactdetails',emergencydata)
}
var saveemployeeemployeedocumentdetails=function(documentdata)
{
return $http.post('/employeedocumentdetails',documentdata)
}
var saveemployeebankaccountdetailsdata=function(bankaccountdata)
{
return $http.post('/employeebankaccountdetails',bankaccountdata)
}
var saveemployeeimagedetailsdata=function(imagedata)
{
//console.log(imagedata);
return $http.post('/uploadEmployeeImage',imagedata);
}
var sendEmail=function(emailid,employeeid)
{
console.log(emailid);
return $http.post('/emailSending/'+emailid+'/'+employeeid);
}

var registeredEmployeeDetails=function()
{
return $http.get('/employeeRegisteredEmployeeId');
}
var getAllEmployeeSetMail=function()
{
return $http.get('/emailIsSent')
}
var approveEmployeebyEmployeeid=function(employeeid)
{
return $http.post('/approveEmployee/'+employeeid);
}

var noticePeriodInfo=function(releaveinfo)
{
return $http.post('/employeeNoticeInfo',releaveinfo);
}



    return{
        getemployeeJsonConfig:getemployeeJsonConfig,
        setemployeeFromConfig:setemployeeFromConfig,
        getemployeeFromConfig:getemployeeFromConfig,
        saveemployeeDetails:saveemployeeDetails,
        getemployeeDetailsByRange:getemployeeDetailsByRange,
        getemployeeDetailsCount:getemployeeDetailsCount,
        getemployeeCount:getemployeeCount,
        setemployeeCount:setemployeeCount,
        updateemployeeDetails:updateemployeeDetails,
        deleteemployeeDetails:deleteemployeeDetails,
        getemployeeDetailsById:getemployeeDetailsById,
        getemployeeDetailsByName:getemployeeDetailsByName,
        getAllemployeeName:getAllemployeeName,
        saveemployeeskilldetails:saveemployeeskilldetails,
        setidforskilluses:setidforskilluses,
        getidforskiluses:getidforskiluses,
        saveemployeequalificationdetails:saveemployeequalificationdetails,
        saveemployeecertificationdetails:saveemployeecertificationdetails,
        saveemployeelanguagedetails:saveemployeelanguagedetails,
        saveemployeeemployeedependentdetails:saveemployeeemployeedependentdetails,
        saveemployeeemergencycontactdetails:saveemployeeemergencycontactdetails,
         saveemployeeemployeedocumentdetails:saveemployeeemployeedocumentdetails,
         saveemployeebankaccountdetailsdata:saveemployeebankaccountdetailsdata,
         saveemployeeimagedetailsdata:saveemployeeimagedetailsdata,
         sendEmail:sendEmail,
         getEmployeeId:getEmployeeId,
         registeredEmployeeDetails:registeredEmployeeDetails,
         getAllEmployeeSetMail:getAllEmployeeSetMail,
         approveEmployeebyEmployeeid:approveEmployeebyEmployeeid,
         noticePeriodInfo:noticePeriodInfo,
}

})

/**
 * Created by Pro on 8/9/2017.
 */
singapp.factory("usersalaryService", function ($http) {
    var formConfigObj={};
    var usersalaryCount;

    var getusersalaryJsonConfig = function(){
        return $http.get('/usersalaryJsonConfig');
    }
    var setusersalaryFromConfig=function(formConfig){
        formConfigObj=formConfig

    }
    var getusersalaryFromConfig=function(){
        return formConfigObj
    }

    var saveusersalaryDetails = function(usersalaryData){
        return $http.post('/usersalaryDetails',usersalaryData);
    }
    var getusersalaryDetailsByRange=function(start,range){
        return $http.get('/usersalaryDetails/'+start+'/'+range);
    }
    var getusersalaryDetailsCount = function(){
        return $http.get('/usersalaryDetails/count');
    }
    var getusersalaryCount = function(){
        return usersalaryCount;
    }
    var setusersalaryCount = function(val){
        usersalaryCount=val;
    }
    var updateusersalaryDetails = function(companyDetails){
        return $http.post('/usersalaryDetails/update',companyDetails)
    }
    var deleteusersalaryDetails = function(id){
        return $http.delete('/usersalaryDetails/'+id);
    }
    var getusersalaryDetailsById = function(id){
        return $http.get('/usersalaryDetails/'+id);
    }

    var getusersalaryDetailsByName = function(usersalaryName){
        return $http.post('/usersalaryDetails/name',usersalaryName);
    }

    var getAllusersalaryName = function(){
        return $http.get('/usersalaryDetailsName');
    }

var getEmployeeBasicSalaryByEmployeeid=function(employeeid)
{
return $http.get('/userBasicSalaryByEmployeeid/'+employeeid)
}

var getEmployeeNoOfWorkingdays=function(employeeid)
{
return $http.get('/userNoofworkingdays/'+employeeid);
}
var saveEmployeeMonthlySalary=function(employeesalaryobj)
{
return $http.post('/monthlysalary',employeesalaryobj);

}
var getAllEmployeeMonthlySalary=function()
{
return $http.get('/getMonthlySalary');
}
var deleteusermonthlySalary=function(mongoid)
{
return $http.delete('/deleteMonthlysalary/'+mongoid)
}
var deleteid;
var setIdForDeleteMonthlySalary=function(mongoid)
{
deleteid=mongoid;
}
var getIdForDelateMonthlySalary=function()
{
return deleteid;
}

    return{
        getusersalaryJsonConfig:getusersalaryJsonConfig,
        setusersalaryFromConfig:setusersalaryFromConfig,
        getusersalaryFromConfig:getusersalaryFromConfig,
        saveusersalaryDetails:saveusersalaryDetails,
        getusersalaryDetailsByRange:getusersalaryDetailsByRange,
        getusersalaryDetailsCount:getusersalaryDetailsCount,
        getusersalaryCount:getusersalaryCount,
        setusersalaryCount:setusersalaryCount,
        updateusersalaryDetails:updateusersalaryDetails,
        deleteusersalaryDetails:deleteusersalaryDetails,
        getusersalaryDetailsById:getusersalaryDetailsById,
        getusersalaryDetailsByName:getusersalaryDetailsByName,
        getAllusersalaryName:getAllusersalaryName,
        getEmployeeBasicSalaryByEmployeeid:getEmployeeBasicSalaryByEmployeeid,
        getEmployeeNoOfWorkingdays:getEmployeeNoOfWorkingdays,
        saveEmployeeMonthlySalary:saveEmployeeMonthlySalary,
        getAllEmployeeMonthlySalary:getAllEmployeeMonthlySalary,
        deleteusermonthlySalary:deleteusermonthlySalary,
        setIdForDeleteMonthlySalary:setIdForDeleteMonthlySalary,
        getIdForDelateMonthlySalary:getIdForDelateMonthlySalary

    }






})

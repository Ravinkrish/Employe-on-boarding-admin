/**
 * Created by Pro on 8/9/2017.
 */
singapp.factory("employeeprojectService", function ($http) {
    var formConfigObj={};
    var employeeprojectCount;

    var getemployeeprojectJsonConfig = function(){
        return $http.get('/employeeprojectJsonConfig');
    }
    var setemployeeprojectFromConfig=function(formConfig){
        formConfigObj=formConfig

    }
    var getemployeeprojectFromConfig=function(){
        return formConfigObj
    }

    var saveemployeeprojectDetails = function(employeeprojectData){
        return $http.post('/employeeprojectDetails',employeeprojectData);
    }
    var getemployeeprojectDetailsByRange=function(start,range){
        return $http.get('/employeeprojectDetails/'+start+'/'+range);
    }
    var getemployeeprojectDetailsCount = function(){
        return $http.get('/employeeprojectDetails/count');
    }
    var getemployeeprojectCount = function(){
        return employeeprojectCount;
    }
    var setemployeeprojectCount = function(val){
        employeeprojectCount=val;
    }
    var updateemployeeprojectDetails = function(companyDetails){
        return $http.post('/employeeprojectDetails/update',companyDetails)
    }
    var deleteemployeeprojectDetails = function(id){
        return $http.delete('/employeeprojectDetails/'+id);
    }
    var getemployeeprojectDetailsById = function(id){
        return $http.get('/employeeprojectDetails/'+id);
    }

    var getemployeeprojectDetailsByName = function(employeeprojectName){
        return $http.post('/employeeprojectDetails/name',employeeprojectName);
    }

    var getAllemployeeprojectName = function(){
        return $http.get('/employeeprojectDetailsName');
    }




    return{
        getemployeeprojectJsonConfig:getemployeeprojectJsonConfig,
        setemployeeprojectFromConfig:setemployeeprojectFromConfig,
        getemployeeprojectFromConfig:getemployeeprojectFromConfig,
        saveemployeeprojectDetails:saveemployeeprojectDetails,
        getemployeeprojectDetailsByRange:getemployeeprojectDetailsByRange,
        getemployeeprojectDetailsCount:getemployeeprojectDetailsCount,
        getemployeeprojectCount:getemployeeprojectCount,
        setemployeeprojectCount:setemployeeprojectCount,
        updateemployeeprojectDetails:updateemployeeprojectDetails,
        deleteemployeeprojectDetails:deleteemployeeprojectDetails,
        getemployeeprojectDetailsById:getemployeeprojectDetailsById,
        getemployeeprojectDetailsByName:getemployeeprojectDetailsByName,
        getAllemployeeprojectName:getAllemployeeprojectName
    }






})

/**
 * Created by Pro on 8/9/2017.
 */
singapp.factory("employeeratingService", function ($http) {
    var formConfigObj={};
    var employeeratingCount;

    var getemployeeratingJsonConfig = function(){
        return $http.get('/employeeratingJsonConfig');
    }
    var setemployeeratingFromConfig=function(formConfig){
        formConfigObj=formConfig

    }
    var getemployeeratingFromConfig=function(){
        return formConfigObj
    }

    var saveemployeeratingDetails = function(employeeratingData){
        return $http.post('/employeeratingDetails',employeeratingData);
    }
    var getemployeeratingDetailsByRange=function(start,range){
        return $http.get('/employeeratingDetails/'+start+'/'+range);
    }
    var getemployeeratingDetailsCount = function(){
        return $http.get('/employeeratingDetails/count');
    }
    var getemployeeratingCount = function(){
        return employeeratingCount;
    }
    var setemployeeratingCount = function(val){
        employeeratingCount=val;
    }
    var updateemployeeratingDetails = function(companyDetails){
        return $http.post('/employeeratingDetails/update',companyDetails)
    }
    var deleteemployeeratingDetails = function(id){
        return $http.delete('/employeeratingDetails/'+id);
    }
    var getemployeeratingDetailsById = function(id){
        return $http.get('/employeeratingDetails/'+id);
    }

    var getemployeeratingDetailsByemployeeid = function(employeeid){
        return $http.get('/employeerating/employeeid/'+employeeid);
    }

    var getAllemployeeratingName = function(){
        return $http.get('/employeeratingDetailsName');
    }




    return{
        getemployeeratingJsonConfig:getemployeeratingJsonConfig,
        setemployeeratingFromConfig:setemployeeratingFromConfig,
        getemployeeratingFromConfig:getemployeeratingFromConfig,
        saveemployeeratingDetails:saveemployeeratingDetails,
        getemployeeratingDetailsByRange:getemployeeratingDetailsByRange,
        getemployeeratingDetailsCount:getemployeeratingDetailsCount,
        getemployeeratingCount:getemployeeratingCount,
        setemployeeratingCount:setemployeeratingCount,
        updateemployeeratingDetails:updateemployeeratingDetails,
        deleteemployeeratingDetails:deleteemployeeratingDetails,
        getemployeeratingDetailsById:getemployeeratingDetailsById,
        getemployeeratingDetailsByemployeeid:getemployeeratingDetailsByemployeeid,
        getAllemployeeratingName:getAllemployeeratingName
    }






})

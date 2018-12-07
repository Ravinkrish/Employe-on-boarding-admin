singapp.factory("userDailyTaskService", function ($http) {
var deleteId='';

var saveDailyTask=function(dailyTask){
console.log(dailyTask);
return $http.post('/userdailytask',dailyTask);
}
var getAllTheUserDailyTask=function(){
return $http.get('/alltheuserDailyTask');
}
var getUserAllTheTaskByEmployeeId=function(employeeid)
{
return $http.get('/allthetaskByEmployeeId/'+employeeid);
}
var getALLtheUserDailyTaskBYDate=function(date)
{
return $http.get('/userdilytaskbydate/'+date);
}
var updateUserDailyTaskByMongodId=function(mongodid)
{
return $http.post('/updateUserDailyTaskByMongodId/'+mongodid)
}
var updateUserDailyTaskByDateEmployeeid=function(date,employeeid)
{
return $http.post('/updateUserDailyTaskByDateEmployeeid/'+date+'/'+employeeid);
}

var deleteUserDailyTaskByMongodid=function(mongodid)
{
console.log(mongodid);
return $http.delete('/deleteUserDailyTaskByMongodid/'+mongodid);
}
var getDailyTaskOfTodayAndTomorrow=function()
{
return $http.get('/alltheuserdailytaskbytodaydate');
}
var settaskIdForDelete=function(mongodid)
{
deleteId=mongodid;
}
var gettaskIdForDelete=function()
{
return deleteId;
}


 var approveEmployeeDailyTaskByMongodid=function(mongodid)
    {
    return $http.post("/approveEmployeeDailyTask/"+mongodid)
    }

 var disapproveEmployeeDailyTaskByMongodid=function(mongodid)
    {
    return $http.post("/disAppreoveEmployeeDailyTask/"+mongodid)
    }



return{
saveDailyTask:saveDailyTask,
getAllTheUserDailyTask:getAllTheUserDailyTask,
getUserAllTheTaskByEmployeeId:getUserAllTheTaskByEmployeeId,
getALLtheUserDailyTaskBYDate:getALLtheUserDailyTaskBYDate,
updateUserDailyTaskByMongodId:updateUserDailyTaskByMongodId,
updateUserDailyTaskByDateEmployeeid:updateUserDailyTaskByDateEmployeeid,
deleteUserDailyTaskByMongodid:deleteUserDailyTaskByMongodid,
getDailyTaskOfTodayAndTomorrow:getDailyTaskOfTodayAndTomorrow,
settaskIdForDelete:settaskIdForDelete,
gettaskIdForDelete:gettaskIdForDelete,
approveEmployeeDailyTaskByMongodid:approveEmployeeDailyTaskByMongodid,
disapproveEmployeeDailyTaskByMongodid:disapproveEmployeeDailyTaskByMongodid



}

});
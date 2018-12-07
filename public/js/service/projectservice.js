/**
 * Created by Pro on 8/9/2017.
 */
singapp.factory("projectService", function ($http) {
    var formConfigObj={};
    var projectCount;
    var mongodid;
    var setDate;

      var totalArray=[];

        var firstMonthArray=[];
        var secMonthArray=[];
        var thirdMonthArray=[];
        var fourthMonthArray=[];
        var fiveMonthArray=[];
        var sixtMonthArray=[];
        var sevenMonthArray=[];
        var eightMonthArray=[];
        var nineMonthArray=[];
        var tenMonthArray=[];
        var elevenMonthArray=[];
        var twelMonthArray=[];



    var getprojectJsonConfig = function(){
        return $http.get('/projectJsonConfig');
    }
    var setprojectFromConfig=function(formConfig){
        formConfigObj=formConfig

    }
    var getprojectFromConfig=function(){
        return formConfigObj
    }

    var saveprojectDetails = function(projectData){
        return $http.post('/projectDetails',projectData);
    }
    var getprojectDetailsByRange=function(start,range){
        return $http.get('/projectDetails/'+start+'/'+range);
    }
    var getprojectDetailsCount = function(){
        return $http.get('/projectDetails/count');
    }
    var getprojectCount = function(){
        return projectCount;
    }
    var setprojectCount = function(val){
        projectCount=val;
    }
    var updateprojectDetails = function(companyDetails){
        return $http.post('/projectDetails/update',companyDetails)
    }
    var deleteprojectDetails = function(id){
        return $http.delete('/projectDetails/'+id);
    }
    var getprojectDetailsById = function(id){
        return $http.get('/projectDetails/'+id);
    }

    var getprojectDetailsByName = function(projectName){
        return $http.post('/projectDetails/name',projectName);
    }

    var getAllprojectName = function(){
        return $http.get('/projectDetailsName');
    }

var getAllprojectOfEmployee=function(){
return $http.get('/employeeIdProjectDetails');
}

var getAllTheEmployeeIdForTheProject=function()
{
return $http.get('/employeeIdClientProject');

}
var sentMongodIdForMeeting=function(mongod)
{
console.log(mongod);
mongodid=mongod;
}

var getMongodIdForMeeting=function()
{

return mongodid;
}

//var setMeetingFollowUp=function(mongodid,meeting)
//{
//console.log(meeting);
//var meetings={
//day:meeting.getDate(),
//month:meeting.getMonth(),
//year:meeting.getFullYear()
//};
//console.log(meetings);
//return $http.post('/meetingFollowup/'+mongodid,meetings);
//}

var setLastMeetUp=function(mongodids,lastmeetup){
return $http.post('/lastmeetupupdate/'+mongodids,lastmeetup);
}


var setDateAndTime=function(dateTime)
{
setDate=dateTime;
}
var getDateAndTime=function()
{
return setDate;
}



var getyearlyProjectStatus=function()
{
return  $http.get('/getYearlyProjectStatus');

}



var getyearlyProjectStatusActive=function()
{
return  $http.get('/getYearlyProjectStatusForActive');

}

var getyearlyProjectStatusInactive=function()
{
return  $http.get('/getYearlyProjectStatusForInactive');

}

var getyearlyProjectStatusProduction=function()
{
return  $http.get('/getYearlyProjectStatusForProduction');

}
var getyearlyProjectStatusMaintanence=function()
{
return  $http.get('/getYearlyProjectStatusForMaintanence');

}

var getyearlyProjectStatusSlack=function()
{
return  $http.get('/getYearlyProjectStatusForSlack');

}



var firstMonthArrayvalue=function(arrayValue)
{
firstMonthArray.push(arrayValue);
console.log(firstMonthArray);

console.log(firstMonthArray.length);

}


var getfirstMonthArrayvalue=function()
{
console.log(firstMonthArray);
return firstMonthArray;
}

var secMonthArrayvalue=function(arrayValue)
{
secMonthArray.push(arrayValue);
}

var getsecMonthArrayvalue=function()
{
return secMonthArray
}


var thirdMonthArrayvalue=function(arrayValue)
{
thirdMonthArray.push(arrayValue);
}


var getthirdMonthArrayvalue=function()
{
return thirdMonthArray;
}


var fourthMonthArrayvalue=function(arrayValue)
{
fourthMonthArray.push(arrayValue);
}


var getfourthMonthArrayvalue=function()
{
return fourthMonthArray
}


var fiveMonthArrayvalue=function(arrayValue)
{
fiveMonthArray.push(arrayValue);
}



var getfiveMonthArrayvalue=function()
{
return fiveMonthArray
}

var sixtMonthArrayvalue=function(arrayValue)
{
sixtMonthArray.push(arrayValue);
}


var getsixtMonthArrayvalue=function()
{
return sixtMonthArray
}


var sevenMonthArrayvalue=function(arrayValue)
{
sevenMonthArray.push(arrayValue);
}


var getsevenMonthArrayvalue=function()
{
return sevenMonthArray
}



var eightMonthArrayvalue=function(arrayValue)
{
eightMonthArray.push(arrayValue);
}


var geteightMonthArrayvalue=function()
{
return eightMonthArray
}


var nineMonthArrayvalue=function(arrayValue)
{
nineMonthArray.push(arrayValue);
}


var  getnineMonthArrayvalue=function()
{
return nineMonthArray
}


var tenMonthArrayvalue=function(arrayValue)
{
tenMonthArray.push(arrayValue);
}



var gettenMonthArrayvalue=function()
{
return tenMonthArray
}


var elevenMonthArrayvalue=function(arrayValue)
{
elevenMonthArray.push(arrayValue);
}


var getelevenMonthArrayvalue=function()
{
return elevenMonthArray
}


var twelMonthArrayvalue=function(arrayValue)
{
twelMonthArray.push(arrayValue);
console.log(twelMonthArray);
}


var gettwelMonthArrayvalue=function()
{
return twelMonthArray
}

var getHoursSpendOnLiveProject=function()
{
return $http.get('/getAlltheLiveProjectHours');
}
var totalLiveHours;

var setHourOnLiveProject=function(totalHours)
{
console.log(totalHours);
totalLiveHours=totalHours;
}

var getHourOnLiveProject=function()
{
console.log(totalLiveHours)
return totalLiveHours;

}

var getHoursSpendOnMaintanenceProject=function()
{
return $http.get('/getAllTheMaintanenceProjectHours');
}
var totalMaintaHour
var setHourOnMaintaProject=function(totalhours)
{
totalMaintaHour=totalhours;
}

var getHourOnMaintaProject=function()
{
return totalMaintaHour;
}

var getNoOfPeopleInTheLiveProject=function()
{
return $http.get('/getNoOfPeopleInTheLiveProject');
}
var LiveProjectEmployee;
var setNoofEmployeeInTheLiveProject=function(totalPeople)
{
LiveProjectEmployee=totalPeople;
}

var getNoEmployeeInTheLiveProject=function()
{
return LiveProjectEmployee;
}

var getNoOfPeopleInTheMaintanenceProject=function()
{
return $http.get('/getNoOfPeopleInTheMaintanenceProject');
}
var mainProjectEmployee;
var setNoofEmployeeInTheMaintaProject=function(totalPeople)
{
mainProjectEmployee=totalPeople;
}

var getNoEmployeeInTheMaintaProject=function()
{
return mainProjectEmployee;
}

var getCostPerLiveProjectdata=function()
{
return $http.get('/getCostPerLiveProject');
}
var CostLiveProject;
var setCostPerLiveProject=function(totalPeople)
{
CostLiveProject=totalPeople;
}

var getCostPerLiveProject=function()
{
return CostLiveProject;
}

var getCostPerMaintanenceProjectdata=function()
{
return $http.get('/getCostPerMaintanenceProject');
}
var CostMaintanenceProject;
var setCostPerMaintanenceProject=function(totalPeople)
{
CostMaintanenceProject=totalPeople;
}

var getCostPerMaintanenceProject=function()
{
return CostMaintanenceProject;
}

var getEmployeeAllProjectByEmployeeid=function(employeeid)
{
return  $http.get('/getEmployeeAlltheProjectByEmployeeid/'+employeeid);

}



    return{
        getprojectJsonConfig:getprojectJsonConfig,
        setprojectFromConfig:setprojectFromConfig,
        getprojectFromConfig:getprojectFromConfig,
        saveprojectDetails:saveprojectDetails,
        getprojectDetailsByRange:getprojectDetailsByRange,
        getprojectDetailsCount:getprojectDetailsCount,
        getprojectCount:getprojectCount,
        setprojectCount:setprojectCount,
        updateprojectDetails:updateprojectDetails,
        deleteprojectDetails:deleteprojectDetails,
        getprojectDetailsById:getprojectDetailsById,
        getprojectDetailsByName:getprojectDetailsByName,
        getAllprojectName:getAllprojectName,
        getAllprojectOfEmployee:getAllprojectOfEmployee,
        getAllTheEmployeeIdForTheProject:getAllTheEmployeeIdForTheProject,
        sentMongodIdForMeeting:sentMongodIdForMeeting,
        getMongodIdForMeeting:getMongodIdForMeeting,
             setDateAndTime:setDateAndTime,
       getDateAndTime:getDateAndTime,
       setLastMeetUp:setLastMeetUp,
        getyearlyProjectStatusActive:getyearlyProjectStatusActive,
                      getyearlyProjectStatusInactive:getyearlyProjectStatusInactive,
                      getyearlyProjectStatusProduction:getyearlyProjectStatusProduction,
                      getyearlyProjectStatusMaintanence:getyearlyProjectStatusMaintanence,
                      getyearlyProjectStatusSlack:getyearlyProjectStatusSlack,
                      getyearlyProjectStatus:getyearlyProjectStatus,
               firstMonthArrayvalue:firstMonthArrayvalue,
                      getfirstMonthArrayvalue:getfirstMonthArrayvalue,
                      secMonthArrayvalue:secMonthArrayvalue,
                      getsecMonthArrayvalue:getsecMonthArrayvalue,
                      thirdMonthArrayvalue:thirdMonthArrayvalue,
                      getthirdMonthArrayvalue:getthirdMonthArrayvalue,
                      fourthMonthArrayvalue:fourthMonthArrayvalue,
                      getfourthMonthArrayvalue:getfourthMonthArrayvalue,
                      fiveMonthArrayvalue:fiveMonthArrayvalue,
                      getfiveMonthArrayvalue:getfiveMonthArrayvalue,
                      sixtMonthArrayvalue:sixtMonthArrayvalue,
                      getsixtMonthArrayvalue:getsixtMonthArrayvalue,
                      sevenMonthArrayvalue:sevenMonthArrayvalue,
                      getsevenMonthArrayvalue:getsevenMonthArrayvalue,
                      eightMonthArrayvalue:eightMonthArrayvalue,
                      geteightMonthArrayvalue:geteightMonthArrayvalue,
                      nineMonthArrayvalue:nineMonthArrayvalue,
                      getnineMonthArrayvalue:getnineMonthArrayvalue,
                      tenMonthArrayvalue:tenMonthArrayvalue,
                      gettenMonthArrayvalue:gettenMonthArrayvalue,
                      elevenMonthArrayvalue:elevenMonthArrayvalue,
                      getelevenMonthArrayvalue:getelevenMonthArrayvalue,
                      twelMonthArrayvalue:twelMonthArrayvalue,
                      gettwelMonthArrayvalue:gettwelMonthArrayvalue,
                      getHourOnLiveProject:getHourOnLiveProject,
                      getHoursSpendOnLiveProject:getHoursSpendOnLiveProject,

                      //        getAllArrayValue:getAllArrayValue
                              setHourOnLiveProject:setHourOnLiveProject,
                              getHourOnLiveProject:getHourOnLiveProject,
                              getHoursSpendOnMaintanenceProject:getHoursSpendOnMaintanenceProject,
                              setHourOnMaintaProject:setHourOnMaintaProject,
                              getHourOnMaintaProject:getHourOnMaintaProject,
                              getNoOfPeopleInTheLiveProject:getNoOfPeopleInTheLiveProject,
                              setNoofEmployeeInTheLiveProject:setNoofEmployeeInTheLiveProject,
                              getNoEmployeeInTheLiveProject:getNoEmployeeInTheLiveProject,
                              getNoOfPeopleInTheMaintanenceProject:getNoOfPeopleInTheMaintanenceProject,
                              setNoofEmployeeInTheMaintaProject:setNoofEmployeeInTheMaintaProject,
                              getNoEmployeeInTheMaintaProject:getNoEmployeeInTheMaintaProject,
                              getNoOfPeopleInTheMaintanenceProject:getNoOfPeopleInTheMaintanenceProject,
                              setNoofEmployeeInTheMaintaProject:setNoofEmployeeInTheMaintaProject,
                              getNoEmployeeInTheMaintaProject:getNoEmployeeInTheMaintaProject,
                              getCostPerLiveProjectdata:getCostPerLiveProjectdata,
                              setCostPerLiveProject:setCostPerLiveProject,
                              getCostPerLiveProject:getCostPerLiveProject,
                              getCostPerMaintanenceProjectdata:getCostPerMaintanenceProjectdata,
                              setCostPerMaintanenceProject:setCostPerMaintanenceProject,
                              getCostPerMaintanenceProject:getCostPerMaintanenceProject,
                              getEmployeeAllProjectByEmployeeid:getEmployeeAllProjectByEmployeeid




    }






})

singapp.factory('routeServices',function($http){
  var getAllEmployeeDetails = function()
       {
           return $http.get('/allRouteDetails');
       }
  var postEmailDetails = function(data)
          {
             return $http.post('/email', data);
          };


   return   {
             getAllEmployeeDetails: getAllEmployeeDetails
            }

   });

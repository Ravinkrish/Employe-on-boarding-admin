

//userapp.directive('toasterDir',toasterdirfun);
//
//
//
//function toasterdirfun() {
//
//    return {
//      scope: { options: '='},
//   link:function(scope, element, attrs) {
//  scope.updateinfo=function(){
//   toastr.info("UPDATED SUCCESSFULLY",);
//  };
//}
//
//    }
//};



singapp.directive('toasterDir', function(){

  return {

    restrict: 'E',
    replace: true,
    scope: { options: '='},
    link: function(scope){

      angular.extend(scope.options, {
       dangersinfo:function(){
            toastr.warning("DELETED SUCCESSFULLY");
                },
        updateinfo:function(){
          toastr.info("UPDATED SUCCESSFULLY");
        },
        warninginfo:function(){
          toastr.warning("FILL THE DETAILS");
        },
        successinfo:function()
        {
           toastr.success("SAVED SUCCESSFULLY");
        },

        errorinfo:function(){
          toastr.error("Noooo oo oo ooooo!!!", "Title", {
                    "timeOut": "0",
                    "extendedTImeout": "0"
                });
        }



      });
    }
  };

})
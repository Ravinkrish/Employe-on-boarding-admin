
 angular.module('sorting-table', []).directive('sorting',function(){

return{
restrict:'A',
replace:true,
scope:
{
sort:'='
},



link :function($scope,ielement,iattribute){
$scope.sortdata=function()
{
$scope.reversesort=($scope.sortcolumn==column)?!$scope.reversesort:false;
console.log($scope.sortcolumn==column);
$scope.sortcolumn=column;

}
$scope.getsortclass=function(column){
if($scope.sortcolumn==column)
{
return $scope.reversesort?'arrow-down':'arrow-up'
}
return '';
}

}
}

});
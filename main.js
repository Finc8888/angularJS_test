"use strict"
let robot_list = [{
    name: "Bob",
    age: 10,
    hi: function(){return `Hi my name is ${this.name}`}
},
    {
        name: "Jon",
        age: 120,
        hi: function(){return `Hi my name is ${this.name}`}
    },
    {
        name: "Bill",
        age: 55,
        hi: function(){return `Hi my name is ${this.name}`}
    },
    {
        name: "Karl",
        age: 19,
        hi: function(){return `Hi my name is ${this.name}`}
    }
]
console.log(robot_list[3].hi());
let app = angular.module('app', []);
app.controller('myCtrl',function(myFactory){
    this.myFactory = myFactory;
    this.hello = "Hi";
    this.name = 'Piter';

});
app.controller('myCtrl2',function($scope,myFactory){
    $scope.robot_list = robot_list;
    $scope.myFactory = myFactory;
    $scope.hi = "Hello";

})
app.factory('myFactory',function(){
    return {
        arr: robot_list
    }
});
app.filter('adult',function(){
    return function(str){
        if(+ str>19) return +str;}
});
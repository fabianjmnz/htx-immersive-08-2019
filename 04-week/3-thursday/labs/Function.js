var list = [0,1,2,3,4];
var newlist = list.filter(function(element){
    return element>=0;
});
console.group("Positive Numbers");
console.log(newlist)
console.groupEnd();

////////////////////

var list = [0,1,2,3,4];
var newlist = list.filter(function(element){
    return element%2===0;
});
console.group("Even Numbers");
console.log(newlist)
console.groupEnd();

//////////////

var list = [0,1,2,3,4];
var newlist = list.map(function(element){
    return element * element;
});
console.group("Square the Numbers");
console.log(newlist);
console.groupEnd();

///////////////

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];
    var coldCities = cities.filter(function(element){
        return element.temperature<70;
   });
console.group("Cities 1");
console.log(coldCities);
console.groupEnd();

///////////////////

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];
function cityNames(cn){
    return cn.map(x =>sd x.name);
}
console.group("Cities 2");
console.log(cityNames(cities));
console.groupEnd();


////////////////////
console.group("Good Job!");
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
for(i =0; i<people.length; i++){            ////dont use forloop
    console.log('Good Job,' + people[i]+'!');   
}
console.groupEnd();

//////////////////////////   

console.group("Sort an array");
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.sort();
console.log(people);
console.groupEnd();

//////////////////

console.group("Sort an array,2");
newlist =[];
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.sort(function(a,b){
    return a.length - b.length;
});
console.log(people);
console.groupEnd();

//////////////////

console.group("Sort an array,3");
newlist =[];
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];


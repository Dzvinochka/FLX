function findTypes() {
  var elementsTypes = [];
  for (let i = 0; i < arguments.length; i++) {
    elementsTypes.push(typeof arguments[i]);
  }
  return elementsTypes;
}

findTypes (null, 4,8, {}, 'ggfg', [1,2], undefined);

function executeforEach(inputArray, inputFunction){
    for(let i = 0; i < inputArray.length; i++){
        inputFunction(inputArray[i]);
    }
}
executeforEach([1,2,3], function(el){
 console.log(el); 
});

function filterArray(inputArray, inputFunction){
    var filteredArray = [];
    executeforEach(inputArray, function(el){
        if(inputFunction(el)){
            filteredArray.push(el);
        }
    });
    return filteredArray;
}
filterArray([3, 6, 8, 1], function(el){ 
 return el > 3;
});

function mapArray(inputArray, inputFunction){
    var arr2 = [];
    executeforEach(inputArray, function(el){
        arr2.push(inputFunction(el))
    });
    return arr2;
}
mapArray([2,5,8], function(el){
 return el + 3; 
});

const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
function getAmountOfAdultPeople(data){
    let arrayOfResults = filterArray(data, function(iElement){
        return iElement.age > 18;
    })
    return arrayOfResults.length;
} 
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data){
    let getGreenAdultBananaLovers = filterArray(data, function(iElement){
        return iElement.age > 18 && iElement.eyeColor === "green" && iElement.favoriteFruit === "banana";
    });
    return mapArray(getGreenAdultBananaLovers, function(iElement){
        return iElement.name;
    });
}
getGreenAdultBananaLovers(data);

function keys(obj) {
  let keyArr = [];
  for (let key in obj) {
    keyArr.push(key);
  }
  return keyArr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
  let valueArr = [];
  for (let val in obj) {
    valueArr.push(obj[val]);
  }
  return valueArr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
  const options = {
    month: 'short'
  }
  return "Date: " + date.getDate() + " of " + date.toLocaleString("en-US", options) + ", " + date.getFullYear(); 
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  if (date.getFullYear() % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
  if ((date.getMonth()+1) % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));







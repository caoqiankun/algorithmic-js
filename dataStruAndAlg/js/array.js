
var isEven = function (x) {
    return (x%2 ==0)
}
// function isEven(x) {
//     return (x%2 ==0)
// }

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var res = []
for(var i=0;i<numbers.length;i++) {
    res[i]=(isEven(numbers[i]))
}
console.log(res)

var myMap = numbers.map(isEven) //返回一个满足条件的数组
console.log(myMap)

var zero = 22;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers)

function isEven(num) {
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i+1;
}
var evens = nums.filter(function (num) {
    return num%2 ==0
});
console.log("Even numbers: ");
console.log(evens);
var odds = nums.filter(isOdd); //过滤器
console.log("Odd numbers: ");
console.log(odds);

function passing(num) {
    return num>=60
}
var grades = []
for(var i = 0;i<20;++i){
    grades[i] = Math.floor(Math.random()*101)
}

var passGrades = grades.filter(passing)

console.log(grades)
console.log(passGrades)
焊接 钢网 原理图
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0
for(var row =0;row<grades.length;++row) {
    for(var col =0;col<grades[row].length;++col){
        total+= grades[row][col]
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

function Point(x,y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for(var i=0;i<arr.length;++i){
        console.log(arr[i].x+","+arr[i].y)
    }
}

function weekTemps() {
    this.dataStore = []
    this.add = add;
    this.average = average;
}

function initArray(numrows,numcols) {
    var arr=[]
    for(var i=0;i<numcols; ++i){
        arr.push([])
        for(var j = 0;j<numcols; ++j){
            if(arr[i]){
                arr[i][j]=0
            }
        }
    }
    return arr
}

function add(temp) {
    this.dataStore.push(temp)
}

function average() {
    var total = 0;
    for(var i =0; i<this.dataStore.length; ++i) {
        total += this.dataStore[i]
    }
    return total / this.dataStore.length
}

var thisWeek = new weekTemps()
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average())

console.log(initArray(12,12))
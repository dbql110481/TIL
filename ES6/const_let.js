/* ES5 */
var name = '조상훈';
var title = 'Junior software developer';
var workHour = '9am to 6pm';
// var는 마음대로 변형가능

function count (targetString) {
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;

    for (var i=0; i < targetString.length; i++){
        if(characters.includes(targetString[i])){
            number++;
        }
    }
    return number;
}

/* ES6 */
const name = '조상훈';
let title = 'Junior software developer';
let workHour = '9am to 6pm';
// const는 변형하면 에러발생 let은 마음대로 변경가능

function count (targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = targetString.split('').reduce(function(acc, char){
        if(characters.includes(char)){
            acc++;
        }
        return acc;
    },0);
    return number;
}
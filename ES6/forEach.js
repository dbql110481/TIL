/* ES5 for() */

var colors = ['red', 'blue', 'green'];

for (var i = 0 ; i < colors.length; i++) {
    console.log(colors[i]);
}

/* ES6 forEach() */

colors.forEach(function(color){
    console.log(color);
});

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(num){
    sum += num;
});

// 위와 같은 함수식
// function add (num) {
//     sum += num;
// };
// numbers.forEach(add);

console.log(sum);

/* In real world */
spamMails = [];
spamMails.forEach(function(spamMail){
    deleteMail(spamMail);
});

/* 실습 */

var posts = [
    { id:23, title: 'Daily JS News'},
    { id:52, title: 'Code Refactor City'},
    { id:105, title: 'The Brightest Ruby'}
];

posts.forEach(function(post){
    savePost(post);
});

/* 실습2 */

var images = [
    {height: 10, width:30},
    {height: 20, width:90},
    {height: 54, width:32}
];

var areas = [];
images.forEach(function(image){
    areas.push(image.height * image.width);
});
'use strict';
alert("Welcome to those who believe in the power of dreams and who would like to join me in my exploration of life");
let score = 0;
let userName = prompt('What is your name ?');
while(!userName){
    userName = prompt('please enter your name ?')
}
alert('Hello Dear ' + userName + ' ,I am glad that you are in my web page');

let x = prompt(' Do think I like Math classes ?' , 'answer with yes or no plz' );
console.log(x);
switch(x.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('Correct, I love them');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG !!!');
        break;       
}

let c = prompt(' Is BMW my favourite car ?');
console.log(c);
switch(c.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('WRONG!!! AMG 63 GT is my favourite car');
        score++;
        break;
    case 'no':
    case 'n':
        alert('YES,AMG 63 GT is my favourite car ');
        break;       
}

let v = prompt(' Is black is my signature color ?');
console.log(v);
switch(v.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('Correct, it is');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG!!!! It is black');
        break;       
}

let b = prompt(' Is Red is my best color ?');
console.log(b);
switch(b.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('Correct, it is');
        score++;
        break;
    case 'no':
    case 'n':
        alert('WRONG!!!! It is Red');
        break;       
}

let n = prompt('Do you think I like Choco Milkshakes?');
switch(n.toLocaleLowerCase()){
    case 'yes':
    case  'y' :
        alert('WRONG, I like Papaya, Grapes and strawberry Milkshakes ');
        break;
        case 'no':
        case 'n':
        alert('Exactly !!!! I hate Chocolate Milkshakes');
        score++;
        break;       
}
alert('Great work ' + ' and your score is ' + score);

let y = confirm('Are you interested in exploration ?');
switch(y){
    case true:
        confirm('Are you sure ?');
        document.write(' Welcome dear ' + userName + ' to our exploration site');
        break;
    case false:
        confirm('Are you sure ?');
        document.write('Take around here dear ' + userName + ' to know more!');
        break;
}


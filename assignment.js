let para1 = document.createElement('p');          //to creat an element
para1.innerText ="hey im red";         //adding text 
document.querySelector('body').append(para1);       //to add in desire place

para1.classList.add("red");     //for styling to add class



let h3 = document.createElement('h3');
h3.innerText ="hey im blue";
document.querySelector('body').append(h3);

h3.classList.add("blue");


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');


h1.innerText ="im in a div";
para2.innerText = "me too!";

div.append(h1);
div.append(para2);
div.classList.add("box");


document.querySelector('body').append(div);


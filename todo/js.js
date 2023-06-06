"use strict"
let dela = [
    {dela: 'проснуться'},
    {dela: 'помыть попу'},
    {dela: 'СПОРТ ЖИЗН'},
    {dela: 'поработать'},
    {dela: 'убраться'},
    {dela: 'купить цветы маме'},
];

function func1() {
    let elem2 = document.getElementById('elem2');
    let ul = document.querySelector('.elem');
    let li = document.createElement('li');
    li.classList.add('list-group-item');

    let button = document.createElement('button');
    button.classList.add('btn', 'btn1');
    button.innerText = 'удалить';
    button.onclick = () => {
        li.remove();
    }
    let button1 = document.createElement('button');
        button1.classList.add('btn', 'btn1');
        button1.innerText = 'сделал';
        button1.onclick = () => {
            li.classList.add('active');
        }

    li.append(elem2.value, button, button1);
    return ul.append(li);
}

let button3 = document.querySelector('.btn2');
button3.addEventListener('click', func1)


function func(alldela) {
    let ul = document.querySelector('.elem');
    let liii = alldela.map((elem1) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        

        let button = document.createElement('button');
        button.classList.add('btn', 'btn1');
        button.innerText = 'удалить';
        button.onclick = () => {
            li.remove();
        }
        let button1 = document.createElement('button');
        button1.classList.add('btn', 'btn1');
        button1.innerText = 'сделал';
        button1.onclick = () => {
            li.classList.add('active');
        }
        li.append(elem1.dela,button, button1 );
        return li
    })
    return ul.append(...liii);
}
func(dela);
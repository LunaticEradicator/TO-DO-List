const sectionOne = document.querySelector('.sectionOne');
const titleTest = document.createElement('h2');
const descriptionTest = document.createElement('span');
const addTodoDiv = document.querySelector('.addTodoDiv');
const addTodoBtn = document.querySelector('.addTodoBtn');
const gridIcon = document.querySelector('.gridIcon');
const listIcon = document.querySelector('.listIcon');


export default function todoBodyAppend() {
    titleTest.textContent = 'Heading';
    titleTest.classList.add('title');

    descriptionTest.textContent = 'Some Description';
    descriptionTest.classList.add('description');

    sectionOne.append(titleTest, descriptionTest);
}

export { titleTest, addTodoDiv, addTodoBtn, gridIcon, listIcon }



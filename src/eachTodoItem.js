let todoMain;
let todoDetails;
let todoNameDiv;
let todoSign;
let todoName;
let todoDescription;
let todoStatus;
let todoDate;
let todoDeleteBtn;
let todoMinimizeBtn;
const hud = document.querySelector('.hud');
const sectionThree = document.createElement('div');
const sectionFour = document.querySelector('.sectionFour');


function createNewSectionThree() {
    todoMinimizeBtn = document.createElement('button');
    todoMain = document.createElement('div');
    todoDetails = document.createElement('div');
    todoNameDiv = document.createElement('div');
    todoSign = document.createElement('div');
    todoName = document.createElement('div');
    todoDescription = document.createElement('div');
    todoStatus = document.createElement('div');
    todoDate = document.createElement('div');
    todoDeleteBtn = document.createElement('div');


    todoMinimizeBtn.classList.add('todoMinimizeBtn');
    todoMinimizeBtn.textContent = 'Minimize';
    sectionThree.classList.add('sectionThree');
    todoMain.classList.add('todoMain');
    todoDetails.classList.add('todoDetails');
    todoNameDiv.classList.add('todoNameDiv');
    todoSign.classList.add('todoSign');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoStatus.classList.add('todoStatus');
    todoDate.classList.add('todoDate');
    todoDeleteBtn.classList.add('todoDeleteBtn');

    todoDeleteBtn.textContent = '';
    todoDetails.append(todoSign, todoNameDiv, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn);
    todoNameDiv.append(todoSign, todoName);
    todoMain.append(todoDetails);
    sectionThree.append(todoMain);
    hud.after(sectionThree);
}

export default function todoUICreate() {
    todoMinimizeBtn = document.createElement('button');
    todoMain = document.createElement('div');
    todoDetails = document.createElement('div');
    todoNameDiv = document.createElement('div');
    todoSign = document.createElement('div');
    todoName = document.createElement('div');
    todoDescription = document.createElement('div');
    todoStatus = document.createElement('div');
    todoDate = document.createElement('div');
    todoDeleteBtn = document.createElement('div');


    todoMinimizeBtn.classList.add('todoMinimizeBtn');
    todoMinimizeBtn.textContent = 'Minimize';
    sectionThree.classList.add('sectionThree');
    todoMain.classList.add('todoMain');
    todoDetails.classList.add('todoDetails');
    todoNameDiv.classList.add('todoNameDiv');
    todoSign.classList.add('todoSign');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoStatus.classList.add('todoStatus');
    todoDate.classList.add('todoDate');
    todoDeleteBtn.classList.add('todoDeleteBtn');

    todoDeleteBtn.textContent = '';
    todoDetails.append(todoSign, todoNameDiv, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn);
    todoNameDiv.append(todoSign, todoName);
    todoMain.append(todoDetails);
    sectionThree.append(todoMain);
    hud.after(sectionThree);
}
// todoMain = document.createElement('div');




export { createNewSectionThree, sectionThree, sectionFour, todoMain, todoDetails, todoSign, todoName, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn };
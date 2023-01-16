let todoMain;
let todoSign;
let todoDetails;
let todoName;
let todoDescription;
let todoStatus;
let todoDate;
let deleteBtn;
const hud = document.querySelector('.hud');
const sectionThree = document.createElement('div');


export default function todoCreatedOnSaveBtnPress() {
    todoMain = document.createElement('div');
    todoDetails = document.createElement('div');
    todoSign = document.createElement('div');
    todoName = document.createElement('div');
    todoDescription = document.createElement('div');
    todoStatus = document.createElement('div');
    todoDate = document.createElement('div');
    deleteBtn = document.createElement('div');


    sectionThree.classList.add('sectionThree');
    todoMain.classList.add('todoMain');
    todoDetails.classList.add('todoDetails');
    todoSign.classList.add('todoSign');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoStatus.classList.add('todoStatus');
    todoDate.classList.add('todoDate');
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.textContent = '';
    todoDetails.append(todoName, todoDescription, todoStatus, todoDate, deleteBtn);
    todoMain.append(todoSign, todoDetails);
    sectionThree.append(todoMain);
    hud.after(sectionThree);
}
// todoMain = document.createElement('div');




export { sectionThree, todoMain, todoDetails, todoSign, todoName, todoDescription, todoStatus, todoDate, deleteBtn };
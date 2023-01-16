import './style.css';
import { addTodoBtn } from './dom';
import { modal, saveBtn, descriptionBtn, dateBtn, statusBtnHigh, statusBtnLow, statusBtnOff, selectedStatusBtn } from './modalBar'
import todoCreatedOnSaveBtnPress, { sectionThree, todoMain, todoDetails, todoName, todoDescription, todoStatus, todoDate, deleteBtn } from './eachTodoItem';


const nameBtn = document.querySelector('.nameBtn');
const obj = {
    sike: [],
    currentStatus: '',
}

class TodoClass {
    constructor(title, description, date, status) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}

function showModal() {
    addTodoBtn.addEventListener("click", e => {
        modal.showModal();
    });
}

function removeTodo() {
    deleteBtn.addEventListener("click", () => {
        todoMain.remove();
        console.log('Delete')
    })
}

function DisplayTodoList() {
    console.log(obj.sike[0]);
    console.log(obj.sike[0].date);
    console.log(obj.sike[0].title);
    todoCreatedOnSaveBtnPress();
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
}


function userInputTodo() {
    const dateBtnIndianFormat = dateBtn.value.split('-').reverse().join('-');
    console.log(dateBtnIndianFormat);
    const listItem = new TodoClass(nameBtn.value, descriptionBtn.value, dateBtnIndianFormat, obj.currentStatus);
    obj.sike.unshift(listItem);
    console.log()
}


function predefinedTodo() {
    const listItemTwo = new TodoClass('Messi', 'GOAT', '2-11-1990', 'High');
    obj.sike.push(listItemTwo);
    DisplayTodoList();
    removeTodo();
} predefinedTodo();


function closeModal() {
    saveBtn.addEventListener("click", () => {
        userInputTodo()
        DisplayTodoList();
        modal.close();
        removeTodo();
    });
}

function selectedStatus() {
    selectedStatusBtn.forEach(selected => {
        selected.addEventListener("click", () => {
            obj.currentStatus = selected.value;
            console.log(obj.currentStatus);
        });
    });
} selectedStatus();

showModal();
closeModal();



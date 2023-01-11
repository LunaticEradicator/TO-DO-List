// import _ from 'lodash';
import './style.css'
import print from './logic';

function comp() {
    const element = document.createElement('div');
    element.textContent = print();
    return element;
}

document.body.append(comp());
import {clockLayout} from '../elements.js';

export const clock =() => {
    clockLayout.clear();

    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if(hours<10) hours = '0' + hours;
    if(minutes<10) hours = '0' + minutes;
    if(seconds<10) hours = '0' + seconds;

    clockLayout.innerHTML('afterbegin', `${hours} : ${minutes} : ${seconds}`)
}
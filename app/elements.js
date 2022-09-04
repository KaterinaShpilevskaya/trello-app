import {$} from './DOM.js';

const clockLayout = $('[data-header-clock]');
const createDeskTemplate = $('[data-create-todo-template]');
const progressDeskTemplate = $('[data-progress-template]');
const doneDeskTemplate = $('[data-done-template]');

const createDeskCount = $('[data-desk-todo-count]');
const progressDeskCount = $('[data-desk-progress-count]');
const doneDeskCount = $('[data-desk-done-count]');

const createContentDesk = $('[data-desk-todo-content]');
const progressContentDesk = $('[data-desk-progress-content]');
const doneContentDesk = $('[data-desk-done-content]');


export {
    clockLayout,
    createDeskTemplate,
    progressDeskTemplate,
    doneDeskTemplate,
    createDeskCount,
    progressDeskCount,
    doneDeskCount,
    createContentDesk,
    progressContentDesk,
    doneContentDesk,
}
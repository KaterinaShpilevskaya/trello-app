import {$} from './DOM.js';

const root = $('#root');

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

const btnRemoveAll = $('[data-desk-remove-btn]');


export {
    root,
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
    btnRemoveAll,
}
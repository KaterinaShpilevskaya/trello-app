import {$} from './DOM.js';

const root = $('#root');
const headerTitle = $('[data-header-title]');

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
const btnAddTodo = $('[data-desk-add-btn]');

const headerUserName = $('[data-header-username]');
const headerUserAvatar = $('[data-header-avatar]');



export {
    root,
    headerTitle,
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
    btnAddTodo,
    headerUserName,
    headerUserAvatar,
}
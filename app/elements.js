import {$} from './DOM.js';

const clockLayout = $('[data-header-clock]');
const createDeskTemplate = $('[data-create-todo-template]');
const progressDeskTemplate = $('[data-progress-template]');
const doneDeskTemplate = $('[data-done-template]');

export {
    clockLayout,
    createDeskTemplate,
    progressDeskTemplate,
    doneDeskTemplate,
}
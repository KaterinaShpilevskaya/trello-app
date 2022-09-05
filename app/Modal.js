import { DOM } from './DOM.js';
import { root } from './elements.js';

export class Modal {
    static #errorLayout;

    static addErrorLayout(message) {
        const errorElement = DOM.create('div', 'modal', 'error', 'modal--toggle');
        errorElement.insertHTML('afterbegin', `<p data-error-message>${message}</p>`);
        Modal.#errorLayout = errorElement;
        root.insertElement('afterend', errorElement);

        errorElement.addEvent('click', (e) => {
            if('errorMessage' in e.target.dataset) return;
            Modal.#errorLayout.remove();
        })
    }

    
}
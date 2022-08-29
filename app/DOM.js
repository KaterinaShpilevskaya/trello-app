export const $ = (selector) => new DOM(selector);

export class DOM {
    static create = (tagName, ...classes) => {
        const el = document.createElement(tagName);
        if(classes.length){
            el.classList.add(...classes)
        }
        return $(el);
    }

    constructor(selector) {
        this.$el = typeof selector === 'string' 
        ? document.querySelector(selector) : selector;
    }

    addEvent(type, callback) {
        this.$el.addEventListener(type, callback);
    }

    removeEvent(type, callback) {
        this.$el.removeEventListener(type, callback);
    }

    clear() {
        this.$el.innerHTML = '';
    }

    innerHTML(place, html) {
        this.$el.insertAdjacentHTML(place, html);
    }
}
import { API } from "./API.js";
import { $, DOM } from "./DOM.js";
import { createDeskTemplate } from "./elements.js";
import { User } from "./User.js";


export class Desks extends User {
    constructor(userId) {
        super(userId)
    }

    appendDesks() {
        const createTemplate = $(document.importNode(createDeskTemplate.$el.content, true));
        const title = createTemplate.find('[data-todo-title]');
        console.log(title)
    }

    initialRender() {
        this.fetcher(() => API.getUser(this.userID))
        this.appendDesks.bind(this);
    }
}
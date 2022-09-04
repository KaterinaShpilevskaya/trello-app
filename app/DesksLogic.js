import { $ } from "./DOM.js";
import { createContentDesk,
         createDeskCount,
         createDeskTemplate, 
         doneContentDesk, 
         doneDeskCount, 
         doneDeskTemplate, 
         progressContentDesk, 
         progressDeskCount, 
         progressDeskTemplate } from "./elements.js";

export class DesksLogic {
    constructor(user) {
        this.user = user;
        this.desks = user.desks;
    }

    appendCreateTodos() {
        const {create} = this.desks;

        createDeskCount.text(create.length);
      create.forEach((el) => {
        const createTemplate = $(
          document.importNode(createDeskTemplate.$el.content, true)
        );
        const title = createTemplate.find("[data-todo-title]");
        title.text(el.title);

        const desc = createTemplate.find("[data-todo-desc-content]");
        desc.text(el.desc);

        const user = createTemplate.find("[data-todo-user]");
        user.text(this.user.name);

        const todoDate = createTemplate.find("[data-todo-date]");
        todoDate.text(el.date);

        createContentDesk.append(createTemplate);
      });
    }

    appendProgressTodos() {
        const {progress} = this.desks;

        progressDeskCount.text(progress.length);

        progress.forEach(el => {
        const progressTemplate = $(
          document.importNode(progressDeskTemplate.$el.content, true)
        );
        const title = progressTemplate.find("[data-todo-title]");
        title.text(el.title);

        const desc = progressTemplate.find("[data-todo-desc-content]");
        desc.text(el.desc);

        const user = progressTemplate.find("[data-todo-user]");
        user.text(this.user.name);

        const todoDate = progressTemplate.find("[data-todo-date]");
        todoDate.text(el.date);

        progressContentDesk.append(progressTemplate);
      });

    }

    appendDoneTodos() {
        const {done} = this.desks;

        doneDeskCount.text(done.length);

        done.forEach(el => {
        const doneTemplate = $(
          document.importNode(doneDeskTemplate.$el.content, true)
        );
        const title = doneTemplate.find("[data-todo-title]");
        title.text(el.title);

        const desc = doneTemplate.find("[data-todo-desc-content]");
        desc.text(el.desc);

        const user = doneTemplate.find("[data-todo-user]");
        user.text(this.user.name);

        const todoDate = doneTemplate.find("[data-todo-date]");
        todoDate.text(el.date);

        doneContentDesk.append(doneTemplate);
      });
    }
}
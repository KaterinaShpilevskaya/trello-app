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

    applyContent(el, template) {
        const title = template.find("[data-todo-title]");
        title.text(el.title);

        const desc = template.find("[data-todo-desc-content]");
        desc.text(el.desc);

        const user = template.find("[data-todo-user]");
        user.text(this.user.name);

        const todoDate = template.find("[data-todo-date]");
        todoDate.text(el.date);
    }

    appendCreateTodos() {
        const {create} = this.desks;

        createDeskCount.text(create.length);

        create.forEach((el) => {

        const createTemplate = $(
          document.importNode(createDeskTemplate.$el.content, true)
        );

        this.applyContent(el, createTemplate);

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
        
        this.applyContent(el, progressTemplate);

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
        
        this.applyContent(el, doneTemplate);

        doneContentDesk.append(doneTemplate);
      });
    }
}
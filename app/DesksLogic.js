import { API } from "./API.js";
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
import {ERROR_MOVING_USER} from './constants.js'

export class DesksLogic {
    constructor(user, fetcher, appendDesks) {
        this.user = user;
        this.desks = user.desks;
        this.fetcher = fetcher;
        this.appendDesks = appendDesks; 
        this.ID = user.id;
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

        create.forEach(el => {

          const createTemplate = $(
            document.importNode(createDeskTemplate.$el.content, true)
          );

          this.applyContent(el, createTemplate);

          const btnMove = createTemplate.find('[data-todo-btn-relocate]');
          btnMove.addEvent('click', () => {
            const create = this.desks.create
              .filter(todo => todo.id !== el.id);
            const progress = [...this.desks.progress, el];
            const newDesks = {
              ...this.desks,
              create,
              progress,
            }

            this.fetcher(
              () => API.putUser(this.ID, {desks:newDesks}),
              this.appendDesks,
              ERROR_MOVING_USER
            )
          })

          createContentDesk.append(createTemplate);
      })
    }

    appendProgressTodos() {
        const {progress} = this.desks;

        progressDeskCount.text(progress.length);

        progress.forEach(el => {
        const progressTemplate = $(
          document.importNode(progressDeskTemplate.$el.content, true)
        );
        
        this.applyContent(el, progressTemplate);

        const btnMove = progressTemplate.find('[data-todo-btn-relocate]');
          btnMove.addEvent('click', () => {
            const progress = this.desks.progress
              .filter(todo => todo.id !== el.id);
            const done = [...this.desks.done, el];
            const newDesks = {
              ...this.desks,
              progress,
              done,
            }

            this.fetcher(
              () => API.putUser(this.ID, {desks:newDesks}),
              this.appendDesks,
              ERROR_MOVING_USER
            )
          })

          const btnBack = progressTemplate.find('[data-todo-btn-back]');
          btnBack.addEvent('click',
            () => {
              const progress = this.desks.progress
              .filter(todo => todo.id !== el.id);
              const create = [...this.desks.create, el];
              const newDesks = {
                ...this.desks,
                progress,
                create
              }
              this.fetcher(
                () => API.putUser(this.ID, {desks:newDesks}),
                this.appendDesks,
                ERROR_MOVING_USER
              )
            })

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
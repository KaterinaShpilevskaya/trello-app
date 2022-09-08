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
import {ERROR_MOVING_USER} from './constants.js';
import {ERROR_WHILE_REMOVING} from './constants.js';
import { Modal } from "./Modal.js";


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


        if (create.length) {
        create.forEach(el => {

          const createTemplate = $(
            document.importNode(createDeskTemplate.$el.content, true)
          );

          this.applyContent(el, createTemplate);

          const btnMove = createTemplate.find('[data-todo-btn-relocate]');
          btnMove.addEvent('click', () => {
            const limit = 5;
            if(this.desks.progress.length >=limit) {
              Modal.addWarningLimitLayout(limit);
              return;
            }
            const create = this.desks.create
              .filter(todo => todo.id !== el.id);
            const progress = [...this.desks.progress, el];
            const newDesks = {
              ...this.desks,
              create,
              progress,
            }

            this.putFetcher (newDesks, ERROR_MOVING_USER);
          })

          const btnRemove = createTemplate.find('[data-todo-btn-remove]');
          btnRemove.addEvent('click', 
            () => {
              const create = this.desks.create
                .filter(todo => todo.id !== el.id);
              const newDesks = {...this.desks, create};
              this.putFetcher (newDesks, ERROR_WHILE_REMOVING);
            }
            )

          createContentDesk.append(createTemplate);
      })
     } else {
      createContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }
    }

    putFetcher (desks, message = '') {
      this.fetcher(
        () => API.putUser(this.ID, {desks}),
        this.appendDesks,
        message
      )
    }

    appendProgressTodos() {
        const {progress} = this.desks;

        progressDeskCount.text(progress.length);

        if (progress.length) {
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

            this.putFetcher (newDesks, ERROR_MOVING_USER);
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
              this.putFetcher (newDesks, ERROR_MOVING_USER);
            })

            const btnRemove = progressTemplate.find('[data-todo-btn-remove]');
          btnRemove.addEvent('click', 
            () => {
              const progress = this.desks.progress
                .filter(todo => todo.id !== el.id);
              const newDesks = {...this.desks, progress};
              this.putFetcher (newDesks, ERROR_WHILE_REMOVING);
            }
            )

        progressContentDesk.append(progressTemplate);
      });
    } else {
      progressContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }
    }

    appendDoneTodos() {
        const {done} = this.desks;

        doneDeskCount.text(done.length);

        if (done.length) {
        done.forEach(el => {
        const doneTemplate = $(
          document.importNode(doneDeskTemplate.$el.content, true)
        );
        
        this.applyContent(el, doneTemplate);

        const btnRemove = doneTemplate.find('[data-todo-btn-remove]');
          btnRemove.addEvent('click', 
            () => {
              const done = this.desks.done
                .filter(todo => todo.id !== el.id);
              const newDesks = {...this.desks, done};
              this.putFetcher (newDesks, ERROR_WHILE_REMOVING);
            }
            )

        doneContentDesk.append(doneTemplate);
      });
    } else {
      doneContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }
    }

      removeAll() {
        const remove = () => {
          const newDesks = {...this.desks,done: [],};

          this.putFetcher(newDesks, ERROR_WHILE_REMOVING);
        }
        Modal.addWarningRemoveLayout(remove);
      }
}
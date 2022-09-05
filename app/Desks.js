import { API } from "./API.js";
import { DesksLogic } from "./DesksLogic.js";
import { $, DOM } from "./DOM.js";
import {
  createContentDesk,
  createDeskCount,
  createDeskTemplate,
  doneContentDesk,
  doneDeskCount,
  doneDeskTemplate,
  progressContentDesk,
  progressDeskCount,
  progressDeskTemplate,
} from "./elements.js";
import { User } from "./User.js";
import { getDate } from "./utils/date.util.js";

export class Desks extends User {
  constructor(userId) {
    super(userId);
  }

  deskLogic() {
    return new DesksLogic(this.user);
  }

  appendDesks() {
    createContentDesk.clear();

    const $logic = this.deskLogic();

    const { create, progress, done } = this.desks;

    if (create.length) {
        $logic.appendCreateTodos();
    } else {
      createContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }

    if (progress.length) {
        $logic.appendProgressTodos();
    } else {
        progressContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }

    if (done.length) {
        $logic.appendDoneTodos();
    } else {
        progressContentDesk.insertHTML("afterbegin", `<p>No todos...</p>`);
    }

  }

  initialRender() {
    this.fetcher(() => API.getUser(this.userID));
    this.appendDesks.bind(this);
  }
}

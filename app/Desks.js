import { API } from "./API.js";
import { DesksLogic } from "./DesksLogic.js";
import {
  createContentDesk,
  progressContentDesk,
  doneContentDesk,
  btnRemoveAll,
} from "./elements.js";
import { User } from "./User.js";
import { ERROR_FETCHING_USER } from "./constants.js";
import { ERROR_WHILE_REMOVING } from "./constants.js";

export class Desks extends User {
  constructor(userId) {
    super(userId);
  }

  deskLogic() {
    return new DesksLogic(
      this.user,
      this.fetcher.bind(this),
      this.appendDesks.bind(this)
    );
  }

  clearDesks() {
    createContentDesk.clear();
    progressContentDesk.clear();
    doneContentDesk.clear();
  }

  appendDesks() {
    
    this.clearDesks();

    const $logic = this.deskLogic();
     
   $logic.appendCreateTodos();
         
   $logic.appendProgressTodos();
       
   $logic.appendDoneTodos();
  }
  
  initialRender() {
    this.fetcher(
      () => API.getUser(this.userID),
      this.appendDesks.bind(this),
      ERROR_FETCHING_USER
    );

    btnRemoveAll.addEvent("click", () => {
      this.deskLogic().removeAll()
    });
  }
}

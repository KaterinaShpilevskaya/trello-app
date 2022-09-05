import { API } from "./API.js";
import { ERROR_FETCHING_USER } from "./constants.js";
import { Modal } from "./Modal.js";

export class User {
  #user = {};
  #desks = {};
  #userId;

  constructor(userId) {
    this.#userId = userId;
  }

  get userID() {
    return this.#userId;
  }

  get user() {
    return this.#user;
  }

  set user(user) {
    if (typeof user !== "undefined") {
      this.#user = user;
    }
  }

  get desks() {
    return this.#desks;
  }

  set desks(desks) {
    if (typeof desks !== "undefined") {
      this.#desks = desks;
    }
  }

  async fetcher(callback, appendDesks) {
    try {
      const user = await callback();
      this.user = user;
      this.desks = user.desks;
      this.appendDesks();
    } catch (e) {
      Modal.addErrorLayout(`${ERROR_FETCHING_USER}: ${e.message}`);
    }
  }
}

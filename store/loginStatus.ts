import {makeAutoObservable} from 'mobx';

class loginStatus {
  isLogged = false;
  constructor() {
    makeAutoObservable(this);
  }

  signIn() {
    this.isLogged = true;
  }

  signOut() {
    this.isLogged = false;
  }
}

export default new loginStatus();

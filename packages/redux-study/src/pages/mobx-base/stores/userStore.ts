// src/stores/userStore.js
import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

class UserStore {
  userData = {
    name: '',
    email: '',
  };
  status = 'idle'; // 'idle' | 'loading' | 'succeeded' | 'failed'
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser() {
    this.status = 'loading';
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      runInAction(() => {
        this.userData = response.data;
        this.status = 'succeeded';
      });
    } catch (error: any) {
      runInAction(() => {
        this.status = 'failed';
        this.error = error.message;
      });
    }
  }
}

export default new UserStore();
// src/stores/rootStore.js
import counterStore from './counterStore';
import userStore from './userStore';

const rootStore = {
  counterStore,
  userStore,
};

export default rootStore;
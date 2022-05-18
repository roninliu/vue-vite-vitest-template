import { defineStore } from 'pinia'

export const globalStore = defineStore('globalStore', {
  state: () => {
    return {
      username: '0'
    }
  },
  getters: {
    realName: (state) => {
      return `${state.username}name is old`
    }
  },
  actions: {
    update() {
      this.username = '11'
    }
  }
})

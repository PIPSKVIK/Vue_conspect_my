import Vue from 'vue'
import Vuex from 'vuex'
import { exampleLoginWidthApi } from '../components/storeComponent/exampleWithVuex/exampleApi'

Vue.use(Vuex)

// Это состояние нашего хранилиша.
const state = () => ({
  user: null
})

// Входным параметром геттера 1 - state и друшие геттеры.
// В геттеры мы можем получать какие-то данные на основе состояния хранилиша.
const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

// принимает два аргумента, 1-состояние, 2-какя-то полезная нагрузка.
// Мутации - это функции по изменению состояний.
// Мы тут не можем делать ничего, только как отбраштся к состоянию и изменять состоянее.
// Мутации обязательно синхронны, мы не можем тут работать с промисами и с async await.

// А обращаться к мутации мы будем через специальный диспетчер => commit
const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

// Это некоторые более сложные операции по взаимодействию с хранилишем.
// Все действия всегда асинхронны, чтобы не вернули что бы не делали.
// В действии мы можем что-то изменить работать с Геттерами, дополнительными ассинхронными аперациями
const actions = {
  // тут всегда два аргумента 1- сонтекст в котором работает действи, 2-полезная нагрузка.
  async LOGIN ({ commit }, { email, password }) {
    exampleLoginWidthApi(email, password).then(user => {
      commit('SET_USER', user)
    })
  }
}

export default new Vuex.Store({
  // это нужно чтоыб не нарушать однонаправленный поток данных, чтобы vue предупреждал.
  // В этом случае, нам нельзя мутировать данные хранилиша на прямую, а нучто через mutation.
  strict: process.env.NODE_ENV !== 'production',

  state,
  getters,
  mutations,
  actions
})

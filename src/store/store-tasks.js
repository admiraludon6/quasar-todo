import Vue from 'vue'
import { uid } from 'quasar'

// This where all the data go
const state = {
  tasks: {
    //'ID1': {
    //  title: 'Get bananas',
    //  done: false,
    //  dueDate: '2020/04/20',
    //  dueTime: '14:00'
    //},
    //'ID2': {
    //  title: 'Eat bananas',
    //  done: true,
    //  dueDate: '2020/04/21',
    //  dueTime: '12:00'
    //},
    //'ID3': {
    //  title: 'Poo bananas',
    //  done: false,
    //  dueDate: '2020/04/22',
    //  dueTime: '14:30'
    //}
  }
}


// This will contain method which manipulate the state
// This object contain method can't be asynchronous, so you can't create a method which
// reaches out to a server and then waits for some data and then manipulate
// the state. You can only create methods which manipulate the state directly and instantly
const mutations = {
  // It's generally best practice to create an action which then call mutations
  updateTask(state, payload) { // this comming from actions. see below
    //console.log('updatedTask mutation')
    //console.log('payload ', payload)

    // Object assign allow us to essentially copy the properties from one object
    // to another object. The properties from actions(initially coming from mutations) to
    // state.
    Object.assign(state.tasks[payload.id],payload.updates)
  },
  deleteTask(state, id) {
    //console.log('deleteTask id ', id) // this comming from actions. see below
    //delete state.tasks[id] // In vue.js whenever we want to delete a keyed object from the state
                             // or add a brand-new object to the state, in order to keep it reactive,
                             // we need to use built-in view method for performing this deletes and updates.
                             // above we'll import vue at top

    Vue.delete(state.tasks,id)

  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

// This methods can be asynchronous, so you can create an action which reaches
// out to a server, grab some data and then commits a mutation which then adds
// that data to the state.
const actions = {
  // It's generally best practice to create an action which then call mutations
  // We can't change the state of the store from within an actions, we need to use
  // the commit function to to that. ** example: updateTask({ commit }, payload) {
  updateTask({ commit }, payload) {
    //console.log('updatedTask action')
    //console.log('payload ', payload)
    commit('updateTask', payload) // updateTask in commit here is a mutation function. It just have the same name
  },
  deleteTask({ commit }, id) { // in this case the payload just going to be and id, i'll just called it id. meh.
    //console.log('deleteTask action: ',id)
    commit('deleteTask', id) // deleteTask in commit here is a mutation function. It just have the same name
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

// Here methods create which actually get the data from the state which can be
// used by the components within your app. You can also manipulate the data within
// a getter before you send it out to your components.
const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

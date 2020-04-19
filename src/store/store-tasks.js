// This where all the data go
const state = {
  tasks: {
    'ID1': {
      title: 'Get bananas',
      done: false,
      dueDate: '2020/04/20',
      dueTime: '14:00'
    },
    'ID2': {
      title: 'Eat bananas',
      done: true,
      dueDate: '2020/04/21',
      dueTime: '12:00'
    },
    'ID3': {
      title: 'Poo bananas',
      done: false,
      dueDate: '2020/04/22',
      dueTime: '14:30'
    }
  }
}

// This will contain method which manipulate the state
// This object contain method can't be asynchronous, so you can't create a method which
// reaches out to a server and then waits for some data and then manipulate
// the state. You can only create methods which manipulate the state directly and instantly
const mutations = {

}

// This methods can be asynchronous, so you can create an action which reaches
// out to a server, grab some data and then commits a mutation which then adds
// that data to the state.
const actions = {

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

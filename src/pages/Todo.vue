<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pa-sm bg-primary">
      <task-input :taskTitle.sync="taskTitle"
                  @open="showAddTask=true" />
    </div>

    <no-tasks @open="showAddTask=true"
              v-if="!Object.keys(tasksTodo).length"></no-tasks>

    <task-todo v-else
               :tasksTodo="tasksTodo" />

    <task-done v-if="Object.keys(tasksDone).length"
               :tasksDone="tasksDone" />

    <!-- // Not needed now
    <div v-if="!Object.keys(tasksTodo).length"
         class="no-tasks absolute-center">
      <q-icon name="check"
              size="100px"
              color="primary" />
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
    -->

    <q-dialog v-model="showAddTask">
      <popup-add-task @close="showAddTask=false"
                      :taskTitle.sync="taskTitle" />
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        taskTitle: '',
        showAddTask: false,
      }
    },
    computed: {
      //tasks() {
      //  return this.$store.getters['tasks/tasks']
      //}
      ...mapGetters('tasks', ['tasksTodo','tasksDone'])
    },
    components: {
      // will be HTML attribute task
      'task-input': require('components/Tasks/TaskInput.vue').default,
      'task-todo': require('components/Tasks/TaskTodo.vue').default,
      'task-done': require('components/Tasks/TaskDone.vue').default,
      'no-tasks': require('components/Tasks/NoTasks.vue').default,
      'popup-add-task': require('components/Tasks/Modals/AddTask.vue').default
    }, mounted() {
      // This is a global event bus
      // Not a good practice
      // emitted from NoTasks.vue
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true
      })
    }
  }
</script>

<style lang="scss">
   .done {
     .q-item__label {
        text-decoration: line-through;
        color: #bbb;
     }
   }
  .no-tasks {
      opacity: 0.5;
  }
</style>

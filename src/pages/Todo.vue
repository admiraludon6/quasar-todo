<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pa-sm bg-primary">
      <add-task :taskTitle.sync="taskTitle"
                @open="showAddTask=true"/>
    </div>

    <q-list class="bg-white"
            separator
            bordered>
      <task v-for="(task, key) in tasks"
            :key="key"
            :task="task"
            :id="key">
      </task>
    </q-list>

    <div v-if="!Object.keys(tasks).length"
         class="no-tasks absolute-center">
      <q-icon name="check"
              size="100px"
              color="primary" />
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
    <q-dialog v-model="showAddTask">
      <popup-add-task @close="showAddTask=false"
                      :taskTitle.sync="taskTitle"/>
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
      ...mapGetters('tasks',['tasks'])
    },
    components: {
      // will be HTML attribute task
      'task': require('components/Tasks/Task.vue').default,
      'add-task': require('components/Tasks/AddTask.vue').default,
      'popup-add-task': require('components/Tasks/Modals/AddTask.vue').default
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

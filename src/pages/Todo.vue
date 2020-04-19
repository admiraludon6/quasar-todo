<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        filled
        square
        bg-color="white"
        placeholder="Add task"
        dense>
        <template v-slot:append>
          <q-btn
            @click="addTask"
            round
            dense
            flat
            icon="add" />
        </template>
      </q-input>
    </div>
    <q-list
      class="bg-white"
      separator
      bordered>

      <task
            v-for="(task, key) in tasks"
            :key="key"
            :task="task"
            :id="key">

      </task>

    </q-list>
    <div
      v-if="!tasks.length"
      class="no-tasks absolute-center">
      <q-icon
        name="check"
        size="100px"
        color="primary"/>
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addTask() {
        this.tasks.push({
          title: this.newTask,
          done: false
        })
        this.newTask=''
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
      'task' : require('components/Tasks/Task.vue').default
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

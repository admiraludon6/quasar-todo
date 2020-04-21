<template>
  <q-card>

    <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :title.sync="taskToSubmit.title"
                         ref="modalTaskName" />
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate"
                        @clear="clearDueDate" />
        <modal-due-time v-if="taskToSubmit.dueDate"
                        :dueTime.sync="taskToSubmit.dueTime"
                        @clear="taskToSubmit.dueTime = ''" />
      </q-card-section>

      <modal-button/>

    </form>
  </q-card>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['taskTitle'],
    data() {
      return {
        taskToSubmit: {
          title: '',
          done: false,
          dueDate: '',
          dueTime: '' 
        }
      }
    },
    methods: {
      ...mapActions('tasks',['addTask']),
      submitForm() {
        this.$refs.modalTaskName.$refs.name.validate()
        if (!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close')
        this.$emit('update:taskTitle', '')
      },
      clearDueDate() {
        this.taskToSubmit.dueDate = ''
        this.taskToSubmit.dueTime = ''
      }
    },
    components: {
      'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
      'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
      'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
      'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
      'modal-button': require('components/Tasks/Modals/Shared/ModalButton.vue').default
    }, mounted() {
        this.taskToSubmit.title = this.taskTitle
    }
  }
</script>

<style>

</style>

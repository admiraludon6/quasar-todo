<template>
  <q-item @click="updateTask({ id: id, updates: { done : !task.done }})"
          clickable
          :class="{ 'done bg-blue-1' : task.done }"
          v-ripple>
    <q-item-section avatar>
      <q-checkbox v-model="task.done"
                  class="no-pointer-events"
                  color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ task.title }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>
        {{ task.dueDate }}
      </q-item-label>
      <q-item-label caption>
        <small>{{ task.dueTime }}</small>
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTask = true"
               flat
               round
               dense
               color="primary"
               icon="edit" />
        <q-btn @click.stop="promtDelete(id)"
               flat
               round
               dense
               color="red"
               icon="delete" />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <popup-edit-task
                       @close="showEditTask=false"
                       :task="task"
                       :id="id"/>
    </q-dialog>

  </q-item>
</template>
<script>
  // We can map actions to our component just like map getters ** see in Todo.vue
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        showEditTask: false
      }
    },
    props: ['task', 'id'],
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask']),
      promtDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Really delete?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.deleteTask(id)
          this.$q.notify('Task deleted',id)
        })
      },
    },
    components: {
      'popup-edit-task': require('components/Tasks/Modals/EditTask.vue').default
    }
  }
</script>

<style>

</style>

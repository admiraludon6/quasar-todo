<template>
  <q-item 
          @click="task.done = !task.done"
          clickable
          :class="{ 'done bg-blue-1' : task.done }"
          v-ripple>

    <q-item-section avatar>
      <q-checkbox v-model="task.done"
                  class="no-pointer-events"
                  color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ task.title }} </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>
        {{ task.dueDate }}
      </q-item-label>
      <q-item-label caption>
        <small>{{ task.dueTime }}</small>
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.done"
                    side>
      <q-btn @click.stop="deleteTask(id)"
             flat
             round
             dense
             color="primary"
             icon="delete" />
    </q-item-section>

  </q-item>
</template>
<script>
  export default {
    props: ['task','id']
  }
</script>

<style>

</style>

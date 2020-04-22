<template>
  <div class="q-mt-md">

    <list-header bgColor="bg-primary">Done</list-header>

    <q-list class="bg-white"
            separator
            bordered>
      <task v-for="(task, key) in tasksDone"
            :key="key"
            :task="task"
            :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
  export default {
    props: ['tasksDone'],
    components: {
      'task': require('components/Tasks/Task.vue').default,
      'list-header': require('components/Shared/ListHeader.vue').default
    }
  }
</script>

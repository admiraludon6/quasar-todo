<template>
    <q-input v-model="newTask"
             @keyup.enter="openTaskModal"
             class="col"
             filled
             square
             bg-color="white"
             placeholder="Add task"
             dense>
      <template v-slot:append>
        <q-btn @click="openTaskModal"
               round
               dense
               flat
               icon="add" />
      </template>
    </q-input>
</template>

<script>
  export default {
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      openTaskModal() {
        this.$emit('open')
      }
    },
  }
</script>

<style>

</style>

<template>
    <q-input :value="taskTitle"
             @input="$emit('update:taskTitle',$event)"
             @keyup.enter="$emit('open')"
             class="col"
             filled
             square
             bg-color="white"
             placeholder="Add task"
             dense>
      <template v-slot:append>
        <q-btn @click="$emit('open')"
               round
               dense
               flat
               icon="add" />
      </template>
    </q-input>
</template>

<script>
  export default {
    props: ['taskTitle'] 
  }
</script>

<style>

</style>

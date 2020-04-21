<template>
  <div class="row q-mb-sm">
    <q-input outlined
             :value="title"
             @input="$emit('update:title',$event)"
             :rules="[val => !!val || 'Field is required']"
             ref="name"
             label="Task name"
             class="col"
             autofocus>
      <template v-slot:append>
        <q-icon v-if="title"
                name="close"
                @click="$emit('update:title','')"
                class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

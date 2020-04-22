<template>
  <div class="q-mt-sm q-ml-sm q-mr-sm">
    <q-banner class="bg-white-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      No task to do today!
      <template v-slot:action>
        <q-btn
               @click="$root.$emit('open')"
               flat
               color="primary"
               label="Add Task" />
      </template>
    </q-banner>
    </div>
</template>

<script>
  export default {

  }
</script>

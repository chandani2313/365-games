<template>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      :color="color"
      elevation="24"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
    name: 'Join',
    data() {
        
    },
    methods:{

    }
}
</script>
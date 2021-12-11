<template>
  <v-dialog v-model="dialog" width="400">
    <v-card>
      <v-card-title class="text-h6 red lighten-1">
        <v-spacer />
        <v-icon @click="close">
          mdi-close-circle
        </v-icon>
      </v-card-title>
      <v-card-text class="text-center mt-3">
         <p>Form contains <strong>errors</strong>.</p>
         <p class="mt-n2 mb-n2">Please, <strong>complete</strong> all the fields <strong>correctly</strong>.</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      dialog: state => state.calendar.showEventErrorsDialog
    })
  },
  methods: {
    close() {
      this.$store.dispatch("calendar/closeErrorsDialog");
    },
  }
};
</script>

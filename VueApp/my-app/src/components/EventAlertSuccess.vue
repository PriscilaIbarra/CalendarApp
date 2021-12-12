<template>
  <v-alert
    class="mt-1"
    border="top"
    color="green"
    dismissible
    type="success"
    v-if="msg"
    data-test-id="msg"
  >
    {{ msg }}
    <template v-slot:close="{ toggle }">
      <v-btn icon fab x-small color="bg-black" dark @click="close(toggle)">
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </template>
  </v-alert>
</template>
<script>
export default {
  name:'event-alert-success',
  computed: {
    msg() {
      return this.$store.state.notifications.eventSuccess;
    }
  },
  methods: {
    close(toggle) {
      this.$store.dispatch("notifications/cleanNotification", "eventSuccess");
      toggle();
    }
  }
};
</script>

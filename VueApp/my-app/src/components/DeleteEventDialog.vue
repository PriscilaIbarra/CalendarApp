<template>
    <v-dialog 
    v-model="dialog"
    width="400"
    >
          <v-card 
          >
                <v-card-title 
                class="text-h6 red lighten-1"
                >
                    <v-spacer/>
                    <v-icon @click="close">
                        mdi-close-circle
                    </v-icon>
                </v-card-title>
                <v-card-text class="text-center mt-3">
                    Do you really want to <strong>delete</strong> this event? This proccess <strong>cannot be undone.</strong>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer/>
                        <v-btn
                        color="success"
                        class="rounded-pill"
                        @click="confirm"
                        >
                        Confirm
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>
<script>
import {mapState} from 'vuex';

export default {
    computed:{
        ...mapState({
            dialog: state => state.calendar.showDeleteDialog
        })
    },
    methods:{
        close(){
            this.$store.dispatch('calendar/closeDeleteDialog');
        },
        confirm(){
            this.$store.dispatch('calendar/deleteEvent');
        }
    }
}
</script>
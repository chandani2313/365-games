<template>
    <div>
        <v-dialog persistent max-width="600px" v-model="isDialogOpen">
            <div class="outer-wrapper">
                <div class="teams_inner_subwrap1">
                    <div class="teams_title_wrap">edit teams</div>
                    <button class="x" @click="close">X</button>
                </div>
                <v-tabs color="#310a69">

                    <v-tab href="#edit">
                        Team Details
                    </v-tab>
                    <v-tab-item value="edit">
                        <EditTeam :team="team" @closePopup="close" />
                    </v-tab-item>

                    <v-tab href="#roaster">
                        Roaster
                    </v-tab>
                    <v-tab-item value="roaster">
                        <RosterSetting :team="team" />
                    </v-tab-item>

                </v-tabs>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import EditTeam from './EditTeam.vue'
import RosterSetting from './RosterSetting.vue'

export default {
    components: {
        EditTeam,
        RosterSetting
    },
     props: {
    team: {},
  },
    data: () => ({
        isDialogOpen: true,
    }),
    methods: {
        close() {
            this.$emit("closePopup");
        },
    },
}
</script>

<style scoped>
    .outer-wrapper {
        background: #1e0741;
        color: #fff;
    }
    .teams_inner_subwrap1 {
        background: #310a69;
        display: flex !important;
        position: relative;
    }
    .teams_title_wrap {
        padding: 10px;
        font: 22px/33px Poppins;
        color: #ffffff;
        text-transform: capitalize;
        margin: 15px 10px 10px 0px;
    }
    .x {
        position: absolute;
        float: right;
        background: #f1f1f1;
        color: black;
        right: 0px;
        top: 10px;
        min-height: 25px;
        min-width: 25px;
        border-radius: 15px;
    }

</style>

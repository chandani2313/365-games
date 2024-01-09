<template>
  <div>
    <div class="heading">Query</div>

    <div>
      <textarea required v-model="query" class="text_box_view"></textarea>
    </div>

    <div class="div_submit_button">
      <button
        @click.prevent="createSupportQuery"
        type="button"
        class="submit_button"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SupportPageCreateTicket",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    createSupportQuery() {
      axios
        .post("/support/create", {
          data: {
            query: this.query,
          },
        })
        .then((res) => {
          this.query = "";
          this.$router.push({name: 'SupportPageChat', query: { ticketId: res.data._id } })
        });
    },
  },
};
</script>

<style scoped>
.heading {
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  font: normal normal normal 18px/22px Poppins;
  letter-spacing: 0;
  color: #f9f9f9;
  display: flex;
  margin-top: 25px;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.text_box_view {
  border-radius: 9px 9px 0px 0px;
  width: 100%;
  border: none;
  resize: none;
  height: 154px;
  margin-top: 25px;
  background: #310c6a;
  color: white;
  text-align: initial;
  font: normal normal normal 14px/21px Poppins;
}

.div_submit_button {
  width: 100%;
  height: 154px;
  text-align: end;
  margin-top: 20px;
}
.submit_button {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  width: 179px;
  height: 47px;
  color: #330e6b;
  text-align: center;
  font: normal normal normal 18px/27px Poppins;
  cursor: pointer;
}
</style>
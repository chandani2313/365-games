<template>
<div class="support_page">
    <!-- <div class="navigations">
    <div class="title_support_header">Support</div>
    <div class="navigate_buttons">
        <v-tabs  color="#FFFFFF">
            <v-tab>Faq</v-tab>
            <v-tab>create ticket</v-tab>
        </v-tabs>
    </div>
    </div> -->
    <div class="ticket_wrap">
        <div class="main_wrap">
            <div class="close_popup">
                <div class="heading">
                    Submit your problems
                </div>
                <!-- <div class="close" @click="close()">x</div> -->
            </div>
            <div class="input_container">
                <div class="textarea">
                    <textarea v-model="query" placeholder="Describe your problem"></textarea>
                </div>
                <div class="submit_button">
                    <button :disabled="!query" type="submit" @click="createSupportQuery">submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Ticket",
  data() {
    return {
        query: ""
    };
  },
  methods: {
    close() {
      this.$emit("closePopup");
    },
    createSupportQuery() {
      axios
        .post("/support/create", {
          data: {
            query: this.query,
          },
        })
        .then(() => {
          this.query = "";
          window.location.reload(true);
          this.close();
        });
    },
  },
};
</script>
<style scoped>
.heading{
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
    /* margin-bottom: 35px; */

color: #FFFFFF;

}
.ticket_wrap{
    display: flex;
    justify-content: center;
}

textarea{
    height: 131px;
    background: #1b1b1b;
    border-radius: 10px;
    width: 600px;
    height: 300px;
    padding: 2rem;
    color: #FFFFFF;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
resize: none;
margin-bottom: 50px;
}
.support_page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 2.2rem 2rem 2.5rem;
  font-family: "Poppins";
  color: white;
    /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(19, 19, 19, 0.7); */
  backdrop-filter: blur(7px);
  /* z-index: 6; */
}
.navigations{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #3E3E3E;
    margin-bottom: 34px;
        flex-wrap: wrap;
}

.title_support_header {
/* margin: 35px 0px 0px 30px; */
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 27px;
letter-spacing: 0px;
text-align: left;

padding-bottom: 20px;
}
.navigate_buttons{
display: flex;
column-gap: 30px;
    /* font-family: Poppins; */
    /* font-style: normal; */
    font-weight: 600;
    font-size: 14px;
    /* line-height: 21px; */
    /* display: flex; */
    /* align-items: center; */
    /* color: #FFFFFF; */
}
.activa{
    border-bottom: 1px solid white;
    color: #FFFFFF;
}
.close_popup{
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0px 0px;
    /* background-color: rgb(39 36 50); */
    padding: 12px 25px 12px 25px;
    align-content: center;
}
.close{
        cursor: pointer;
}
.submit_button{
    text-align: center;
}
.submit_button button{
    background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
border-radius: 8px;
width: 600px;
height: 60.82px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 124.5%;
/* or 24px */

text-align: center;

color: rgba(255, 255, 255, 0.9);

}
.input_container{
        padding: 1rem;
    /* background: #1B1B1B; */
    border-radius: 0px 0px 10px 10px;
}
textarea::-webkit-input-placeholder {


color: #CDCADB;

opacity: 0.3;
}

textarea:-moz-placeholder { /* Firefox 18- */

color: #CDCADB;

opacity: 0.3;
}

textarea::-moz-placeholder {  /* Firefox 19+ */

color: #CDCADB;

opacity: 0.3; 
}

textarea:-ms-input-placeholder {

color: #CDCADB;

opacity: 0.3;
}

textarea::placeholder {
 
color: #CDCADB;

opacity: 0.3;
}

.v-tab{
    text-transform: capitalize;
}

::v-deep.theme--light.v-tabs > .v-tabs-bar {
  background-color: #0e0e0e;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: #cdcadb;
  font-weight: 400;
}
::v-deep .v-tabs-slider {
  background-color: #ffffff;
}
</style>
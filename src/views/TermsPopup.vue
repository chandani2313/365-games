<template>
<div>
          <!-- overlay -->
      <div class="main__container">
        <!-- modal -->
        <div class="modal">
            <div class="pop">
            <div class="top_button">
                <div class="term_wrap">
                Terms & Conditions
                </div>
            <button class="close" @click="close()"><img src="../assets/Signuppage/close.svg"></button>
            </div>
            <div class="contents_wrap">
                <div class="main_contents">
                <div class="scroll">
                
                <div class="para">Welcome to 365 Games!</div>

                <div class="para">These terms and conditions outline the rules and regulations for the use of 365 Games's Website, located at 365games.net.</div>

                <div class="para">By accessing this website we assume you accept these terms and conditions. Do not continue to use 365 Games if you do not agree to take all of the terms and conditions stated on this page.</div>

                <div class="para">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</div>
                </div>
                    
                </div>
            </div>

            </div>

        </div>
      </div>
</div>
</template>
<script>
export default {
  name: "Terms",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("closeSignupPopup");
    },
  },
};
</script>
<style scoped>
.main__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #00000073; */
  background: rgba(19, 19, 19, 0.7);
  /* backdrop-filter: blur(7px);
  z-index: 6; */
}
/* .overlay{
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.7;
    backdrop-filter: blur(4px);
} */

.modal{
      color: white;
}
.modal{
  display: flex;
    text-align: center;
    justify-content: center;
    padding: 8%;
}
.top_button{
    
    background: #7255E9;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: space-between;
    width: 870px;
    height: 57px;
    align-items: center;
    padding: 0px 40px;
}
.term_wrap{

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;

color: #FFFFFF;
}
.contents_wrap{

}
.main_contents{
    width: 870px;
    height: 518px;
    left: 285px;
    top: 149px;
    background: #1B1B1B;
    border-radius: 0px 0px 10px 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    padding: 3.5rem 2.5rem;
    color: #FFFFFF;
    text-align: left;
}
.para{
    margin: 0px 35px 30px 0px;
}
.scroll{
  overflow-y: scroll;
  height: 414px;
      margin-right: -25px;
}
@media only screen and (min-width: 780px)
{
.modal{
    width: 50%;
    /* height: 100%; */
    margin: auto;
}
}
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
background: #2C2C2C;
box-shadow: none;
}

/* Handle */
::-webkit-scrollbar-thumb {

  background: #7255E9;
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7255E9;
}
</style>
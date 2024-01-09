<template>
    <div>
      <v-dialog content-class="elevation-0" persistent v-model="isDialogOpen">
          <div class="popup-container">
        <div
          class="panel"
          ref="panel"
          @mousemove="transformPanel"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div ref="subpanel" class="panel-container">
            <div class="panel-content">
              <div class="top">
                <div class="gem-price">
                  <img class="image-gem-top" src="/img/assets/Gem/gem_icon.png" />
                </div>
                <div class="price-font" style="color: #fff">
                  {{reward.gem}}    
                </div>
              </div>
              <div class="bottom">
              <div>Are you sure want to collect the reward?</div> 
              <br />
              <!-- <span class="fas fa-gem"> 100</span> -->
              <button class="blob-btn" @click="close()">
                  Cancel
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <button class="blob-btn" @click="collectReward()">
                  Collect
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
      </v-dialog>
      <v-snackbar v-model="snackbar" top elevation="24" :color="color" :timeout="timeout">
        {{ text }}
      </v-snackbar>
    </div>
</template>

<script>
import axios from "axios";

export default {
  components: { },
  props: {
    reward: {},
  },
  data: () => ({
    isDialogOpen: true,
    color: "",
    snackbar: false,
    text: "",
    timeout: "-1",
    mouseX: "",
    mouseY: "",
    transformAmount: 5,
  }),
  mounted() {
    //   console.log("collect reward", this.reward);
  },
  methods: {
    collectReward() {
      axios.post('/reward/collect', {
          criteria: {
            _id: this.reward._id
          },
        })
        .then((response) => {
            console.log("response collect", response.data);
            this.color = "green";
            this.snackbar = true;
            this.text = "Reward Collected Successfully";
            this.timeout = 3000;
            window.location.reload();
        })
        .catch((e) => {
            console.log("error", e)
          if (e.response.status === 400) {
            this.color = "red darken-4";
            this.snackbar = true;
            this.text = e.response.data.message;
            this.timeout = 3000;
          }
        });
    },
    close() {
     this.$emit("closePopup");
    },
    transformPanel(mouseEvent) {
      // console.log("mouseEvent", mouseEvent);
      this.mouseX = mouseEvent.pageX;
      this.mouseY = mouseEvent.pageY;
      let centerX =
        this.$refs.panel.offsetLeft + this.$refs.panel.clientWidth / 1;
      let centerY =
        this.$refs.panel.offsetTop + this.$refs.panel.clientHeight / 1.5;
      let percentX = -(
        (this.mouseX - centerX) /
        (this.$refs.panel.clientWidth / 1)
      );
      let percentY = -(
        (this.mouseY - centerY) /
        (this.$refs.panel.clientHeight / 1)
      );
      this.$refs.subpanel.style.transform =
        "perspective(400px) rotateY(" +
        percentX * this.transformAmount +
        "deg) rotateX(" +
        percentY * this.transformAmount +
        "deg)";
    },
    handleMouseEnter() {
      // console.log("handleMouseEnter");
      setTimeout(() => {
        this.$refs.subpanel.style.transition = "";
      }, 100);
      this.$refs.subpanel.style.transition = "transform 0.1s";
    },
    handleMouseLeave() {
      // console.log("handleMouseLeave");
      this.$refs.subpanel.style.transition = "transform 0.1s";
      setTimeout(() => {
        this.$refs.subpanel.style.transition = "";
      }, 100);
      this.$refs.subpanel.style.transform =
        "perspective(100px) rotateY(0deg) rotateX(0deg)";
    },
  },
};
</script>

<style scoped>
.top {
  width: 330px;
  height: 210px;
  background-color: #320c6a;
  background-size: cover;
  padding-top: 45px;
  padding-bottom: 45px;
  border-radius: 18px;
  position: relative;
  display: inline-block;
  z-index: 5;
  margin-bottom: -18px;
}
.image-gem-top {
  width: 60px;
}
.price-font {
  font-size: 30px;
}
.bottom {
  width: 330px;
  height: 210px;
  background-color: #fff;
  background-size: cover;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    50% 0%,
    80% 0,
    100% 0,
    99% 70%,
    78% 88%,
    50% 100%,
    22% 88%,
    1% 73%,
    0 0,
    20% 0
  );
}
.panel,
.panel-container {
  width: 330px;
  height: 420px;
  overflow: hidden;
  border-radius: 18px;
}

.panel-container {
  overflow: hidden;
  position: absolute;
  background-size: cover;
  transform: perspective(400px) rotateX(0deg) rotateY(0deg);
  transform-style: preserve-3d;
  /* box-shadow: 1.5rem 2.5rem 5rem 0.7rem rgba(0,0,0,0.13); */
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel-content {
  color: #320c6a;
  text-align: center;
  padding: 5px;
  /* transform: translateZ(80px) scale(0.8);
  transform-style: preserve-3d; */
  /* overflow-wrap: break-word; */
}
.popup-container{
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: drop-shadow(0 5px 0 rgba(252, 252, 252, 0.4))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.3))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.2))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.1)); 
}
.popup-container-ticket {
    background-color: #320c6a;
    color:#ffffff;
    text-align: center;
    padding: 20px;
    overflow: hidden;
}
.popup-container-ticket {
    height:160px;
    display:grid;
}
.gem-price {
    display:flex;
    justify-content: center;
    padding-top: 15px;
}
/* .image-gem {
    width: 20px;
} */
.btn, .btn-complete {
  background-color: #320c6a;
  padding: 0.395rem 0.75rem;
  border-radius: 6px;
  color: white;
  border-color: #ffffff;
  text-align: center;
  cursor: pointer;
  margin-right: 7px;
  border: 2px solid #fff;
}
/* .btn {
  width: 5em;
} */
/* .btn:hover,  */
.btn-complete:hover {
  background-color: #ffffff;
  color: #320c6a;
}
.btn:hover::after, .btn-complete:hover::after {
  color: #ffffff;
}
.blob-btn {
  width: 6em;
  height: 2.7em;
  margin-right: 8px;
}
.blob-btn {
  z-index: 1;
  position: relative;
  /* padding: 20px 46px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase; */
  color: #320c6a;
  /* font-size: 16px; */
  /* font-weight: bold; */
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #320c6a;
  padding: 0.395rem 0.75rem;
}
.blob-btn:before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* border: 1px solid #320c6a; */
}
.blob-btn:after {
  content: "";
  z-index: -2;
  position: absolute;
  left: 3px;
  top: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.3s 0.2s;
}
.blob-btn:hover {
  color: #fff;
  border-radius: 6px;
  border: 2px solid #ce0daef3;
}
.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
  /* border-radius: 30px; */
}
.blob-btn__inner {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* border-radius: 30px; */
  background: #fff;
}
.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  filter: url("#goo");
}
.blob-btn__blob {
  position: absolute;
  top: 2px;
  width: 25%;
  height: 100%;
  background: #ce0daef3;
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;
}
.blob-btn__blob:nth-child(1) {
  left: 0%;
  transition-delay: 0s;
}
.blob-btn__blob:nth-child(2) {
  left: 30%;
  transition-delay: 0.08s;
}
.blob-btn__blob:nth-child(3) {
  left: 60%;
  transition-delay: 0.16s;
}
.blob-btn__blob:nth-child(4) {
  left: 90%;
  transition-delay: 0.24s;
}
.blob-btn:hover .blob-btn__blob {
  transform: translateZ(0) scale(1.7);
}

@media only screen and (max-width: 360px), (max-width: 375px) {
  .panel,
  .panel-container {
    width: 300px;
    height: 380px;
  }
  .top {
    width: 280px;
    height: 190px;
  }
  .bottom {
    width: 280px;
    height: 190px;
  }
  .btn {
    width: 6em;
    height: 2.5em;
    font-size: 15px;
  }
}
</style>

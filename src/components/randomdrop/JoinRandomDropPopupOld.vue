<template>
  <div>
    <v-dialog content-class="elevation-0" persistent v-model="isDialogOpen">
      <div class="container">
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
                  <img
                    class="image-gem-top"
                    src="/img/assets/Gem/gem_icon.png"
                  />
                </div>
                <div class="price-font" style="color: #fff">
                  {{ random.price }}
                </div>
              </div>
              <div class="bottom">
                <div class="bottom-text">
                  Are you sure want to join this event using?
                </div>
                <br />
                <div class="btn-wrap">
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
                  <button class="blob-btn" @click="joinRandom()">
                    Join Now
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
      </div>
    </v-dialog>
    <v-dialog persistent max-width="400px" v-model="isDialogComplete">
      <div class="popup-container-ticket">
        <div>Ticket Id: {{ trandomTicket._id }}</div>
        <button class="btn-complete" @click="closeTicket()">Completed</button>
      </div>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      top
      elevation="24"
      :color="color"
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
// import { Fragment } from "vue-fragment";

export default {
  components: {
    // Fragment,
  },
  props: {
    random: {},
  },
  data: () => ({
    isDialogOpen: true,
    isDialogComplete: false,
    color: "",
    snackbar: false,
    text: "",
    timeout: "-1",
    trandomTicket: {},
    mouseX: "",
    mouseY: "",
    transformAmount: 5,
  }),
  mounted() {
    console.log("joinevent", this.random._id);
    //   this.joinRandom();
  },
  methods: {
    joinRandom() {
      axios
        .post("/random-drop/join", {
          criteria: {
            _id: this.random._id,
          },
        })
        .then((response) => {
          this.trandomTicket = response.data;
          this.isDialogComplete = true;
          // console.log("join details", response.data);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            this.color = "red darken-4";
            this.snackbar = true;
            this.text = e.response.data.message;
            this.timeout = 3000;
            // console.log("err", e.response.data);
          }
        });
    },
    close() {
      this.$emit("closePopup");
    },
    closeTicket() {
      this.isDialogComplete = false;
      this.close();
      window.location.reload();
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 275px;
  background-color: #7255e9;
  background-size: cover;
  /* padding-top: 45px;
  padding-bottom: 45px; */
  border-radius: 18px;
  position: relative;
  /* display: inline-block; */
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 275px;
  background-color: #fff;
  background-size: cover;
  /* padding-top: 30px; */
  padding-bottom: 30px;
  border-radius: 8px;
  position: relative;
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
  /* box-shadow: 0px 6px 0px 0px rgba(252, 252, 252, 0.4), 0px 10px 0px 0px rgba(252, 252, 252, 0.3), 0px 16px 0px 0px rgba(252, 252, 252, 0.2), 0px 22px 0px 0px rgba(252, 252, 252, 0.1); */
}
.bottom-text {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
}
/* .popup-container, */
.popup-container-ticket {
  background-color: #320c6a;
  color: #fff;
  text-align: center;
  padding: 20px;
}
.popup-container-ticket {
  height: 160px;
  display: grid;
}
.container {
  /* width: 100%;
	height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0 5px 0 rgba(252, 252, 252, 0.4))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.3))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.2))
    drop-shadow(0 5px 0 rgba(252, 252, 252, 0.1));
}
.panel,
.panel-container {
  width: 450px;
  height: 550px;
  overflow: hidden;
  border-radius: 18px;
}

.panel-container {
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
}
.gem-price {
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.image-gem {
  width: 20px;
}
.btn,
.btn-complete {
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
  width: 6em;
  height: 2.7em;
} */
/* .btn:hover, */
.btn-complete:hover {
  background-color: #fff;
  color: #320c6a;
  border: 2px solid #320c6a;
}
.btn:hover::after,
.btn-complete:hover::after {
  color: #ffffff;
}
.btn-wrap {
  display: flex;
  gap: 15px;
}
.blob-btn {
  width: 8em;
  height: 3.2em;
}
.blob-btn {
  z-index: 1;
  position: relative;
  color: #1b1b1b;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
  outline: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #8369ec;
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
  border: 2px solid #7255e9;
}
.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
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
  background: #7255e9;
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
  .blob-btn {
    height: 40px;
    width: 110px;
  }
}
</style>
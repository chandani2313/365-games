<template>
  <div class="player_list">
    <div class="main__container">
      <div class="table__wrapper animated zoomIn">
        <div class="top_container">
          <div class="navbar_text">TRANSFER OWNERSHIP</div>
          <div class="close" @click="close()">x</div>
        </div>
        <div class="bottom_container">
          <div class="card_container">
            <div class="input-wrapper">
                <span class="label-password">Enter your password</span>
                <input type="password" class="my-input input_image" v-model="password" placeholder="Password ..." />
            </div>
            <div class="input-wrapper">
              <button class="btn" @click="transferOwnership()">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangeCaptain',
  data() {
    return {
        password: '',
    };
  },
  components: {
  },
  props: ['playerId','team'],
  methods: {
    close() {
        this.$emit('openPopup');
    },
    transferOwnership() {
        axios
        .post('/team/transfer-ownership', {
            criteria: {
                _id: this.team._id,
            },
            data: {
                playerId: this.playerId,
                password:this.password
            }
        })
        .then(() => {
            this.close();
            window.location.reload();

        })
        .catch((e) => {
            console.log(e.response.data);
        });
    }
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
  backdrop-filter: blur(7px);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__container .table__wrapper {
  width: 400px;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: -6px 7px 20px 3px rgba(0, 0, 0, 0.16);
  /* margin: 90px auto; */
}
.table__wrapper .top_container {
  width: 100%;
  height: 65px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  /* background-image: url('../../assets/img/table__img.png'); */
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
}
.top_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  background: rgb(150, 114, 255, 0.1);
  border-radius: 10px 10px 0px 0px;
  padding: 3px 35px 0 35px;
}
.navbar_text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.close {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #9672ff;
  cursor: pointer;
}
.bottom_container {
  padding: 40px;
}
.card_container {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  background: linear-gradient(90.37deg, #9672FF 12.05%, #6B4FE8 102.75%);
  border-radius: 8px;
  width: 330px;
  height: 60px;
  outline: none;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  color: var(--v-info-base);
  font: normal normal 700 16px/20px Poppins;
  margin-top: 12px;
}
.label-password {
    color: #fff;
    font: normal normal normal 12px/20px Poppins;
    margin-bottom: 5px;
}
.my-input {
  background: rgba(88, 88, 88, 0.2);
  border-radius: 8px;
  color: #B0B0B0;
  padding: 10px 10px 10px 20px;
  width: 330px;
  height: 60px;
  margin-bottom: 10px;
  font: normal normal 400 16px/20px Poppins;
}

::v-deep .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: rgba(150, 114, 255, 0.3);
  border-radius: 10px;
}
::v-deep .v-text-field.v-text-field--solo .v-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}
::v-deep .theme--light.v-input input,
.theme--light.v-input textarea {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
}

</style>

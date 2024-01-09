<template>
  <div class="crop_image">
    <div class="modal__wrapper">
      <div class="table__wrapper animated zoomIn">
        <div class="table__header">
          <div class="backdrop">
            <div class="heading">Change Profile Picture</div>
            <div class="close" @click="closeCropImage">
              <img src="../assets/NewProfile/close-icon.svg" />
            </div>
          </div>
        </div>
        <div class="table__body">
          <div v-show="imgSrc" class="image__wrap">
            <VueCropper
              ref="cropper"
              :src="imgSrc"
              :options="{
                guides: true,
                viewMode: 2,
                dragMode: 'crop',
                autoCropArea: 0.5,
                background: true,
                zoomOnWheel: true,
                aspectRatio,
                cropBoxResizable: true,
              }"
            />
          </div>
          <div v-if="!imgSrc" class="dummy__image">
            <span>Select Image</span>
          </div>
          <input
            ref="file"
            hidden
            type="file"
            name="image"
            accept="image/*"
            style="font-size: 1.2em; padding: 10px 0"
            @change="setImage"
          />
          <div class="button__wrap">
            <div class="button__wrapper">
              <button v-if="!imgSrc" class="btn" @click="$refs.file.click()">
                Select Picture
              </button>
            </div>
            <div class="button__wrapper">
              <button v-if="imgSrc != ''" class="btn" @click="closeCropImage">
                Back
              </button>
              <button v-if="imgSrc != ''" class="btn" @click="cropImage">
                Confirm
              </button>
              <!-- <button v-if="imgSrc" class="btn" @click="$refs.file.click()">
                Change Picture
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCropper from "./VueCropper.vue";
import { AwsService } from "../service/aws-service";

export default {
  name: "CropImage",
  components: {
    VueCropper,
  },
  props: {
    aspectRatio: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      imgSrc: "",
      cropImg: "",
    };
  },
  mounted() {
    console.log(this.$refs.cropper);
  },
  methods: {
    async upload(formData) {
      let path = Date.now();
      await AwsService.uploadImage(formData, `croppedimage ${path}`)
        .then((response) => {
          let url = response.data.location;
          this.cropImg = url.substr(url.indexOf("/", 10) + 1);
          this.$emit("onImageUrl", this.cropImg);
          console.log(this.cropImg);
        })
        .catch((err) => console.log(err));
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    closeCropImage() {
      this.$emit("closeCropImage");
    },
    cropImage() {
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData();
        formData.append("profile_photo", blob, "name.jpeg");
        this.upload(formData);
      });
    },
  },
};
</script> 

<style scoped>
.close {
  /* margin-right: 22px; */
  /* font-size: 20px; */
  /* color: white; */
  /* font-weight: 400; */
  cursor: pointer;
}
.phone__wrap input:valid {
  border: 2px solid #1b8fe4 !important;
}
label {
  font-size: 12px;
  color: #848484;
  padding: 10px;
  font-weight: 700;
}
select {
  padding: 14px;
  width: -moz-available;
  width: -webkit-stretch;
  width: stretch;
  background: #111e2a;
  outline: none;
  border: none;
  color: white;
  border-radius: 10px;
  -webkit-appearance: none;
}
.formphonenumber_code {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 40%;
  margin-right: 20px;
}
.formphonenumber_code::before,
.formphonenumber_code::after {
  content: "";
  position: absolute;
  pointer-events: none;
}
.formphonenumber_code::before {
  width: 25px;
  height: 43px;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}
.formphonenumber_code::before {
  background-color: rgba(0, 0, 0, 0.15);
}
.formphonenumber_code::after {
  color: #6c829d;
  content: "\25BC";
  height: 1em;
  font-size: 0.625em;
  line-height: 1;
  right: 7.5px;
  top: 16px;
}
.select_dropdown {
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.select_dropdown::before,
.select_dropdown::after {
  content: "";
  position: absolute;
  pointer-events: none;
}
.select_dropdown::before {
  width: 25px;
  height: 43px;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}
.select_dropdown::before {
  background-color: rgba(0, 0, 0, 0.15);
}
.select_dropdown::after {
  color: #6c829d;
  content: "\25BC";
  height: 1em;
  font-size: 0.625em;
  line-height: 1;
  right: 7.5px;
  top: 16px;
}
.phone__wrap {
  width: -moz-available;
  width: -webkit-stretch;
  width: stretch;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}
.phone__wrap select {
  width: 100%;
}
.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000073;
  z-index: 3;
}
.modal__wrapper .table__wrapper {
  width: 800px;
  height: 600px;
  /* background: #1b2731; */
  /* background: #43336Ee0; */
  background: #1b1b1b;
  border-radius: 10px;
  /* box-shadow: -6px 7px 20px 3px rgba(0,0,0,.16); */
  margin: 185px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table__wrapper .table__header {
  width: 700px;
  /* height: 65px; */
  /* border-top-right-radius: 10px; */
  display: flex;
  align-items: center;
  /* border-top-left-radius: 10px; */
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
  margin-bottom: 100px;
}
.table__header .heading {
  width: fit-content;
  color: white;
  font-weight: 700;
  /* margin-left: 18px; */
  font-size: 18px;
  display: flex;
  align-items: center;
  /* height: 100%; */
  text-transform: capitalize;
}
.table__wrapper .table__body {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 700px;
  gap: 20px;
}
.table__header .backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  /* background: #111c25e0; */
  /* background: #201B41e0; */
  /* border-top-right-radius: 10px; */
  /* border-top-left-radius: 10px; */
  height: 50px;
  justify-content: space-between;
  margin-top: 44px;
}
.table__body .input-wrapper {
  width: 100%;
  position: relative;
  margin-top: 10px;
}
.image__wrap {
  height: 350px;
  margin-bottom: 10px;
}
.dummy__image {
  height: 350px;
  margin-bottom: 10px;
  border: 3px dashed #362d5b;
  border-radius: 10px;
  background: url("../assets/NewProfile/bg-pic.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 75px;
  text-align: center;
}
.dummy__image span {
  font-size: 24px;
  line-height: 124.5%;
  color: rgb(150, 114, 255, 0.3);
  position: relative;
  top: 215px;
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  margin-block-end: 12px;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -moz-available;
  width: -webkit-stretch;
  width: stretch;
  font-weight: 700;
}
#border_reset {
  border: 2px solid #364444;
}
.table__body .floating-label {
  position: absolute;
  font-size: 10px;
  top: 16px;
  font-weight: 700;
  left: 15px;
  color: #848484;
  pointer-events: none;
  transition: 0.2s ease all;
}
.table__body form input:valid {
  border: 2px solid #1b8fe4;
}
.err {
  border: 2px solid red !important;
}
.err_text {
  color: red !important;
}
.error {
  box-shadow: -1px 1px 20px 0px #a32727 !important;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
.table__body form input:valid ~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
  top: -11px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.table__body form input:focus {
  border: 2px solid #4a4399 !important;
}
.table__body form input:focus ~ .floating-label {
  color: #4a4399;
}
.button__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.btn {
  background: linear-gradient(90.37deg, #9672ff4d 12.05%, #6b4fe84d 102.75%);
  width: 260px;
  height: 50px;
  outline: none;
  border-radius: 8px;
  border-style: none;
  /* margin: 15px auto; */
  cursor: pointer;
  /* box-shadow: 5px 10px 20px #141f28; */
  box-shadow: 5px 10px 20px #141f28;
  color: white;
  font-weight: 600;
}
.btn:hover {
  /* box-shadow: 0px 0px 10px 0px #2e88ef; */
  box-shadow: 0px 0px 10px 0px #1a1835;
  transform: translateY(-2px);
  transition-duration: 0.5s;
  background: linear-gradient(90.37deg, #9672ff 12.05%, #6b4fe8 102.75%);
}
.error-tooltip {
  display: block;
  position: absolute;
  color: white;
  padding: 8px;
  top: 4px;
  left: 474px;
  background: #dd4b39;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  z-index: 1;
  box-shadow: 3px 9px 20px #000000;
}
.error-tooltip:after {
  content: "";
  position: absolute;
  top: 10px;
  transform: rotate(90deg);
  left: -14px;
  border-style: solid;
  border-width: 15px 9px 0;
  border-color: #dd4b39 transparent;
  display: block;
  width: 0;
}
.err-mobile {
  display: none;
}
@media (min-width: 320px) and (max-width: 480px) {
  .modal__wrapper .table__wrapper {
    width: 90%;
    margin: 115px auto;
  }
  .err-mobile {
    display: block;
    color: red;
    margin-block-end: 5px;
  }
  .error-tooltip {
    display: none;
  }
}
</style>

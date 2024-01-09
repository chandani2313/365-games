<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-dialog persistent max-width="800px" v-model="isDialogOpen" dark>
      <v-card style="background:#1e0453">
        <v-card-title>Edit User Profile </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col class="column" cols="12" sm="6">
                <v-text-field
                  light
                  outlined
                  solo
                  label="Username*"
                  required
                  v-model="username"
                  :disabled="true"
                  :rules="[(v) => !!v || 'username is required']"
                ></v-text-field>
              </v-col>
              <v-col class="column" cols="12" sm="6">
                <v-text-field
                  light
                  outlined
                  solo
                  label="Email*"
                  required
                  v-model="email"
                  :disabled="true"
                  :rules="[(v) => !!v || 'Email is required']"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col class="column" cols="12" sm="6">
                <v-text-field
                  light
                  outlined
                  solo
                  label="First name*"
                  required
                  v-model="firstName"
                  :rules="[(v) => !!v || 'First Name is required']"
                ></v-text-field>
              </v-col>
              <v-col class="column" cols="12" sm="6">
                <v-text-field
                  light
                  outlined
                  solo
                  label="Last name*"
                  required
                  v-model="lastName"
                  :rules="[(v) => !!v || 'Last Name is required']"
                ></v-text-field>
              </v-col>
            </v-row> -->

            <v-row>
              <v-col class="column" cols="12" sm="6">
                <div class="input-wraper">
                  <country-select
                    v-model="country"
                    :country="country"
                    topCountry="IN"
                  />
                </div>
              </v-col>
              <v-col class="column" cols="12" sm="6">
                <VuePhoneNumberInput
                  :default-country-code="country"
                  @update="updatePhoneNumber"
                  :required="true"
                  style="font-size:20px;"
                  v-model="phone"
                />
                <!-- <div class="error" v-if="phone_error">{{phone_error}}</div> -->
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col class="column" cols="12" sm="6">
                <v-text-field
                  light
                  outlined
                  solo
                  label="Password"
                  required
                  v-model="password"
                  :rules="[(v) => !!v || 'password is required']"
                ></v-text-field>
              </v-col>
            </v-row> -->
        </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="user" outlined color="white" @click="close">Close</v-btn>
          <v-btn v-if="!user" outlined color="white" @click="closeCreatePopup"
            >Cancel</v-btn
          >
          <v-btn
            v-if="user"
            outlined
            color="white"
            :disabled="!username || !email"
            @click="updateUser"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { AwsService } from "@/service/aws-service";

export default {
  props: {
    user: {},
  },
  data: () => ({
    valid: true,
    isDialogOpen: true,
    phone_error: null,
    username: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: "*****",
    newPassword: "",
    country: undefined,
    countryCode: undefined,
    phone: undefined,
    city: undefined,
    profileImage: undefined,
    coverImage: undefined,
    dob: "",
    menu1: false,
    date: "",
    isVerified: false,
    isBanned: false,
    isActive: Boolean,
    passwordFieldType: "password",
  }),
  created() {
      console.log("edit user data", this.user);
    if (this.user) {
    //   if(this.user.dob) (this.dob = moment(new Date(this.user.dob)).format("YYYY-MM-DD")),
      (this.username = this.user.username),
        (this.email = this.user.email),
        (this.phone = this.user.phone),
        // (this.firstName = this.user.firstName),
        // (this.lastName = this.user.lastName),
        (this.country = this.user.country);
      (this.countryCode = this.user.countryCode);
    //     (this.city = this.user.city),
    //     (this.isVerified = this.user.isVerified),
    //     (this.isBanned = this.user.isBanned),
    //     (this.password = this.user.password);
      // (this.profileImage = this.user.profileImage);
      //   (this.coverImage = this.user.coverImage);
    } else {
      this.clear();
    }
  },
  computed: {
    fromattedDate() {
      return this.dob ? moment(this.dob).format("dddd, MMMM Do YYYY") : "";
    },
  },
  methods: {
    passwordSwitchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    updatePhoneNumber(data) {
      if (!data.isValid) {
        this.phone_error = "Invalid Phone Number.";
      } else {
        this.phone_error = null;
        this.countryCode = data.countryCallingCode;
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    updateUser() {
      this.validate();
    //   this.dob = new Date(this.dob);
    //   console.log("dob update", this.dob);
        // if(this.password === "*****") {
        //   this.newPassword = "";
        // } else {
        //   this.newPassword = this.password;
        // }
        
        const data = {
            // username: this.username,
            // email: this.email,
            phone: this.phone,
            // firstName: this.firstName,
            // lastName: this.lastName,
            country: this.country,
            countryCode: this.countryCode,
            // city: this.city,
            // dob: this.dob,
            // isVerified: this.isVerified,
            // isBanned: this.isBanned,
            // profileImage: this.profileImage,
            // coverImage: this.coverImage,
          }
      // if(this.newPassword) data['password'] = this.newPassword,
      axios
        .post("/user/update/profile", {
          criteria: { _id: this.user._id },
          data          
        })
        .then((response) => {
            console.log("update-item", response.data);
          this.$emit("update-item", response.data);
          this.close();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log("err", e.response.data);
          }
        });
    },
    slectFile(event, item) {
      this.selectedFile = item;
      this.onFileSelect(event);
    },
    onFileSelect(event) {
      event.forEach((file) => {
        this.upload(file);
      });
    },
    async upload(file) {
      let path = Date.now();
      let formData = new FormData();
      formData.append("file", file);
      await AwsService.uploadImage(formData, `user ${path}`)
        .then((response) => {
          let url = response.data.location;
          if (this.selectedFile === "cover") {
            this.coverImage = url.substr(url.indexOf("/", 10) + 1);
            console.log("link>>>>>", this.coverImage);
          }
          if (this.selectedFile === "profile") {
            this.profileImage = url.substr(url.indexOf("/", 10) + 1);
            console.log("link>>>>>", this.profileImage);
          }
        })
        .catch((err) => console.log(err));
    },
    close() {
      this.$emit("closePopup");
    },
    closeCreatePopup() {
      this.$emit("closeCreatePopup");
    },
    clear() {
      this.username = null;
      this.email = null;
    //   this.firstName = null;
    //   this.lastName = null;
    //   this.email = null;
      this.country = null;
      this.countryCode = null;
    //   this.city = null;
    //   this.dob = null;
    //   this.isBanned = false;
    //   this.isVerified = false;
      this.profileImage = null;
      this.coverImage = null;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  background: white;
  padding: 10px;
  width: 100%;
}
.input-wraper {
  background: white;
  padding: 10px;
  border-radius: 4px;
}
::v-deep {
  .v-slide-group__prev,
  .v-slide-group__next {
    display: flex !important;
    pointer-events: unset !important;
  }
  .mdi:before,
  .mdi-set {
    color: white;
  }
}
</style>

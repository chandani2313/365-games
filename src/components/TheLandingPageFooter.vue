<template>
  <v-footer padless>
    <v-row class="ma-0" align="center">
      <v-col class="pa-0 text-caption">
        <v-row class="ma-0" style="padding: 15px 35px 15px">
          <v-col class="pa-0 text-center txt"> Terms </v-col>
          <v-col class="pa-0 text-center txt"> Privacy & Policy </v-col>
          <v-col class="pa-0 text-center txt"> Corporate </v-col>
          <v-col class="pa-0 text-center txt"> Changelogs </v-col>
        </v-row>
      </v-col>
      <v-spacer />
      <v-col class="pa-0 text-center text-caption">
        &#169; {{ new Date().getFullYear() }} Proudly by,
        <strong>365 Games</strong>
      </v-col>
      <v-spacer />
      <v-col>
        <v-row class="ma-0" justify="end">
          <v-icon class="px-3">mdi-facebook</v-icon>
          <v-icon class="px-3">mdi-twitter</v-icon>
          <v-icon class="px-3">mdi-twitch</v-icon>
          <v-icon class="px-3">mdi-instagram</v-icon>
          <v-icon class="px-3">mdi-youtube</v-icon>
          <v-icon class="px-3">mdi-steam</v-icon>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
  <!-- <footer id="footer_part">
    <div class="footer_outer_wrap">
      <div class="footer_wrap">
        <div class="footer_teampolicy_wrap">
          <a href=""><div class="terms">Terms</div></a>
          <a href=""><div class="privacy">Privacy &amp; Policy</div></a>
          <a href=""><div class="corporate">Corporate</div></a>
          <a href=""><div class="changelogs">Changelogs</div></a>
        </div>
        <div class="copy_right_txt">
          <v-col class="pa-0 text-center text-caption">
            &#169; {{ new Date().getFullYear() }} Proudly by,
            <strong>365 Games</strong>
          </v-col>
        </div>
      </div>
      <div class="socialmedia">
        <div class="social_media_container">
          <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitch"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-steam-symbol"></i></a>
          <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="#" target="_blank"><i class="fab fa-discord"></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer> -->
</template>

<script>
export default {
  name: "TheLandingPageFooter",
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
  }),
};
</script>
<style scoped>
/* .v-application .text-caption{
    color:#1D0552;
}
.px-3{
    color:#1D0552;
}
    .v-application .text-center{
        white-space: nowrap;
    }
 .v-application .ma-0{
     padding: 15px 0px 15px;
 } */
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
.footer_outer_wrap {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #9f9d9d;
  padding: 20px 15px 20px 100px;
}
.footer_wrap {
  column-gap: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  /* font-weight: 200; */
}
.footer_teampolicy_wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.terms,
.privacy,
.changelogs,
.corporate {
  font-size: 0.8rem;
  color: #1d0552;
  line-height: 1.2;
  padding: 0 8px;
  position: relative;
  display: block;
  background-clip: text;
}
.copy_right_txt {
  font-size: 0.8rem;
  color: #1d0552;
  line-height: 1.2;
  padding: 0 10px;
}
.social_media_container i {
  padding: 5px;
  color: #1d0552;
}
@media (min-width: 320px) and (max-width: 767px) {
  .footer_outer_wrap {
    padding: 0;
  }
  .footer_teampolicy_wrap {
    justify-content: flex-start;
  }
}
footer {
  clear: both;
}
</style>
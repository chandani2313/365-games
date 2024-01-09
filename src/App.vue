<template>
  <v-app>
    <component :is="layout">
      <router-view />
      <vue-progress-bar></vue-progress-bar>
    </component>
  </v-app>
</template>
 
<script>
export default {
  name: "app",
  components: {
    NewLandingPage: () => import("@/layouts/NewLandingPage.vue"),
    AboutUs: () => import("@/layouts/AboutUs.vue"),
    HowItWorks: () => import("@/layouts/HowItWorks.vue"),
    Contact: () => import("@/layouts/Contact.vue"),
    Blog: () => import("@/layouts/Blog.vue"),
    BlogInfo: () => import("@/layouts/Blog.vue"),
    DefaultLayout: () => import("@/layouts/DefaultLayout.vue"),
    EmptyLayout: () => import("@/layouts/EmptyLayout.vue"),
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>

<style lang="scss">
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

html,
body {
  overflow-x: hidden;
}
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  // font-family: "Poppins";
  font-family: "Poppins";
  font-size: 100%;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}

/* Make images easier to work with */
img {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
a {
  text-decoration: none;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #404648;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8e7ae2;
}
</style>

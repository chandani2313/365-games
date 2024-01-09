<template>
  <div class="forum-container">
    <div class="forum-header">Forums</div>
    <!-- <ForumList :forums="forums"/> -->
    <ForumList />
  </div>
</template>

<script>
import ForumList from "@/components/forumComponent/ForumList";

export default {
  name: "ForumHome",
  components: {
    ForumList,
  },
  data() {
    return {
      // forums: Object.values(sourceData.forums),
    };
  },
};
</script>

<style scoped>
    .forum-container {
        padding: 10px 10px;
        /* background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%); */
        /* margin: 10px; */
    }
    .forum-header {
  padding: 10px;
  text-align: left;
  font: normal normal medium 22px/33px Poppins;
  font: 22px/33px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  width: 100%;
  font: 500 22px/33px Poppins;
}

</style>

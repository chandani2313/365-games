<template>
  <div class="forum-list">
    <div class="forum-loop" v-for="(category, index) in categoryList" :key="index">
      <div class="content-wrapper">
        <div class="forum-heading"  >
          <div class="sub-head-first">
            <div> {{category.fullName}} </div>
          </div>
          <div class="sub-head-last">Posts</div>
          <div class="sub-head-last">Last Post</div>
        </div>
      
      <ForumListItem
        :forum="category"
        :key="category._id"
      />
      <!-- <ForumListItem /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ForumListItem from './ForumListItem'
import axios from "axios";

export default {
  components: {
    ForumListItem
  },
  data () {
    return {
      categoryList: []
    }
  },
  methods: {
    forumCategoryList() {
          axios
          .post('/forum/find/all', {
              criteria: {},
          })
          .then((response) => {
              this.categoryList = response.data;
            console.log('category', response.data);
          })
          .catch((e) => {
            if (e.response.status === 400) {
              console.log('err', e);
            }
          });
    }
  },
  mounted() {
    this.forumCategoryList()
  }
}
</script>

<style scoped>
 .forum-list {
    margin-top: 10px;
    padding: 25px;
    border-radius: 8px;
    background: #1E0741;
 }
 .forum-loop {
   margin-bottom: 30px;
 }
 .forum-heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  font: normal normal normal 18px/22px Poppins;
  color: #f9f9f9;

}
.content-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    font: normal normal normal 18px/22px Poppins;
    color: #f9f9f9;
}
.sub-head-first {
    width: 70%;
    display:flex;
}
.sub-head-center {
    width: 15%;
    
}
.sub-head-last {
    width: 15%;
    text-align: right;
}
</style>

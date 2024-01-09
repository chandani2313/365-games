<template>
  <div class="forum-wrapper">
    <div class="forum-inner-container">
        <div class="forum-header">Forums</div>
        <!-- <div><a href="new-thread.html" class="btn-green btn-small">Create Thread</a></div> -->
        <div class="thread-button" @click="openCreateThread">Create Thread</div>
    </div>

    <div class="content-wrapper">
      <div class="content-header">
        <div class="sub-head-first">
          <div>{{threadCategory.fullName}}</div>
        </div>
        <div class="sub-head-center">Replies</div>
        <div class="sub-head-last">Last Post</div>
      </div>
      <!-- <ThreadListItem
        v-for="thread in threads"
        :thread="thread"
        :key="thread['.key']"
      /> -->
      <ThreadListItem />
      <ForumThread
        v-if="isAddEditOpen"
        @closePopup="closeDialog"
        :thread="threadSubcategoryId"
        @update-thread="updateThread"
       />
    </div>
  </div>
</template>

<script>
import ThreadListItem from '@/components/forumComponent/ThreadListItem'
import ForumThread from '../../components/forumComponent/ForumThread.vue'
import axios from "axios";

export default {
  components: {
    ThreadListItem,
    ForumThread
  },
  props: {
    id: {
      required: true,
      type: String
    },
  },
  data () {
    return {
      threadCategory: {},
      threadSubcategory:[],
      isAddEditOpen: false,
      isCreateThread: false,
      threadSubcategoryId:''
    }
  },
  methods: {
    forumCategoryList() {
      axios
      .get("/forum/subcategory/find/".concat(this.$route.params.id))
      .then((response) => {
          this.threadCategory = response.data;
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    },
    forumSubCategoryList() {
          axios
          .post('/forum/thread/find/all', {
              criteria: {
                subcategory: this.$route.params.id,
              },
          })
          .then((response) => {
              if(!response.length) {
                this.threadSubcategoryId = this.$route.params.id
              } else {
                  response.data.map(elem => {
                    this.threadSubcategoryId = elem.subcategory
                    this.threadSubcategory.push(elem)
                  })
              }
          })
          .catch((e) => {
            if (e.response.status === 400) {
              console.log('err', e);
            }
          });
    },
    openNewCreateThread() {
      this.isCreateThread = true;
    },
    closeNewDialog() {
      this.isCreateThread = false;
    },
    openCreateThread() {
      this.isAddEditOpen = true;
    },
    closeDialog() {
      this.isAddEditOpen = false;
    },
    updateThread({post}) {
      axios
      .post('/forum/thread/create', { data: post })
      .then((response) => {
          console.log('res post list', response);
          this.closeDialog();
          this.closeNewDialog();
          })
      .catch((e) => {       
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    },
  },
  mounted() {
    this.forumCategoryList()
    this.forumSubCategoryList()
  }
}
</script>

<style scoped>
    .forum-wrapper {
        padding: 10px 10px;
        background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%);
        color: #fff;
        height: 100%;
    }
    .forum-header {
        padding: 10px;
        text-align: left;
        font:normal normal 300 22px/33px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
    }
    .forum-inner-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content-wrapper {
        margin-top: 10px;
        padding: 25px;
        border-radius: 8px;
        background: #1E0741;
    }
    .thread-button {
        border: 2px solid #fff;
        border-radius:4px;
        color:#fff;
        padding: 5px 10px;
        cursor: pointer;
        font: normal normal medium 11px/22px Poppins;
    }
    .content-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
        font: normal normal normal 18px/22px Poppins;
        color: #f9f9f9;
        padding: 10px;
    }
    .sub-head-first {
        width: 75%;
        display:flex;
    }
    .sub-head-center {
        width: 10%;
        text-align: center;
    }
    .sub-head-last {
        width: 15%;
        text-align: right;
    }
</style>

<template>
  <div>
    <div class="post-container" v-for="(userMessage,index) in user.replies" :key="index" >
      <div class="post-flex">
        <div class="user-info">
          <div class="user-info-left"><img class="avatar-large" :src="'https://ps-mg.s3.amazonaws.com/' + userMessage.user.profileImage" alt="" ></div>
          <div class="user-info-right">
            <div class="thread-date-top"> Posted at: <span>{{ getPostDate(user.createdAt) }}</span></div>
            <div class="thread-date-name">{{userMessage.user.username}}</div>
            <!-- <div class="desktop-only text-small">{{ userPostsCount }} posts</div> -->
            <!-- 'https://ps-mg.s3.amazonaws.com/' -->
          </div>
        </div>

        <div class="post-content" >
          <!-- <div class="thread-date-top"> Posted at: <span>{{ getPostDate(user.createdAt) }}</span></div> -->
          <div class="thread-content">
            {{userMessage.message}}
          </div>
          <!-- <div class="thread-sender">Thread by,</div>
          <div class="thread-sender">{{userMessage.user.username}}</div> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import sourceData from '@/data'
// import AppDate from './AppDate.vue';
import axios from "axios";
import moment from 'moment';

export default {
  name: 'PostListItem',
  components: {
    // AppDate
  },
  // props: {
  //   post: {
  //     required: true,
  //     type: Object
  //   }
  // },
  data () {
    return {
      user: {}
    }
  },
  computed: {
    // user () {
    //   // return sourceData.users[this.post.userId]
    // },
    userPostsCount () {
      return Object.keys(this.user).length
    }
  },
  methods: {
    forumThreadList() {
      axios
      .get("/forum/thread/find/".concat(this.$route.params.id))
      .then((response) => {
          this.user = response.data;
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    },
    getPostDate : function (date) {
      return moment(date, 'YYYY-MM-DD').format('MMM-YYYY');
    }
  },
  mounted() {
    this.forumThreadList()
  }
}
</script>

<style scoped>
  .post-container {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    justify-content: space-between;
    margin-bottom: 10px;
    background: #300B69 0% 0% no-repeat padding-box;
    border-radius: 4px;
    padding: 10px;
  }
  .post-flex {
    display: flex;
    flex-wrap: wrap;
  }
  .user-info {
    width: 100px;  
  }
  .avatar-large {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .user-info-right {
    margin-left: 10px;
  }
  .thread-content {
    margin-bottom: 10px;
  }
  .thread-sender {
    font-size:12px;
  }
  .thread-date-top, .thread-date-name {
    font: normal normal normal 9px/9px Poppins;
    padding: 10px 0px 5px 0px;
    color: rgb(206, 204, 204);
  }
  .thread-date-name {
    padding:0px;
  }
</style>

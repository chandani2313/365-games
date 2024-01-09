<template>
  <div class="forum-wrapper">
    <div class="forum-inner-container">
      <div class="forum-header">Forums</div>
    </div>
    <div class="content-wrapper">
      <h1>{{threadReply.subject}}</h1>
      <PostListItem />
      <div>
        <PostEditor
          @save-post="addPost"
          :threadId="id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/forumComponent/PostListItem'
import PostEditor from '@/components/forumComponent/PostEditor'
import axios from 'axios'

export default {
  name: 'ForumThreadShow',
  components: {
    PostListItem,
    PostEditor,
  },
  props: ['id'],
  data () {
    return {
      newPostText: '',
      threadReply: {}
    }
  },
  computed: {
    // posts () {
    //   const postIds = Object.values(this.thread.posts)
    //   return Object.values(sourceData.posts)
    //     .filter(post => postIds.includes(post['.key']))
    // }
  },
  methods: {
    addPost({ post }) {
      const body = {
        criteria: { _id: this.threadReply._id },
        data: post
      };
      axios
        .post('/forum/thread/reply', body)
        .then((response) => {
          console.log('res post list', response);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            console.log('err', e);
          }
      });
    },
    forumThreadId() {
      axios
      .get('/forum/thread/find/'.concat(this.$route.params.id))
      .then((response) => {
          this.threadReply = response.data;
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    } 
  },
  mounted() {
    this.forumThreadId()
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
    }
</style>

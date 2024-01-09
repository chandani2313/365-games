<template>
  <div>
    <div class="thread-container" v-for="(threadList, index) in thread" :key="index">
      <div class="thread-innercontainer">
        <div class="category-heading">
          <div class="subcategory-1"><i class="fa fa-list-alt" aria-hidden="true"></i></div>
          <div class="subcategory-2">
            <div class="subcategory-2-fullname" >
                <router-link class="text-xlarge" :to="{name: 'ThreadShow', params: { id: threadList._id }}">{{threadList.subject}}</router-link>
            </div>
            <div class="subcategory-2-shortname">{{threadList.replies[0].message}}</div>
          </div>
        </div>
        <div class="reply-count">
          <div class="count">{{threadList.replies.length}}</div>
          {{threadList.replies.length === 1 ? 'Reply' : 'Replies'}}
        </div>
        <div class="threads-count" >
          <AppDate :timestamp="threadList.createdAt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import sourceData from '@/data'
import AppDate from './AppDate.vue';
import axios from "axios";

export default {
  components: {
    AppDate
  },
  data () {
    return {
      thread: []
    }
  },
  computed: {
    repliesCount () {
      return Object.keys(this.thread.replies.length)
    },
    // user () {
    //   // return sourceData.users[this.thread.userId]
    // }
  },
  methods: {
    forumSubCategoryList() {
      axios
      .post('/forum/thread/find/all', {
          criteria: {
            subcategory: this.$route.params.id,
          },
      })
      .then((response) => {
        response.data.map(elem => {
          console.log("threadlist", elem)
          this.thread.push(elem)
        })
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    }
  },
  mounted() {
    this.forumSubCategoryList()
  }
}
</script>

<style lang="scss" scoped>
  .thread-container {
    margin: 20px 0px;
    background: #300B69 0% 0% no-repeat padding-box;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
  .thread-innercontainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    justify-content: space-between;
  }
  .category-heading {
    font: normal normal 600 14px/25px Poppins;
    color: #FFFFFF;
    text-transform: capitalize;
    display:flex;
    align-items: center;
    width: 75%;
  }
  .thread-link {
    color: #fff;
    font-size: 14px;
  }
  .subcategory-1 {
    padding-right: 10px;
    // color: rgb(131, 131, 131);
    i {
      font-size: 24px;
    }
  }
.subcategory-2 {
  .text-xlarge{
    font: normal normal medium 16px/27px Poppins;
    color: #fff;
    // color: rgb(131, 131, 131);
  }
  .subcategory-2-shortname {
    font: normal normal normal 11px/18px Poppins;
  // color: rgb(194, 194, 194);
  }
  .text-xlarge:hover{
    // color: #fff;
    color: rgb(131, 131, 131);
  }
}
.threads-count{
  font: normal normal medium 16px/21px Poppins;
  text-align: center;
  // color: rgb(131, 131, 131);
  width: 15%;
  text-align: right;
}
.reply-count {
  width: 10%;
  font: normal normal normal 12px/21px Poppins;
  text-align: center;
  // color: rgb(131, 131, 131);
}
</style>

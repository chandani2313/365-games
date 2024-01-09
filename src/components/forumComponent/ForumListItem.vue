<template>
  <fragment>
    <div class="forum-details">
      <div v-for="(subcategory, index) in subcategoryList" :key="index">
          <div class="forum-listing" v-if="forum._id === subcategory.category">
            <div class="category-heading" >
              
              <div class="subcategory-1"><i class="fa fa-list-alt" aria-hidden="true"></i></div>
              <div class="subcategory-2">
                <div class="subcategory-2-fullname">
                  <router-link
                    class="text-xlarge"
                    :to="{name: 'Forum', params: {id: subcategory._id}}"
                  >
                    {{subcategory.fullName}}
                  </router-link>
                </div>
                <div class="subcategory-2-shortname">{{subcategory.shortName}}</div>
              </div>
            </div>          

          <!-- <div class="threads-count">
            <div class="count">{{threadsCount}}</div>
            {{threadsCount === 1 ? 'Post' : 'posts'}}
          </div> -->
          <div class="threads-count">
            <AppDate :timestamp="subcategory.createdAt" />
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import AppDate from './AppDate.vue';
import axios from "axios";

export default {
  components: {
    Fragment,
    AppDate,
  },
  props: {
    forum: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      subcategoryList: [],
    }
  },
  computed: {
    threadsCount () {
      return this.forum.threads
        ? Object.values(this.forum.threads).length
        : 0
    }
  },
  methods: {
    forumSubCategoryList() {
      axios
      .post('/forum/subcategory/find/all', {
          criteria: {}
      })
      .then((response) => {
          // this.thread = response.data;
          response.data.map(elem => {
            this.subcategoryList.push(elem)
          })
        console.log('subCategory list', this.subcategoryList);

      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log('err', e);
        }
      });
    }
    // forumThreadList() {
    //   axios
    //   .post('/forum/subcategory/find/all', {
    //       criteria: {}
    //   })
    //   .then((response) => {
    //       // this.thread = response.data;
    //       response.data.map(elem => {
    //         this.subcategoryList.push(elem)
    //       })
    //     console.log('subCategory list', this.subcategoryList);

    //   })
    //   .catch((e) => {
    //     if (e.response.status === 400) {
    //       console.log('err', e);
    //     }
    //   });
    // }
  },

  mounted() {
    this.forumSubCategoryList()
  }
}
</script>

<style lang="scss" scoped>

.forum-listing{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  margin: 10px 0px;
  background: #300B69 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 10px;
}
.forum-details {
  color: #fff;
}
.category-heading {
  font: normal normal 600 14px/25px Poppins;
  color: #FFFFFF;
  text-transform: capitalize;
  display:flex;
  align-items: center;
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
.category-subheading {
  font: normal normal normal 14px/21px Poppins;
  color: #FFFFFF;
}
.threads-count{
  font: normal normal medium 16px/21px Poppins;
  text-align: center;
  // color: rgb(131, 131, 131);
}
</style>

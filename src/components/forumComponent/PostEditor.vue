<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <textarea
          name=""
          id=""
          
          class="form-input"
          v-model="newPostText"
        ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Reply</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'PostEditor',
  data() {
    return {
      newPostText: '',
    }
  },
  props: {
    threadId: {
      required: true,
      type: String
    }
  },
  methods: {
    save () {
      const post = {
        message:this.newPostText,
      }
      this.$emit('save-post', { post })
      this.newPostText = ''
    },
  },
}
</script>

<style scoped>

  .form-input {
    width: 100%;
    height:100px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    box-sizing: border-box;
    background: #300B69 0% 0% no-repeat padding-box;
    color: #fff;    
  }
  .form-actions {
    display: flex;
    justify-content: flex-end; 
  }
  .btn-blue {
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px;    
  }
</style>

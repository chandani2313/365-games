<template>
    <div class="forum_container">
      <div class="forum_heading">
          <div class="title_wrapper">forums</div>
      </div>
      <div class="forum_inner_container">
        <div class="thread_titlewrap"><input type="thread_title_wrap" placeholder="Thread Title"></div><br>
        <div class="thread_querywrap"><textarea class="thread_querywrapper"></textarea></div>
        <div class="forum_attachment_wrap">
          <div class="forum_attachment_leftwrap">
            <div class="attachement_wrap">
              <div class="icon_wrap"><i class="fas fa-paperclip"></i></div>
              <div class="text_wrap">attachement</div>
            </div><br>
            <div class="file_wrap">
              <div class="file_upload">file name here</div>
              <div class="file_upload">file name here</div>
            </div>
          </div>
          <div class="forum_attachment_rightwrap">
            <div class="tag_wrap">
              <div class="tag_container"><label>Tags:</label><input type="tag_wrapper" name="tag_wrapper"></div>
              <label class="instruction_wrap">multiple tags may be seperated by commas.</label>
            </div><br>
            <div class="options_wrap">
              <div class="option_checkboxwrap"><label>options:</label>
                <div class="checkbox_wrap">
                  <input type="checkbox" id="watch this thread" name="watch this thread"><label for="watch this thread">watch this thread</label>
                </div>
              </div>
              <input type="checkbox" id="end receive email notification" name="end receive email notification"><label for="end receive email notification">end receive email notification</label>
            </div>
          </div>
        </div>
        <div class="btn-holder">
            <button class="button_wrap">post thread</button>
        </div>  
      </div>
    </div>
</template>

<script>
export default {
  name: "forumThread",
};
</script>

<style scoped>
/* body{
  background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%);
} */

.forum_container{
    background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%);
font-family: Poppins;
}
.title_wrapper{
margin: 15px 0px 5px 15px;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
font:500 22px/33px Poppins;
text-transform: capitalize;
}
.forum_inner_container{
background: #1E0741;
border-radius: 8px;
padding: 25px;
}

.thread_titlewrap>input{
text-transform: capitalize;
width: 100%;
text-align: left;
font:15px/18px Poppins;
letter-spacing: 0px;
background: #300B69;
color: #FDFDFD;
padding: 10px;
border-radius: 4px;
border:hidden;
}
.thread_querywrapper{
  width: 100%;
  min-height:150px;
  background: #300B69;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  border:hidden;
}
.forum_attachment_wrap{
  display: flex;
  justify-content: space-between;
  align-items: left;
}
.attachement_wrap{
  display: flex;
  width: 120px;
  color: #FDFDFD;
  background: #300B69;
  text-transform: capitalize;
  text-align: left;
  font:15px/18px Poppins;
  letter-spacing: 0px;
  border-radius: 4px;
}
.icon_wrap,.text_wrap{
  padding: 5px;
}
.file_wrap{
display: flex;
align-items: left;
}
.file_upload{
  color: #FDFDFD;
  min-width: 180px;
  background: #75ab75;
  text-align: left;
  font:12px/18px Poppins;
  letter-spacing: 0px;
  padding: 3px;
  margin: 3px;
}
.tag_container{
display: flex;
color: #FDFDFD;
}
.tag_container>input{
text-transform: capitalize;
text-align: left;
min-width: 300px;
font:15px/18px Poppins;
letter-spacing: 0px;
background: #300B69;
color: #FDFDFD;
border-radius: 4px;
border:hidden;
padding: 5px;
}
label{
  color: #FDFDFD;
  padding: 5px;
  font:12px/18px Poppins;
  text-transform: capitalize;
}
.instruction_wrap{
text-align: center;
margin-left: 35px;
text-transform: none;
}
.option_checkboxwrap{
  display: flex;
}
 .btn-holder {
  justify-content: flex-end;
  display: flex;
}
.options_wrap>input{
  margin-left: 61px;
}
button{
border: 0.5px solid #FFFFFF;
background: #FDFDFD;
color: black;
cursor: pointer;
min-width: 70px;
min-height:30px;
text-transform: capitalize;
padding: 5px;
margin: 15px 10px 10px 0px;
border-radius: 4px;
}
@media screen and (max-width: 640px) {
.forum_heading{
margin: 0px!important;
}
.forum_attachment_wrap, .file_wrap,.tag_container{
  display: block;
  width:100%!important; 
}
}
</style>
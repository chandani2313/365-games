<template>
  <div class="Pubg_leaderBoard">
        <div class="title_wrapper">PUBG tournaments </div>
        <div class="inner_container">
            <div class="inner_container1">
                <div class="adv_wrap"><img src="/img/assets/pubgtournament/Tournamnet Ads_2.png"></div>
            </div>
           <div class="inner_container0">
                <div class="inner_subshell">
                    <div class="inner_subwrap active">overview</div>
                   <div class="inner_subwrap">prize</div>
                   <div class="inner_subwrap">participants</div>
                   <div class="inner_subwrap">Winner</div>
                   <div class="inner_subwrap">brackets</div>
                   <div class="inner_subwrap">schedule</div>   
                   <div class="inner_subwrap">info</div> 
                </div>        
                <div class="dropdown">
              <button class="dropbtn">overview</button>
              <div class="dropdown-content">
                <a>prize</a>
                <a>participants</a>
                <a>Winner</a>
                <a>brackets</a>
                <a>schedule</a>
                <a>info</a>
                </div>
                </div>
                <div class="inner_container2">
                   <div class="inner_subwrapper">
                    <div class="header_wrap"> event details</div>
                   </div>
                   <div class="inner_container3">
                     <div class="inner_subwrapper1">
                       <div class="header_wrap1">game details</div>
                       <div class="content_wrap">
                         <div class="content_wrap_inner1"><div class="content_wrap_inner">game</div>
                          <div class="content_wrap_inner">:</div> 
                          <div class="content_wrap_inner">volorant</div></div>
                          <div class="content_wrap_inner1"><div class="content_wrap_inner">bracket type</div>
                          <div class="content_wrap_inner">:</div>
                          <div class="content_wrap_inner">single elimination</div></div>
                          <div class="content_wrap_inner1"><div class="content_wrap_inner">event mode</div>
                          <div class="content_wrap_inner">:</div> 
                          <div class="content_wrap_inner">5 vs 5</div>
                          <div class="content_wrap_inner">online</div></div>
                          <div class="content_wrap_inner1"><div class="content_wrap_inner">platform</div>
                          <div class="content_wrap_inner">:</div> 
                          <div class="content_wrap_inner">united arab emirates</div></div>
                       </div>
                     </div>
                     <div class="inner_subwrapper2">
                       <div class="header_wrap1">game details</div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                     </div>
                   </div>
                  </div>
                </div>
                
        </div>
    </div>
</template>

<script>
export default {
name: "PubgTournament"
}
</script>

<style scoped>
img{
  width: 100%;
  display: block;
}
.Pubg_leaderBoard{
background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%);
padding: 20px;
}
.title_wrapper{
padding: 10px;
text-align: left;
font:22px/33px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
}

.inner_container{
border-radius: 8px;
width: 100%;
}
.inner_container1{
display: flex;
}
.adv_wrap{
opacity: 0.83;
width: 100%;
}
.inner_subshell{
display: flex;
width: 100%;
}
.inner_subwrap{
margin: 10px 0px 5px 5px;
min-width: 115px;
height: 30px;
border-radius: 5px;
border: 0.25px solid #FFFFFF;
text-align: center;
font:300 16px/ Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
padding:5px;
}
.active{
background: #1E0741;
border: 0.25px solid #1E0741;
margin: 10px 2px 0px 0px!important;
padding-bottom: 10px;
border-radius: 0px;
}
.inner_container2{
background: #1E0741;
padding:5px;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(100%,max-content));
}
.inner_subwrapper{
background: #310A69;
border-radius: 5px;
}
.header_wrap{
text-align: left;
font:18px/22px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
background: #1E0741;
border-bottom:1px solid #FFFFFF;
padding: 5px;
text-transform: capitalize;
}
.inner_container3{
display: grid;
grid-template-columns: 30% 68%;
background: #1E0741;
grid-column-gap: 15px;
padding: 20px;
}
.inner_subwrapper1, .inner_subwrapper2{
background: #310A69;
border-radius: 8px;
margin-bottom: 15px;
padding: 10px;
}
.header_wrap1{

font:bold 18px/22px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
margin: 2px;
}
.content_wrap{
font:16px/19px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
text-align: left;
padding: 5px;
margin-top: 10px;
}
.content_wrap_inner1{
	display: flex;
	justify-content: space-between;
}
.content_wrap1{
text-align: left;
font:16px/22px Poppins;
letter-spacing: 0px;
color: #FFFFFF;	
}
p{
padding:5px;
margin-bottom: 5px;
text-align: left;
font:14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
margin-top: 0px!important;
}
.dropbtn {
  background-color:#1E0741;
  color: white;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;
  right: 12px;
  text-transform: capitalize;
}

.dropdown {
  display: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-transform: capitalize;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-transform: capitalize;
}

.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: white;}
@media screen and (max-width: 640px) {
.inner_container{
width: 80%;
display: block;
}
.inner_container3{
display: block;
}
.inner_subshell{
	display: none;
}
.dropdown {
  display:block;
  float:right;
}
.inner_container2{
	display: block;
}
}

@media screen and (max-width: 560px){
.inner_container{
width: 100%;
display: block;
}
}
@media screen and (max-width: 480px){
.inner_container{
width: 100%;
display: block;
}
}
</style>
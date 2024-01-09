<template>
<div class="homewrap">
    <div class="homewrap-topbar">
        <img class="image-logo" src="../assets/Home/365logo.png"/>
        <div class="homewrap-topbar-innerwrap">
         <span class="topbar-text">home</span>
         <span class="topbar-text">About us</span>
         <span class="topbar-text">Services</span>
         <span class="topbar-text">Contact</span>
        </div>
        <button class="join-btnwrap">login</button>
    </div>
    <div class="homewrap-middlecontainer">
        <div class="homewrap-middlecontainer-rightside">
            <div class="middlecontainer-text">play your favourite games<br>and win</div>
            <div class="button_wrap"></div>
        </div>
    </div>
    <div class="homewrap-bottombar">
        <div class="homewrap-bottombar-innerwrap"> 
            <span class="bottombar-text"> 3 Easy</span>
            <span class="bottombar-text1">Steps</span>
        </div>
        <div class="homewrap-bottombar-innerwrap1">
            <div class="homewrap-bottombar-num">01</div>
            <img class="image-wrap" src="../assets/Home/Pathup.png"/>
            <div class="homewrap-bottombar-num">02</div>
            <img class="image-wrap" src="../assets/Home/Pathdown.png"/>
            <div class="homewrap-bottombar-num">03</div>
        </div>
        <div class="homewrap-bottombar-innerwrap2">
            <span class="bottombar-text2">SUBSCRIBE</span>
            <span class="bottombar-text3">PLAY</span>
            <span class="bottombar-text2">EARN</span>
            <div class="homewrap-bottombar-innerwrap3-text">Get your blood tests delivered at<br>home collect a sample from the<br>your blood tests.</div>
            <div class="homewrap-bottombar-innerwrap3-text">Get your blood tests delivered at<br>home collect a sample from the<br>your blood tests.</div>
            <div class="homewrap-bottombar-innerwrap3-text">Get your blood tests delivered at<br>home collect a sample from the<br>your blood tests.</div>
        </div>
    </div>
</div>
</template>
<script>
export default {       
}
</script>
<style scoped>
.homewrap{
background:#e5e5e5;
padding: 15px;
font-family: Poppins;
}
.homewrap-topbar{
display:flex;
justify-content: space-evenly;
align-items: center;
text-transform: capitalize;
}
.topbar-text{
padding: 5px 15px 5px 15px;
}
.image-logo{
padding: 5px;
}
.join-btnwrap{
background: linear-gradient(164.21deg, #6B4FE8 11.02%, #4A20C3 113.74%);
width: 150px;
height: 35px;
padding: 5px;
text-transform: capitalize;
color: var(--v-info-base);
cursor: pointer;
}
.homewrap-middlecontainer{
display: flex;
}
.homewrap-middlecontainer-rightside{
text-align: left;
margin: auto;
}
.middlecontainer-text{
font-size: 26px;
font-weight: 500;
color: #9672FF;
}
.middlecontainer-num{
color: #282828;
font-size: 80px;
font-weight: 800;
padding: 5px;

}
.join-btnwrap1{
text-transform: capitalize;
padding: 10px;
border-radius: 5px;
margin: 10px;
border: 1px solid #6B4FE8;
cursor: pointer;
}
.join-btnwrap2{
background: linear-gradient(180deg, #6B4FE8 0%, #4A20C3 100%);
padding: 10px;
margin: 10px;
border-radius: 5px;
color: var(--v-info-base);
cursor: pointer;
}
.homewrap-middlecontainer-leftside{
display: grid;
grid-template-columns:auto auto;
grid-column-gap: 15px;
}
.image-wrap1{
background: url("../assets/Home/apex-bg.png");
padding: 10px;
width:100%;
}
.image-wrap2{
background: url("../assets/Home/apex-bg.png");
padding: 10px;
width:80%;
}
.image-wrap3{
background: url("../assets/Home/pubg-bg.png");
padding: 10px;
width:75%;
}
.image-wrap0{
background: url("../assets/Home/bg.png");
color: var(--v-info-base);
text-transform: uppercase;
font-size: 30px;
padding: 10px;
width:80%;
}
.homewrap-bottombar-innerwrap{
text-align: center;
padding:5px;
}
.bottombar-text{
background: linear-gradient(107.49deg, #6B4FE8 60.29%, #9672FF 95.67%);
font-size: 50px;
font-weight: 800;
color: var(--v-info-base);
}
.bottombar-text1{
font-size: 50px;
font-weight: 800;  
}
.homewrap-bottombar-innerwrap1{
display:flex;
justify-content: center;
padding: 5px 20px 5px 20px;
}
.homewrap-bottombar-num{
 background: #434343;
 padding: 10px;
 text-align: center;
 color: var(--v-info-base);
}
.image-wrap{
padding: 5px 30px 5px 30px;
}
.homewrap-bottombar-innerwrap2{
display: grid;
grid-template-columns:auto auto auto;
grid-column-gap: 15%;
padding: 5px 30px 5px 30px;
}
.bottombar-text2,.bottombar-text3{ 
color:#9672FF;
font-size: 25px;
font-weight: 800; 
text-align: center;
}
.bottombar-text3{
margin-left: -5px;
}
.homewrap-bottombar-innerwrap3-text{
font-size: 12px;
display:flex;
justify-content:center;
}
/* @media screen and (max-width: 640px) {
.homewrap{
width: 80%;
display: block;
}
.homewrap-topbar-innerwrap{
display: none;
}
} */
</style>
<template>
    <footer id="footer_part">
        <div class="footer_outer_wrap">
            <div class="footer_wrap">
                <div class="footer_teampolicy_wrap">
                <a href=""><div class="terms">Terms </div></a>              
                <a href=""><div class="privacy">Privacy &amp; Policy</div></a>
                <a href=""><div class="corporate">Corporate</div></a>
                <a href=""><div class="changelogs">Changelogs</div></a>
                </div>
                <div class="copy_right_txt"> 
                    <v-col class="pa-0 text-center text-caption">
                        &#169; {{ new Date().getFullYear() }} Proudly by, <strong>365 Games</strong>
                    </v-col>
                </div>
            </div>
            <div class="socialmedia">
                <div class="social_media_container">
                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitch"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-steam-symbol"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-discord"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer> 
</template>
<script>
export default {
    name: "Footer",
};
</script>
<style lang="scss" scoped>
footer{
  background: #0E0E0E;


}
.footer_outer_wrap{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #9F9D9D;
    margin-left: 250px;
    padding: 0.8rem;
}
.footer_wrap{
    column-gap: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;        
    font-weight: 200;
}
.footer_teampolicy_wrap{
	display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.v-application .text-caption{
    font-weight: 200    ;
}
.terms, .privacy, .changelogs, .corporate {
    font-size: 0.8rem;
    color: #FFFFFF;
    line-height: 1.2;
    padding: 0 8px;
    position: relative;
    display: block;
    background-clip: text;
}
.copy_right_txt{
    font-size: 0.8rem;
    color: #FFFFFF;
    line-height: 1.2;
    padding: 0 10px;
}
.social_media_container i{
    padding: 5px;
    color: #9F9D9D;
}
@media (min-width: 320px) and (max-width: 767px) {
    .footer_outer_wrap{
        padding: 0;
    }

    .footer_teampolicy_wrap{
        justify-content: flex-start;
    }
    .copy_right_txt {
        display: none;
    }
    .terms, .privacy, .changelogs, .corporate {
        font-size: 6px;
        padding: 0 2px;
    }
    .social_media_container i{
        padding: 0px 3px;
        color: #9F9D9D;
        font-size: 9px;
    }
  }
  footer{
    clear: both;
  }
  @media (min-width: 320px) and (max-width: 1268px) {
    .footer_outer_wrap{
        margin: 0;
        width: 100%;
    }
    
    
  }

</style>
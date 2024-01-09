<template>
    <div class="right_wrap">
        <div class="updates_wrap">
            <div class="heading">Upcoming LeaderBoard</div>
            <Leaderboard :leaderboards="leaderboards" />
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Leaderboard from "../../views/LeaderboardCard.vue";

export default {
    name: "Updates",
    components: {
        Leaderboard,
    },
    data() {
        return{
            leaderboards: []
        }
    },
    methods: {
        GetLeaderboards() {
            axios.post("/leaderboard/find/all", {
                criteria: {},
                limit: 3,
                sort: {createdAt: -1}
            })
            .then((response) => {
                this.leaderboards = response.data;
                console.log("all", response.data)
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    console.log("err", e);
                }
            });
        },
    },
    mounted() {
        this.GetLeaderboards();
    }
}
</script>
<style scoped>
/*------------------------------right section css-------------------------------------------*/
/* .right_wrap{
    width:30%;
}
@media (min-width: 320px) and (max-width:767px) {
    .right_wrap{-
        width:100%;
    }
} */
.updates_wrap{
    background-color: #1E0741;
    padding: 20px 20px;
    border-radius: 8px;
}
@media (min-width: 320px) and (max-width:1164px) {
    .card_container{
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1.5rem;
    }
}
.heading{
    color: #F9F9F9;
    text-transform: capitalize;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 12px;
}
.card_container{
    gap: 15px;
    display: grid;
}
@media (min-width: 320px) and (max-width: 767px) {
    .card_container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 1.8em 2em;
    } 
}
.cards{
    position: relative;
    text-align: center;
    color: #F9F9F9;
}
.cards::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #9999998C 0%, #000000 100%) ;
    border-radius: 4px;
    opacity: 0.69;
}
.cards img{
    border-radius: 4px;
    width: 100%;
}
.card_title{
    position: absolute;
    top: 12px;
    left: 18px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;   
}
@media (min-width: 320px) and (max-width: 767px) {
    .card_title{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    } 
}
.card_details{
    position: absolute;
    bottom: 8px;
    left: 18px;
    text-align: justify;
    margin-right: 28px;
    font-size: 0.8em;
    letter-spacing: -0.5px;
}
@media (min-width: 320px) and (max-width: 767px) {
    .card_details{
        left: 65px;
        margin-right: 70px;
    } 

}
</style>
<template>
  <div class="Changelogs_wrapper">
    <div class="Changelogs_heading">
      <div class="title_wrapper">changelogs</div>
    </div>
    <div class="changelogs_inner_container">
      <div
        v-for="(detail, index) in details"
        :key="index + 'i'"
        class="changelogs_inner_wrap"
      >
        <div class="changelogs_datewrap">{{ detail.date }}</div>
        <div class="changelogs_detailwrap">
          <h6>{{ detail.heading }}</h6>
          <ol>
            <li
              v-for="(changelog, index) in detail.changelogs"
              :key="index + 'j'"
            >
              {{ changelog.title }}
              <ul>
                <li v-if="changelog.data">
                  {{ changelog.data }}
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          date: "August 4",
          heading: "365 Games Website alpha v0.2",
          changelogs: [
            {
              title: "All Leaderboards pages",
              data: "List of available leaderboards shown in the page, takes the data from the backend and renders the list.",
            },
            {
              title: "Leaderboard Page",
              data: "Individual leaderboard page.",
            },
            {
              title: "Leaderboard Join/Leave",
              data: "Leaderboard join/leave functionalities.",
            },
            {
              title: "All Tournaments",
              data: "List of available Tournaments shown in the page. takes the data from the backend and renders the list.",
            },
            {
              title: "Tournament Page",
              data: "Individual Tournament Page.",
            },
            {
              title: "Tournament Join/Leave",
              data: "Tournament Join/leave functionalities.",
            },
            {
              title: "Interactive Guide on Leaderboard and Tournaments",
              data: "Added Interactive steps to join the leaderboard and tournaments, the steps can be customized in the final build and content can be changed.",
            },
            {
              title: "User Profiles",
              data: "Created user profile page where users can upload the profile image and the profile cover image, next build we will work on the game id and other details update forms.",
            },
          ],
        },
        {
          date: "July 28",
          heading: "365-Games-Website-alpha-v0.1",
          changelogs: [
            {
              title: "Landing Page layout design",
            },
            {
              title: "Signup page functionality and design",
            },
            {
              title: "Login page functionalities and design",
            },
            {
              title: "Forgot password functionalities and design",
            },
            {
              title: "Dashboard Basic design and layout",
            },
            {
              title: "Google and Facebook test Social Authentication",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.Changelogs_wrapper {
  font-family: Poppins;
  padding: 10px;
}
.title_wrapper {
  margin: 15px 0px 5px 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;
  font: 500 22px/33px Poppins;
  text-transform: capitalize;
}
.changelogs_inner_container {
  background: #1e0741;
  border-radius: 8px;
  padding: 20px;
}
.changelogs_inner_wrap {
  background: #300b69;
  display: flex;
  margin-bottom: 10px;
  padding: 5px;
}
.changelogs_inner_wrap:last-child {
  margin-bottom: 0;
}
.changelogs_datewrap {
  text-align: left;
  font: 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  padding: 5px;
  min-width: 85px;
}
.changelogs_detailwrap {
  padding: 5px;
  margin-left: 30px;
}
h6 {
  text-align: left;
  font: 18px/27px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  margin: 0 !important;
}
li {
  text-align: left;
  font: 15px/23px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  line-height: 1.7;
}
@media screen and (max-width: 640px) {
  .Changelogs_wrapper {
    margin: 0px !important;
  }
  .changelogs_inner_wrap {
    display: block;
    width: 100% !important;
    padding: 10px;
  }
  .changelogs_detailwrap {
    margin-left: 0 !important;
  }
}
</style>
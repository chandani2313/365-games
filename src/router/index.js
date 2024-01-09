import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  // },
  {
    path: '/changelogs',
    name: 'ChangeLogs',
    component: () => import(/* webpackChunkName: "changelogs" */ '../views/ChangeLogs.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue'),
  },
  {
    path: '/gem-test',
    name: 'GemTest',
    component: () => import(/* webpackChunkName: "gem-test" */ '../views/GemTest.vue'),
  },
  // {
  //   path: '/bracets', 
  //   name: 'Bracets',
  //   component: () => import(/* webpackChunkName: "bracets" */ '../views/TournamentBracket.vue'),
  // },
  {
    path: '/',
    name: 'NewLandingPage',
    component: () => import(/* webpackChunkName: "landing-page" */ '../views/NewLandingPage.vue'),
    meta: {
      layout: "new-landing-page"
    }
  },
  // {
  //   path: '/aboutus',
  //   name: 'AboutUs',
  //   component: () => import(/* webpackChunkName: "about-us" */ '../views/landingpage/aboutus.vue'),
  //   meta: {
  //     layout: "about-us"
  //   }
  // },
  {
    path: '/aboutus',
    name: 'AboutUs2',
    component: () => import(/* webpackChunkName: "about-us" */ '../views/landingpage/aboutus2.vue'),
    meta: {
      layout: "about-us"
    }
  },
  {
    path: '/howitworks',
    name: 'HowItWorks2',
    component: () => import(/* webpackChunkName: "how-it-works" */ '../views/landingpage/howitworks2.vue'),
    meta: {
      layout: "how-it-works"
    }
  },
  {
    path: '/contact',
    name: 'Contact2',
    component: () => import(/* webpackChunkName: "contact" */ '../views/landingpage/contact2.vue'),
    meta: {
      layout: "contact"
    }
  },
  {
    path:'/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/landingpage/blog.vue'),
    meta:{
      layout: "blog"
    }
  },
  {
    path:'/bloginfo/:id',
    name: 'BlogInfo',
    component: () => import(/* webpackChunkName: "bloginfo" */ '../views/landingpage/bloginfo.vue'),
    meta:{
      layout: "blog"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginNew.vue'),
    meta: {
      layout: "empty-layout"
    }
  },

  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
  //   meta: {
  //     layout: "empty-layout"
  //   }
  // },

  // {
  //   path: '/forgot-password',
  //   name: 'ForgotPassword',
  //   component: () => import(/* webpackChunkName: "forgot-password" */ '../views/ForgotPassword.vue'),
  //   meta: {
  //     layout: "empty-layout"
  //   }},
    {
      path: '/forgot-password-new',
      name: 'ForgotPasswordNew',
      component: () => import(/* webpackChunkName: "forgot-password" */ '../views/ForgotPasswordNew.vue'),
      meta: {
        layout: "empty-layout"
      }
  },
  // {
  //   path: '/reset-password',
  //   name: 'ResetPassword',
  //   component: () => import(/* webpackChunkName: "forgot-password" */ '../views/ResetPassword.vue'),
  //   meta: {
  //     layout: "empty-layout"
  //   }
  // },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "forgot-password" */ '../views/ResetPasswordNew.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  // {
  //   path: '/username',
  //   name: 'UsernameForm',
  //   component: () => import(/* webpackChunkName: "forgot-password" */ '../views/UsernameForm.vue'),
  //   meta: {
  //     layout: "empty-layout"
  //   }},
    {
      path: '/username',
      name: 'CreateUserName',
      component: () => import(/* webpackChunkName: "forgot-password" */ '../views/CreateUserName.vue'),
      meta: {
        layout: "empty-layout"
      }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/signuppage',
    name: 'SignupPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupPage.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/otp/:userId/:type',
    name: 'EnterOtp',
    component: () => import(/* webpackChunkName: "enter-otp" */ '../views/EnterOtp.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/otpemail/:userId/:type',
    name: 'EnterVerifyOtp',
    component: () => import(/* webpackChunkName: "enter-otp" */ '../views/EnterVerifyOtp.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/otpforget/:userId/:type',
    name: 'EnterForgetOtp',
    component: () => import(/* webpackChunkName: "enter-otp" */ '../views/EnterForgetOtp.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/social/auth',
    name: 'SocialAuth',
    component: () => import(/* webpackChunkName: "enter-otp" */ '../views/SocialAuth.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/marketplace',
    name: 'MarketPlace',
    component: () => import(/* webpackChunkName: "marketplace" */ '../views/MarketPlace.vue'),
  },
  {
    path: '/leaderboardpage',
    name: 'LeaderboardPage',
    component: () => import(/* webpackChunkName: "leaderboardpage" */ '../views/LeaderboardPage.vue'),
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import(/* webpackChunkName: "leaderboard" */ '../views/Leaderboard.vue'),
    redirect: { name: 'AllLeaderboard' },
    children: [
      {
        path: 'all',
        name: 'AllLeaderboard',
        component: () => import(/* webpackChunkName: "All" */ '@/components/leaderboard/All.vue'),
        props: true
      },
      {
        path: 'ongoing',
        name: 'OngoingLeaderboard',
        component: () => import(/* webpackChunkName: "All" */ '@/components/leaderboard/Ongoing.vue'),
        props: true
      },
      {
        path: 'completed',
        name: 'CompletedLeaderboard',
        component: () => import(/* webpackChunkName: "All" */ '@/components/leaderboard/Completed.vue'),
        props: true
      },
      {
        path: 'upcoming',
        name: 'UpcomingLeaderboard',
        component: () => import(/* webpackChunkName: "All" */ '@/components/leaderboard/Upcoming.vue'),
        props: true
      },
      {
        path: 'registration',
        name: 'RegistrationLeaderboard',
        component: () => import(/* webpackChunkName: "All" */ '@/components/leaderboard/Registration.vue'),
        props: true
      }
    ]
  },

  {
    path: '/leaderboard/:id',
    name: 'LeaderboardDetails',
    component: () => import(/* webpackChunkName: "leaderboard" */ '../views/LeaderboardDetails.vue'),
    // component: () => import(/* webpackChunkName: "leaderboard" */ '../views/leaderboard/LeaderboardDetails.vue'),

    redirect: { name: 'Ranking' },
    children: [
      {
        path: '',
        name: 'Ranking',
        component: () => import(/* webpackChunkName: "ranking" */ '../views/LeaderboardRanking.vue'),
      },
      {
        path: 'prizepool',
        name: 'Prizepool',
        component: () => import(/* webpackChunkName: "prizepool" */ '../views/LeaderboardPrizepool.vue'),
      },
      // {
      //   path: 'winners',
      //   name: 'LeaderboardWinners',
      //   component: () => import(/* webpackChunkName: "prizepool" */ '../views/LeaderboardWinners.vue'),
      // },
      {
        path: 'rules',
        name: 'Rules',
        component: () => import(/* webpackChunkName: "rules" */ '../views/LeaderboardRules.vue'),
      },
    ],
  },
  {
    path: '/tournament',
    name: 'Tournament',
    component: () => import(/* webpackChunkName: "tournament" */ '../views/Tournament.vue'),
    redirect: { name: 'AllTournament' },
    children: [
      {
      path: 'all',
      name: 'AllTournament',
      component: () => import(/* webpackChunkName: "AllTournament" */ '@/components/alltournament/All.vue'),
      props: true
    },
    {
      path: 'registration',
      name: 'RegistrationTournament',
      component: () => import(/* webpackChunkName: "RegistrationTournament" */ '@/components/alltournament/Registration.vue'),
      props: true
    },
    {
      path: 'completed',
      name: 'CompletedTournament',
      component: () => import(/* webpackChunkName: "CompletedTournament" */ '@/components/alltournament/Completed.vue'),
      props: true
    },
    {
      path: 'ongoing',
      name: 'OngoingTournament',
      component: () => import(/* webpackChunkName: "OngoingTournament" */ '@/components/alltournament/Ongoing.vue'),
      props: true
    },
    {
      path: 'upcoming',
      name: 'UpcomingTournament',
      component: () => import(/* webpackChunkName: "UpcomingTournament" */ '@/components/alltournament/Upcoming.vue'),
      props: true
    },
    {
      path: 'game/:gameId',
      name: 'tournamentGame',
      component: () => import(/* webpackChunkName: "tournamentGame" */ '@/components/alltournament/Game.vue'),
    }
    ]
  },
  {
    path: '/tournament/:id',
    name: 'TournamentDetails',
    component: () => import(/* webpackChunkName: "tournament" */ '../views/TournamentDetails.vue'),
    redirect: { name: 'Overview' },
    children: [
      {
        path: '',
        name: 'Overview',
        component: () => import(/* webpackChunkName: "overview" */ '../views/TournamentOverview.vue'),
      },
      {
        path: 'prizepool',
        name: 'Prize',
        component: () => import(/* webpackChunkName: "prizepool" */ '../views/TournamentPrizepool.vue'),
      },
      {
        path: 'participants',
        name: 'Participants',
        component: () => import(/* webpackChunkName: "participants" */ '../views/TournamentParticipants.vue'),
      },
      {
        path: 'winners',
        name: 'Winners',
        component: () => import(/* webpackChunkName: "winners" */ '../views/TournamentWinners.vue'),
      },
      {
        path: 'brackets',
        name: 'Brackets',
        component: () => import(/* webpackChunkName: "brackets" */ '../views/TournamentBracket.vue'),
      },
      {
        path: 'schedule',
        name: 'Schedule',
        component: () => import(/* webpackChunkName: "brackets" */ '../views/TournamentSchedule.vue'),
      },
      {
        path: 'info',
        name: 'Info',
        component: () => import(/* webpackChunkName: "brackets" */ '../views/TournamentInfo.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/terms',
    name: 'TermsConditions',
    component: () => import(/* webpackChunkName: "terms-conditions" */ '../views/TermsConditions.vue'),
    meta: {
      layout: "empty-layout"
    }
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "new-user-profile" */ '../views/NewUserProfile.vue'),
  },
  {
    path: '/oldprofile',
    name: 'OldUserProfile',
    component: () => import(/* webpackChunkName: "old-user-profile" */ '../views/UserProfile.vue'),
  },
  {
    path: '/teams',
    name: 'TeamPage',
    component: () => import(/* webpackChunkName: "supportpage" */ '../views/TeamPage.vue'),
    redirect: { name: 'AllTeams' },
    children: [
      {
        path: '',
        name: 'AllTeams',
        component: () => import(/* webpackChunkName: "supportpagetable" */ '../components/team/AllTeams.vue'),
      },
      {
        path: 'myteam',
        name: 'myteam',
        component: () => import(/* webpackChunkName: "supportpagecreateticket" */ '../components/team.vue'),
      },
      {
        path: 'create',
        name: 'CreateTeam',
        component: () => import(/* webpackChunkName: "supportpagechat" */ '../components/team/CreateTeam.vue'),
      }
    ]
  },
  {
    path:'/team/:id',
    name: 'TeamProfile',
    component:() => import(/* webpackChunkName: "myteam" */'../components/MyTeams.vue'),
  },
  // {
  //   path:'/team',
  //   name: 'myteam',
  //   component:() => import(/* webpackChunkName: "myteam" */'../components/team.vue'),
  // },
  // {
  //   path: '/teams',
  //   name: 'AllTeams',
  //   component: () => import(/* webpackChunkName: "AllTeams" */ '../views/AllTeams.vue'),
  // },
  // {
  //   path: '/myteams',
  //   name: 'MyTeams',
  //   component: () => import(/* webpackChunkName: "AllTeams" */ '../views/MyTeams.vue'),
  // },
  // {
  //   path: '/createteam',
  //   name: 'CreateTeam',
  //   component: () => import(/* webpackChunkName: "AllTeams" */ '../views/CreateTeam.vue'),
  // },
  // {
  //   path: '/editteam',
  //   name: 'EditTeam',
  //   component: () => import(/* webpackChunkName: "AllTeams" */ '../views/EditTeam.vue'),
  // },
  // {
  //   path: '/roster',
  //   name: 'RosterSetting',
  //   component: () => import(/* webpackChunkName: "AllTeams" */ '../views/RosterSetting.vue'),
  // },
  {
    path:'/searchresult',
    name: 'SearchResult',
    component:() => import(/* webpackChunkName: "SearchResult" */'../components/SearchResult.vue'),
  },
  {
    path: '/ticket/transaction',
    name: 'MyTickets',
    component: () => import(/* webpackChunkName: "supportpage" */ '../views/MyTickets.vue'),
    redirect: { name: 'RandomTransactionTable' },
    children: [
      {
        path: 'random',
        name: 'RandomTransactionTable',
        component: () => import(/* webpackChunkName: "supportpagetable" */ '../components/transactionhistory/RandomDropTransaction.vue'),
      },
      {
        path: 'subscription',
        name: 'SubscriptionTransactionTable',
        component: () => import(/* webpackChunkName: "supportpagecreateticket" */ '../components/transactionhistory/SubscriptionTransaction.vue'),
      },
      {
        path: 'gem',
        name: 'GemPurchaseTransactionTable',
        component: () => import(/* webpackChunkName: "supportpagechat" */ '../components/transactionhistory/GemPurchaseTransaction.vue'),
      }
    ]
  },
  {
    path: '/notification/allnotification',
    name: 'AllNotification',
    component: () => import(/* webpackChunkName: "viewallnotification" */ '../components/NewNotification/AllNotification.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/Faq.vue'),
  },
  {
    path: '/redeem',
    name: 'Redeem',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/redeem/Redeem.vue'),
  },
  {
    path: '/my/cart',
    name: 'MyCart',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/redeem/MyCart.vue'),
  },
  {
    path: '/redeem/redeem2',
    name: 'Redeem2',
    component: () => import(/* webpackChunkName: "redeem2" */ '../components/Redeem2.vue'),
  },
  {
    path: '/ordercart',
    name: 'OrderCart',
    component: () => import(/* webpackChunkName: "OrderCart" */ '../views/OrderCart.vue'),
    redirect: { name: 'Order' },
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ '../views/ordercart/Order.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "supportpagecreateticket" */ '../views/ordercart/Cart.vue'),
      },
    ]
  },
  {
    path: '/order',
    name: 'OrderRedeem',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/OrderRedeem.vue'),
  },
  {
    path: '/gem',
    name: 'GemPurchase',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/gem/GemPurchase.vue'),
  },
  {
    path: '/gem/:id',
    name: 'MyGem',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/gem/MyGem.vue'),
    props: true // in order to set route parameters (id) as component props, must set props = true
  },
  {
    path: '/subs/:id',
    name: 'MySubs',
    component: () => import(/* webpackChunkName: "redeem" */ '../views/gem/MySubs.vue'),
    props: true // in order to set route parameters (id) as component props, must set props = true
  },
  // {
  //   path: '/support',
  //   name: 'SupportPage',
  //   component: () => import(/* webpackChunkName: "supportpage" */ '../views/SupportPage.vue'),
  //   redirect: { name: 'SupportPageTable' },
  //   children: [
  //     {
  //       path: 'all',
  //       name: 'SupportPageTable',
  //       component: () => import(/* webpackChunkName: "supportpagetable" */ '../components/support/SupportPageTable.vue'),
  //     },
  //     {
  //       path: 'create-ticket',
  //       name: 'SupportPageCreateTicket',
  //       component: () => import(/* webpackChunkName: "supportpagecreateticket" */ '../components/support/SupportPageCreateTicket.vue'),
  //     },
  //     {
  //       path: 'chat',
  //       name: 'SupportPageChat',
  //       component: () => import(/* webpackChunkName: "supportpagechat" */ '../components/support/SupportPageChat.vue'),
  //     }
  //   ]
  // },
  {
    path: '/support',
    name: 'NewSupport',
    component: () => import(/* webpackChunkName: "NewSupport" */ '../views/NewSupport.vue'),
  },
  {
    path: '/support/:id',
    name: 'SupportChat',
    component: () => import(/* webpackChunkName: "NewSupport" */ '../components/support/SupportPageChat.vue'),
  },
  {
    path: '/create/ticket',
    name: 'CreateTicket',
    component: () => import(/* webpackChunkName: "NewSupport" */ '../views/Ticket.vue'),
  },

  // {
  //   path: '/rewards',
  //   name: 'Rewards',
  //   component: () => import(/* webpackChunkName: "redeem" */ '../views/Rewards.vue'),
  // },
  // {
  //   path: '/ticket',
  //   name: 'Ticket',
  //   component: () => import( '../views/Ticket.vue'),
  // },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: () => import(/* webpackChunkName: "NewSupport" */ '../views/PaymentSuccess.vue'),
  },
  {
    path: '/payment/failure',
    name: 'PaymentFailure',
    component: () => import(/* webpackChunkName: "NewSupport" */ '../views/PaymentFailure.vue'),
  },
  {
    path: '/rewards',
    name: 'NewRewards',
    component: () => import(/* webpackChunkName: "NewRewards" */ '../views/NewRewards.vue'),
    redirect: { name: 'All' },
    children: [
      {
        path: 'all',
        name: 'All',
        component: () => import(/* webpackChunkName: "order" */ '../components/NewRewards/All.vue'),
      },
      {
        path: 'unrewards',
        name: 'Unrewards',
        component: () => import(/* webpackChunkName: "order" */ '../components/NewRewards/Unrewards.vue'),
      },
      {
        path: 'rewards',
        name: 'Rewards',
        component: () => import(/* webpackChunkName: "order" */ '../components/NewRewards/Rewards.vue'),
      },
    ]
  },
  // {
  //   path: '/forum/thread',
  //   name: 'forumThread',
  //   component: () => import(/* webpackChunkName: "redeem" */ '../views/forums/forumThread.vue'),
  // },
  // {
  //   path: '/forum',
  //   name: 'ForumHome',
  //   component: () => import(/* webpackChunkName: "redeem" */ '../views/forum/ForumHome.vue'),
  // },
  // {
  //   path: '/forum/:id',
  //   name: 'Forum',
  //   component: () => import(/* webpackChunkName: "redeem" */ '../views/forum/Forum.vue'),
  //   props: true // in order to set route parameters (id) as component props, must set props = true
  // },
  // {
  //   path: '/thread/:id',
  //   name: 'ThreadShow',
  //   component: () => import(/* webpackChunkName: "redeem" */ '../views/forum/ForumThreadShow.vue'),
  //   props: true
  // },
  {
    path: '/homeslide',
    name: 'HomeSlide',
    component: () => import(/* webpackChunkName: "homeslide" */'../components/HomeSlide.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "login" */ '../components/dashboard365/Game.vue'),
    // meta: {
    //   layout: "empty-layout"
    // }
  },
  {
    path: '/randomdropup',
    name: 'RandomDropPopuptest',
    component: () => import(/* webpackChunkName: "homeslide" */'../components/RandomDropPopuptest.vue'),
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['NewLandingPage', 'AboutUs2', 'HowItWorks2', 'Blog', 'BlogInfo', 'Contact2', 'Login', 'Signup', 'SignupPage', 'ForgotPasswordNew','CreateUserName', 'ResetPassword', 'EnterOtp', 'EnterForgetOtp', 'EnterVerifyOtp', 'SocialAuth','TermsConditions','UsernameForm'];
  const authRequired = !publicPages.includes(to.name);
  const loggedIn = store.state.login.user;
  // redirect to login page if user is not logged in and trying to access a restricted page
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  // redirect to home page if user is logged in and trying to access login page
  const pagesNotAllowedAfterLogin = ['NewLandingPage', 'AboutUs2', 'HowItWorks2', 'Contact2', 'Login', 'Signup', 'Blog', 'BlogInfo', 'SignupPage', 'ForgotPasswordNew','CreateUserName', 'ResetPassword', 'SocialAuth']
  if (loggedIn && pagesNotAllowedAfterLogin.includes(to.name)) {
    return next('/dashboard');
  }
  next();
})


export default router

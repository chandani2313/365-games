<script>
export default {
  name: "SocialAuth",
  methods: {
    checkAuth() {
      this.$store.commit('LOGIN', this.$route.query)
      this.$router.push(this.$route.query.redirect || "/dashboard");
    },
  },
  mounted() {
    this.checkAuth();
  },
};
</script>
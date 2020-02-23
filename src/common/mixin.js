import BackTop from "../components/content/BackTop/BackTop";

export const backtopmix = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      this.isShow = -position.y > 1000;
    }
  }
};

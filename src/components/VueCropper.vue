<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
  
export default {
  name:'VueCropper',
  props: {
    src: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    },
  },
  data(){
    return {
      cropper: null
    }
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.img, this.options)
    console.log('cropper', this.cropper)
  },
  methods: {
    replace(url, onlyColorChanged = false) {
      return this.cropper.replace(url, onlyColorChanged)
    },
    getCroppedCanvas(options = {}) {
      return this.cropper.getCroppedCanvas(options)
    }
  },
  render: function(h) {
    return h(
      'img',
      {
        ref: 'img',
        src: this.src,
        style: [{ maxWidth: '100%', width: '200px', height: '200px' }]
      }
    )
  }
}
</script>

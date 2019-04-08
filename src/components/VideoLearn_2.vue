<template>
  <div class="ml_text">
    <div class="ml_2_1_2_3">
      <div>
        <input
          type="file"
          v-on:change="selectupload(this)"
          :state="Boolean(uploadFile)"
          placeholder="选择文件"
          accept=".mp4, .mov"
        >
        <button @click='upload'>上传</button>
      </div>
      <div>
        <label>来源文件</label>
        <input v-model="source" type="tel" placeholder="必填">
      </div>
      <div>
        <label>目标文件</label>
        <input v-model="target" type="tel" placeholder="必填">
      </div>
      <div>
        <button @click="submitTrainVideo" variant="success">提交</button>
      </div>
    </div>
  </div>
</template>
<style scope>
.ml_text {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #020202;
}
.ml_2_1_2_3 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1vh;
}
.ml_2_1_2_3 > div {
  padding-top: 1vh;
}
.ml_2_1_2_3 > div > input[type='file'] {
  color: white;
  border: 1px #00ff00 solid;
  border-radius: 5px;
}
.ml_2_1_2_3 > div > button {
  width: 100px;
  background-color: #00ff00;
  border: none;
  border-radius: 5px;
  color: white;
}
.ml_2_1_2_3 > div > label {
  color: white;
}
.ml_2_1_2_3 > div > input[type='tel'] {
  color: white;
  border: 1px #00ff00 solid;
  background-color: #020202;
  width: 300px;
}
/* ::-webkit-input-placeholder {
  color: white;
}
::-moz-placeholder {
  color: white;
}
:-ms-input-placeholder {
  color: white;
} */
</style>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'VideoLearn',
  data () {
    return {
      name: '',
      email: '',
      uploadProcessing: false,
      fileSizeLimit: 150000000,
      baseURL: 'https://2w1djam.com/api',
      videoBaseURL: 'https://2w1djam.com/api/video?path=',
      videoList1: [],
      videoList2: [],
      source: '',
      target: '',
      uploadFile: ''
    }
  },
  async mounted () {
    let res = await this.$http.get(`${this.baseURL}/video/list`)
    this.videoList1 = res.data.data
    this.videoList2 = res.data.data
  },
  methods: {
    async upload () {
      if (this.uploadFile === '') {
        alert('需要选择文件')
        return
      }

      if (this.uploadFile.size > this.fileSizeLimit) {
        alert('视频文件需小于150MB')
        return
      }
      let formData = new FormData()
      formData.append('video', this.uploadFile)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      this.uploadProcessing = true
      let res = await this.$http.post(
        `${this.baseURL}/video/upload`,
        formData,
        config
      )
      if (res.data.success === true) {
        alert('上传成功，请刷新网页')
        this.uploadFile = ''
      }
      this.uploadProcessing = false
    },
    async submitTrainVideo () {
      if (this.source === '' || this.target === '') {
        alert('需要填写来源与目标文件名')
        return
      }

      let ipRes = await this.$http.get('https://api.ipify.org?format=json')
      let ip = ipRes.data.ip
      let data = {
        type: 'video',
        source: this.source,
        target: this.target,
        name: this.name,
        email: this.email,
        ip: ip
      }
      let res = await this.$http.post(`${this.baseURL}/data`, data)
      if (res.data.success === true) {
        alert('提交成功')
        this.source = ''
        this.target = ''
        this.name = ''
        this.email = ''
      }
    },
    async selectupload (that) {
      this.uploadFile = that
    }
  }
}
</script>

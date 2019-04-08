<template>
  <div class='ml-video'>
    <b-container class='bv-example-row'>
      <h2>第二步：视频生成</h2>
      <p>选择两个视频，来源文件为“学习来源”，目标文件为“生成对象”，生成效果如下图</p>

      <b-row class='mt-3'>
        <b-col cols='12' sm='12'>
          <img src='../../public/display.gif'>
        </b-col>
      </b-row>

      <b-row class='mt-5'>
        <b-col cols='12' sm='3' v-for='(video, index) in videoList' :key='index'>
          <b-card class='mb-2'>
            <span class='card-text'>{{video}}</span>
            <video controls width='100%' height='280px'>
              <source :src='videoBaseURL + video' type='video/mp4'>
            </video>
          </b-card>
        </b-col>
      </b-row>

      <b-alert show class='mt-2' variant='info'>
        <p style='margin:0 auto'>在下面两个框内填写你想要的来源与目标文件名，以生成动作转换效果</p>
      </b-alert>
      <div class='mt-3'>
        <b-form-file
          v-model='uploadFile'
          :state='Boolean(uploadFile)'
          placeholder='选择文件'
          accept='.mp4, .mov'
          style='width:80%'
        ></b-form-file>
        <b-button v-if='!uploadProcessing' class='ml-3 mt-2' variant='primary' @click='upload'>上传</b-button>
        <b-alert v-else show variant='warning' class='mt-2'>文件上传中， 请稍候</b-alert>
        <b-alert class='mt-4' show variant='danger'>提示：文件名不要打错，建议直接复制粘贴视频文件名至框框内</b-alert>
      </div>

      <b-row class='mt-4'>
        <b-col cols='12' sm='2'>
          <label for='input-none'>来源文件名:</label>
        </b-col>
        <b-col cols='12' sm='6'>
          <b-form-input v-model='source' type='text' placeholder='必填'></b-form-input>
        </b-col>
      </b-row>

      <b-row class='mt-4'>
        <b-col cols='12' sm='2'>
          <label for='input-none'>目标文件名:</label>
        </b-col>
        <b-col cols='12' sm='6'>
          <b-form-input v-model='target' type='text' placeholder='必填'></b-form-input>
        </b-col>
        <b-col cols='12' sm='2' class='ml-4'></b-col>
      </b-row>
      <p class='mt-2'>视频生成后会更新到列表，若你希望收到生成后的视频，请填写你的名字和邮箱地址</p>
      <b-row class='mt-2'>
        <b-col cols='12' sm='2'>
          <label for='input-none'>姓名</label>
        </b-col>
        <b-col cols='12' sm='6'>
          <b-form-input v-model='name' type='text' placeholder='选填'></b-form-input>
        </b-col>
      </b-row>

      <b-row class='mt-4'>
        <b-col cols='12' sm='2'>
          <label for='input-none'>邮箱</label>
        </b-col>
        <b-col cols='12' sm='6'>
          <b-form-input v-model='email' type='text' placeholder='选填'></b-form-input>
        </b-col>
        <b-button @click='submitTrainVideo' variant='success'>提交</b-button>
      </b-row>
    </b-container>
  </div>
</template>

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
      videoList: [],
      source: '',
      target: '',
      uploadFile: ''
    }
  },
  async mounted () {
    let res = await this.$http.get(`${this.baseURL}/video/list`)
    this.videoList = res.data.data
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
    }
  }
}
</script>

<style scoped>
.ml-video {
  margin-top: 50px;
  margin-left: 9%;
  width: 80%;
}
</style>

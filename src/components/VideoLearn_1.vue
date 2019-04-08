<template>
  <div class="ml_text">
    <div class="ml_1">
      <img src="../../public/7_title.png">
    </div>
    <div class="ml_2">
      <div class="ml_2_1">
        <div class="ml_2_1_1">
          <div class="ml_2_1_1_1">
            <img src="../../public/7_1.gif">
          </div>
          <div class="ml_2_1_1_2">
            <img src="../../public/7_1.gif">
          </div>
          <div class="ml_2_1_1_3">
            <img src="../../public/7_1.gif">
          </div>
        </div>
        <div class="ml_2_1_2">
        <br/><br/><br/>
          <div class="ml_2_1_2_1">
            <div style="font-family:HelveticaNeueMedium;">
              #CHANGE YOUR MOTION AND APPEARANCE#
              Change your appearance and motion in your videos
              ingredient: GAN Douyin categorizes our videos based on our uploaded contents, recommends videos in “hot” list. Use GAN jam to break this rule. Change dura dance to she hui yao, change she hui yao to public square dance, change your bottle into unknown creature. Become a maniac in front of Douyin. Surprise, Douyin!
            </div>
            <div style="font-family:SourceHanSerifSC-Bold;font-size=50px">
              使用果酱为抖音视频易容、易动作
              果酱结构：对抗生成网络
              抖音根据我们的视频内容给我们自动归
              类，根据我们的行为推送特定分类的视频。使用GAN果酱打破这个规则，为你的视频易容、易动作。让嘟啦舞变成社会摇，让社会摇变成广场舞，让瓶子变成不知名生物。在你的抖音面前装疯卖傻，走火入魔，让它对你无计可施。等着吧，抖音！
            </div>
          </div>
          <div class="ml_2_1_2_2">
            <div class="ml_2_1_2_2_1">
                <div>选择来源文件</div>
                <div class='ml_2_1_2_2_1_1'>
                    <div v-for='(video, index) in videoList1' :key='index'>
                        <span class='card-text'>{{video}}</span>
            <video controls width='100%' height='280px'>
              <source :src='videoBaseURL + video' type='video/mp4'>
            </video>
                    </div>
                </div>
            </div>
            <div class="ml_2_1_2_2_2">
                <div>选择目标文件</div>
                <div class='ml_2_1_2_2_1_1'>
                 <div v-for='(video, index) in videoList2' :key='index'>
                        <span class='card-text'>{{video}}</span>
            <video controls width='100%' height='280px'>
              <source :src='videoBaseURL + video' type='video/mp4'>
            </video>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="ml_2_1_3">
          <div class="ml_2_1_3_1">
            <img src="../../public/bottle_3d.gif">
          </div>
          <div class="ml_2_1_3_2">
            <img src="../../public/bottle_3d.gif">
          </div>
          <div class="ml_2_1_3_3">
            <img src="../../public/bottle_3d.gif">
          </div>
          <div class="ml_2_1_3_4">
            <img src="../../public/bottle_3d.gif">
          </div>
        </div>
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
  align-items: flex-start;
  background-color: #020202;
}
.ml_1 {
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1vh;
  padding-left: 1vw;
}
.ml_1 > img {
  width: 600px;
  height: 130px;
}
.ml_2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.ml_2_1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 1vh;
}
.ml_2_1_1 {
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ml_2_1_1_1 > img {
  width: 100px;
  height: 100px;
  z-index: 99;
}
.ml_2_1_1_2 > img {
  width: 100px;
  height: 100px;
  margin-left: 2vw;
  z-index: 9;
}
.ml_2_1_1_3 > img {
  width: 100px;
  height: 100px;
  margin-top: 10vh;
}
ml_2_1_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ml_2_1_2_1 {
  width: 60vw;
  border: 3px rgb(0, 255, 0) solid;
  height: 35vh;
  color: white;
  font-size: 20px;
}
.ml_2_1_2_1 > div {
  padding: 1vh 2vw;
}
.ml_2_1_3 {
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ml_2_1_3_1 > img {
  width: 200px;
  height: 200px;
  z-index: 99;
}
.ml_2_1_3_2 > img {
  width: 150px;
  height: 130px;
  margin-top: -10px;
  margin-left: 40px;
  z-index: 1;
}
.ml_2_1_3_3 > img {
  width: 90px;
  height: 90px;
  margin-top: 40px;
  margin-left: 1px;
}
.ml_2_1_3_4 > img {
  width: 90px;
  height: 90px;
  margin-top: 30px;
  margin-left: 50px;
}
.ml_2_1_2_2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
}
.ml_2_1_2_2_1{
    width: 29vw;
border: 2px rgb(0, 255, 0) solid;
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 5px 1vh;
}
.ml_2_1_2_2_2{
    width: 29vw;
    border: 2px rgb(0, 255, 0) solid;
    margin-left: 2vw;
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 5px 1vh;
}
.ml_2_1_2_2_1_1{
    display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 50vh;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
}
.ml_2_1_2_2_1_1::-webkit-scrollbar{
    width: 10px;
    height: 50vh;
}
.ml_2_1_2_2_1_1::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #00FF00;
}
.ml_2_1_2_2_1_1>div{
    width: 13vw;
    padding-left: 1vh;
}
.ml_2_1_2_2_1_1>div>video{
    width: 13vw;
    height: 20vh;
}

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
    }
  }
}
</script>

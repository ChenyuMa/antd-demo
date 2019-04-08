<template>
  <div>
    <div style="width:100%;">
      <a-row>
        <a-col  :xs="15" :sm="12" :md="12" :lg="12" :xl="8">
            <img src="../../public/7_title 2.png" style="width:100%;">
        </a-col>
      </a-row>
  </div>
  <div style="width:80%;margin-left:10%; margin-top:100px;">
      <a-row>
        <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="textContent" style="border: 4px rgb(0, 255, 0) solid;padding:10px;">
            Change your appearance and motion in your videos
            ingredient: GAN Douyin categorizes our videos based on our uploaded contents, recommends videos in “hot” list. Use GAN jam to break this rule. Change dura dance to she hui yao, change she hui yao to public square dance, change your bottle into unknown creature. Become a maniac in front of Douyin. Surprise, Douyin!
            <br>
            <br>
            使用果酱为抖音视频易容、易动作
            果酱结构：对抗生成网络
            抖音根据我们的视频内容给我们自动归
            类，根据我们的行为推送特定分类的视频。使用GAN果酱打破这个规则，为你的视频易容、易动作。让嘟啦舞变成社会摇，让社会摇变成广场舞，让瓶子变成不知名生物。在你的抖音面前装疯卖傻，走火入魔，让它对你无计可施。等着吧，抖音！
            </div>
        </a-col>
      </a-row>
  </div>
  <div class="display_img">
    <img src="../../public/display.gif" />
  </div>
<a-row v-if="isPc">
  <div class="first_content_2_5">
    <img src="../../public/bottle_3d.gif" />
  </div>
  <div class="first_content_2_6">
    <img src="../../public/green.gif" />
  </div>
  <div class="first_content_2_7">
    <img src="../../public/lulala.gif" />
  </div>
  <div class="first_content_2_8">
    <img src="../../public/wudi.gif" />
  </div>
  <div class="first_content_2_9">
    <img src="../../public/tuman.gif" />
  </div>
  <div class="first_content_2_10">
    <img src="../../public/mask.gif" />
  </div>
  <div class="first_content_2_11">
    <img src="../../public/green.gif" />
  </div>
</a-row>

<a-row style="width:80%;margin-left:10%;">
  <a-col :xs="{span: 24 }" :sm="{span:12}"  :md="{span: 12}"  :lg="{span: 12 }"  :xl="{span: 11,offset: 1 }" style="color:white;border: 3px rgb(0, 255, 0) solid;">
  <a-col :xs="{span: 24}" :sm="{span: 24 }"  :md="{span: 24 }"  :lg="{span: 12}"  :xl="{span: 24}" style="color:white;padding:10px;">
  <div style="font-size:18px;">选择来源文件 / Choose Source File</div>
  </a-col>
        <div
          v-for='(video, index) in videoSourceList'
          :key='index'
        >
        <a-col :xs="{span: 12}" :sm="{span: 12 }"  :md="{span: 12 }"  :lg="{span: 12}"  :xl="{span: 12}" style="color:white;padding:10px;">
          <div style="font-size:16px;">{{video}}</div>
          <video class="video"
            :src='videoSourceBaseURL + video'
            controls
          ></video>
        </a-col>
    </div>
  </a-col>
  <a-col :xs="{span: 24 }" :sm="{span:12}"  :md="{span: 12}"  :lg="{span: 12 }"  :xl="{span: 11,offset: 1 }" style="color:white;border: 3px rgb(0, 255, 0) solid;">
  <a-col :xs="{span: 24}" :sm="{span: 24 }"  :md="{span: 24 }"  :lg="{span: 12}"  :xl="{span: 24}" style="color:white;padding:10px;">
      <div style="font-size:18px;">选择来源文件 / Choose Source File</div>
  </a-col>
        <div
          v-for='(video, index) in videoTargetList'
          :key='index'
        >
        <a-col :xs="{span: 12}" :sm="{span: 12 }"  :md="{span: 12 }"  :lg="{span: 12}"  :xl="{span: 12}" style="color:white;padding:10px;">
          <div style="font-size:16px;">{{video}}</div>
          <video class="video"
            :src='videoTargetBaseURL + video'
            controls
          ></video>
        </a-col>
    </div>
  </a-col>

</a-row>


<div style="width:80%;margin-left:10%;border: 3px rgb(0, 255, 0) solid;height:100%;margin-top:30px">
<a-row style="marign:10px;padding:10px;">
  <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="12" style="maign:10px;padding:10px;width:50%;height:100%;">
    <video style="width:100%; height:100%;object-fit:scale-down;"  id="myvideo" src="" ></video>
  </a-col>
  <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="12" style="marign:10px;padding:10px;width:50%;height:100%;">
     <video style="width:100%; height:100%;object-fit:scale-down;"   id="youvideo"  src=""></video>
   </a-col>
   </a-row>
   <a-row style="margin-bottom:20px;">
  <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="8"  align="center" >
    <button class="btn" @click="startrecord($event)">录制/Record</button>
  </a-col>
    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="8"  align="center">
  <button class="btn"  @click="play($event)">播放/Play</button>
  </a-col>
    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="8"  align="center">
  <button  class="btn"  @click="uploadvideo($event)">上传/Upload</button>
 </a-col>
</a-row>
</div>

<div style="width:80%;margin-left:10%;">
  <a-row style="marign:10px;padding:10px;">

    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24"  align="center" >
    <div class="first_content_2_4_1" @mouseover="move1()" @mouseout="out1()">
    <div>
      <select v-model="selected">
        <option
          disabled
          value=""
        >请选择视频类型/Choose Catagory</option>
        <option value="source">作为来源视频/Upload to Source Files</option>
        <option value="target">作为目标视频/ upload to Target Files</option>
      </select>
    </div>
      </div>
    <div
      :class="[flag1?'flag22':'flag11']"
      style="font-family:SourceHanSerifSC-Bold;font-size=18px;color:white;"
    >1. 你可在此上传视频添加到视频库，也可跳过这步直接从视频库中选择文件</div>
      <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
        <input class="inputFile" type="file" accept='.mp4, .mov' style="width:80%;"
          placeholder='选择文件'
          v-on:change='uploadchange($event)'
          :state='Boolean(uploadFile)'/>
    </a-col>
    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center" style="margin-top:10px;">
      <button class="btn"
          v-if='!uploadProcessing'
          @click='upload()'
        >上传/Upload</button>
  </a-col>

</a-col>
</a-row>
    <div
      :class="[flag1?'flag22':'flag11']"
      style="font-family:SourceHanSerifSC-Bold;font-size=18px;color:white;"
    >2. 从视频库中选择，在下面两个框内填写你想要的来源与目标文件名，以生成动作转换效果</div>
    <div
      :class="[flag2?'flag22':'flag11']"
      style="font-family:SourceHanSerifSC-Bold;font-size=18px;color:white;"
    >提示：文件名不要打错，建议直接复制粘贴视频文件名至框框内</div>
  <div>
    <a-row style="marign:10px;padding:10px;">
      <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
      <input  type="tel" style="width:80%;" class="inputStyle"  placeholder="请选择来源文件" v-model='source'/>
    </a-col>
        <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center" style="margin-top:10px;">
        <input  type="tel" v-model='target' style="width:80%;" class="inputStyle"  placeholder="请选择目标文件"  />
     </a-col>

      <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center" style="margin-top:10px;">
       <input type="tel" style="width:80%;"  v-model='name'  class="inputStyle" placeholder="输入你的名字"/>
    </a-col>

    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center"  style="margin-top:10px;">
      <input type="tel"   style="width:80%;"  v-model='email' class="inputStyle"   placeholder="输入你的邮箱地址"/>
   </a-col>

  <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center" style="margin-top:10px;">
       <button class="btn" @click='submitTrainVideo'>提交/Surprise,Douyin!</button>
  </a-col>
</a-row>
</div>
    <div
      :class="[flag2?'flag22':'flag11']"
      style="font-family:SourceHanSerifSC-Bold;font-size=18px;color:white;"
    >若你希望收到生成后的视频，请填写你的个人资料</div>
    <div>

    </div>
  </div>

</div>



</template>

<style scoped>
.video{
  width: 100%;
  height: 100%;
object-fit: fill;
}
.inputStyle{
  border: 1px rgb(0, 255, 0) solid;
  background-color:black;
  color:white;
}
.inputFile{
  width: 100%;
  height: auto;
  color: white;
  border: 2px rgb(0, 255, 0) solid;
  background-color: #000000;
}
.btn{
  padding: 2px;
  height: auto;
  color: black;
  font-size: 16px;
  background-color: rgb(0, 255, 0);
  border-radius: 5px;
  border: none;
}
.fontWhite{
  color:white;
}
.left{
  text-align: left;
}
.label{
  text-align: center;
  color: white;
  font-size: 17px;
}
.textContent{
  font-family:SourceHanSerifSC-Bold;
  lineHeight:30px;
  font-size:22px;
  color:white;
}


.first_content_1 {
  /* width: 1024px; */
  padding-top: 20px;
}
.first_content_1_1 {
  /* width: 1024px; */
}
.first_content_1_1 > img {
  padding-top: 50px;
  width: 50%;
  height: auto;
  padding-bottom: 30px;
}
.first_content_1_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.first_content_1_2_1 {
  /* width: auto; */
  height: auto;
  border: 3px rgb(0, 255, 0) solid;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.first_content_1_2_1 > div {
  color: white;
}
.first_content_1_3 {
  /* width: 1024px; */
  height: 150px;
  padding: 20px 0px;
}
.first_content_1_3_1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* width: 300px; */
}
.first_content_1_3_1_1 {
  background-image: url(../../public/5_2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: auto;
}
.first_content_1_3_1_2 {
  padding-left: 10px;
  color: white;
}
.first_content_1_4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.first_content_1_4 > div {
  /* width: 940px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.first_content_1_4 > div > label {
  color: white;
}
.first_content_1_4 > div > label:nth-child(1) {
  /* width: 260px; */
}
.first_content_1_4 > div > label:nth-child(2) {
  /* width: 180px; */
}
.first_content_1_4 > div > input[type='tel'] {
  background-color: #000000;
  border: 2px rgb(0, 255, 0) solid;
  color: white;
  border-radius: 5px;
  /* width: 250px; */
}
.first_content_1_4 > div > button {
  background-color: rgb(0, 255, 0);
  border: none;
  color: black;
  border-radius: 5px;
  height: 25px;
  margin-left: 130px;
}
.first_content_1_4 > div > textarea {
  background-color: #000000;
  border: 2px rgb(0, 255, 0) solid;
  color: white;
  border-radius: 5px;
  height: 200px;
  /* width: 894px; */
  margin-top: 10px;
  margin-left: 20px;
}
.first_content_1_4 > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 60px 20px 0px;
}
.first_content_1_4 > div > img {
  /* width: 110px; */
  height: 20px;
}



.first_content_2_3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-top: -600px;
}
.first_content_2_3_1 {
  width: 900px;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
}
.first_content_2_3_1_1 {
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px rgb(0, 255, 0) solid;
}
.first_content_2_3_1_1 > div {
  color: white;
}
.first_content_2_3_1_1 > div:nth-child(1) {
  height: 30px;
}
.first_content_2_3_1_1 > div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.first_content_2_3_1_1 > div:nth-child(2) > div {
  width: 213px;
}
.first_content_2_3_1_1 > div:nth-child(2) > div > div {
  word-wrap: break-word;
}
.first_content_2_3_1_1 > div:nth-child(2) > div > video {
  width: 213px;
  height: 280px;
}
.first_content_2_4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}
.first_content_2_4_1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.first_content_2_4_1 > div {
  height: 50px;
  font-size: 18px;
}
.first_content_2_4_1 > div > input[type='file'] {
  height: 25px;
  color: white;
  border: 2px rgb(0, 255, 0) solid;
  background-color: #000000;
}
.first_content_2_4_1 > div > button {
  margin-left: 20px;
  height: 30px;
  background-color: rgb(0, 255, 0);
  border: none;
  border-radius: 5px;
  color: black;
}
.first_content_2_4_1 > div > input[type='tel'] {
  color: white;
  border: 2px rgb(0, 255, 0) solid;
  background-color: #000000;
  height: 25px;
}
.first_content_2_4_1 > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
}
.first_content_2_5 {
  z-index: 8888;
  width: 120px;
  height: 150px;
  position: relative;
  top: -800px;
  left: -90px;
}
.first_content_2_5 > img {
  width: 120%;
  height: auto;
}
.display_img > img {
  width:100%;
  height: auto;
  padding-top: 50px;
}
.first_content_2_6 {
  z-index: 888;
  width: 100px;
  height: 100px;
  position: relative;
  top: -700px;
  left: -70px;
}
.first_content_2_6 > img {
  width: 150%;
  height: auto;
}
.first_content_2_7 {
  z-index: 888;
  width: 100px;
  height: 100px;
  position: relative;
  top: -500px;
  left: -250px;
}
.first_content_2_7 > img {
  width: 180%;
  height: auto;
}
.first_content_2_8 {
  z-index: 888;
  width: 100px;
  height: 100px;
  position: relative;
  top: -1100px;
  left: 1000px;
}
.first_content_2_8 > img {
  width: 200%;
  height: auto;
}
.first_content_2_9 {
  z-index: 8888;
  width: 60px;
  height: 60px;
  position: relative;
  top: -900px;
  left: 1200px;
}
.first_content_2_9 > img {
  width: 250%;
  height: auto;
}
.first_content_2_10 {
  z-index: 8888;
  width: 60px;
  height: 60px;
  position: relative;
  top: -600px;
  left: 1000px;
}
.first_content_2_10 > img {
  width: 250%;
  height: auto;
}
.first_content_2_11 {
  z-index: 8888;
  width: 60px;
  height: 60px;
  position: relative;
  top: -300px;
  left: 1150px;
}
.first_content_2_11 > img {
  width: 300%;
  height: auto;
}
.first_content_2_12 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}
.first_content_2_12_1 {
  width: 700px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px rgb(0, 255, 0) solid;
}
.first_content_2_12_1 > div:nth-child(1) {
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.first_content_2_12_1 > div:nth-child(1) > video {
  width: 250px;
  height: 200px;
  margin-right: 10px;
  border:1px #fff solid;
}
.first_content_2_12_1 > div:nth-child(2) {
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.first_content_2_12_1 > div:nth-child(2) > button {
  width: 90px;
  height: 30px;
  color: black;
  background-color: rgb(0, 255, 0);
  border-radius: 5px;
  border: none;
}

.flag11 {
  display: none;
}
.flag22 {
  display: block;
}
</style>
<script>
export default {
  name: 'VideoLearn',
  data () {
    return {
      name: '',
      email: '',
      uploadProcessing: false,
      fileSizeLimit: 150000000,
      baseURL: 'https://2w1djam.com/api',
      videoSourceBaseURL: 'https://2w1djam.com/api/video?type=source&path=',
      videoTargetBaseURL: 'https://2w1djam.com/api/video?type=target&path=',
      videoSourceList: [],
      videoTargetList: [],
      source: '',
      target: '',
      uploadFile: '',
      recording: null,
      mediaStreamTrack: null,
      blob: null,
      flag1: false,
      flag2: false,
      selected: '',
       screenWidth: document.body.clientWidth, // 屏幕尺寸
       isPc:true
    }
  },

  async mounted () {
    const that = this
    that.isPc = true;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        if (that.screenWidth < 500) {
            that.isPc = false;
        }

      })()
    }


    let res = await this.$http.get(`${this.baseURL}/video/list`, {
      params: {
        type: 'source'
      }
    })
    let res2 = await this.$http.get(`${this.baseURL}/video/list`, {
      params: {
        type: 'target'
      }
    })
    this.videoSourceList = res.data.data
    this.videoTargetList = res2.data.data
  },
  methods: {
    async upload () {
      if (this.uploadFile === '') {
        alert('需要选择文件')
        return
      }
      if (this.selected === '') {
        alert('需要选择视频类型')
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
        `${this.baseURL}/video/upload?type=${this.selected}`,
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
    async uploadchange (event) {
      this.uploadFile = event.target.files[0];
    },
    async startrecord (e) {
      let res = e.target.innerHTML
      if (res === '录制/Record') {
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {}
        }
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            var getUserMedia =
              navigator.webkitGetUserMedia || navigator.mozGetUserMedia
            if (!getUserMedia) {
              return Promise.reject(
                new Error('getUserMedia is not implemented in this browser')
              )
            }
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject)
            })
          }
        }
        window.URL =
          window.URL || window.webkitURL || window.mozURL || window.msURL
        let mediaOpts = {
          audio: false,
          video: true
        }
        navigator.getUserMedia(mediaOpts, this.successFunc, this.errorFunc)
        e.target.innerHTML = '停止/Stop'
      } else {
        this.stoprecord()
        e.target.innerHTML = '录制/Record'
      }
    },
    async successFunc (stream) {
      this.mediaStreamTrack = stream
      let video = document.querySelector('#myvideo')
      if ('srcObject' in video) {
        video.srcObject = stream
      } else {
        video.src =
          (window.URL && window.URL.createObjectURL(stream)) || stream
      }
      this.recording = new MediaRecorder(stream)
      this.recording.start()
      var that = this
      this.recording.ondataavailable = function (e) {
        that.blob = new Blob([e.data], { type: 'video/mp4' })
      }
      video.play()
    },
    async errorFunc (err) {
      alert(err.name)
    },
    async stoprecord () {
      this.recording.stop()
      let video = document.querySelector('#myvideo')
      video.pause()
      this.mediaStreamTrack.getTracks().forEach(function (track) {
        track.stop()
      })
    },
    async play () {
      let video = document.querySelector('#youvideo')
      video.src = URL.createObjectURL(this.blob);
      video.play();
    },
    async uploadvideo () {
      if (this.blob === null) {
        alert('请先录制视频')
        return
      }
      if (this.selected === '') {
        alert('需要选择视频类型')
        return
      }
      if (this.blob.size > this.fileSizeLimit) {
        alert('视频文件需小于150MB')
        return
      }
      let formData = new FormData()
      formData.append('video', this.blob)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      this.uploadProcessing = true
      let res = await this.$http.post(
        `${this.baseURL}/video/upload?type=${this.selected}`,
        formData,
        config
      )
      if (res.data.success === true) {
        alert('上传成功，请刷新网页')
        this.blob = ''
      }
      this.uploadProcessing = false
    },
    async move1 () {
      this.flag1 = true
      this.flag2 = true
    },
    async out1 () {
      this.flag1 = false
      this.flag2 = false
    }
  }
}
</script>

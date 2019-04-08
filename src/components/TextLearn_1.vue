<template>
  <div class="ml-text">
    <div class="ml_1">
      <img src="../../public/6_title.png">
    </div>
    <div class="ml_2">
    <br/>
      <div class='ml_2_1'>
        <div style="font-family:HelveticaNeueMedium;">
          #COVER YOUR PROFILE WITH JAM#
ingredient: Neural network LSTM + RNN model
2W1D is tracing your profile. Now customize your profile with lstm + rnn Jam, make it hard for 2W1D to pin you down. Confuse them with your abnormal profile
        </div>
        <div>果酱结构：神经网络LSTM + RNN模型
你的个人资料使2w1d对你有迹可循，使用LSTM+RNN神经网络果酱，重新定制你的个人资料，让2W1D难以捉摸你的规律，以一反常态的资料，迷惑你的社交平台。
</div>
</div>
    </div>
    <div class="ml_3">
      <marquee scrolldelay='91' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Aqua">请不要用耳朵了解我</div>
        </div>
      </marquee>
      <marquee scrolldelay='92' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Lime">不猜的小魔心</div>
        </div>
      </marquee>
         <marquee scrolldelay='93' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Fuchsia">不猜的小魔心</div>
        </div>
      </marquee>
         <marquee scrolldelay='91' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Yellow">不猜的小魔心</div>
        </div>
      </marquee>
         <marquee scrolldelay='92' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:#6600ff">不猜的小魔心</div>
        </div>
      </marquee>
         <marquee scrolldelay='93' direction="right" onmouseover="this.stop()" onmouseout="this.start()">
        <div class="ml_3_1">
          <div class="ml_3_2"></div>
          <div class="ml_3_3" style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Red">不猜的小魔心</div>
        </div>
      </marquee>
    </div>
    <div class="ml_4">
      <div class="ml_4_1">
        <label>input a chinese character</label>
        <label>输入一个中文字符</label>
        <input type="tel" v-model="initialText">
      </div>
      <div class="ml_4_1">
        <label>Chooselength</label>
        <label>选择文本长度</label>
        <vue-slide-bar
          v-model="sliderCustomzie.val"
          style='width:20vw;float:left;padding-top:10px;'
          :min="1"
          :max="100"
          :processStyle="sliderCustomzie.processStyle"
          :lineHeight="sliderCustomzie.lineHeight"
          :tooltipStyles="sliderCustomzie.tooltipStyles"
        >
        </vue-slide-bar>
        <button @click="generate">生成/generate</button>
      </div>
      <div class="ml_4_1">
        <textarea v-model="textResult" :readonly="processing||firstTime"></textarea>
      </div>
      <div class="ml_4_1">
        <img src="../../public/5_button.png">
      </div>
    </div>
  </div>
</template>
<script>
import VueSlideBar from 'vue-slide-bar'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'TextLearn',
  components: {
    VueSlideBar
  },
  data () {
    return {
      firstTime: true,
      baseURL: 'https://2w1djam.com/api',
      processing: false,
      textResult: '',
      initialText: '',
      length: 0,
      sliderCustomzie: {
        val: 30,
        lineHeight: 8,
        processStyle: {
          backgroundColor: '#42b883'
        },
        tooltipStyles: {
          backgroundColor: '#42b883',
          borderColor: '#42b883'
        }
      }
    }
  },
  methods: {
    async generate () {
      if (this.processing) {
        alert('正在生成')
        return
      }

      const reg = /^[\u4e00-\u9fa5]{1,1}$/g
      if (!reg.test(this.initialText)) {
        alert('只能输入一个中文字符')
        return
      }
      this.length = this.sliderCustomzie.val
      this.textResult = '生成中...'
      this.processing = true
      let res = await this.$http.post(`${this.baseURL}/text`, {
        initialText: this.initialText,
        length: this.length
      })
      this.textResult = res.data.data
      this.processing = false
      this.firstTime = false
    },
    async submitText () {
      if (this.processing) {
        alert('正在生成')
        return
      }
      if (this.textResult === '') {
        return
      }

      let ipRes = await this.$http.get('https://api.ipify.org?format=json')
      let ip = ipRes.data.ip
      let data = {
        type: 'text',
        trainText: this.textResult,
        ip: ip
      }
      let res = await this.$http.post(`${this.baseURL}/data`, data)
      if (res.data.success === true) {
        alert('提交成功')
      }
    }
  }
}
</script>

<style scoped>
.ml-text {
  background-color: #020202;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.ml_1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  padding: 2vh 0vw 0vh 15vw;
}
.ml_1 > img {
  width: 400px;
  height: 100px;
}
.ml_2 {
  width: 100vw;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ml_2_1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   border: 2px rgb(0, 255, 0) solid;
  color: white;
  width: 50vw;
}
.ml_2_1>div{
  padding: 1vh 1vw;

}
.ml_3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 1vh;
}
.ml_3 .ml_3_1 {
  display: flex;
  flex-direction: row;
}
.ml_3 .ml_3_1 .ml_3_2 {
  width: 2vh;
  height: 2vh;
  background-image: url(../../public/5_button.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
}
.ml_3 .ml_3_1 .ml_3_3 {
  color: rgb(0, 255, 0);
  padding-left: 1vw;
}
.ml_4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 2vh;
}
.ml_4 .ml_4_1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50vw;
}
.ml_4 .ml_4_1>label{
  color: white;
  width: 14vw;
}
.ml_4 .ml_4_1>input{
  border: 2px rgb(0, 255, 0) solid;
  background-color: #020202;
  width: 20vw;
  color: white;
}
.ml_4 .ml_4_1>button{
  background-color: #00FF00;
  margin-left: 2vw;
  border: none;
  border-radius: 7px;
  width: 15vw;
}
.ml_4 .ml_4_1>textarea{
 background-color: #020202;
 border: 2px green solid;
 width: 50vw;
 height: 25vh;
 color: white;
}
.ml_4 .ml_4_1>img{
  width: 15vh;
  height: 3vh;
  margin-top: 1vh;
  margin-left: 43vw;
}
</style>

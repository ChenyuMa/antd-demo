<template>
<div>
  <div style="width:100%;">
    <a-row>
      <a-col  :xs="15" :sm="12" :md="12" :lg="12" :xl="8">
        <img src="../../public/6_title.png" style="width:100%;">
      </a-col>
    </a-row>
</div>

<a-col style="margin-top:2%;" :xs="{span: 20, offset: 2 }" :sm="{span: 20, offset: 2 }"  :md="{span: 20, offset: 2 }"  :lg="{span: 20, offset: 2 }"  :xl="{span: 18, offset: 3 }">
<div style="width:80%;margin-left:10%; ">
    <a-row >
      <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="border: 3px rgb(0, 255, 0) solid;color: white;">
        <div class="textContent" style="padding:20px;font-family:HelveticaNeueMedium;">
            ingredient: Neural network LSTM + RNN model 2W1D is tracing your profile. Now customize your profile with lstm + rnn Jam, make it hard for 2W1D to pin you down. Confuse them with your abnormal profile.
            </div>
          <div style="padding:20px;">果酱结构：神经网络LSTM + RNN模型
            果酱结构：神经网络LSTM + RNN模型
            你的个人资料使2w1d对你有迹可循，使用LSTM+RNN神经网络果酱，重新定制你的个人资料，让2W1D难以捉摸你的规律，以一反常态的资料，迷惑你的社交平台。
          </div>
      </a-col>
    </a-row>
  </div>
    <div class="first_content_1_3">
      <a-row>
        <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <marquee
        scrolldelay="91"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()">
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Aqua"
          >请不要用耳朵了解我 / Please don't understand me with your ears</div>
        </div>
      </marquee>
      <marquee
        scrolldelay="92"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Lime"
          >不猜的小魔心 / Do not guess the little magical heart</div>
        </div>
      </marquee>
      <marquee
        scrolldelay="91"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Fuchsia"
          >一人饮酒醉 / One person drunk </div>
        </div>
      </marquee>
      <marquee
        scrolldelay="99"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Yellow"
          >时代小美汉 / Little beautiful man of the time</div>
        </div>
      </marquee>
      <marquee
        scrolldelay="95"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:#6600ff"
          >小蘑菇机器陈 / Small mushroom machine chan</div>
        </div>
      </marquee>
      <marquee
        scrolldelay="96"
        direction="right"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div class="first_content_1_3_1">
          <img src="../../public/5_2.png" style="width:18px;height:18px;">
          <div
            class="first_content_1_3_1_2"
            style="font-family:SourceHanSerifSC-Bold;font-size:18px;color:Red"
          >留长刘海是为了遮眼泪 / long bangs for tears</div>
        </div>
      </marquee>
    </a-col>
  </a-row>
    </div>



    <!-- <div style="width:70%;margin-left:15%;"> -->
  <a-col style="margin-top:2%;" :xs="{span: 24 }" :sm="{span: 20, offset: 2 }"  :md="{span: 20, offset: 2 }"  :lg="{span: 20, offset: 2 }"  :xl="{span: 20, offset: 2 }">

      <a-row class="left" >
        <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <label class="label">input a Chinese character</label>
        </a-col>
          <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
         <label class="label">输入一个中文字符</label>
       </a-col>
         <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <input type="tel" v-model="initialText" class="inputStyle">
        </a-col>
      </a-row>

      <a-row class="left" style="margin-top:40px;">
        <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <label class="label">Choose length</label>
        </a-col>
          <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
         <label class="label">选择文本长度</label>
       </a-col>
         <a-col  :xs="24" :sm="6" :md="6" :lg="6" :xl="6" style="margin-bottom:8px;">
         <vue-slide-bar
           v-model="sliderCustomzie.val"
           style="width:auto;padding-top:10px;padding-right:10px;"
           :min="1"
           :max="100"
           :processStyle="sliderCustomzie.processStyle"
           :lineHeight="sliderCustomzie.lineHeight"
           :tooltipStyles="sliderCustomzie.tooltipStyles"></vue-slide-bar>
        </a-col>
            <a-col  :xs="{span: 12, offset: 1 }" :sm="6" :md="6" :lg="6" :xl="5">
            <button class="generateBtn" @click="generate">生成/generate</button>
       </a-col>
      </a-row>
      <a-row class="left" style="margin-top:40px;">
        <a-col  :xs="24" :sm="18" :md="18" :lg="18" :xl="{span:24}">
          <textarea style="width:100%;height:180px;" class="inputStyle" v-model="textResult" :readonly="processing||firstTime"></textarea>
            <img @click="doCopy" src="../../public/5_button.png" style="float:right;width:120px;height:28px;">
       </a-col>
      </a-row>
    </a-col>
  </a-col>
  </div>
</template>


<style scoped>
.center{
  text-align: center;
}
.inputStyle{
  border: 1px rgb(0, 255, 0) solid;
  background-color:black;
  color:white;
}
.generateBtn{
background-color: rgb(0, 255, 0);
border:0;
float:right;
border-radius:5px;
color:black;
font-size: 18px;
line-height: 20px;
padding: 4px;
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
  lineHeight:30px;
  font-size:22px;
  color:white;
  font-family:HelveticaNeueMedium;
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
  height: auto;
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
</style>

<script>
export default {
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
    async doCopy () {
      this.$copyText(this.textResult).then(function () {
                alert("Copy Success")
              }, function () {
                alert('Can not copy')
              })
   },
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
      let res = await this.$http.post(`${this.baseURL}/text2`, {
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
    },
    share () {
      return `http://service.weibo.com/share/share.php?appkey=&title=${this.textResult}&url=&searchPic=false&style=simple`
    }
  }
}
</script>

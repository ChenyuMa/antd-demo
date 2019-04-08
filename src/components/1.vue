<template>
<div style="width:100%;">
    <a-row style="margin-top:-50px;">
      <a-col  :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :offset="3">
        <img src="../../public/1_title.png" style="width:100%;">
      </a-col>
    </a-row>
 <a-col :xs="{span: 20, offset: 2 }" :sm="{span: 20, offset: 2 }"  :md="{span: 20, offset: 2 }"  :lg="{span: 20, offset: 2 }"  :xl="{span: 14, offset: 5 }">
  <div classs="indexConntent" >
    <a-row style="border: 4px rgb(0, 255, 0) solid;" >
    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="padding:5px;padding-left:15px;overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap">
      <div class="margin10"><span class="textContentEng">#Jammatize#</span></div>
      <div class="margin10"><span class="textContentEng">#Turn from a guest to a host#</span></div>
      <div class="margin10"><span class="textContentEng">#Neural Network#</span></div>
      <div class="margin10"><span class="textContentEng">#LSTM+RNN#</span></div>
      <div class="margin10"><span class="textContentEng">#GAN#</span></div>
      <div class="margin10"><span class="textContentEng">#Cover Your Profile with JAM#</span></div>
      <div class="margin10"><span class="textContentEng">#Unpredictable way of sharing memes#</span></div>
      <div class="margin10"><span class="textContentEng">#Change your appearance#</span></div>
      <div class="margin10"><span class="textContentEng">#Change your motion#</span></div>
      <div class="margin10"><span class="textContentEng">#Confuse your enemy#</span></div>
      <div class="margin10"><span class="textContentEng">#Become a maniac#</span></div>
    </a-col>
    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"  style="padding:5px;padding-left:15px;overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap">
      <div class="margin10"><span class="textContentChinese">#果酱化#</span></div>
      <div class="margin10"><span class="textContentChinese">#反客为主#</span></div>
      <div class="margin10"><span class="textContentChinese">#神经网络#</span></div>
      <div class="margin10"><span class="textContentChinese">#LSTM+RNN#</span></div>
      <div class="margin10"><span class="textContentChinese">#生成对抗网络#</span></div>
      <div class="margin10"><span class="textContentChinese">#为你的个人资料披上果酱#</span></div>
      <div class="margin10"><span class="textContentChinese">#使用变幻莫测的话术来发博文#</span></div>
      <div class="margin10"><span class="textContentChinese">#为抖音视频易容#</span></div>
      <div class="margin10"><span class="textContentChinese">#为抖音视频易动作#</span></div>
      <div class="margin10"><span class="textContentChinese">#迷惑你的敌人#</span></div>
      <div class="margin10"><span class="textContentChinese">#走火入魔#</span></div>
    </a-col>
  </a-row>
    </div>
  </a-col>
</div>
</template>

<style scoped>
.margin10{
  margin: 8px;
}

.textContentEng{
  font-family:HelveticaNeueBoldItalic;
  background-color: yellow;
  font-size: 23px;
  color:black;
  overflow: hidden;white-space: nowrap;
  overflow:hidden;white-space:nowrap;
  text-overflow: ellipsis;
}
.textContentChinese{
  background-color: yellow;
  font-size: 23px;
  color:black;
  font-family:SourceHanSerifSC-Bold;
  overflow: hidden;white-space: nowrap;
  overflow:hidden;white-space:nowrap;
  text-overflow: ellipsis;
}
.redBorder{
  border: 1px solid red;

}
/* .second_content_1 {
  padding-top: 200px;
}
.second_content_1_1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.second_content_1_1_1 {

  border: 5px rgb(0, 255, 0) solid;

  padding: 20px 20px;
}
.second_content_1_1_1 > div {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
}
.second_content_1_1_1 > div > div {
  color: blue;
  height: 50px;
}
.second_content_2{
  padding: 20px 20px;
  border: 5px rgb(0, 255, 0) solid;
} */
</style>

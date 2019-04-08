<template>

<div style="width:100%;margin-top:9%;color:white; ">
  <a-col style="margin-top:12%;" :xs="{span: 20, offset: 2 }" :sm="{span: 20, offset: 2 }"  :md="{span: 20, offset: 2 }"  :lg="{span: 20, offset: 2 }"  :xl="{span: 14, offset: 5 }">

  <a-row style="">
    <a-col  :xs="22" :sm="11" :md="11" :lg="11" :xl="11"  style="border: 4px rgb(0, 255, 0) solid;">
      <div style="padding:20px">
        <span class="textTitleEng">Jam</span>
        <br />  <br />
        <div style="textContentEng">Jams are yummy, colorful, sticky. It can be used to jam your enemies, causing algoirthm jamming or even mutation. 2W1D Jam enables you unpredictable ways of writing memes, give you the ability to change your appearance and motion without efforts. With 2W1D Jam, you are the king/queen in the online social filed.</div>
        <div style="textContentChinese">
           <br>
           <!-- <br> -->
          <span>果酱</span><br>果酱美味可口，颜色诱人，质地粘稠，容易起到迷惑敌人，干扰堵塞，甚至使敌人基因突变的效果。2W1D果酱是专为二微一抖时代研发的产品，让你拥有变幻莫测的话术，易容、易动作的技能，使你驰骋二微一抖，成为真正的社交达人。
        </div>
      </div>

    </a-col>
    <a-col  :xs="22" :sm="11" :md="11" :lg="11" :xl="{span: 11, offset: 1 }"   style="border: 4px rgb(0, 255, 0) solid;">
      <div style="padding:20px">
      <span class="textTitleEng">Turn from a guest into a host</span>
      <br />  <br />
      <div style="textContentEng">--gain the initiative. This is our tactical spirit and guidance. In the battle with 2W1D, we need to gain the initiative, do not let ourselves being controlled by their algorithms. Challenge it with our jam, jammatize 2W1D. My social platform, my say!</div>
      <div style="textContentChinese">
        <br>
         <br>
        <!-- <br> -->
        <span>反客为主</span><br>
        <span>反客为主是我们的精神策略与指导方针。在与二微一抖算法斗争中，我们要摆脱被算法控制的处境，努力变被动为主动，争取掌握主动权，及时使出果酱让算法果酱化，将它一军，自己的社交平台，自己做主。</span>
         <br>
          <br>
      </div>
    </div>
    </a-col>
  </a-row>
    </a-col>
</div>
</template>
<style scoped>

.textTitleEng{
  font-family:HelveticaNeueBoldItalic;
  font-size:25px;
  lineHeight:30px;
  background-color: #ffff00;
  color: white;
  padding: 5px;
  color: #0300fe;
}
.textContentEng{

  font-family:HelveticaNeueMedium;
  lineHeight:30px;
  font-size:22px;
  color:white;
}
.textContentChinese{
  color:white;
  font-family:SourceHanSerifSC-Bold;
  lineHeight:30px;
  font-size:22px;
  color:white;
}
.second_content_3 {
  /* width: 1024px; */
  padding-top: 400px;
  padding-bottom: 100px;
}
.second_content_3_1 {
  /* width: 1024px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.second_content_3_1_1 {
  border: 5px rgb(0, 255, 0) solid;
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 20px;
}
.second_content_3_1_1 > div:nth-child(1) {
  background-color: #ffff00;
  color: #0300fe;
}
.second_content_3_1_1 > div:nth-child(3) {
  height: 300px;
  color: white;
}
.second_content_3_1_1 > div:nth-child(4) {
  height: 300px;
  color: white;
}
</style>

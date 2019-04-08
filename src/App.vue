<template>

    <div id="app">
      <bsindex/>
    </div>
</template>

<script>
import bsindex from '@/components/bsindex.vue'
import 'ant-design-vue/dist/antd.css'
export default {
  name: 'app',
  components: {
    bsindex
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


#app {
  font-family: HelveticaNeue，SourceHanSerifSC-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
  margin:0px;
  padding: 0px;

}
*, p, div {
    margin: 0;
    padding: 0px;
    user-select: text !important;
    -moz-user-select: text !important;
    -webkit-user-select: text !important;
}

#slider{
  background-color: rgb(0, 255, 0) !important;
}
.vue-slide-bar-process{
  background-color: rgb(0, 0, 255) !important;
}
.vue-slide-bar-tooltip{
  background-color: rgb(0, 255, 0) !important;
  border-color:  rgb(0, 255, 0) !important;
  color: rgb(0,0,0) !important;
}
@font-face {
font-family:HelveticaNeueBoldItalic;
src: url("../public/HelveticaNeueBoldItalic.ttf");

}

@font-face {
font-family:HelveticaNeueMedium;
src: url("../public/HelveticaNeueMedium.ttf");
}

@font-face {
font-family:SourceHanSerifSC-Bold;
src: url("../public/SourceHanSerifSC-Bold.otf");
}

h2{
  background-color: yellow;
}
</style>

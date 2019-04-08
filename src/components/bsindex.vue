<template>
  <div>
    <section class="thirth">
   <t11/>
    </section>
    <section class="second">
      <t1 />
      <t2 />
      <t3 />
    </section>
    <section class="first">
      <t4 />
      <t5 />
      <t6 />
    </section>
  </div>
</template>

<script>
import t1 from '@/components/1.vue'
import t11 from '@/components/11.vue'
import t2 from '@/components/2.vue'
import t3 from '@/components/3.vue'
import t4 from '@/components/4.vue'
import t5 from '@/components/5.vue'
import t6 from '@/components/6.vue'
export default {
  components: {
    t1,
    t2,
    t3,
    t4,
    t5,
    t6,
    t11
  }
}
</script>
<style scoped>
.first {
  min-width: 375px;
  /* max-width: 1200px; */
  background-color: #000000;
  background-image: url(../../public/7bgnew.jpg);
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 0px;
}
.second {
  min-width: 375px;
  /* max-width: 1200px; */
  height: auto;
  background-image: url(../../public/bg2.jpg);
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 0px;
}
.thirth {
  height: auto;
  width: 100%;
  /* margin-bottom:-5px; */
}
::-webkit-scrollbar {
  display: none;
}
</style>

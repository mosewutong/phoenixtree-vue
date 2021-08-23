<template>
  <phoenixtree-layout :noPadding='true' :noContentPadding="true">
    <template v-slot:Frame-content>
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </template>
  </phoenixtree-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

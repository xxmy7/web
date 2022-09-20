<template>
  <NavBar v-if="!$route.meta.showNav"/>
  <router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap-fileinput/css/fileinput.min.css"
import "bootstrap-fileinput/js/fileinput.min"
import "bootstrap-fileinput/js/locales/zh"

export default {
  components: {
    NavBar
  },
}
</script>

<style>
body {
}
</style>

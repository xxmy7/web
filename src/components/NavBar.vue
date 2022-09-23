<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Lost and Found</router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="route_name == 'record_index' ? 'nav-link active' : ' nav-link'"
                         :to="{ name: 'record_index' }">寻东问西
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'map_index' ? 'nav-link active' : ' nav-link'"
                         :to="{ name: 'map_index' }">事件地图
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'announcement_index' ? 'nav-link active' : ' nav-link'"
                         :to="{ name: 'announcement_index' }">通知公告
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-if="$store.state.user.is_login">
          <li class="nav-item" style="margin-right: 20px">
            <div class="row">
              <i class="bi bi-bell position-relative" style="color: white; font-size: 20px; line-height: 40px; margin: 0;padding: 0">
              <div class="position-absolute start-100 translate-middle badge bg-danger rounded-pill" style="top: 10px;font-size: 2px;">
                  99+
                <span class="visually-hidden">unread messages</span>
              </div>
              </i>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              {{ $store.state.user.username }}
              <img :src="$store.state.user.photo" alt="" class="nav-user-photo">
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" :to="{ name: 'user_space_index' }">我的空间</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'user_info_index' }">个人信息</router-link>
              </li>
              <li class="divider"></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#" @click="logout">退出</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav" v-else-if="!$store.state.user.pulling_info">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user_account_login' }" role="button">
              登录
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user_account_register' }" role="button">
              注册
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {useRoute} from 'vue-router';
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    let route_name = computed(() => route.name)

    const logout = () => {
      store.dispatch("logout");
    }

    return {
      route_name,
      logout,
    }
  }
}
</script>

<style scoped>

img.nav-user-photo {
  width: 30px;
  border-radius: 50%;
  padding-left: 2px;
}
</style>
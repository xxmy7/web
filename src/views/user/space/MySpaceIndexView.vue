<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="card" style="margin-top: 20px;">
          <div class="card-body">
            <router-link :to="{name:'user_info_index'}"> <img :src="$store.state.user.photo" alt="" style="width: 100%;"></router-link>
            <hr>
            <div class="caption">
              <p class="text-center" style="font-size: 18px; font-weight: 700;">{{$store.state.user.username}}</p>
              <p class="text-center" style="font-size: 14px; "></p>
            </div>
            <hr>
            <div class="row" style="text-align: center">
              <div class="col-4">
                <a href="#" style="text-decoration: none;">
                  <div class="user-myspace-base-person-info-bottom-item" title="15">
                    <div class="user-myspace-base-person-info-bottom-item-title">关注数</div>
                    <div class="user-myspace-base-person-info-bottom-item-content">15</div>
                  </div>
                </a>
              </div>
              <div class="col-4">
                <a href="#" style="text-decoration: none;">
                  <div class="user-myspace-base-person-info-bottom-item" title="10">
                    <div class="user-myspace-base-person-info-bottom-item-title">发布数</div>
                    <div class="user-myspace-base-person-info-bottom-item-content user-myspace-base-person-info-bottom-item-content-cnt">
                      10
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-4">
                <div class="user-myspace-base-person-info-bottom-item-normal" title="2312">
                  <div class="user-myspace-base-person-info-bottom-item-title">阅读量</div>
                  <div class="user-myspace-base-person-info-bottom-item-content">999</div>
                </div>
              </div>
            </div>
            <br>
            <p class="personal-info text-right" style="font-size: 12px; color: grey; padding-top: 5px;" title="在线">
              在线&nbsp;
              <span class="glyphicon glyphicon-ok" style="background-color: springgreen; color: white; min-width: 10px; border-radius: 20px; padding: 2px; font-size: 5px;"></span>
            </p>

          </div>
        </div>
      </div>

      <div class="col-9">
        <div class="card" style="margin-top: 20px;">
          <div class="row" style="margin-left: 20px; margin-right: 20px;">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <router-link :class="route_name == 'user_space_publish' ? 'nav-link active' : ' nav-link'" aria-current="page" :to="{name:'user_space_publish'}">我的发布</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'user_space_notification' ? 'nav-link active' : ' nav-link'" :to="{name:'user_space_notification'}">通知消息</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import {computed} from "vue";

export default {
  setup(){
    const route = useRoute();
    let route_name = computed(() => route.name)
    return {
      route_name,
    }
  }
}
</script>

<style scoped>
.user-myspace-base-person-info-bottom-item {
  font-size: 13px;
  font-family: Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  cursor: pointer;
}

.user-myspace-base-person-info-bottom-item-normal {
  font-size: 13px;
  font-family: Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}

.user-myspace-base-person-info-bottom-item-title {
  color: #99a2aa;
}

.user-myspace-base-person-info-bottom-item-content {
  margin-top: 5px;
  color: #222;
}

a{
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  box-sizing: border-box;
  background-color: transparent;
  text-decoration: none;
}

.text-right {
  text-align: right;
}

.personal-info {
  font-size: 20px;
}

.glyphicon{
  top: 0;
  position: relative;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.glyphicon-ok:before {
  content: "\e013";
}

/*nav tab*/
.nav-tabs>li>a {
  font-size: 18px;
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.nav>li>a {
  position: relative;
  display: block;
  padding: 10px 15px;
}

</style>
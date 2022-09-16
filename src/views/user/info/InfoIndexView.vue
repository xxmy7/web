<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="card" style="margin-top: 20px;">
          <div class="card-body">
            <img :src="$store.state.user.photo" alt="" style="width: 100%;">
            <hr>
            <div align="center">
              <form id="form_submit_photo" class="form-horizontal" role="form" action="/user/profile/saverawphoto/"
                    method="post" enctype="multipart/form-data">
                <input type="hidden" name="csrfmiddlewaretoken"
                       value="VObAab53wdJGT5G59fBAEJLLdt3YuKIFqotm4Ac95PLYoJ6ytCqBLnYGi19BeJcz">
                <label class="btn btn-default btn-file">
                  更新头像
                  <input id="ingredient_file" type="file" style="display: none;" name="photo" required="">
                </label>
              </form>
              <div id="modal-info" class="modal modal-message modal-info fade" style="display: none;"
                   aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <i class="fa fa-envelope"></i>
                    </div>
                    <div id="clip_photo_title" class="modal-title">图片上传中</div>

                    <div class="modal-body">
                      <div id="progress-wrp">
                        <div class="progress-bar"></div>
                        <div class="status">0%</div>
                      </div>
                      <div align="center">
                        <img id="uploaded_photo" src="">
                        <img id="uploaded_photo_loading" src="https://cdn.acwing.com/static/web/gif/img_loading.gif"
                             style="display: none">
                      </div>
                    </div>
                    <div class="modal-footer">
                      <form id="form_upload_clippedphoto_btn" class="form-horizontal" role="form"
                            action="/user/profile/saveclippedphoto/" method="post" enctype="multipart/form-data">
                        <input type="hidden" name="csrfmiddlewaretoken"
                               value="VObAab53wdJGT5G59fBAEJLLdt3YuKIFqotm4Ac95PLYoJ6ytCqBLnYGi19BeJcz">
                        <button id="upload_clippedphoto_btn" type="button" class="btn btn-info" data-dismiss="modal">
                          选定头像
                        </button>
                      </form>
                    </div>
                  </div> <!-- / .modal-content -->
                </div> <!-- / .modal-dialog -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-9">
        <div class="card" style="margin-top: 20px;">
            <div class="row" style="margin-left: 20px; margin-right: 20px;">
              <h3>个人信息</h3>
              <hr>
              <div class="row justify-content-md-center">
                <div class="col-6">
                  <form @submit.prevent="login">
                    <div class="mb-3">
                      <label for="username" class="form-label">用户名</label>
                      <input v-model="username" type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">电话号码</label>
                      <input v-model="phone" type="text" class="form-control" id="phone" placeholder="请输入电话号码">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">邮箱地址</label>
                      <input v-model="email" type="password" class="form-control" id="email"
                             placeholder="请输入邮箱地址">
                    </div>
                    <div class="error_message">{{ error_message }}</div>
                    <div style="text-align: center; margin-bottom: 20px">
                      <button type="submit" class="btn btn-success" style="border-radius: 5px;">更新信息</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

import {useStore} from "vuex";
import {ref} from "vue";

export default {
  setup() {
    const store = useStore();
    let username = ref('');
    let email = ref('');
    let phone = ref('');
    let error_message = ref('');

    const refreshInfo = ()=>{
      username.value = store.state.user.username;
      email.value = store.state.user.email;
      phone.value = store.state.user.phone;
    }

    refreshInfo();

    return {
      username,
      email,
      phone,
      error_message,
      refreshInfo
    }
  }
}
</script>

<style scoped>
label{
  font-weight: bold;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.btn-file {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}


</style>
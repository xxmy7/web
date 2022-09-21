<template>
  <div>
    <ContentField>
      <div style="padding-left: 20px; padding-right: 20px;">
        <h2 style="margin-top: 10px;">
          {{ record.title }}
          &nbsp;
          <span v-if="parseInt(record.status) === 3" class="label-info" href="#" style="background-color: #5bc0de;">
          已完成
          </span>
          <span v-else-if="parseInt(record.status) === 1" class="label-info" href="#"
                style="background-color: #5cb85c;">
          进行中
          </span>
          <div v-if="parseInt(record.kind) === 0" style="float: right">
            <div class="row label round"
                 style="font-size:18px; background-color: #f54b4b;">寻物启示
            </div>
            <div class="row" style="font-size: 14px;margin:5px 0 0 0;font-weight: bold">ID#F176{{ record.id }}</div>
          </div>
          <div v-else-if="parseInt(record.kind) === 1" style="float: right">
            <div class="row label round"
                 style="font-size:18px; background-color: #84ec9c;">失物招领
            </div>
            <div class="row" style="font-size: 14px;margin:5px 0 0 0;font-weight: bold">ID#F176{{ record.id }}</div>
          </div>
        </h2>
        <div style="color: #999999; font-size:14px;">
          发布者：
          <a href="#">
            <img class="img-circle" :src="record.userPhoto" style="width: 30px;">
            &nbsp;
            <span style="font-size: 18px; color: #337ab7;">{{ record.userName }}</span>
          </a>
          ,&nbsp;
          {{ record.createTime }}
          ,&nbsp;
          阅读&nbsp;{{ record.lookCount }}
        </div>
        <hr style="margin-top: 10px;">
        <div class="photo-group">
          <div class="row" style="margin-bottom: 20px">
            <div v-for="(img, index) in record.images" :key="index" class="col-2" style="margin:0">
              <img :src="img" style="width: 100%; ">
            </div>
          </div>
        </div>
        <hr>
        <p class="card-text ">
          <span style="color: #999999; font-weight: 700;">{{ parseInt(record.kind) === 0 ? "丢失物品: " : "物品: " }}</span>
          {{ record.category }}
        </p>
        <p class="card-text ">
          <span style="color: #999999; font-weight: 700;">{{ parseInt(record.kind) === 0 ? "丢失地点: " : "找到地点: " }}</span>
          {{ record.location }}
        </p>
        <p class="card-text ">
          <span style="color: #999999; font-weight: 700;">{{ parseInt(record.kind) === 0 ? "丢失时间: " : "找到时间: " }}</span>
          {{ record.happenTime }}
        </p>
        <ContentField>
          描述：
          <p>{{ record.about }}</p>
        </ContentField>
        <hr style="  margin-bottom: 2px;">
        <div class="row">
          <div class="col-12">
            <i class="bi bi-envelope gray"></i>
            <span class="gray" style="margin-left: 5px">{{ record.userEmail }}</span>
            <i class="bi bi-phone gray" style="margin-left: 20px;"></i>
            <span class="gray" style="margin-left: 5px">{{ record.userPhone }}</span>
          </div>
        </div>
        <hr style="border: none">
        <button
            v-if="Boolean(parseInt($store.state.user.id) !== parseInt(record.userId) && parseInt(record.kind) === 1 && parseInt(record.status) === 1)"
            class="btn btn-outline-primary" style="margin-right: 20px">认领
        </button>
        <button
            v-if="Boolean(parseInt(record.status) === 3 && parseInt($store.state.user.id) !== parseInt(record.userId) && parseInt(record.kind) === 1)"
            class="btn btn-outline-primary" disabled style="margin-right: 20px">已认领
        </button>

        <button
            v-if="Boolean(parseInt(record.status) === 1 && parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.kind) === 1)"
            class="btn btn-outline-primary" style="margin-right: 20px">确认已认领
        </button>

        <button v-if="parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.status) === 1"
                type="button"
                class="btn btn-outline-secondary" style="margin-right: 20px" data-bs-toggle="modal"
                :data-bs-target="'#record-content-updateModal-'+record.id" @click="open_update_modal()">修改
        </button>
        <button
            v-else-if="Boolean(parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.status) === 3)"
            type="button"
            class="btn btn-outline-secondary" disabled style="margin-right: 20px">修改
        </button>
        <!-- 发布内容Modal -->
        <div class="modal fade" :id="'record-content-updateModal-'+record.id" data-bs-backdrop="static"
             data-bs-keyboard="false" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">发布信息</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="close_update_record_modal()"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label class="form-label">发布类型</label><br>
                    <div class="form-check form-check-inline">
                      <input v-model="recordupdate.type" value="0" class="form-check-input" type="radio"
                             name="flexRadioDefault" id="flexRadioDefault1" checked>
                      <label class="form-check-label" for="flexRadioDefault1">
                        寻物启事
                      </label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-left: 20px">
                      <input v-model="recordupdate.type" value="1" class="form-check-input" type="radio"
                             name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label" for="flexRadioDefault2">
                        失物招领
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="add-record-title" class="form-label">标题</label>
                    <input v-model="recordupdate.title" type="text" class="form-control" id="add-record-title"
                           placeholder="请输入标题">
                  </div>
                  <div class="mb-3">
                    <label for="add-record-category" class="form-label">物品</label>
                    <input v-model="recordupdate.category" type="text" class="form-control" id="add-record-category"
                           placeholder="请输入物品名称">
                  </div>
                  <div class="mb-3">
                    <label v-if="recordupdate.type=== 0" for="add-record-location"
                           class="form-label">丢失地点</label>
                    <label v-else for="add-record-location" class="form-label">找到地点</label>
                    <input v-model="recordupdate.location" type="text" class="form-control" id="add-record-location"
                           placeholder="请输入地点">
                  </div>
                  <div class="mb-3">
                    <label v-if="recordupdate.type===0" for="add-record-time" class="form-label">丢失时间</label>
                    <label v-else for="add-record-time" class="form-label">找到时间</label>
                    <input v-model="recordupdate.time" type="text" class="form-control" id="add-record-time"
                           placeholder="请输入时间">
                  </div>
                  <div class="mb-3">
                    <label for="add-bot-description" class="form-label">内容描述</label>
                    <textarea v-model="recordupdate.description" class="form-control" id="add-bot-description"
                              rows="3"
                              placeholder="请输入描述"></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">上传图片</label>
                    <div class="file-loading">
                      <input id="file" name="file" multiple type="file">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <div class="error-message" style="color: red;">{{ recordupdate.error_message }}</div>
                <button type="button" class="btn btn-primary" @click="update_record">修改</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="close_update_record_modal()">取消
                </button>
              </div>
            </div>
          </div>
        </div>


        <button v-if="parseInt($store.state.user.id) === parseInt(record.userId)" type="button"
                class="btn btn-outline-danger" data-bs-toggle="modal"
                :data-bs-target="'#record-content-deleteModal-'+record.id">删除
        </button>

        <!-- 删除的提示Modal -->
        <div class="modal fade" :id="'record-content-deleteModal-'+record.id" data-bs-backdrop="static"
             data-bs-keyboard="false"
             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">删除发布</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label class="control-label">您确定要删除此条发布内容吗？</label>
                <br>
                <label style="color: #f64646">注意：删除后无法找回</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">返回</button>
                <button type="button" class="btn btn-danger" @click="deleteRecord(record.id)">确认</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentField>

    <!--    评论区-->
    <ContentField>
      <h3 style="font-weight: normal; margin: 10px 0 30px 0;">0 评论</h3>
      <div class="row">
        <div class="col-1" style="text-align: center;">
          <a href="#">
            <img class="img-circle" :src="$store.state.user.photo" style="width:45px; margin-top: 6px;" alt="我的头像">
          </a>
        </div>
        <div class="col-11">
          <form class="comment_reply_form" role="form">
            <textarea class="file-comment" name="content" cols="40" rows="2" maxlength="3000" required="" title="回复"
                      placeholder="在这里写评论...（支持MarkDown和Latex语法）"></textarea>
            <div>
              <button class="btn btn-link" style="border-radius: 5px; float:right">
                提交评论
              </button>
            </div>
          </form>
        </div>

      </div>
    </ContentField>
  </div>
</template>

<script>
import ContentField from "@/components/ContentField";
import $ from "jquery";
import {useStore} from "vuex";
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {Modal} from 'bootstrap/dist/js/bootstrap';
import router from '@/router';


export default {
  components: {
    ContentField
  },
  name: "RecordContentView",

  setup() {
    const store = useStore();
    let record = ref('');

    const route = useRoute();
    const path = route.path;

    const recordupdate = reactive({
      type: 0,
      title: "",
      category: "",
      time: "",
      location: "",
      description: "",
      error_message: "",
      images: [],
    });

    const refresh_record_content = recordId => {
      $.ajax({
        url: `http://127.0.0.1:3000/lostfound/${recordId}`,
        type: "get",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          record.value = resp.data;
          record.value.images = JSON.parse(record.value.images);
        },
        error(resp) {
          console.log(resp);
        }
      })
    }


    refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));

    const deleteRecord = (id) => {
      //实际是更新状态为删除
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound",
        type: "put",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        data: JSON.stringify({
          id: id,
          recordStatus: 0,
        }),
        contentType: "application/json; charset=UTF-8",
        "success": function (resp) {
          if (resp.code === "0") {
            Modal.getInstance('#record-content-deleteModal-' + id).hide();
            router.push({
              name: "record_index"
            });
          } else {
            console.log(resp)
          }
        }
      });
    }

    const open_update_modal = () => {
      console.log("打开了")
      // 属性的重新刷新
      recordupdate.type = record.value.kind;
      recordupdate.title = record.value.title;
      recordupdate.category = record.value.category;
      recordupdate.time = record.value.happenTime;
      recordupdate.location = record.value.location;
      recordupdate.description = record.value.about;
      recordupdate.images = record.value.images;

      let length = recordupdate.images.length;
      let config = [];
      for (let i = 0; i < length; i++) {
        config.push({
          url: 'http://127.0.0.1:3000/files/remove',// 预展示图片的删除调取路径
          key: recordupdate.images[i].split('/')[recordupdate.images[i].split('/').length - 1],
          extra: { //调用删除路径所传参数
            id: record.value.id,
            url: recordupdate.images[i],
          },
          caption: recordupdate.images[i].split('/')[recordupdate.images[i].split('/').length - 1],
        })
      }

      let List = new Array();//定义一个全局变量去接受文件名和id
      // 上传文件的插件
      $('#file').fileinput({
        initialPreviewAsData: true,
        initialPreviewFileType: 'image',
        initialPreview: recordupdate.images,
        enctype: 'multipart/form-data',
        validateInitialCount: true,
        initialPreviewConfig: config,
        // previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",

        overwriteInitial: false,
        language: 'zh',     //设置语言
        dropZoneEnabled: true,      //是否显示拖拽区域
        dropZoneTitle: "可以将图片拖放到这里",    //拖拽区域显示文字
        uploadUrl: 'http://127.0.0.1:3000/files/upload',  //上传路径
        allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg'],   //指定上传文件类型
        maxFileSize: 204800,   //上传文件最大值，单位kb
        uploadAsync: true,  //异步上传
        maxFileCount: 5,    //上传文件最大个数。
        showClose: false,    //右上角的X
        fileActionSettings: {
          showZoom: false,
        },
        ajaxSettings: {
          headers: {
            Authorization: "Bearer " + store.state.user.token
          }
        },
      }).on("fileuploaded", function (event, data, previewId) { //异步上传成功后回调
        let url = data.response.data;
        List.push({ FileName: url, KeyID: previewId })
        store.commit("updateImages", url);
        console.log(store.state.file.images);
        console.log(JSON.stringify(store.state.file.images));
      }).on('filesuccessremove', function (event, id) { //新上传的文件的删除
        //在移除事件里取出所需数据，并执行相应的删除指令
        for (let i = 0; i < List.length; i++) {
          if (List[i].KeyID === id) {
            List.splice(i, 1)
            store.commit("deleteImage", i);
          }
        }
        console.log("删除上传的文件后")
        console.log(List)
        console.log(JSON.stringify(store.state.file.images))
      }).on('filepredelete', function (event, key) {  //就是在删除原图片之前触发，而新选择的图片不会触发。能满足我们的要求。
            console.log('删除前 key = ' + key);
      }).on('filedeleted', function (event, key) {
        console.log('删除后 key = ' + key);
        refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));
      });
    }

    const close_update_record_modal = () => {
      store.commit("clearImages");
      refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));
    }

    const update_record = () => {
      //更新后的图片列表
      let updateImages = [];
      for(let i = 0; i < record.value.images.length; i++){
        updateImages.push(record.value.images[i]);
      }
      for(let i = 0; i < store.state.file.images.length;i++){
        updateImages.push(store.state.file.images[i]);
      }

      $.ajax({
        url: "http://127.0.0.1:3000/lostfound",
        type: "put",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          id: record.value.id,
          userId: store.state.user.id,
          kind: recordupdate.type,
          title: recordupdate.title,
          about: recordupdate.description,
          location: recordupdate.location,
          category: recordupdate.category,
          happenTime: recordupdate.time,
          images: JSON.stringify(updateImages)
        }),
        "success": function (resp) {
          if (resp.code === "0") {
            close_update_record_modal();
            refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));
            $('#file').fileinput('destroy');
            Modal.getInstance('#record-content-updateModal-'+ record.value.id).hide();
            // location.reload();
          } else {
            recordupdate.error_message = resp.msg;
          }
        }
      });
    }

    return {
      record,
      refresh_record_content,
      deleteRecord,
      recordupdate,
      open_update_modal,
      close_update_record_modal,
      update_record,
    }
  },


}
</script>

<style scoped>

img {
  border: 0;
  vertical-align: middle;
}

.img-circle {
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

.file-comment {
  width: 100%;
  padding: .78571429em 1em;
  border: 1px solid rgba(34, 36, 38, .15);
  resize: vertical;
  color: rgba(0, 0, 0, .87);
  box-shadow: 0 0 0 0 transparent inset;
  transition: color .1s ease, border-color .1s ease;
  font-size: 1em;
  line-height: 1.2857;
  border-radius: 4px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.btn-link {
  padding: 5px 10px 0 0;
  color: #95a5a6;
  text-decoration: none;
}

.label-info {
  font-size: 13px;
  display: inline;
  padding: .2em .6em .3em;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

a {
  text-decoration: none;
}

.gray {
  color: #6b737a;
}

.round {
  border-radius: 20px;
}

.label {
  display: inline;
  padding: .2em .6em .3em;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
}

</style>
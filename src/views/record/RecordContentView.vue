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
          发布于: {{ record.createTime }}
          {{ parseInt(record.status) === 1 ? '' : `, 关闭于: ` + record.dealTime }}
          ,
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
          <span style="color: #999999; font-weight: 700;">物品类别:  </span>
          {{ categoryTypeArray[parseInt(record.type) -1]}}
        </p>
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
        <!--        <button-->
        <!--            v-if="Boolean(parseInt($store.state.user.id) !== parseInt(record.userId) && parseInt(record.kind) === 1 && parseInt(record.status) === 1)"-->
        <!--            class="btn btn-outline-primary" style="margin-right: 20px">认领-->
        <!--        </button>-->
        <!--        <button-->
        <!--            v-if="Boolean(parseInt(record.status) === 3 && parseInt($store.state.user.id) !== parseInt(record.userId) && parseInt(record.kind) === 1)"-->
        <!--            class="btn btn-outline-primary" disabled style="margin-right: 20px">已认领-->
        <!--        </button>-->

        <!--        <button-->
        <!--            v-if="Boolean(parseInt(record.status) === 1 && parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.kind) === 1)"-->
        <!--            class="btn btn-outline-primary" style="margin-right: 20px">确认已认领-->
        <!--        </button>-->

        <button
            v-if="Boolean(parseInt(record.status) === 1 && parseInt($store.state.user.id) === parseInt(record.userId))"
            class="btn btn-outline-primary" style="margin-right: 20px"
            data-bs-toggle="modal" :data-bs-target="'#record-content-closeModal-'+record.id">关闭
        </button>

        <!-- 关闭状态的提示Modal -->
        <div class="modal fade" :id="'record-content-closeModal-'+record.id"
             data-bs-keyboard="false"
             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">关闭发布</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label class="control-label">您确定要关闭此条发布内容吗？</label>
                <br>
                <label style="color: #f64646">注意：关闭后无法重新打开，请确认找到丢失物品或已找到失主。</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">返回</button>
                <button type="button" class="btn btn-dark" @click="close_record(record.id)">确认</button>
              </div>
            </div>
          </div>
        </div>

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

        <!-- 发布内容修改的Modal -->
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
                    <label class="form-label">物品类别</label>
                    <select v-model="recordupdate.categoryType" class="form-select" aria-label="Default select example">
                      <option value="" disabled>请选择物品类别</option>
                      <option value="1">卡片证件</option>
                      <option value="2">书籍文具</option>
                      <option value="3">衣服鞋子</option>
                      <option value="4">电子设备</option>
                      <option value="5">各类钥匙</option>
                      <option value="6">其他分类</option>
                    </select>
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
      <h3 style="font-weight: normal; margin: 10px 0 30px 0;">
        {{ comment_num }} 评论
      </h3>
      <div class="row">
        <div class="col-1" style="text-align: center;">
          <a href="#">
            <img class="img-circle" :src="$store.state.user.photo" style="width:45px; margin-top: 6px;" alt="我的头像">
          </a>
        </div>
        <div class="col-11">
            <textarea v-model="rootcommentadd" class="file-comment" name="content" cols="40" rows="2" maxlength="3000"
                      required=""
                      placeholder="在这里写评论...（支持MarkDown和Latex语法）"></textarea>
          <div>
            <button class="btn btn-link" style="border-radius: 5px; float:right" @click="add_root_comment()">
              提交评论
            </button>
          </div>
        </div>
      </div>

      <!--    全部的父评论和子评论-->
      <div v-for="comment in comments" :key="comment.id" style="padding-left: 0px;">
        <!--    父评论-->
        <hr style="margin: 12px 0 12px 0;">
        <div class="row" :id="'comment-'+comment.commentId">
          <div class="col-md-1 col-sm-2 col-xs-3" style="max-width: 60px;">
            <a href="#">
              <img class="img-circle" :src="comment.fromAvatar" style="width:45px">
            </a>
          </div>
          <div class="col-md-11 col-sm-10 col-xs-9">
            <div>
              <a href="#" style="font-size: 15px;">
                {{ comment.fromName }}
              </a>
              &nbsp;
              <span class="comment-title">{{ comment.createTime }}</span>
              &nbsp;&nbsp;
              <a class="comment-title hand-cursor file-comment-reply" :id="`a-reply-`+ comment.commentId"
                 data-bs-toggle="collapse"
                 :href="'#collapseReply'+comment.commentId" @click="click_reply_a">
                回复
              </a>
              <a v-if="parseInt(comment.fromId) === parseInt($store.state.user.id)"
                 class="comment-title hand-cursor file-comment-reply" data-bs-toggle="modal"
                 :data-bs-target="'#root-comment-deleteModal-'+comment.id">
                <i class="bi bi-trash" style="float: right"></i>
              </a>
            </div>
            <div class="comment-content">
              {{ comment.content }}
            </div>
            <div class="collapse" :id="'collapseReply'+comment.commentId">
                <textarea v-model="comment.textarea" class="file-comment" name="content" cols="40" rows="2"
                          maxlength="3000" required="" title="回复"
                          placeholder="在这里写评论...（支持MarkDown和Latex语法）"></textarea>
              <button class="btn btn-link" style="border-radius: 5px;float: right"
                      @click="add_son_comment(comment.textarea,comment.id,comment.commentId,comment.fromId,comment.fromName,comment.fromAvatar)">
                提交评论
              </button>
            </div>
            <!-- 删除评论的提示Modal -->
            <div class="modal fade" :id="'root-comment-deleteModal-'+comment.id" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">删除评论</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <label class="control-label">您确定要删除此条评论吗？</label>
                    <br>
                    <label style="color: #f64646">注意：删除后无法找回</label>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">返回</button>
                    <button type="button" class="btn btn-danger" @click="delete_root_comment(comment.id)">确认</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--        子评论-->
        <div v-for="reply in comment.listCommentsReply" :key="reply.id"
             style="padding-left: 50px; margin: 10px 0 10px 0">
          <div class="row" :id="'comment-'+reply.commentId">
            <div class="col-md-1 col-sm-2 col-xs-3" style="max-width: 40px">
              <a href="#">
                <img class="img-circle" :src="reply.fromAvatar" style="width:30px">
              </a>
            </div>
            <div class="col-md-11 col-sm-10 col-xs-9" style="padding-right: 0;">
              <div>
                <a href="#" style="font-size: 15px;">
                  {{ reply.fromName }}
                </a>
                &nbsp;
                <span class="comment-title">{{ reply.createTime }}</span>
                <span class="comment-title" v-if="reply.toCommentId !== comment.commentId">
                  &nbsp;&nbsp;&nbsp;回复了
                  <a style="cursor:pointer; color: #337ab7;" @click="click_comment_a(reply.toCommentId)">
                      {{ reply.toName }} 的评论
                  </a>
                </span>
                &nbsp;&nbsp;
                <a class="comment-title hand-cursor file-comment-reply" :id="`a-reply-`+reply.commentId"
                   data-bs-toggle="collapse"
                   :href="'#collapseReply'+reply.commentId" @click="click_reply_a">
                  回复
                </a>
                <a v-if="parseInt(reply.fromId) === parseInt($store.state.user.id)"
                   class="comment-title hand-cursor file-comment-reply" data-bs-toggle="modal"
                   :data-bs-target="'#son-comment-deleteModal-'+reply.id">
                  <i class="bi bi-trash" style="float: right;text-align: right"></i>
                </a>
              </div>
              <div class="comment-content">
                {{ reply.content }}
              </div>
              <div class="collapse" :id="'collapseReply'+reply.commentId">
                <textarea v-model="reply.textarea" class="file-comment" name="content" cols="40" rows="2"
                          maxlength="3000" required=""
                          placeholder="在这里写评论...（支持MarkDown和Latex语法）"></textarea>
                <button class="btn btn-link" style="border-radius: 5px;float:right;"
                        @click="add_son_comment(reply.textarea,comment.id,reply.commentId,reply.fromId,reply.fromName,reply.fromAvatar)">
                  提交评论
                </button>
              </div>

              <!-- 删除评论的提示Modal -->
              <div class="modal fade" :id="'son-comment-deleteModal-'+reply.id" data-bs-backdrop="static"
                   data-bs-keyboard="false"
                   tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">删除评论</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <label class="control-label">您确定要删除此条评论吗？</label>
                      <br>
                      <label style="color: #f64646">注意：删除后无法找回</label>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-bs-dismiss="modal">返回</button>
                      <button type="button" class="btn btn-danger"
                              @click="delete_son_comment(reply.id, reply.commentId)">确认
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import {Modal, Collapse} from 'bootstrap/dist/js/bootstrap';
import router from '@/router';
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.min.css'

export default {
  components: {
    ContentField
  },
  name: "RecordContentView",

  setup() {
    const store = useStore();
    let record = ref('');
    let categoryTypeArray= ref(['卡片证件','书籍文具','衣服鞋子','电子设备','各类钥匙','其他分类'])

    const route = useRoute();
    const path = route.path;

    let comments = ref([]);
    let comment_num = ref(0);
    const recordId = parseInt(path.split('/')[path.split('/').length - 1]);
    let rootcommentadd = ref('');
    let soncommentadd = ref([]);

    const recordupdate = reactive({
      type: 0,
      title: "",
      categoryType:"",
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

    const refresh_record_comments = recordId => {
      $.ajax({
        url: `http://127.0.0.1:3000/comments/getList/${recordId}`,
        type: "get",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          comment_num.value = 0;
          comments.value = resp.data;
          for (let i = 0; i < resp.data.length; i++) {
            comment_num.value = comment_num.value + 1 + resp.data[i].listCommentsReply.length
          }
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    refresh_record_content(recordId);
    refresh_record_comments(recordId);

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
      recordupdate.categoryType = record.value.type;
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
        List.push({FileName: url, KeyID: previewId})
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
      for (let i = 0; i < record.value.images.length; i++) {
        updateImages.push(record.value.images[i]);
      }
      for (let i = 0; i < store.state.file.images.length; i++) {
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
          type: recordupdate.categoryType,
          category: recordupdate.category,
          happenTime: recordupdate.time,
          images: JSON.stringify(updateImages)
        }),
        "success": function (resp) {
          if (resp.code === "0") {
            close_update_record_modal();
            refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));
            $('#file').fileinput('destroy');
            Modal.getInstance('#record-content-updateModal-' + record.value.id).hide();
            // location.reload();
          } else {
            recordupdate.error_message = resp.msg;
          }
        }
      });
    }

    const close_record = (recordId) => {
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound/closeRecord",
        type: "put",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          "id": recordId,
          "status": 3,
        }),
        "success": function (resp) {
          if (resp.code === "0") {
            refresh_record_content(recordId);
            Modal.getInstance('#record-content-closeModal-'+recordId).hide();
          }
        },
        "error": function (resp) {
          console.log(resp);
        }
      });
    }

    const click_reply_a = (e) => {
      if (e.target.innerText === "回复") {
        e.target.innerText = "收起"
      } else {
        e.target.innerText = "回复"
      }
    }

    const close_collapse = (id) => {
      Collapse.getInstance(id).hide()
    }

    const add_root_comment = () => {
      $.ajax({
        url: `http://127.0.0.1:3000/comments/addRootComments`,
        type: "post",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        data: JSON.stringify({
          "recordId": record.value.id,
          "fromId": store.state.user.id,
          "fromName": store.state.user.username,
          "fromAvatar": store.state.user.photo,
          "content": rootcommentadd.value
        }),
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success(resp) {
          console.log("添加root评论成功");
          rootcommentadd.value = '';
          refresh_record_comments(recordId);
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const delete_root_comment = (id) => {
      $.ajax({
        url: `http://127.0.0.1:3000/comments/deleteRootComment/${id}`,
        type: "delete",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success() {
          console.log("删除root评论成功");
          refresh_record_comments(recordId);
          Modal.getInstance('#root-comment-deleteModal-' + id).hide();
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const delete_son_comment = (id, commentId) => {
      $.ajax({
        url: `http://127.0.0.1:3000/comments/deleteSonComment/${commentId}`,
        type: "delete",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success() {
          console.log("删除son评论成功");
          refresh_record_comments(recordId);
          Modal.getInstance('#son-comment-deleteModal-' + id).hide();
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const add_son_comment = (text, rootId, toCommentId, toId, toName, toAvatar) => {
      console.log("子评论内容")
      console.log(text)
      $.ajax({
        url: `http://127.0.0.1:3000/comments/addSonComments`,
        type: "post",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        data: JSON.stringify({
          "rootId": rootId,
          "toCommentId": toCommentId,
          "fromId": store.state.user.id,
          "fromName": store.state.user.username,
          "fromAvatar": store.state.user.photo,
          "toId": toId,
          "toName": toName,
          "toAvatar": toAvatar,
          "content": text
        }),
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success(resp) {
          console.log("添加son评论成功");
          rootcommentadd.value = '';
          refresh_record_comments(recordId);
          $('#a-reply-' + toCommentId)[0].innerText = "回复"
          close_collapse('#collapseReply' + toCommentId)
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    // 点击回复了谁的评论，进行闪烁提示
    const click_comment_a = (commentId) => {
      console.log("动了吗")
      console.log(commentId)
      $('#comment-' + commentId).effect('pulsate', "slow");
    }

    return {
      record,
      categoryTypeArray,
      refresh_record_content,
      refresh_record_comments,
      deleteRecord,
      recordupdate,
      open_update_modal,
      close_update_record_modal,
      update_record,
      close_record,
      comments,
      click_reply_a,
      close_collapse,
      rootcommentadd,
      add_root_comment,
      delete_root_comment,
      delete_son_comment,
      soncommentadd,
      add_son_comment,
      click_comment_a,
      comment_num,
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
  color: #337ab7;
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

.comment-title {
  color: #999999;
  font-size: 13px;
}

.file-comment-reply {
  color: #95a5a6;
  cursor: pointer;
}

a.hand-cursor:hover {
  cursor: pointer;
}

.file-comment-reply:hover {
  color: #2AABD2;
  text-decoration: none;
}

.comment-content {
  padding-bottom: 5px;
}
</style>
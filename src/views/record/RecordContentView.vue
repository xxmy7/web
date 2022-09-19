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
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
            <div class="col-2" style="margin:0"><img :src="record.images" style="width: 100%; "></div>
          </div>
        </div>
        <hr>
        <p class="card-text ">
          <span style="color: #999999; font-weight: 700;">物品：</span>
          {{ record.category }}
        </p>
        <p class="card-text ">
          <span style="color: #999999; font-weight: 700;">地点：</span>
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

        <button v-if="parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.status) === 1" type="button"
                class="btn btn-outline-secondary" style="margin-right: 20px">修改
        </button>
        <button v-else-if="Boolean(parseInt($store.state.user.id) === parseInt(record.userId) && parseInt(record.status) === 3)" type="button"
                class="btn btn-outline-secondary" disabled style="margin-right: 20px">修改
        </button>
        <button v-if="parseInt($store.state.user.id) === parseInt(record.userId)" type="button"
                class="btn btn-outline-danger" data-bs-toggle="modal"
                :data-bs-target="'#record-content-deleteModal-'+record.id">删除
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="'record-content-deleteModal-'+record.id" data-bs-backdrop="static" data-bs-keyboard="false"
             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label class="control-label">您确定要删除此条发布内容吗？</label>
                <br>
                <label style="color: #f64646">注意：删除后无法找回</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">返回</button>
                <button type="button" class="btn btn-primary" @click="deleteRecord(record.id)">确认</button>
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
import {useStore} from "vuex";
import $ from "jquery";
import {ref} from "vue";
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

    const refresh_record_content = recordId => {
      $.ajax({
        url: `http://127.0.0.1:3000/lostfound/${recordId}`,
        type: "get",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          record.value = resp.data;
        },
        error(resp) {
          console.log(resp);
        }
      })
    }

    const route = useRoute();
    const path = route.path;

    refresh_record_content(parseInt(path.split('/')[path.split('/').length - 1]));

    const deleteRecord = (id)=>{
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
        contentType:"application/json; charset=UTF-8",
        "success": function (resp) {
          if (resp.code === "0") {
            Modal.getInstance('#record-content-deleteModal-' + id).hide();
            router.push({
              name:"record_index"
            });
          } else{
            console.log(resp)
          }
        }
      });
    }
    return {
      record,
      refresh_record_content,
      deleteRecord,
    }
  }

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
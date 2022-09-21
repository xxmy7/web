<template>
  <div class="container record-card-list">
    <div class="shadow-sm card mx-auto" style="width: 50vw; margin-bottom:20px">
      <div class="card-body">
        <div>
          <ul class="nav nav-tabs" style="font-size: 17px;">
            <li class="active nav-item">
              <a href="#"
                 :class="searchType === 0 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="update_search_type(0)">寻物启示</a>
            </li>
            <li class="nav-item">
              <a href="#"
                 :class="searchType === 1 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="update_search_type(1)">失物招领</a>
            </li>
            <li class="nav-item">
              <a href="#"
                 :class="searchType === -1 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="update_search_type(-1)">我的发布</a>
            </li>
          </ul>
        </div>

        <div style="margin-top:10px; margin-left: 1px">

          <span class="btn btn-info activity_status" @click="click_searchFinish()">已完成</span>
          <i class="bi bi-check" v-if="searchFinish"></i>
          <span class="btn btn-success activity_status" style="margin-left: 12px" @click="click_searchWork()">进行中</span>
          <i class="bi bi-check" v-if="searchWork"></i>

          <!--          搜索框-->
          <a class="" data-bs-toggle="collapse" href="#collapseExample" style="margin-left: 15px">
            <i class="bi bi-arrow-bar-down"></i> 搜索框
          </a>
          <div class="row collapse" id="collapseExample" style="margin-top: 10px;">
            <div class="row" style="margin-top: 10px">
              <div class="col-5">
                <div class="input-group flex-nowrap">
                  <span class="input-group-text">标题</span>
                  <input type="text" class="form-control" v-model="title" placeholder="请输入标题">
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 10px">
              <div class="col-5">
                <div class="input-group  flex-nowrap">
                  <span class="input-group-text">物品</span>
                  <input type="text" class="form-control" v-model="category" placeholder="请输入物品名称">
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 10px">
              <div class="col-5">
                <div class="input-group  flex-nowrap">
                  <span class="input-group-text">地点</span>
                  <input type="text" class="form-control" v-model="location" placeholder="请输入地点名称">
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 10px">
              <div class="col-5">
                <button class="btn btn-sm btn-secondary" style="width: 30%" @click="handle_search_btn()">搜索</button>
                <button class="btn btn-sm btn-dark" style="float:right; width: 30%" @click="empty_search_input()">清空
                </button>
              </div>
            </div>
          </div>
        </div>


        <hr style="margin-top: 10px;">
        <div class="row">
          <div style="margin: 10px 0 0 0; display: flex; flex-direction: row; align-items: center; ">
            <div style="margin-right:10px">
              <a href="#">
                <img class="img-circle" :src="$store.state.user.photo" style="width:45px">
              </a>
            </div>
            <div class="col-11">
              <div class="add-news-text-field" data-bs-toggle="modal" data-bs-target="#add-record">
                {{ $store.state.user.username }},有什么新鲜事想告诉大家!
              </div>

              <!-- 发布内容Modal -->
              <div class="modal fade" id="add-record" tabindex="-1">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">发布信息</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                              @click="close_add_record_modal()"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label">发布类型</label><br>
                          <div class="form-check form-check-inline">
                            <input v-model="recordadd.type" value="lost" class="form-check-input" type="radio"
                                   name="flexRadioDefault" id="flexRadioDefault1" checked>
                            <label class="form-check-label" for="flexRadioDefault1">
                              寻物启事
                            </label>
                          </div>
                          <div class="form-check form-check-inline" style="margin-left: 20px">
                            <input v-model="recordadd.type" value="found" class="form-check-input" type="radio"
                                   name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label" for="flexRadioDefault2">
                              失物招领
                            </label>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="add-record-title" class="form-label">标题</label>
                          <input v-model="recordadd.title" type="text" class="form-control" id="add-record-title"
                                 placeholder="请输入标题">
                        </div>
                        <div class="mb-3">
                          <label for="add-record-category" class="form-label">物品</label>
                          <input v-model="recordadd.category" type="text" class="form-control" id="add-record-category"
                                 placeholder="请输入物品名称">
                        </div>
                        <div class="mb-3">
                          <label v-if="recordadd.type==='lost'" for="add-record-location"
                                 class="form-label">丢失地点</label>
                          <label v-else for="add-record-location" class="form-label">找到地点</label>
                          <input v-model="recordadd.location" type="text" class="form-control" id="add-record-location"
                                 placeholder="请输入地点">
                        </div>
                        <div class="mb-3">
                          <label v-if="recordadd.type==='lost'" for="add-record-time" class="form-label">丢失时间</label>
                          <label v-else for="add-record-time" class="form-label">找到时间</label>
                          <input v-model="recordadd.time" type="text" class="form-control" id="add-record-time"
                                 placeholder="请输入时间">
                        </div>
                        <div class="mb-3">
                          <label for="add-bot-description" class="form-label">内容描述</label>
                          <textarea v-model="recordadd.description" class="form-control" id="add-bot-description"
                                    rows="3"
                                    placeholder="请输入描述"></textarea>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">上传图片</label>
                          <div class="file-loading">
                            <input id="record-add-file" name="file" multiple type="file">
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <div class="error-message" style="color: red;">{{ recordadd.error_message }}</div>
                      <button type="button" class="btn btn-primary" @click="add_record">发布</button>
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                              @click="close_add_record_modal()">取消
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

    <div v-for="record in records" :key="record.id" class="shadow-sm card mx-auto border-gray"
         style="width: 50vw; margin-bottom: 4vh">
      <div class="card-header bg-white" style="margin-bottom: 1px">
        <div class="row">
          <div class="col-6 record-type-lost" v-if="parseInt(record.kind) === 0">
            寻物启示
            <span>ID#F176{{ record.id }}</span>
          </div>
          <div class="col-6 record-type-find" v-else-if="parseInt(record.kind) === 1">
            失物招领
            <span>ID#L324{{ record.id }}</span>
          </div>

          <div class="col-6 record-title">
            <router-link :to="{name:'record_content', params:{recordId:record.id}}" class="detail">
              详情
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div style="display: flex; flex-direction: row; align-items: center; margin-left: 1vw;">
          <img :src="record.userPhoto" alt="" class="card-user-photo">
          <div style="padding-left: 5px;">
            <router-link to="" class="card-username">{{ record.userName }}</router-link>
            <p class="card-time">发布于: {{ record.createTime }}</p>
            <p class="card-time">浏览量：{{ record.lookCount }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="card-body" style="text-align: center">
            <img :src="record.images[0]" style="width: 200px; height:200px">
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-7">
          <div class="card-body">
            <div class="row">
              <h5 class="card-title">{{ record.title }}</h5>
            </div>
            <div v-if="parseInt(record.status) === 1" style="margin-bottom: 20px;">
              <span class="btn btn-success activity_status disabled">进行中</span>
            </div>
            <div v-else-if="parseInt(record.status) === 3" style="margin-bottom: 20px;">
              <span class="btn btn-info activity_status disabled">已完成</span>
              <span class="deal-time"> 结束时间：{{ record.dealTime }}</span>
            </div>
            <p class="card-text ">物品：{{ record.category }}</p>
            <p class="card-text ">地点：{{ record.location }}</p>
            <p class="card-text ">{{ parseInt(record.kind) === 0 ? "丢失时间: " : "找到时间: " }}{{ record.happenTime }}</p>
            <hr style="  margin-bottom: 2px;">
            <i class="bi bi-envelope gray"></i>
            <span class="gray" style="margin-left: 5px">{{ record.userEmail }}</span>
            <i class="bi bi-phone gray" style="margin-left: 20px;"></i>
            <span class="gray" style="margin-left: 5px">{{ record.userPhone }}</span>
            <hr style="  margin-bottom: 0;">
          </div>
        </div>
      </div>
    </div>



<!--    返回最上面链接-->
    <a href="#top" class="back-to-top" style="position:fixed;right:2vw;bottom:2vh;">
      <i class="bi bi-arrow-bar-up" style="font-size: 5vh"></i>
    </a>
    <!--    页数选择-->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" @click="click_page(-2)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li :class="`page-item ` + page.is_active" v-for="page in pages" :key="page.number"
            @click="click_page(page.number)">
          <a class="page-link" href="#">{{ page.number }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" @click="click_page(-1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
import $ from "jquery";
import {reactive} from "vue";
import {Modal} from 'bootstrap/dist/js/bootstrap';

export default {
  components: {},

  setup() {
    const store = useStore();
    let records = ref([]);
    let current_page = 1;
    let total_records = 0;
    let pages = ref([]);
    let title = ref('');
    let category = ref('');
    let location = ref('');
    let searchFinish = ref(true);
    let searchWork = ref(true);
    let searchType = ref(0);


    const recordadd = reactive({
      type: "lost",
      title: "",
      category: "",
      time: "",
      location: "",
      description: "",
      error_message: "",
    });

    const refresh_records = () => {
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound/getlist",
        type: "get",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        data: {
          type: 0, //默认寻物启事
          state: 0, //进行的和已完成的都找
        },
        "success": function (resp) {
          let tmp = JSON.parse(JSON.stringify(resp.data.records));
          for (let i = 0; i < tmp.length; i++) {
            tmp[i].images = JSON.parse(tmp[i].images);
          }
          records.value = tmp;
          total_records = parseInt(resp.data.records_count);
        }
      });
    }

    refresh_records();

    const click_page = page => {
      if (page === -2) page = current_page - 1;
      else if (page === -1) page = current_page + 1;
      let max_pages = parseInt(Math.ceil(total_records / 10));

      if (page >= 1 && page <= max_pages) {
        pull_page(page);
      }
    }

    const pull_page = page => {
      current_page = page;
      let searchKind;
      if (searchFinish.value && searchWork.value) {
        searchKind = 0;
      } else if (searchFinish.value) {
        searchKind = 2;
      } else if (searchWork.value) {
        searchKind = 1;
      } else {
        searchKind = -1;
      }

      if (searchType.value === -1) {
        $.ajax({
          url: "http://127.0.0.1:3000/lostfound/getlist",
          data: {
            pageNum: page,
            type: searchType.value,
            title: title.value,
            category: category.value,
            location: location.value,
            state: searchKind,
            id: store.state.user.id,
          },
          type: "get",
          headers: {
            Authorization: "Bearer " + store.state.user.token,
          },
          success(resp) {
            let tmp = JSON.parse(JSON.stringify(resp.data.records));
            for (let i = 0; i < tmp.length; i++) {
              tmp[i].images = JSON.parse(tmp[i].images);
            }
            records.value = tmp;
            total_records = parseInt(resp.data.records_count);
            update_pages();
          },
          error(resp) {
            console.log(resp);
          }
        })
      } else {
        $.ajax({
          url: "http://127.0.0.1:3000/lostfound/getlist",
          data: {
            pageNum: page,
            type: searchType.value,
            title: title.value,
            category: category.value,
            location: location.value,
            state: searchKind,
          },
          type: "get",
          headers: {
            Authorization: "Bearer " + store.state.user.token,
          },
          success(resp) {
            let tmp = JSON.parse(JSON.stringify(resp.data.records));
            for (let i = 0; i < tmp.length; i++) {
              tmp[i].images = JSON.parse(tmp[i].images);
            }
            records.value = tmp;
            total_records = parseInt(resp.data.records_count);
            update_pages();
          },
          error(resp) {
            console.log(resp);
          }
        })
      }
    }

    //pull_pages里调用，用来刷新页数
    const update_pages = () => {
      let max_pages = parseInt(Math.ceil(total_records / 10));
      let new_pages = [];
      for (let i = current_page - 2; i <= current_page + 2; i++) {
        if (i >= 1 && i <= max_pages) {
          new_pages.push({
            number: i,
            is_active: i === current_page ? "active" : "",
          });
        }
      }
      pages.value = new_pages;
    }

    pull_page(current_page);

    //清空搜索框的输入
    const empty_search_input = () => {
      title.value = '';
      category.value = '';
      location.value = '';
    }

    const click_searchFinish = () => {
      searchFinish.value = !searchFinish.value;
      current_page = 1;
      pull_page(current_page);
    }

    const click_searchWork = () => {
      searchWork.value = !searchWork.value;
      current_page = 1;
      pull_page(current_page);
    }

    const update_search_type = (type) => {
      searchType.value = type;
      current_page = 1;
      pull_page(current_page);
    }

    const handle_search_btn = () => {
      current_page = 1;
      pull_page(current_page);
    }

    const close_add_record_modal = () => {
      $(".fileinput-remove-button").click();  //模拟移除按钮单击事件
      store.commit("clearImages");
    }

    const add_record = () => {
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound/add",
        type: "post",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          userId: store.state.user.id,
          kind: recordadd.type === 'lost' ? 0 : 1,
          title: recordadd.title,
          about: recordadd.description,
          location: recordadd.location,
          category: recordadd.category,
          happenTime: recordadd.time,
          images: JSON.stringify(store.state.file.images)
        }),
        "success": function (resp) {
          if (resp.code === "0") {
            recordadd.type = "lost";
            recordadd.title = "";
            recordadd.category = "";
            recordadd.time = "";
            recordadd.location = "";
            recordadd.description = "";
            recordadd.error_message = "";
            close_add_record_modal();
            refresh_records();
            Modal.getInstance("#add-record").hide();
          } else {
            recordadd.error_message = resp.msg;
          }
        }
      });
    }



    return {
      records,
      refresh_records,
      pages,
      click_page,
      title,
      category,
      location,
      empty_search_input,
      searchFinish,
      searchWork,
      click_searchFinish,
      click_searchWork,
      searchType,
      update_search_type,
      handle_search_btn,
      close_add_record_modal,
      recordadd,
      add_record,
    }
  },

  mounted() {
    const store = useStore();
    $('#record-add-file').fileinput({
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
    }).on("fileuploaded", function (event, data) { //异步上传成功后回调
      let url = data.response.data;
      store.commit("updateImages", url);
      console.log(store.state.file.images);
      console.log(JSON.stringify(store.state.file.images));
    });
  }
}
</script>

<style scoped>
div.record-card-list {
  margin-top: 20px;
}

div.record-type-lost {
  color: #ea3737;
  font-weight: bold;
  font-size: 18px;
}

div.record-type-find {
  color: #41e884;
  font-weight: bold;
  font-size: 18px;
}

div.record-type-find span,
div.record-type-lost span {
  color: black;
}

div.record-title {
  text-align: right;
  font-size: 18px;
  font-weight: bold;
}

div.record-title a:hover {
  color: #7d8ee1;
}

a {
  text-decoration: none;
}

.detail {
  color: black;
}

.detail:hover {
  color: #7d8ee1;
}

img.card-user-photo {
  width: 50px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

p.card-time {
  font-size: 12px;
  color: #6c757d;
  padding: 0;
  margin: 0;
  line-height: 15px;
}

span.deal-time {
  font-size: 12px;
  color: #6c757d;
  padding: 0;
  margin: 0;
  line-height: 15px;
  margin-left: 20px;
}

.card-username {
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: black;
}

h5.card-title {
  margin-bottom: 5px;
  font-weight: bold;
}

/*.btn-info {*/
/*  color: #fff;*/
/*  background-color: #5bc0de;*/
/*  border-color: #46b8da;*/
/*}*/

.btn-info:hover {
  color: #fff;
  background-color: #6c9cab;
  border-color: #6c9cab;
}

.btn-info {
  color: #fff;
  background-color: #4f77f1;
  border-color: #4f77f1;
}

/*.btn-success {*/
/*  color: #fff;*/
/*  background-color: #5cb85c;*/
/*  border-color: #4cae4c;*/
/*}*/

.btn-success:hover {
  color: #fff;
  background-color: #59ab59;
  border-color: #59ab59;
}

.btn-success {
  color: #fff;
  background-color: #41e884;
  border-color: #41e884;
}


span.activity_status {
  font-size: 12px;
  padding: 1px 10px 1px 10px;
  border-radius: 5px;
  font-weight: 700;
}

p.card-text {
  line-height: 12px;
}

.gray {
  color: #6b737a;
}

/*nav tab*/
.nav-tabs > li > a {
  font-size: 18px;
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}

.img-circle {
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

.add-news-text-field {
  background-color: #F0F2F5;
  cursor: pointer;
  height: 45px;
  border-radius: 50px;
  padding: 10px 10px 10px 15px;
  font-size: 20px;
  color: #656768;
}
</style>
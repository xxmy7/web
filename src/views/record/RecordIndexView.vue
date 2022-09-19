<template>
  <div class="container record-card-list">
    <div class="shadow-sm card mx-auto" style="width: 50vw; margin-bottom:20px">
      <div class="card-body">
        <div>
          <ul class="nav nav-tabs" style="font-size: 17px;">
            <li class="active nav-item">
              <a href="#"
                 :class="searchType === 0 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="updateSearchType(0)">寻物启示</a>
            </li>
            <li class="nav-item">
              <a href="#"
                 :class="searchType === 1 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="updateSearchType(1)">失物招领</a>
            </li>
            <li class="nav-item">
              <a href="#"
                 :class="searchType === -1 ? 'user-myspace-base-subtitle nav-link active':'user-myspace-base-subtitle nav-link'"
                 @click="updateSearchType(-1)">我的发布</a>
            </li>
          </ul>
        </div>

        <div style="margin-top:10px; margin-left: 1px">

          <span class="btn btn-info activity_status" @click="click_searchFinish()">已完成</span>
          <i class="bi bi-check" v-if="searchFinish"></i>
          <span class="btn btn-success activity_status" style="margin-left: 12px" @click="click_searchWork()">进行中</span>
          <i class="bi bi-check" v-if="searchWork"></i>
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
                <button class="btn btn-sm btn-dark" style="float:right; width: 30%" @click="emptySearchInput()">清空
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
              <div class="add-news-text-field">
                {{ $store.state.user.username }},有什么新鲜事想告诉大家!
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
            <img :src="record.images" alt="..." style="width: 200px; height:200px">
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
          records.value = resp.data.records;
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

      if(searchType.value === -1) {
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
            records.value = resp.data.records;
            total_records = parseInt(resp.data.records_count);
            update_pages();
          },
          error(resp) {
            console.log(resp);
          }
        })
      }
      else{
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
            records.value = resp.data.records;
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
    const emptySearchInput = () => {
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

    const updateSearchType = (type) => {
      searchType.value = type;
      current_page = 1;
      pull_page(current_page);
    }

    const handle_search_btn = () => {
      current_page = 1;
      pull_page(current_page);
    }

    return {
      records,
      refresh_records,
      pages,
      click_page,
      title,
      category,
      location,
      emptySearchInput,
      searchFinish,
      searchWork,
      click_searchFinish,
      click_searchWork,
      searchType,
      updateSearchType,
      handle_search_btn,
    }
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
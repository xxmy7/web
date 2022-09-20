<template>
  <div class="container" style="margin-top: 20px; padding:0">
    <table class="table table-hover">
      <thead style="text-align: center">
      <tr>
        <th scope="col">类别</th>
        <th scope="col">标题</th>
        <th scope="col">物品</th>
        <th scope="col">地点</th>
        <th scope="col">发布时间</th>
        <th scope="col">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="record in records" :key="record.id">
        <td :style="parseInt(record.kind) === 0 ? 'color:#ec1e1e;' : 'color:#63d063;'">
          {{ parseInt(record.kind) === 0 ? "寻物启事" : "失物招领" }}
        </td>
        <td>{{ record.title }}</td>
        <td>{{ record.category }}</td>
        <td>{{ record.location }}</td>
        <td>{{ record.createTime }}</td>
        <td>
          <router-link :to="{name:'record_content',params:{recordId:record.id}}" class="btn btn-primary btn-sm"
                       style="margin-right:10px;background-color: #6686e1">详情
          </router-link>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal"
                  :data-bs-target="'#mypub-deleteModal-'+record.id">
            删除
          </button>

          <!-- Modal -->
          <div class="modal fade" :id="'mypub-deleteModal-'+record.id" data-bs-backdrop="static" data-bs-keyboard="false"
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
                  <button type="button" class="btn btn-primary" @click="deletePub(record.id)">确认</button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <!--    页数选择-->
    <nav aria-label="Page navigation example" style="float: right">
      <ul class="pagination">
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
import {useStore} from "vuex";
import {ref} from "vue";
import $ from "jquery";
import {Modal} from 'bootstrap/dist/js/bootstrap';

export default {
  setup() {
    const store = useStore();
    let records = ref([]);
    let current_page = 1;
    let total_records = 0;
    let pages = ref([]);

    const refresh_records = () => {
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound/getlist",
        type: "get",
        headers: {
          authorization: "Bearer " + store.state.user.token,
        },
        data: {
          pageNum: current_page,
          id: store.state.user.id,
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
      $.ajax({
        url: "http://127.0.0.1:3000/lostfound/getlist",
        data: {
          pageNum: page,
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

    const deletePub = (id) => {
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
            Modal.getInstance('#mypub-deleteModal-' + id).hide();
            refresh_records();
          } else{
            console.log(resp)
          }
        }
      });
    }
    return {
      records,
      refresh_records,
      pages,
      click_page,
      deletePub,
    }
  }
}
</script>

<style scoped>

</style>
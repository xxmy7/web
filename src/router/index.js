import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";

import NotFound from '../views/error/NotFound'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import RecordContentView from "@/views/record/RecordContentView";
import RecordIndexView from "@/views/record/RecordIndexView";
import MapIndexView from "@/views/map/MapIndexView";
import InfoIndexView from "@/views/user/info/InfoIndexView";
import MySpaceIndexView from "@/views/user/space/MySpaceIndexView";
import PublishView from "@/views/user/space/publish/PublishView";
import NotificationView from "@/views/user/space/notification/NotificationView";
import AnnouncementIndexView from '@/views/announcement/AnnouncementIndexView';
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/record",
    meta: {
      requestAuth: false,
    }
  },
  {
    path: "/record",
    name: "record_index",
    component: RecordIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/map",
    name: "map_index",
    component: MapIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/announcement",
    name: "announcement_index",
    component: AnnouncementIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/record/:recordId",
    name: "record_content",
    component: RecordContentView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/user/myspace",
    name: "user_space_index",
    component: MySpaceIndexView,
    meta: {
      requestAuth: true,
    },
    redirect: "/user/myspace/publish",
    children:[
      {
        path: "/user/myspace/publish",
        name: "user_space_publish",
        component:  PublishView,
        meta: {
          requestAuth: true,
        }
      },
      {
        path: "/user/myspace/notification",
        name: "user_space_notification",
        component: NotificationView,
        meta: {
          requestAuth: true,
        }
      }
    ]
  },
  {
    path: "/user/info",
    name: "user_info_index",
    component: InfoIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: "/user/account/login",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: {
      requestAuth: false,
      //showNav: true, //由于其他组件未定义此showNav，$route.meta.showNav的值为"undefined"即为false,
    }
  },
  {
    path: "/user/account/register",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: {
      requestAuth: false,
      // showNav: true,
    }
  },
  {
    path: "/404/",
    name: "not_found_index",
    component: NotFound,
    meta: {
      requestAuth: false,
      showNav: true,
    }
  },
  {
    path: "/:cathAll(.*)",
    redirect: "/404/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log("from: " + from.name)
  console.log("to: " + to.name)

  if (to.meta.requestAuth && !store.state.user.is_login) {
    localStorage.setItem("toPageName", to.name);
    localStorage.setItem("toPageParam",JSON.stringify(to.params));
    next({name: "user_account_login"});
  } else {
    next();
  }
})


export default router

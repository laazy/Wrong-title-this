import Vue from 'vue'
import Router from 'vue-router'
import Member from "../components/member/member"
import User from "../components/user"
import Setting from "../components/setting/setting"
import Question from "../components/question/question_view"
import Search from "../components/search/search"
import Admin from "../components/admin"
import MemberList from "../components/member_manage/member_list"
import QuesList from "../components/question/question_list"
import Sat from "../components/question/statistics"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Member',
      component: Member
    },
    {
      path:'/admin',
      name:'Admin',
      component: Admin,
      children:[
        {
          path:'question,',
          component: QuesList
        },
        {
          path:"member",
          component: MemberList
        },
        {
          path:"statistics",
          component: Sat
        },
        {
          path:"search",
          component:Search
        }
      ]
    },
    {
      path:'/main/',
      name:"User",
      component: User,
      children:[
        {
          path:'setting',
          component: Setting
        },
        {
          path:'question',
          component: Question
        },
        {
          path:'search',
          component:Search
        }
      ]

    }
  ]
})

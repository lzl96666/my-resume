import Vue from "vue";
import Router from "vue-router";
//组件
import MyResume from "@/views/MyResume";
import My from "@/views/my";
import Js from "@/views/js";
import MyNotes from "@/views/MyNotes/MyNotes";
import NotesDetail from "@/views/MyNotes/notesDetail";
import Messages from "@/views/messages/messages";
import Login from "@/views/Login";
Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "",
      name: "myResume",
      component: MyResume
    },
    {
      path: "/my",
      name: "my",
      component: My
    },
    {
      path: "/js",
      name: "js",
      component: Js
    },
    {
      path: "/myNotes",
      name: "myNotes",
      component: MyNotes
    },
    {
      path: "/notesDetail",
      name: "notesDetail",
      component: NotesDetail
    },
    {
      path: "/messages",
      name: "messages",
      component: Messages
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

export default router;

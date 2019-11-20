/*
 * @Author: ChaiHongJun
 * @Date: 2019-11-20 19:34:16
 * @LastEditTime: 2019-11-20 20:24:44
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import VueRouter from "vue-router";
import CinemaRouter from "./cinema";
import MovieRouter from "./movie";
import ProfileRouter from "./profile";

Vue.use(VueRouter);

const routes = [CinemaRouter, MovieRouter, ProfileRouter];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

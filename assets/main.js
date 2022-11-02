import Vue from 'vue';
if(window.location.pathname.includes("admin")) {
    require('./css/admin/style.css');
  }else if(!window.location.pathname.includes("admin")) {
    require('./css/style.css');
  }
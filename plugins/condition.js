import Vue from 'vue'
if(window.location.pathname.includes("template/superadmin")) {
require('~/assets/css/pharmacy_admin/style.css');
} else if(window.location.pathname.includes("template/admin")) {
require('~/assets/css/admin/style.css');
}else if(!window.location.pathname.includes("template/admin") && !window.location.pathname.includes("template/superadmin")) {
require('~/assets/css/style.css');
}
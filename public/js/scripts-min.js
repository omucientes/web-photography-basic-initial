"use strict";var topbar=document.getElementById("topbar"),loginModal=document.getElementById("login-modal"),registerModal=document.getElementById("register-modal"),loginForm=document.getElementById("login-form"),registerForm=document.getElementById("register-form");topbar&&topbar.addEventListener("click",function(t){null!=t.target.parentElement.dataset.type&&("login"==t.target.parentElement.dataset.type?loginModal.classList.add("lightbox--show"):"register"==t.target.parentElement.dataset.type&&registerModal.classList.add("lightbox--show"))}),loginModal&&loginModal.addEventListener("click",function(t){t.target.classList.contains("lightbox")&&loginModal.classList.remove("lightbox--show")}),registerModal&&registerModal.addEventListener("click",function(t){t.target.classList.contains("lightbox")&&registerModal.classList.remove("lightbox--show")}),loginForm&&loginForm.addEventListener("submit",function(t){t.preventDefault(),setTimeout(function(){t.target.button.blur()},200),console.log("SEND")}),registerForm&&registerForm.addEventListener("submit",function(t){t.preventDefault(),setTimeout(function(){t.target.button.blur()},200),console.log("SEND")});var toggleMenu=document.getElementById("toggle-menu"),sidebar=document.getElementById("sidebar");toggleMenu.addEventListener("click",function(t){"toggle-menu"!=t.target.id&&"toggle-menu"!=t.target.parentElement.id||(sidebar.classList.toggle("show"),toggleMenu.classList.toggle("show"))});
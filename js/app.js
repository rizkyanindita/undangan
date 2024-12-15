import { util } from "./util.js";
import { like } from "./like.js";
import { guest } from "./guest.js";
import { theme } from "./theme.js";
import { audio } from "./audio.js";
import { offline } from "./offline.js";
import { comment } from "./comment.js";
import { progress } from "./progress.js";
import { pagination } from "./pagination.js";

document.addEventListener("DOMContentLoaded", async () => {
  await theme.init();
  await audio.init();
  await guest.init();
  await comment.init();
  await offline.init();
  await progress.init();
  await pagination.init();
  await window.AOS.init();

  // app.js
  document.addEventListener("DOMContentLoaded", function () {
    // Application initialization code goes here
    console.log("Application has started!");

    // Call functions to initialize various features of your app
    initializeApp();
  });

  function initializeApp() {
    console.log("App Initialization Logic Here");
    // Place your startup logic or app components initialization here
  }

  window.like = like;
  window.util = util;
  window.guest = guest;
  window.theme = theme;
  window.audio = audio;
  window.comment = comment;
  window.pagination = pagination;
});
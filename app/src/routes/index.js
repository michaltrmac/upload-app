const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const infoController = require("../controllers/info");

let routes = app => {
  router.get("/", homeController.getHome);

  router.get("/info", infoController.getBuildInfo);

  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  return app.use("/", router);
};

module.exports = routes;
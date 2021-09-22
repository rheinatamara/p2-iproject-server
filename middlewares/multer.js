const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadFiles = upload.fields([
  {
    name: "profile_image_url",
    maxCount: 1,
  },
  {
    name: "profile_background_image_url",
    maxCount: 1,
  },
]);

module.exports = uploadFiles;

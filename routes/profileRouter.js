const router = require("express").Router();
const ProfileController = require("../controllers/profileController");
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");
router.get("/myProfile", ProfileController.profile);
router.put("/myProfile", uploadFiles, imageKit, ProfileController.editProfile);
router.get("/profiles", ProfileController.getAllProfiles);
module.exports = router;

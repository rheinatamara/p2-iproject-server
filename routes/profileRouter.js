const router = require("express").Router();
const ProfileController = require("../controllers/profileController");
router.get("/myProfile", ProfileController.profile);
router.put("/myProfile", ProfileController.editProfile);
router.get("/profiles", ProfileController.getAllProfiles);
module.exports = router;

const axios = require("axios");
const FormData = require("form-data");
const imageKit = async (req, res, next) => {
  if (req.files) {
    try {
      let urls = [];
      const files = req.files;
      for (data in files) {
        if (data === "profile_image_url") {
          const file = req.files["profile_image_url"][0];
          if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            const newForm = FormData();
            const encodedFile = file.buffer.toString("base64");
            newForm.append("file", encodedFile);
            newForm.append("fileName", file.originalname);
            const encodedKey = Buffer.from(
              process.env.IMAGE_KIT + ":"
            ).toString("base64");
            const result = await axios({
              method: "POST",
              url: "https://upload.imagekit.io/api/v1/files/upload",
              data: newForm,
              headers: {
                ...newForm.getHeaders(),
                Authorization: `Basic ${encodedKey}`,
              },
            });
            if (result) {
              req.body.profile_image_url = result.data.url;
            }
          }
        } else if (data === "profile_background_image_url") {
          const file = req.files["profile_background_image_url"][0];
          if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            const newForm = FormData();
            const encodedFile = file.buffer.toString("base64");
            newForm.append("file", encodedFile);
            newForm.append("fileName", file.originalname);
            const encodedKey = Buffer.from(
              process.env.IMAGE_KIT + ":"
            ).toString("base64");
            const result = await axios({
              method: "POST",
              url: "https://upload.imagekit.io/api/v1/files/upload",
              data: newForm,
              headers: {
                ...newForm.getHeaders(),
                Authorization: `Basic ${encodedKey}`,
              },
            });
            if (result) {
              req.body.profile_background_image_url = result.data.url;
            }
          }
        } else if (data === "image_url") {
          const allFiles = req.files["image_url"];
          for (file of allFiles) {
            if (
              file.mimetype === "image/jpeg" ||
              file.mimetype === "image/png"
            ) {
              const newForm = FormData();
              const encodedFile = file.buffer.toString("base64");
              newForm.append("file", encodedFile);
              newForm.append("fileName", file.originalname);
              const encodedKey = Buffer.from(
                process.env.IMAGE_KIT + ":"
              ).toString("base64");
              const result = await axios({
                method: "POST",
                url: "https://upload.imagekit.io/api/v1/files/upload",
                data: newForm,
                headers: {
                  ...newForm.getHeaders(),
                  Authorization: `Basic ${encodedKey}`,
                },
              });
              if (result) {
                urls.push(result.data.url);
              }
            }
          }
        }
      }
      req.body.image_url = urls;

      next();
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = imageKit;

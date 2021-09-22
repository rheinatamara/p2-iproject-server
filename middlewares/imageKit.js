const axios = require("axios");
const FormData = require("form-data");
const imageKit = (req, res, next) => {
  if (req.files) {
    try {
      const files = req.files;
      const values = Object.values(files);
      values.map((perArray) => {
        perArray.map(async (item) => {
          if (item.mimetype === "image/jpeg" || item.mimetype === "image/png") {
            const newForm = FormData();
            const encodedFile = item.buffer.toString("base64");
            newForm.append("file", encodedFile);
            newForm.append("fileName", item.originalname);
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
              console.log(result.data);
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = imageKit;

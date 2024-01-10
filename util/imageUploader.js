const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/uploads/',  // You may need to create the 'uploads' folder
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  module.exports=upload
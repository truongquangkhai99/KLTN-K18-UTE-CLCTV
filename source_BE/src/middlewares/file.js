const multer = require('multer');
const httpStatus = require('http-status');
const { parser } = require('../config/file');

const uploadFile = (req, res, next) => {
  const uploadSV = parser.single('user-avatar');
  uploadSV(req, res, function (err) {
    // if (!req.body.con) return res.status(400).send('text is null');
    if (err instanceof multer.MulterError) {
      return res.status(httpStatus[400]).send('File too large');
    }
    if (err) {
      // check if our filetype error occurred
      if (err === 'filetype') return res.status(httpStatus[400]).send('File is invalid');
      // An unknown error occurred when uploading.
      return res.sendStatus(err);
    }
    if (!req.file) return res.status(httpStatus.BAD_REQUEST).send('File not valid');

    // all good, proceed
    next();
  });
};

module.exports = {
  uploadFile,
};

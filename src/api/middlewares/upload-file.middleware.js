// JavaScript source code
const multer = require('multer');

const multipartUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/assets');
        },
        filename: (req, file, cb) => {
            cb(
                null,
                `${file.fieldname}_${Date.now()}.${file.mimetype.split('/')[1]}`
            );
        },
    }),
}).array('files', 12);
console.log(multipartUpload);

module.exports = multipartUpload;

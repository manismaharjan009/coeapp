const multer = require('multer');
const upload = multer({dest: 'uploads/'});


/* NOTE  
  https://github.com/expressjs/multer
  https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
  https://scotch.io/tutorials/express-file-uploads-with-multer#toc-retrieve-list-of-images
  https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
*/
module.exports = {
  uploadSingle: (req, res, next) => {
    console.log(req.file)
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
  },

  uploadMultiple: (upload.array('avatars', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }

    res.send(files)
  })
}
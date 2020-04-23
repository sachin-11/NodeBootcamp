// @desc Get all bootcamps
//@route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps", hello: req.hello });
};

// @desc GET single bootcamp
//@route POST /api/v1/bootcamps
// @access public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get single bootcamp${req.params.id}` });
};

// @desc Create bootcamps
//@route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create bootcamps" });
};

// @desc Update bootcamps
//@route POST /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
};

// @desc delete bootcamps
//@route POST /api/v1/bootcamps
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
};

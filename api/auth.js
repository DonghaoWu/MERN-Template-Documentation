const router = require("express").Router();

//@route   Get api/auth
//@desc    Authenticate user & get token
//@access  Public

router.get(`/`, (req, res) =>{
  res.send(`This is Auth route.`)
})

module.exports = router;
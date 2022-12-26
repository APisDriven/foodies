const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await bcrypt.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


// Router for Registration
router.post('/register', async(req, res, next)=>{
  //res.status(201).json(req.body);
  //add new user and return 201
  const salt = await bcrypt.genSalt(10)
  var usr = {
    first_name : req.body.firstName,
    last_name : req.body.lastName,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await User.create(usr);
  res.status(201).json(created_user);
});



module.exports = router;

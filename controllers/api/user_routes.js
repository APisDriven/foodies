const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { append } = require("express/lib/response");

//http://localhost:3001/api/users/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

<<<<<<< HEAD
// // Router for Registration
// router.post("/register", async (req, res, next) => {
//   //res.status(201).json(req.body);
//   //add new user and return 201
//   const salt = await bcrypt.genSalt(10);
//   var usr = {
//     first_name: req.body.firstName,
//     last_name: req.body.lastName,
//     email: req.body.email,
//     password: await bcrypt.hash(req.body.password, salt),
//   }
// })

=======
>>>>>>> eefa6622982e78088436ec649809ab95e63793d2
//http://localhost:3001/api/users/logout
// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.redirect('/');
//       });
//     } else {
//       res.status(404).end();
//       res.redirect('/');
//     }
// })


//http://localhost:3001/api/users/register
router.post('/register', async(req, res)=>{
  try {
    const body = req.body;
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

append.use('/register', (req, res));

module.exports = router;

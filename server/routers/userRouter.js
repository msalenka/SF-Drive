const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register

router.post ('/', async (req, res) => {
    try {
    const {name, birthday, email, telNumber, passNumber, passDate, passEmit, passEmitNum, licNumber, licDate, password, passwordConfirm} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser )
    return res.status (400).json ({ 
        errorMessage: "Аккаунт с этой почтой уже существует"
    })

    const existingUser2 = await User.findOne({ passNumber });
    if (existingUser2 )
    return res.status (400).json ({ 
        errorMessage: "Аккаунт с этим номером паспорта уже существует"
    })


    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash (password, salt)

    // save new user account to DB

    const newUser = new User ({
        name, birthday, email, telNumber, passNumber, passDate, passEmit, passEmitNum, licNumber, licDate, passwordHash
    })

    const savedUser = await newUser.save()

    // sign the token

    const token = jwt.sign({
        user: savedUser._id
    }, process.env.JWT_SECRET);

  // send the token in a HTTP only cookie

    res
        .cookie("token" , token, {
            httpOnly: true,
        })
        .send();
    } catch (err) {
    console.error (err);
    res.status(500).send();
    }
})

// log in

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

    // validate 

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Заполните все необходимые поля" });

    const existingUser = await User.findOne({ email });
    if (!existingUser )
        return res.status(401).json({ errorMessage: "Неправильная почта или пароль" });

    const passwordCorrect = await bcrypt.compare(
        password, 
        existingUser.passwordHash
    );
    if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Неправильная почта или пароль" });

    // sign the token

    const token = jwt.sign({
        user: existingUser._id
    }, process.env.JWT_SECRET);

  // send the token in a HTTP only cookie

    res
        .cookie("token" , token, {
            httpOnly: true,
        })
        .send();
    } catch (err) {
        console.error (err);
        res.status(500).send();
        }
})

router.get ("/logout", (req, res) => {
    res.cookie ("token", "", {
    httpOnly: true,
    expires: new Date(0)
    })
    .send();
});

module.exports = router;
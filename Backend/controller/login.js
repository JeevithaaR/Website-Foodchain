const { where } = require("sequelize");
const model = require("../models");
const crud = model.login;

const AddData = async (req, res) => {
  try {
    const data = req.body;
    await crud

      .create(data)
      .then((e) => {
        console.log("data added successfully..");
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const ViewData = async (req, res) => {
  try {
    var result = await crud.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await crud.findOne({
      where: {
        email: email,
      },
    });
    if (!foundUser) {
      res.send("Couldn't find user");
    } else {
      const password = await (pass, foundUser.pass);
      if (!password) {
        res.send("password is incorrect");
      } else {
        res.send("user login successfully");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { AddData, login, ViewData };

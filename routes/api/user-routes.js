const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json(allUsers);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/:id", async (req, res) => {

});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {

});

router.delete("/:id", async (req, res) => {

});

module.exports = router;

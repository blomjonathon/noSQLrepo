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
  try {
    const userById = await User.findById(req.params.id)
    res.json(userById);
  } catch (err) {
    res.status(500).json(err);
  }
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
  try {
    const updateUserById = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateUserById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUserById = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUserById);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

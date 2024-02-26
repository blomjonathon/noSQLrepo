const router = require("express").Router();
const { Thought } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const allThoughts = await Thought.find()
        res.json(allThoughts);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/:id", async (req, res) => {

});

router.post("/", async (req, res) => {
  try {
    const newThoughtPost = await Thought.create(req.body);
    res.json(newThoughtPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {

});

router.delete("/:id", async (req, res) => {

});

module.exports = router;

const router = require("express").Router();
const { Thought } = require("../../models");


// get all thoughts
router.get("/", async (req, res) => {
    try {
        const allThoughts = await Thought.find()
        res.json(allThoughts);
      } catch (err) {
        res.status(500).json(err);
      }
});

// get a thought by its id
router.get("/:id", async (req, res) => {
  try {
    const thoughtsById = await Thought.findById(req.params.id)
    res.json(thoughtsById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// make a new thought
router.post("/", async (req, res) => {
  try {
    const newThoughtPost = await Thought.create(req.body);
    res.json(newThoughtPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a thought by getting its id
router.put("/:id", async (req, res) => {
  try {
    const putThoughtsById = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(putThoughtsById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a thought by using its id
router.delete("/:id", async (req, res) => {
  try {
    const deleteThoughts = await Thought.findByIdAndDelete(req.params.id)
    res.json(deleteThoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

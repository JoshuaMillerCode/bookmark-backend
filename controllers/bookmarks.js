const Bookmark = require('../models/Bookmark');

async function index(req, res) {
  try {
    const bookmarks = await Bookmark.find({});
    if (bookmarks) {
      res.status(200).send(bookmarks);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    // req.body will have the info that the user filled out on the frontend
    const createdBookmark = await Bookmark.create(req.body);
    if (createdBookmark) {
      res.status(201).send(createdBookmark);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id);
    if (deletedBookmark) {
      res.status(201).send(deletedBookmark);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create,
  destroy,
};

// Require express routing
const router = require("express").Router();

// Set user-controller requirements
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

router.route("/").get(getAllUsers).post(createUsers);
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// Export module
module.exports = router;

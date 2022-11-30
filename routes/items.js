const express = require("express");
const {
  addTagsToItem,
  removeTagsFromItem,
  getItemsBasedOnType,
  getItemsBasedOnTagId,
  getAllItems,
  getItemsBasedOnitemId,
  getItemsBasedOnTagType,
} = require("../controllers/items");
const { validateItemsPayload } = require("../middlewares/validators/items");
const authenticate = require("../middlewares/authenticate");
const authorizeRoles = require("../middlewares/authorizeRoles");
const { SUPERUSER } = require("../constants/roles");

const router = express.Router();

router.post("/", authenticate, authorizeRoles([SUPERUSER]), validateItemsPayload, addTagsToItem);
router.delete("/", authenticate, authorizeRoles([SUPERUSER]), removeTagsFromItem);
router.get("/byType/:type", authenticate, getItemsBasedOnType);
router.get("/byTag/:tagId", authenticate, getItemsBasedOnTagId);
router.get("/byItem/:itemId", authenticate, getItemsBasedOnitemId);
router.get("/byTagType/:tagType", authenticate, getItemsBasedOnTagType);
router.get("/", authenticate, getAllItems);

module.exports = router;

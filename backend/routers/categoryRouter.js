import express from 'express';
import {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} from "../controller/category.js";
import {
    isAdmin,
    isAuth,
    isSellerOrAdmin,
    mailgun,
    payOrderEmailTemplate,
  } from '../utils.js';
const router = express.Router();
import shortid  from "shortid";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  isAuth,
  isSellerOrAdmin,
  upload.single("categoryImage"),
  addCategory
);
router.get("/getcategory", getCategories);
router.post(
  "/update",
  isAuth,
  isSellerOrAdmin,
  upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/delete",
  isAuth,
  isSellerOrAdmin,
  deleteCategories
);

export default router;

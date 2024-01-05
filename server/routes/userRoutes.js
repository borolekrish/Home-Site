import express from "express";
import { allBookings, getAllFavourites, bookVisit, cancelBooking, createUser, toFav } from "../controllers/userControllers.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav)
router.post("/allFav", getAllFavourites)

export { router as userRoute }
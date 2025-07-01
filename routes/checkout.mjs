import { Router } from "express";
import admin from "firebase-admin";

const router = Router();

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}
const db = admin.firestore();

// GET /orders - fetch all orders for admin
router.get("/orders", async (req, res) => {
  try {
    const ordersSnapshot = await db.collection("orders").get();
    const orders = [];
    ordersSnapshot.forEach((doc) => {
      const data = doc.data();
      if (Array.isArray(data.orders)) {
        data.orders.forEach((order) => {
          orders.push({ ...order, userEmail: doc.id });
        });
      }
    });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

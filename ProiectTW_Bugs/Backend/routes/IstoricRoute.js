import express from "express";
import {
  getByIdIstoric,
  createIstoric,
  deleteIstoric,
} from "../logic/IstoricLogic.js";

const router = express.Router();

router.route("/istoric/:id").get(async (req, res) => {
  try {
    res.status(200).json(await getByIdIstoric(req.params.id));
  } catch (e) {
    res.status(500).json({ hasErrors: true, message: e.message });
  }
});

router.route("/istoric").post(async (req, res) => {
  try {
    let person = await createIstoric(req.body);

    if (person.hasErrors) res.status(400).json(person);
    else res.status(200).json(person);
  } catch (e) {
    res.status(500).json({ hasErrors: true, message: e.message });
  }
});

router.route("/istoric/:id").delete(async (req, res) => {
  try {
    let person = await deleteIstoric(req.params.id);

    if (person.hasErrors) res.status(400).json(person);
    else res.status(200).json(person);
  } catch (e) {
    res.status(500).json({ hasErrors: true, message: e.message });
  }
});

export default router;

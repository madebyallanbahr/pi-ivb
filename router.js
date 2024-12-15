import { Router } from "express";
import { viewClient, storeClient, editClient, deleteClient } from "./controllers/crudController.js";
const router = Router();

router.route('/').get(viewClient);
router.route('/store').get(storeClient);
router.route('/edit').get(editClient);
router.route('/delete').get(deleteClient);

export { router };
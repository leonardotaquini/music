import express from 'express';
import { createMusicCtrl, getAllMusicsCtrl } from '../controllers/music.controller.js';
const router = express.Router();

router.get('/', getAllMusicsCtrl);
router.post('/', createMusicCtrl);

export default router;
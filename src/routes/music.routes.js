import express from 'express';
import { createMusicCtrl, getAllMusicsCtrl, inicioCtrl, deleteMusicCtrl } from '../controllers/music.controller.js';
const router = express.Router();

router.get('/', getAllMusicsCtrl);
router.post('/', createMusicCtrl);
router.get('/inicio', inicioCtrl);
router.delete('/:id', deleteMusicCtrl);

export default router;
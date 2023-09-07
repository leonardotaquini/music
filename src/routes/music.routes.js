import express from 'express';
import { createMusicCtrl, getAllMusicsCtrl, inicioCtrl} from '../controllers/music.controller.js';
const router = express.Router();

router.get('/', getAllMusicsCtrl);
router.post('/', createMusicCtrl);
router.get('/inicio', inicioCtrl);

export default router;
import {createMusic, getMusics, deleteMusic} from '../models/Music.js';

const getAllMusicsCtrl = async(req, res) => {
    const musics = await getMusics();
    if(!musics){
        return res.status(404).json({message: 'There are not musics'});
    }
    return res.status(200).json(musics);
}

const createMusicCtrl = async(req, res) => {
    const music = await createMusic(req.body);
    return res.status(201).json(music);
}

const deleteMusicCtrl = async(req, res) => {
    const {id} = req.params;
    const deletedMusic = await deleteMusic(id);
    return res.status(200).json({msg:' Music deleted'});
}

const inicioCtrl = (req, res) => {
    return res.status(200).json({message: 'Welcome to the API'});
}

export { getAllMusicsCtrl, createMusicCtrl, inicioCtrl, deleteMusicCtrl };
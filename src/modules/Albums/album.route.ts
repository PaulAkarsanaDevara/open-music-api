import { Router } from "express";
import { container } from '../../containers/container';
import { AlbumController } from "./album.controller";

const router = Router();
const albumContainer = container.resolve(AlbumController);

router.post('/', (req, res) => albumContainer.create(req, res));
router.get('/', (req, res) => albumContainer.findAll(req, res));
router.get('/id:', (req, res) => albumContainer.findOne(req, res));
router.put('/:id', (req, res) => albumContainer.update(req, res));
router.delete('/:id', (req, res) => albumContainer.delete(req, res));


export default router;
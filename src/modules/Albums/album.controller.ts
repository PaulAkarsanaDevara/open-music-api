/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "tsyringe";
import { AlbumService } from "./album.service";
import { Request, Response } from 'express';

@injectable()
export class AlbumController {
  constructor(@inject('AlbumService') private albumService: AlbumService) {}

  async create(req: Request, res: Response) {
    try {
      const { title, artist, year } = req.body;
      const result = await this.albumService.createAlbum(title, artist, year);
      res.status(201).json({ message: "Albums created", data: result });
    } catch (err: any) {
      res.status(500).json({ message: err.message || 'Internal server error' });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const results = await this.albumService.getAlbums();
      res.json({ data: results});
    } catch (err: any) {
      res.status(500).json({ message: err.message || 'Internal server error' });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.albumService.getAlbumById(id)
      res.json({ data: result });
    } catch (err: any) {
      res.status(500).json({ message: err.message || 'Internal server error' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id  } = req.params;
      const result = await this.albumService.updateAlbum(id, req.body);
      res.json({ message: "Album updated", data: result });
    } catch (err: any) {
      res.status(500).json({ message: err.message || 'Internal server error' });
    }
  }


  async delete(req: Request, res: Response) {
    try {
      await this.albumService.getAlbumById(req.params.id);
      res.json({ message: "Album deleted" })
    } catch (err: any) {
      res.status(500).json({ message: err.message || 'Internal server error' });
    }
  }


}
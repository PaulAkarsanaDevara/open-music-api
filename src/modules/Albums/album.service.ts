import { injectable } from "tsyringe";
import Album from "../../models/Album";
import { redisClient } from "../../config/redis";
import { ALBUM_CACHE_KEY } from "../../contants/contant";
import { IAlbum } from "../../interfaces/album.interface";

@injectable()
export class AlbumService {

  async createAlbum(title: string, artist: string, year: number) {
    const album = new Album({ title, artist, year  });
    await album.save();
    await redisClient.del(ALBUM_CACHE_KEY);
    return album;
  }

  async getAlbums() {
    const cached = await redisClient.get(ALBUM_CACHE_KEY);
    if(cached) return JSON.parse(cached);

    const albums = await Album.find();
    await redisClient.setEx(ALBUM_CACHE_KEY, 60, JSON.stringify(albums));
    return albums;
  }

  async getAlbumById(id: string) {
    const cached = await redisClient.get(ALBUM_CACHE_KEY);
    if(cached) return JSON.parse(cached);

    const album = await Album.findById(id);
    if(album) await redisClient.setEx(ALBUM_CACHE_KEY, 60, JSON.stringify(album));

    return album;

  }

  async updateAlbum(id: string, updateData: Partial<IAlbum>) {
    const album = await Album.findByIdAndUpdate(id, updateData, { new: true });
    await redisClient.del(ALBUM_CACHE_KEY);
    await redisClient.del(`album_${id}`);

    return album;
  }

  async deleteAlbum(id: string) {
    const album = await Album.findByIdAndDelete(id);
    await redisClient.del(ALBUM_CACHE_KEY);
    await redisClient.del(`album_${id}`);
    return album;
  }

}
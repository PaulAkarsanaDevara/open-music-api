import mongoose, { Schema } from "mongoose";
import { IAlbum } from "../interfaces/album.interface";

const AlbumSchema = new Schema<IAlbum>({
  title: { type: String, required: true},
  artist: { type: String, required: true },
  year: { type: Number, required: true  }
}, {  timestamps: true });

export default mongoose.model<IAlbum>('Album', AlbumSchema);
import { Document } from "mongoose";

export interface IAlbum extends Document {
  title: string;
  artist: string;
  year: number;
}
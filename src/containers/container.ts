import { container } from "tsyringe";
import { AlbumService } from "../modules/Albums/album.service";

container.register('AlbumService', AlbumService);

export { container };
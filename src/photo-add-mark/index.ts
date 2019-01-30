import { IPhotoMark } from "./../interfaces/photo-mark-interface";
import {CanvasFactory} from './../canvas-factory'
/**
 * 图片增加水印
 */
export class PhotoAddMark extends CanvasFactory{
  constructor(photo: ImageData, mark: IPhotoMark) {
    super()
    this.init();
  }
  draw() {

  }

  init() {
    this._context
    this.draw();
  }
}

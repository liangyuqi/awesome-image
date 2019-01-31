import { IImageMark } from "./../interfaces/image-mark-interface";
import { CanvasFactory } from "./../canvas-factory";
/**
 * 图片增加水印
 */
export class ImageAddMark extends CanvasFactory {
  constructor(imageURL: string, mark: IImageMark) {
    super();
    this.init(imageURL, mark);
  }

  init(imageURL: string, mark: IImageMark) {
    let img = new Image();
    img.src = imageURL;
    img.onload = () => {
      if (this._context) {
        this._canvasDom.width = img.width;
        this._canvasDom.height = img.height;
        this._context.save();
        this._context.drawImage(img, 0, 0);
        this._context.globalAlpha = mark.opacity || 1;

        let background = mark.background;
        if (background) {
          this._context.fillStyle = background.get("color") || "transparent";
          this._context.fillRect(
            mark.offSetX || img.height / 4,
            mark.offSetY || img.width / 4,
            mark.width || img.width / 2,
            mark.height || img.height / 2
          );
        }

        let border = mark.border;
        if (border) {
          this._context.lineWidth = border.get("width") || 0;
          this._context.strokeStyle = border.get("color") || " #000000";
          this._context.strokeRect(
            mark.offSetX || img.height / 4,
            mark.offSetY || img.width / 4,
            mark.width || 0,
            mark.height || 0
          );
        }

        let text = mark.text;
        if (text) {
          this._context.font = `${text.get("fontSize")}px` || `12px`;
          this._context.fillStyle = `${text.get("fontColor")}` || "#000000";
          this._context.textAlign = "center";
          this._context.textBaseline = "middle";
          this._context.fillText(
            text.get("content") || "",
            mark.offSetX || img.height / 4,
            mark.offSetY || img.width / 4
          );
        }
        this._context.restore();
      }
    };
    console.log(this._canvasDom.toDataURL("image/png"));
    return this._canvasDom.toDataURL("image/png");
  }
}

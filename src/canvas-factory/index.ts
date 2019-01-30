export class CanvasFactory {
  public _canvasDom: HTMLCanvasElement;
  public _context: CanvasRenderingContext2D | null;
  constructor() {
    this._canvasDom = document.createElement("canvas");
    this._context = this._canvasDom.getContext("2d");
  }
}

export class CanvasFactory {
  public _canvasDom!: HTMLCanvasElement;
  public _context!: CanvasRenderingContext2D | null;
  constructor() {
    let flag = this.checkCanvasSupport();
    if (flag) {
      this._canvasDom = document.createElement("canvas");
      this._context = this._canvasDom.getContext("2d");
    } else {
      console.error("Error:您当前的浏览器不支持此功能");
      return;
    }
  }

  checkCanvasSupport() {
    return !!document.createElement("canvas").getContext;
  }
}

import { Record } from "immutable";
/**
 * 图片水印
 */
export interface IImageMark {
  // 大小
  width?: number;
  height?: number;

  //位置
  offSetX?: number;
  offSetY?: number;
  // 文字
  text?: Record<{
    content?: string;
    fontSize?: string;
    fontColor?: string;
  }>;
  // 图片
  background?: Record<{
    img?: string;
    color?: string;
  }>;
  border?: Record<{
    width?: number;
    color?: string;
  }>;
  opacity?: number;
}

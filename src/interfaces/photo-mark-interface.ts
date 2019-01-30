import { Record } from "immutable";
/**
 * 图片水印
 */
export interface IPhotoMark {
  // 大小
  width: number;
  height: number;

  // 文字
  font: string;
  fontSize: string;
  fontColor: string;

  // 图片
  background: string;
  border: Record<{
    width: number;
    color: string;
  }>;
  opacity: number;
}

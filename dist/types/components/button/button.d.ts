import { EventEmitter } from '../../stencil-public-runtime';
export declare class APButton {
  el: HTMLElement;
  clickedButton: EventEmitter;
  type?: string;
  content: string;
  color?: string;
  render(): any;
}

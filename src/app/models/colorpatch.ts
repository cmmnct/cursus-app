export class Colorpatch {
  rgba = '';

  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number,
    public name?: string,
    public state = {
      "locked" : false
    }
  ) {
    this.rgba = `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }
  getRgba():string {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }
}

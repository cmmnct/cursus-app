import { Injectable } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';

export class Patchstate {
  locked: boolean = false;

  constructor(
  ) {

  }
}

@Injectable({
  providedIn: 'root',
})
export class PatchService {
  constructor() {

    this.patchState.locked = true;
   }
  
  private patchState: Patchstate = new Patchstate();

  private colorpatchArray = [
    new Colorpatch(255, 0, 0, 1, 'red'),
    new Colorpatch(0, 2550, 0, 1, 'green'),
    new Colorpatch(0, 0, 255, 1, 'blue'),
    new Colorpatch(255, 255, 0, 1, 'yellow'),
    new Colorpatch(0, 255, 255, 1, 'cyaan'),
    new Colorpatch(255, 0, 255, 1, 'magenta'),
    new Colorpatch(0, 0, 0, 1, 'black'),
    new Colorpatch(255, 255, 255, 1, 'white'),
  ];

  getColorPatches() {
    return this.colorpatchArray;
  }

  getPatchState() {
    return this.patchState;
  }

}

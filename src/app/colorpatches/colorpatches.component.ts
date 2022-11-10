import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';

@Component({
  selector: 'app-colorpatches',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css'],
})
export class ColorpatchesComponent implements OnInit {
  colorpatchArray: Colorpatch[] = [];

  currentPatch = new Colorpatch(255, 255, 255, 1);

  constructor() {}

  ngOnInit(): void {
    this.colorpatchArray = [
      new Colorpatch(255, 0, 0, 1, 'red'),
      new Colorpatch(0, 2550, 0, 1, 'green'),
      new Colorpatch(0, 0, 255, 1, 'blue'),
      new Colorpatch(255, 255, 0, 1, 'yellow'),
      new Colorpatch(0, 255, 255, 1, 'cyaan'),
      new Colorpatch(255, 0, 255, 1, 'magenta'),
      new Colorpatch(0, 0, 0, 1, 'black'),
      new Colorpatch(255, 255, 255, 1, 'white'),
    ];
  }

  onClickPatch(patch: Colorpatch) {
    //alert(`U klikte op patch ${patch.name} met de waarde ${patch.rgba}`)
    this.currentPatch = patch;
  }
}

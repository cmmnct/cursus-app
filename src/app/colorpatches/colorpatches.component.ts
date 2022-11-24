import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';
import { PatchService, Patchstate } from '../services/patch.service';

@Component({
  selector: 'app-colorpatches',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css'],
})
export class ColorpatchesComponent implements OnInit {
  colorpatchArray: Colorpatch[] = [];

  currentPatch = new Colorpatch(255, 255, 255, 1);
  patchState!: Patchstate;

  constructor(private patchservice: PatchService) {}

  ngOnInit(): void {
    this.colorpatchArray = this.patchservice.getColorPatches();
    this.patchState = this.patchservice.getPatchState();
  }

  onClickPatch(patch: Colorpatch) {
    //alert(`U klikte op patch ${patch.name} met de waarde ${patch.rgba}`)
    
    this.patchState.locked ? null : this.currentPatch = patch;
  }

  doLogin() {
    this.patchState.locked = false;
  }
}

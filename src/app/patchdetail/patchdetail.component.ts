import { Component, OnInit } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';
import { PatchService, Patchstate } from '../services/patch.service';

@Component({
  selector: 'app-patchdetail',
  templateUrl: './patchdetail.component.html',
  styleUrls: ['./patchdetail.component.css'],
})
export class PatchdetailComponent implements OnInit {
  colorpatchArray: Colorpatch[] = [];
  patchState!: Patchstate;
  currentPatch: Colorpatch = new Colorpatch(0, 0, 0, 1);

  constructor(private patchService: PatchService) {}

  ngOnInit(): void {
    this.colorpatchArray = this.patchService.getColorPatches();
    this.patchState = this.patchService.getPatchState();
  }

  onClickPatch(patch: Colorpatch) {
    
    if (!this.patchState.locked) {
      this.currentPatch = patch;
      console.log("patch selected");
    }

   
  }

  
}

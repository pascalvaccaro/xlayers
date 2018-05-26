import { UiState } from './../../state/ui.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'sketch-settings-layer',
  template: `
  <mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Size
      </mat-panel-title>
    </mat-expansion-panel-header>

    <mat-form-field>
      <input matInput type="number" placeholder="Height" [ngModel]="currentLayer?.frame.height.toFixed(2)">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="number" placeholder="Width" [ngModel]="currentLayer?.frame.width.toFixed(2)">
    </mat-form-field>
  </mat-expansion-panel>

  <mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Position
      </mat-panel-title>
    </mat-expansion-panel-header>

    <mat-form-field>
      <input matInput type="number" placeholder="Left" [ngModel]="currentLayer?.frame.x.toFixed(2)">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="number" placeholder="Top" [ngModel]="currentLayer?.frame.y.toFixed(2)">
    </mat-form-field>
  </mat-expansion-panel>
  `,
  styles: [`
  mat-form-field {
    width: 70px;
    padding: 14px;
  }
  `]
})
export class SettingsLayerComponent implements OnInit {

  currentLayer;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(UiState.currentLayer).subscribe(currentLayer => {
      this.currentLayer = currentLayer;
    });
  }

}

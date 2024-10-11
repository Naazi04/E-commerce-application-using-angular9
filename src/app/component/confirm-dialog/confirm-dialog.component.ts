import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Input() title: string = '';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  onNoClick(){
    this.dialogRef.close(false);
  }
  onYesClick(){
    this.dialogRef.close(true);
  }

}

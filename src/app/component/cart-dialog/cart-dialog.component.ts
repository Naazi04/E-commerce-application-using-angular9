import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {

  constructor(private dialogRef: MatDialogRef<CartDialogComponent>) { }

  onClose(): void{
    this.dialogRef.close();
  }

}

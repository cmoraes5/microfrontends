import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmComponent>,
  ) { }

  ngOnInit(): void { }

  handleCancel(): void {
    this.dialogRef.close();
  }

  handleDelete(): void {
    this.dialogRef.close('confirm');
  }
}

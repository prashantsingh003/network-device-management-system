import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageService {

  constructor(private snackBar:MatSnackBar) { }

  showMessage(msg:{text:string,type:string}){
    this.snackBar.open(msg.text,'Dismiss')
  }
}

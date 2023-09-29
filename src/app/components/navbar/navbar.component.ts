import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private modalService:ModalServiceService) { }

  ngOnInit() {
  }

  addDevice(){
    this.modalService.openAddDeviceDialog();
  }
}

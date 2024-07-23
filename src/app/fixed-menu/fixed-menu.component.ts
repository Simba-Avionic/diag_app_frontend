import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UdsService } from '../service/uds.service';
import { ConsoleModalComponent } from '../console-modal/console-modal.component';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrl: './fixed-menu.component.css'
})
export class FixedMenuComponent {
  is_connected: boolean = false;

  constructor(private modalService: NgbModal, private udsService: UdsService){
    udsService.GetConectionStatus().subscribe((value: boolean)=>{ 
       this.is_connected=value
      });
  }
  open(){
    const modalRef = this.modalService.open(ConsoleModalComponent);
  }
}

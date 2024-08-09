import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrl: './snapshot.component.css'
})
export class SnapshotComponent {
  constructor(public activeModal: NgbActiveModal){
  }
}

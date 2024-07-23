import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UdsService } from '../service/uds.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dtc } from '../model/dtc';
import { SnapshotComponent } from '../snapshot/snapshot.component';
import { Ecu, EcuStatus } from '../model/ecu';

@Component({
  selector: 'app-dtc-list',
  templateUrl: './dtc-list.component.html',
  styleUrl: './dtc-list.component.css'
})
export class DtcListComponent {
  public ecu_lits:Array<Ecu>=[];
  constructor(private activeRouter:ActivatedRoute,public udsService: UdsService, private modalService: NgbModal){
    this.activeRouter.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
    this.ecu_lits = udsService.GetEcuListArray();
    this.ecu_lits = this.ecu_lits.filter(obj => {return obj.status_ !== EcuStatus.offline});
  }
    ngOnInit(): void {
      let id = this.activeRouter.snapshot.paramMap.get('ecu_id');
      console.log(id)
    }
  
    public GetDtc(): Array<Dtc>{
      return this.udsService.GetDtcList("");
    }
  
    public OpenSnapshot(dtc:Dtc){
      const modalRef = this.modalService.open(SnapshotComponent);
    }
}

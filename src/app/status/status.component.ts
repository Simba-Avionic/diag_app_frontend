import { Component } from '@angular/core';
import { UdsService } from '../service/uds.service';
import { Router } from '@angular/router';
import { Ecu } from '../model/ecu';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  public ecu_lits: Array<Ecu> = [];
  constructor(public udsService:UdsService, private router_: Router){
    this.udsService.GetEcuList().subscribe(val => this.ecu_lits = val)
  }
  ReadDtc(ecu_id:string){
  this.router_.navigateByUrl("/dtc/"+ecu_id.replace("0x",""));
  }
}

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UdsService } from '../service/uds.service';
import { Ecu, EcuStatus } from '../model/ecu';

@Component({
  selector: 'app-console-modal',
  templateUrl: './console-modal.component.html',
  styleUrl: './console-modal.component.css'
})
export class ConsoleModalComponent {
  public ecu_lits:Array<Ecu>=[];
  msg = {
    req: '',
    ecu_id: ''
  };
  req_value = ''
  ecu_id = ''
  output = ''
  constructor(public activeModal: NgbActiveModal,private udsService: UdsService){
    this.ecu_lits = udsService.GetEcuListArray();
    this.ecu_lits = this.ecu_lits.filter(obj => {return obj.status_ !== EcuStatus.offline});
    // Socket.ConsoleRx().subscribe((data:string)=>{console.log(data)})s
    this.udsService.Subscribe("console_tx").subscribe(data=>this.UpdateContent(data,"TX"))
    this.udsService.Subscribe("console_rx").subscribe(data=>this.UpdateContent(data,"RX"))
    
  }
  public ConvertString(x:string):Number{
    return Number(x)
  }
  public Send(){
    if(this.msg.ecu_id.length != 0 && this.msg.req.length != 0){
    this.udsService.SendRequest(this.msg.ecu_id,this.msg.req)
    }
  }
  private UpdateContent(data: any,direction:string){
    this.output += "[id="+data.ecu_id+"]: ("+direction+") -> 0x"+data.req+"\n"
  }
}

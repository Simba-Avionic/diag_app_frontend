import { Injectable } from '@angular/core';
import { Dtc, DtcStatus, DtcSupportClass } from '../model/dtc';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { Ecu, EcuStatus, EcuSupportClass } from '../model/ecu';
import { Socket } from 'ngx-socket-io';
import { AlertService } from './Alert.service';
import { Alert, AlertType } from '../model/alert.';


@Injectable({
  providedIn: 'root'
})
export class UdsService {

  private _connection_status = new BehaviorSubject<boolean>(true);
  private ecu_list_ = new BehaviorSubject<Array<Ecu>>([]);
  private dtc_list_ = new BehaviorSubject<Array<Dtc>>([]);
  private status = false;
  subscription: Subscription;
  public GetConectionStatus(): Observable<boolean> {
    return this._connection_status.asObservable();
  }
  public Connect() {
    this.socket.emit("connect_ecu","");
  }
  public GetEcuList(): Observable<Array<Ecu>> {
    return this.ecu_list_.asObservable();
  }
  public GetEcuListArray(): Array<Ecu> {
    return this.ecu_list_.value;
  }
  public ReadDtc(id:string){
    this.socket.emit("dtc_status",{ecu_id:id});
  }
  public GetDtcListArray(): Array<Dtc> {
    return this.dtc_list_.value;
  }
  public GetDtcList(): Observable<Array<Dtc> >{
    return this.dtc_list_.asObservable();
  }
  private Update(){
    if(this._connection_status.value){
      this.socket.emit("update","")
    }
  }
  constructor(private socket:Socket, private alert_service:AlertService) {

    this.socket.fromEvent("status_ecu").subscribe((data:any)=>{
      if(data["status"] == true){
            this._connection_status.next(true);
            this.status = true;
          }
    }
  );
    this.socket.fromEvent("ecu_status_list").subscribe((data:any)=>{
      let temp_list = Array<Ecu>();
      for(var ecu of data){
        let t = new Ecu(ecu["name"],ecu["diag_id"],ecu["ip"],EcuSupportClass.GetStatus(ecu["ecu_status"]))
        t.SetTimeStamp(ecu["uptime"])
        temp_list.push(t)
        var a = temp_list.length
      }
      this.ecu_list_.next(temp_list);
    });
    this.socket.fromEvent("dtc_status_update").subscribe((data:any)=>{
      var new_list = Array<Dtc>()
      for(var ecu of data){
        new_list.push(new Dtc(ecu["id"],ecu["name"],ecu["ecu"],DtcSupportClass.GetStatus(ecu["status"])));
      }
      this.dtc_list_.next(new_list);
    });
    this.socket.fromEvent("alert_all").subscribe((data:any)=>{
      if(data["status"] == "Ok"){
        alert_service.AddAlert(new Alert("("+data["desc"]+") - Successfully completed",AlertType.Info));
      }
      else
      {
        alert_service.AddAlert(new Alert("("+data["desc"]+") - "+data["status"],AlertType.Error));
      }
    });
    const source = interval(1000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.Update());
  }
  public SendRequest(ecu_id: string,req: string){
    this.socket.emit("uds_tx",{ecu_id:ecu_id,req:req});
  }
  public  Subscribe(topic:string){
    return this.socket.fromEvent(topic)
  }
  public ClearMemoryAll(ecu_id:string){
    this.socket.emit("dtc_clear_all",{ecu_id:ecu_id})
  }
}

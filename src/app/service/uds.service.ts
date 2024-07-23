import { Injectable } from '@angular/core';
import { Dtc, DtcStatus } from '../model/dtc';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { Ecu, EcuStatus, EcuSupportClass } from '../model/ecu';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class UdsService {

  private _connection_status = new BehaviorSubject<boolean>(false);
  private ecu_list_ = new BehaviorSubject<Array<Ecu>>([]);
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
  public GetDtcList(id:string): Array<Dtc> {
    let list = [new Dtc("0x112011", "SomeDtc_1", "EC (0x91)", DtcStatus.active),
    new Dtc("0x112021", "SomeDtc_2", "EC (0x92)", DtcStatus.noactive),
    new Dtc("0x112111", "SomeDtc_3", "Bat (0x93)", DtcStatus.exist)
    ];
    return list;
  }
  private Update(){
    if(this._connection_status.value){
      this.socket.emit("update","")
    }
  }
  constructor(private socket:Socket) {

    this.socket.fromEvent("status_ecu").subscribe((data:any)=>{
      if(data["status"] == true){
            this._connection_status.next(true);
            this.status = true;
          }
    });
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
}

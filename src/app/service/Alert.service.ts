import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timeInterval } from 'rxjs';
import { Alert } from '../model/alert.';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private last_id = 0;
  private alert_list_ = new BehaviorSubject<Array<Alert>>([]);
  constructor() { }
  public AddAlert(alert:Alert){
    var temp = this.alert_list_.value;
    alert.id = this.last_id++;
    temp.push(alert)
    this.alert_list_.next(temp)
  }
  public GetAlerts(): Observable<Array<Alert>>{
    return this.alert_list_.asObservable();
  } 
  public PopElement(id:number){
    var temp = this.alert_list_.value;
    temp.forEach((item,index)=>{
      if(item.id == id){
        temp.slice(index,1);
      }
    });
    this.alert_list_.next(temp)
  }
}

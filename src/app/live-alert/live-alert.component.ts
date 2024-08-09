import { Component } from '@angular/core';
import { Alert } from '../model/alert.';
import { AlertService } from '../service/Alert.service';

@Component({
  selector: 'app-live-alert',
  templateUrl: './live-alert.component.html',
  styleUrl: './live-alert.component.css'
})
export class LiveAlertComponent {
  public alert_list:Array<Alert> = [];
  constructor(private alert_service:AlertService){
    alert_service.GetAlerts().subscribe(data=>this.alert_list = data);
  }
  public Remove(id:number){
    this.alert_service.PopElement(id)
  }
}

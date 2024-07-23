import { Component } from '@angular/core';
import { UdsService } from '../service/uds.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  is_connected: boolean = false;
  constructor(public udsService: UdsService){
    udsService.GetConectionStatus().subscribe((value: boolean)=>{ 
      this.is_connected=value
     });
  }
  public onConnect(){
    this.udsService.Connect();
  }
}

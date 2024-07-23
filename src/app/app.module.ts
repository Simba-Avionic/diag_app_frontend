import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { DtcListComponent } from './dtc-list/dtc-list.component';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { StatusComponent } from './status/status.component';
import { UdsService } from './service/uds.service';
import { ConsoleModalComponent } from './console-modal/console-modal.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormControl, FormsModule } from '@angular/forms';

const socketIoConfig: SocketIoConfig = {
  url:'http://localhost:8080',
  options:{}
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DtcListComponent,
    FixedMenuComponent,
    NavBarComponent,
    SnapshotComponent,
    StatusComponent,
    ConsoleModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SocketIoModule.forRoot(socketIoConfig),
    FormsModule
  ],
  providers: [UdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

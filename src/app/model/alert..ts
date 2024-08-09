export enum AlertType{
  Info = 0,
  Warning = 1,
  Error  =2
}


export class Alert {
public id: number = 0;
  constructor(public content:string, public type:AlertType) { }

}

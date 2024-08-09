export enum DtcStatus{
  active = "Active",
  exist = "Exist",
  noactive = "No Active"
}

export class DtcSupportClass{
  public static GetStatus(status:Number):DtcStatus{
    switch(status){
      case 0:
        return DtcStatus.noactive;
      case 1:
        return DtcStatus.active;
      case 3: 
      return DtcStatus.exist;
    };
    return DtcStatus.active;
  }
}
export class Dtc {

  constructor(public id_:string,public name_:string,public ecu_:string,public status:DtcStatus) { }

}

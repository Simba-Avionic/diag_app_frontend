export enum DtcStatus{
  active = "Active",
  exist = "Exist",
  noactive = "No Active"
}

export class Dtc {

  constructor(public id_:string,public name_:string,public ecu_:string,public status:DtcStatus) { }

}

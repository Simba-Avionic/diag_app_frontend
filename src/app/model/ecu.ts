export enum EcuStatus {
    offline = "Offline",
    online = "Online",
    errors = "Error"
}
export class TimeStamp{
    constructor(private ms_:number){}
    public GetH(): number{
        return Math.floor(this.ms_*0.27777777777778*0.000001);
    }
    public GetMin(): number{
        return Math.floor((this.ms_*0.000016667)-(this.GetH()*60)) ;
    }
    public GetSec(): number{
        return Math.floor((this.ms_*0.001)-this.GetMin()*60-this.GetH()*60*60);
    }
    
}
export class EcuSupportClass{
    public static GetStatus(id:number): EcuStatus{
        switch(id){
            case 1: return EcuStatus.offline;
            case 2: return EcuStatus.online;
            case 3: return EcuStatus.errors;
        }
        return EcuStatus.offline
    }
}
export class Ecu {
    public timestamp: TimeStamp = new TimeStamp(0);
    constructor(public name_: string, public address_: string, public ip_:string, public status_: EcuStatus) { }
    public SetTimeStamp(time:number){
        this.timestamp = new TimeStamp(time);
    }
}

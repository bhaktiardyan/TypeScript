import { abstractKendaraan } from "./abstractKendaraan";

export class mobil extends abstractKendaraan {
   

    // constructor
    constructor(pName:string, pKapasitas:number, pJalur:string) {
        super(pName, pKapasitas, pJalur)
    }
    
    // abstract dari class abstractKendaraan
    // methode di class abstractKendaraan ditulis kembali
    Maju(): void {
        console.log(this._getName()+" bisa maju ")
    }
    Mundur(): void {
        console.log(this._getName()+" bisa mundur ")
    }
    Terbang(): void {
        console.log(this._getName()+" Tidak bisa terbang ")
    }

    // overloading
    _setValue(pValue: number): void;
    _setValue(pValue: string): void;
    _setValue(pValue: any): void {
        console.log(typeof pValue)
    }
    
}
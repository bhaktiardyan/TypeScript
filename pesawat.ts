import { abstractKendaraan } from "./abstractKendaraan";

export class pesawat extends abstractKendaraan {
    
    constructor(pName : string, pKapasitas:number, pJalur:string) {
        super(pName, pKapasitas, pJalur);
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
        console.log(this._getName()+" bisa terbang ")
    }

    // overloading
    _setValue(pValue: number): void;
    _setValue(pValue: string): void;
    _setValue(pValue: any): void {
        console.log(typeof pValue)
    }
}
export abstract class abstractKendaraan {

    // attribute
    private Name : string
    private Kapasitas : number
    private Jalur : string

    // constructor
    constructor(pName:string, pKapasitas:number, pJalur:string) {
            this.Name = pName
            this.Kapasitas = pKapasitas
            this.Jalur = pJalur
    }

    // setter
    _setName(pName:string) : void {
        this.Name = pName
    }

    _setKapasitas(pKapasitas : number) : void {
        this.Kapasitas = pKapasitas
    }

    _setJalur(pJalur:string) : void {
        this.Jalur = pJalur
    }

    // getter
    _getName() : string {
        return this.Name
    }

    _getKapasitas() {
        return this.Kapasitas
    }

    _getJalur() : string {
        return this.Jalur
    }

    _Propertis() :void {
        console.log(this._getName)
        console.log(this._getKapasitas)
        console.log(this._getJalur)
        
    }

    // membuat abstarct
    // hanya menulis nama method/fungsinya saja
    // diawali key abstract
    abstract Maju() : void
    abstract Mundur() : void
    abstract Terbang() : void

    //abstract jenis overloading
    //  nama methode sama dengan parameter berbeda
    abstract _setValue(pValue:number) : void
    abstract _setValue(pValue:string) : void


}
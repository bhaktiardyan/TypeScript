export class Kendaraan {

    // Attribute
    private Name : string
    private kapasitas : number
    private jalur : string

    // 
    constructor(pName : string, pKapasitas: number, pJalur : string) {
        this.Name = pName
        this.kapasitas = pKapasitas
        this.jalur = pJalur
    }

    // setter & getter
    _setName(pName : string) {
        this.Name = pName
    }

    _setKapasitas(pKapasitas : number) {
        this.kapasitas = pKapasitas
    }

    _setJalur(pJalur : string) {
        this.jalur = pJalur
    }

    // gtter
     _getName() : string {
        return this.Name
    }

    _getKapasitas() : number {
        return this.kapasitas
    }

    _getJalur() : string{
        return this.jalur
    }

    _Propertis() : void {
        console.log(this._getName())
        console.log(this._getKapasitas())
        console.log(this._getJalur())
    }

}
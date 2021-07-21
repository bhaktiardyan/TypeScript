import { Kendaraan } from "./Kendaraan";

let sedan =  new Kendaraan("sedan",4,"darat")
sedan._Propertis();

let truk = new Kendaraan("",null,"")
truk._setName("hino")
truk._setKapasitas(8)
truk._setJalur("darat")
truk._Propertis()

let pesawat = new Kendaraan("boing",150,"udara")
pesawat._Propertis()

//--- call object with class
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


//--- call object with class abstract
import { mobil } from "./mobil";
import { pesawat } from "./pesawat";

let sedan = new mobil("sedan", 4, "Darat")
sedan._Propertis()
sedan.Maju()
sedan.Mundur()
sedan.Terbang()
sedan._setValue("A")
sedan._setValue(10)

let boeing = new pesawat("boeing", 150, "udara")
boeing._Propertis()
boeing.Maju()
boeing.Mundur()
boeing.Terbang()
boeing._setValue("A")
boeing._setValue(10)

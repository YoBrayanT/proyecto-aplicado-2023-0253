/* Directorio de CabañasYa.
   Para completar un establecimiento, rellena sus campos entre comillas.
   Los teléfonos y datos vacíos se muestran como "Pendiente" y sus botones quedan desactivados.
   WhatsApp: escribe el número con código de país, sin signos (ej.: 18095550000). */
const ESTABLECIMIENTOS = [
 {id:"cabanas-809",nombre:"Cabañas 809",tipo:"Cabaña"},
 {id:"cabanas-elite",nombre:"Cabañas Élite",tipo:"Cabaña"},
 {id:"cabanas-sofia",nombre:"Cabañas Sofía",tipo:"Cabaña"},
 {id:"hotel-el-pedregalino",nombre:"Hotel El Pedregalino",tipo:"Hotel"},
 {id:"hotel-el-cacique",nombre:"Hotel El Cacique",tipo:"Hotel"},
 {id:"cabanas-holiday",nombre:"Cabañas Holiday",tipo:"Cabaña"}
].map(e=>Object.assign({
  provincia:"",municipio:"",sector:"",direccion:"",referencia:"",
  telefono:"",        /* ej.: "8095550000" */
  whatsapp:"",        /* ej.: "18095550000" */
  mapa:"",            /* enlace de Google Maps */
  horario:"",descripcion:"",
  servicios:[],       /* ej.: ["Jacuzzi","Piscina","Wi-Fi"] */
  tarifas:[],         /* ej.: [{modalidad:"Por horas",precio:0}] */
  foto:""             /* ej.: "../Imágenes/"+e.id+"/portada.jpg" */
},e));

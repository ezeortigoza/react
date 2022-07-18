import { initializeApp } from "firebase/app";

import {getFirestore,getDocs,getDoc,doc,collection,query,where,setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqg7O7MAnsM2f4Ustbr9sHapL8874bBig",
  authDomain: "apple-434d0.firebaseapp.com",
  projectId: "apple-434d0",
  storageBucket: "apple-434d0.appspot.com",
  messagingSenderId: "303565942169",
  appId: "1:303565942169:web:84729e6bc2c1b932c07708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializamos instancia a la base de datos de firestore
const appFirestore = getFirestore(app);

export function testDataBase(){
    console.log(appFirestore);
}


//obtenemos todos los items
export async function traerProducto(){
    //Instanciamos una coleccion
    const appleCollection = collection(appFirestore, 'productos');
    //Obtenemos los documentos con getDocs(coleccion)
    const appleSnapshot = await getDocs(appleCollection);
    
    //obtenemos los datos de cada documento mapeandolo
    let respuesta = appleSnapshot.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })
    return respuesta;
}


export async function traerProductosDeCategoria(idcategoria){
    const appleCollection = collection(appFirestore, 'productos');

    const q = query(appleCollection, where("categoria", "==",idcategoria ));

    const appleSnapshot = await getDocs(q);
     
    let respuesta = appleSnapshot.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })

    return respuesta;

}



export async function traerUnProducto(itemId){
    const docref = doc(appFirestore,"productos",itemId);
    const docSnapshot = await getDoc(docref);

    return {id: docSnapshot.id, ...docSnapshot.data()};
}

export async function exportDataToFirestore(){
    const productos = [
        { title:"Iphone 7 plus 128GB", precio: 350, pictureURL: "https://images-na.ssl-images-amazon.com/images/I/61ArpAHtEIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",caracteristicas:'Pantalla: 5.5", 1080 x 1920 pixels Procesador: Apple A10 Fusion  RAM: 3GB  Almacenamiento: 32GB/128GB/256GB Cámara: 12 MP, Dual Batería: 2900 mAh OS: iOS 10 Perfil: 7.3 mm  Peso: 188 g',categoria:'cel'},
        { title:"Iphone x 256GB", precio: 500, pictureURL: "https://m.media-amazon.com/images/I/51phIQXX2eL._AC_SL1244_.jpg",categoria:'cel',caracteristicas: 'Pantalla: 5.8", 1125 x 2436 pixels  Procesador: Apple A11 Bionic  RAM: 3GB Almacenamiento: 64GB/256GB  Expansión: sin microSD  Cámara: 12 MP, Dual Batería: 2700 mAh  OS: iOS 11 Perfil: 7.7 mm  Peso: 174 g'},
        { title:"Iphone xr 64GB ", precio: 400, pictureURL: "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg",categoria:'cel',caracteristicas:'Pantalla: 6.1", 828 x 1792 pixels Procesador: Apple A12 Bionic RAM: 3GB Almacenamiento: 64GB/128GB/256GB Expansión: sin microSD Cámara: 12 MP Batería: 2942 mAhOS: iOS 12 Perfil: 8.3 mm Peso: 194 g'},
        { title:"Iphone 11 pro max 256GB", precio: 900, pictureURL: "https://m.media-amazon.com/images/I/81j2j9x-KWL._FMwebp__.jpg",categoria:'cel',caracteristicas:'Pantalla: 6.5", 1242 x 2688 pixels Procesador: Apple A13 Bionic  RAM: 4GB Almacenamiento: 64GB/256GB/512GB Expansión: sin microSD  Cámara: Triple, 12MP+12MP+12MP Batería: 3969 mAh OS: iOS 13  Perfil: 8.1 mm Peso: 226 g'},
        { title:"Iphone 11 64GB", precio: 820, pictureURL:"https://mercadositio.com/img/Producto/487/4553216499ede13d773ed4281c0b17d0-6206c48a7ef34.jpg",categoria:'cel',caracteristicas:'Pantalla: 6.1", 828 x 1792 pixels Procesador: Apple A13 Bionic  RAM: 4GB Almacenamiento: 64GB/128GB/256GB  Expansión: sin microSD Cámara: Dual, 12MP+12MPBatería: 3046 mAh OS: iOS 13  Perfil: 8.3 mm Peso: 194 g'},
        { title:"Iphone 13 256GB", precio: 920, pictureURL: "https://mercadositio.com/img/Producto/1314/4ee18a7b0c2e7fb5fa071a0fc8805d8b-6206cd2377efb-wp.webp",categoria:'cel',caracteristicas:'Pantalla: 6.1", 1170 x 2532 pixels Procesador: Apple A15 Bionic  Almacenamiento: 128GB/256GB/512GB Expansión: sin microSD  Cámara: Dual, 12MP+12MP  OS: iOS 15 Perfil: 7.7 mmPeso: 174 g'},
        { title:"Iphone 13 pro max 64GB", precio: 1200, pictureURL: "https://mercadositio.com/img/Producto/f4075e0f-9004-9fe7-2de0-699443707f54/iphone13promaz-621cf49d03a55-wp.webp",categoria:'cel',caracteristicas:'Pantalla: 6.7", 1284 x 2778 pixels Procesador: Apple A15 Bionic  Almacenamiento: 128GB/256GB/512GB/1TB Expansión: sin microSD Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D OS: iOS 15 Peso: 240 g'},
        { title:"Iphone 13 pro 256GB", precio: 1600, pictureURL:"https://mercadositio.com/img/Producto/1315/283cc3f22dd0d1c8476a1d055766bc54-6206cd247fbf9-wp.webp",categoria:'cel',caracteristicas:'Pantalla: 6.1", 1170 x 2532 pixels Procesador: Apple A15 Bionic  Almacenamiento: 128GB/256GB/512GB/1TB Expansión: sin microSD  Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D  OS: iOS 15 Perfil: 7.7 mm Peso: 204 g'},
        { title:"Iphone 8 plus 256GB", precio: 450, pictureURL: "https://mercadositio.com/img/Producto/ef864698-d3c0-9a40-6790-f851fe22eca3/iphone-8-plus-1-6222247be4fd7-wp.webp",categoria:'cel',caracteristicas:'Pantalla: 5.5", 1080 x 1920 pixels Procesador: Apple A11 BionicRAM: 3GB  Almacenamiento: 64GB/256GB Expansión: sin microSDCámara: 12 MP, Dual  Batería: 2700 mAh  OS: iOS 11   Perfil: 7.5 mm'},
        { title:"Iphone xs max 256GB", precio: 620, pictureURL: "https://m.media-amazon.com/images/I/71LVhKIeesL._AC_SL1500_.jpg",categoria:'cel',caracteristicas:'Pantalla: 6.5", 1242 x 2688 pixels  Procesador: Apple A12 Bionic  RAM: 4GB Almacenamiento: 64GB/256GB/512GB Expansión: sin microSD Cámara: Dual, 12MP+12MP Batería: 3174 mAhOS: iOS 12 Perfil: 7.7 mm Peso: 208 g'},
        { title:"Iphone 12 mini 64GB", precio: 850, pictureURL: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000",categoria:'cel',caracteristicas:'Pantalla: 5.4", 1080 x 2340 pixels Procesador: Apple A14 Bionic Almacenamiento: 64GB/128GB/256GB  Expansión: sin microSD  Cámara: Dual, 12MP+12MP  OS: iOS 14 Perfil: 7.4 mm  Peso: 135 g'},
        { title:"Iphone 12  256GB", precio: 620, pictureURL: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",categoria:'cel',caracteristicas: 'Pantalla: 6.1", 1170 x 2532 pixels Procesador: Apple A14 BionicAlmacenamiento: 64GB/128GB/256GB  Expansión: sin microSD   Cámara: Dual, 12MP+12MP   OS: iOS 14  Perfil: 7.4 mm  Peso: 164 g'},
        { title:"Macbook air ", precio: 1000, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp", caracteristicas:'Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial',categoria: 'note'},
        { title:"Apple Watch Series 7 GPS + Cellular", precio: 107, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/01/AWS7_LTE_45mm_Blue_Aluminum_Abyss_Blue_Sport_Band_PDP_Image_Position-1_COES-removebg-preview.png", caracteristicas: ' Pantalla Retina OLED LTPO siempre activa; brillo de 1,000 nitsPantalla de vidrio Ion-X en las cajas de aluminio  Pantalla de cristal de zafiro en las cajas de acero inoxidable y titanio  Chip S7 SiP con procesador de doble núcleo de 64 bits  Chip inalámbrico W3 Chip U1 (banda ultraancha)Digital Crown con respuesta háptica',categoria: 'reloj'},
        { title:" Cargador Rapido Apple Original Usb C", precio: 50, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_726978-MLA48102880820_112021-O.webp", caracteristicas:'Voltaje de entrada: 220VVoltaje de salida: 20 Tipo de cargador: De pared',categoria: 'carga'},
        { title:"Apple Watch Serie 3 GPS", precio: 300, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2020/11/WatchS3.GS_.44.png", caracteristicas: 'GPS , GNSS Capacidad de 8GBResistente al agua (50 metros) Bluetooth 4.2 / WiFi 802.11b/g/n 2.4GHz  Hasta 18 horas de batería   Grosor: 11.4 mm Peso: 32.3 g',categoria: 'reloj'},
        { title:"Apple Watch SE GPS", precio: 56, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2020/11/AWSE_GPS_40mm_Gold_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__LAES_v1.jpg", caracteristicas: ' ProcesadorChip Apple S5 SiP con procesador de doble núcleo de 64 bits Procesador inalámbrico Apple W3   Acabado  Aluminio  Pantalla  Pantalla Retina OLED LTPO  Brillo de 1.000 nits / 324 x 394 pixeles Área de visualización de 759 mm  para el de 40mm/ 368 x 448 pixeles Área de visualización de 977 mm  para el de 44mm / Esfera de Vidrio Ion-X reforzado',categoria: 'reloj'},
        { title:"MacBook Pro – M1 13″", precio: 450, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2021/03/MacBookProM1_3.png", caracteristicas: 'Chip CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia  GPU de 8 núcleos Neural Engine de 16 núcleos  Memoria RAM Memoria unificada de 8 G  Almacenamiento SSD de 256/512 GB  Pantalla  Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores',categoria: 'note'},
        { title:"MacBook Pro – M1 Pro 14″", precio: 800, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/02/MacBook_Pro_14-in_Silver_PDP_Image_Position-1__MXLA.jpg", caracteristicas: 'Chip CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia  GPU de 8 núcleos Neural Engine de 16 núcleos  Memoria RAM Memoria unificada de 8 G  Almacenamiento SSD de 256/512 GB  Pantalla  Pantalla de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS; resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores',categoria: 'note'},
        { title:"Cable Apple Lightning a USB (1 m)", precio: 20, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2020/03/LightningUSB2.0.jpg", caracteristicas: '  Este cable USB 2.0 conecta tu iPhone, iPad o iPod con conector Lightning al puerto USB de tu computadora para sincronizarlos y cargarlos. También puedes conectar tu dispositivo al adaptador de corriente USB de Apple para cargarlo desde una toma de corriente.',categoria: 'carga'},
        { title:"Protector para Apple Watch InvisibleShiel HD Clarity Shield (44/42mm)", precio: 40, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2020/03/vidrio42.44.png", caracteristicas: 'Vidrio para Apple Watch InvisibleShiel HD Clarity Shield (44/42mm)',categoria: 'carga'},
        { title:"iPad 10.2″ WIFI – 9na Generación", precio: 500, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2021/01/iPad_Wi-Fi_Silver_PDP_Image_Position-1b__MXLA_R1_v1.jpg", caracteristicas: 'Pantalla: 10.2", 1620 x 2160 pixels Procesador: Apple A13 Bionic Almacenamiento: 64GB/256GB Expansión: sin microSD  Cámara: 8 MP OS: iPadOS 15 Perfil: 7.5 mm Peso: 487 g',categoria: 'ipad'},
        { title:"iPad Air 10.9″ WIFI (4ta Generación)", precio: 600, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2021/03/ipadAir4_gris.png", caracteristicas: 'Pantalla: 10.9", 1640 x 2360 pixels Procesador: Apple A14 Bionic Almacenamiento: 64GB/256GB  Expansión: sin microSD Cámara: 12 MP OS: iPadOS 14 Perfil: 6.1 mm Peso: 458 g',categoria: 'ipad'},
        { title:"iPad Pro 12.9′ 5ta Generación", precio: 1100, pictureURL: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2021/10/iPad_Pro_Wi-Fi_12.9_in_Space_Gray_PDP_Image_Position-1b__en-US-1.jpg", caracteristicas: 'Pantalla: 12.9", 2048 x 2732 pixels Procesador: Apple M1 RAM: 8GB/16GB  Almacenamiento: 128/256/512GB/1/2TB Expansión: sin microSD Cámara: Triple, 12MP+10MP+TOF 3D OS: iPadOS 14.5 Perfil: 6.4 mm Peso: 685 g',categoria: 'ipad'},
    
    ];

    const appleCollection = collection(appFirestore, 'productos');

    productos.forEach(items =>{
        const newDoc = doc(appleCollection);
        setDoc(newDoc,items).then(res =>{
            console.log('Documento guardado:',newDoc.id)
        })
        
    })
}



export default appFirestore
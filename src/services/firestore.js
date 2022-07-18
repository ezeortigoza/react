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


const app = initializeApp(firebaseConfig);

const appFirestore = getFirestore(app);

export function testDataBase(){
    console.log(appFirestore);
}



export async function traerProducto(){

    const appleCollection = collection(appFirestore, 'productos');

    const appleSnapshot = await getDocs(appleCollection);
    
 
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

    const productos = []

    const appleCollection = collection(appFirestore, 'productos');

    productos.forEach(items =>{
        const newDoc = doc(appleCollection);
        setDoc(newDoc,items).then(res =>{
            console.log('Documento guardado:',newDoc.id)
        })
        
    })
} 



export default appFirestore
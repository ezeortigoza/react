# APPLESTORE

## Descripción

Este repositorio contiene el proyecto desarrollado durante el curso de `React JS` de `Coderhouse`.

La aplicación consiste en un ecommerce en el cual se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra completo.

Tanto el listado de categorías, como los productos y las órdenes generadas se almacenan en `Firebase`.

Puede visitarse el deploy del proyecto en [](https://coder-vivas.vercel.app/)

![GIF de muestra.](/miapp/public/Gif.gif "Vista del proyecto.")

## Tecnologías utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Bootstrap](https://img.shields.io/badge/bootstrap-%2320232a.svg?style=for-the-badge&logo=bootstrap&logoColor=%2361DAFB) ![Netlify] (https://img.shields.io/badge/netlify-%2320232a.svg?style=for-the-badge&logo=netlify&logoColor=%2361DAFB)

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Netlify](https://www.netlify.com/) (para deploy)

## Ejecutar el proyecto

Para ejecutar el proyecto, el mismo puede descargarse como .zip o clonarlo con:

```
git clone https://github.com/ezeortigoza
```

Instalar las dependencias:

```
npm install
```

Luego es necesario crear un proyecto en Firebase y crear dos colecciones en Firestore (una con el nombre `products` donde se ingresarán los productos, y otra con el nombre `order` para almacenar las ordenes de compra que se generaron, los productos creados  se mostrarán en la NavBar). Los items de ambas colecciones deben crearse manualmente desde Firebase.

##### Ejemplo de product:
```
product = {
  category: "ipad"
  description: "descripción"
  pictureUrl: "url de la imagen"
  price: 450
  stock: 100
  title: "Nombre del producto"
}
```
##### Ejemplo de order:
```
Buyer
cel: "numero"
email:"email"
name:"nombre"

description:"caracteristica"
category:"categoria"
count: 5
id:"9G45V5XCFafhS9nxsfXC"
pictureURL:"imagen"
price: 500
stock:40
title:"titulo"
total: 40

```
La colección `orders` se creará automáticamente al generar la primer orden de compra.


 Iniciar el servidor con:

```
npm start
```

El proyecto estará corriendo en `http://localhost:3000`

## Consideraciones adicionales

### Bootstrap
Se escogió bootstrap como librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación, aprovechando la posibilidad de extender los componentes mediante el uso de themes.
### Firebase
En Firebase se almacenaron, además del listado de productos y las órdenes generadas, las categorías correspondientes a los productos.



## Mejoras del proyecto

### Barra buscadora
Agregar una barra buscadora para que el usuario se le haga mas facil encontrar su producto.

### Agregar un login
Otra de las cosas que agregare es un login para que solo el usuario que este registrado pueda comprar.
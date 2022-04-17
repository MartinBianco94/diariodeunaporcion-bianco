import alfajores from "../Assets/Img/alfajores_brownie.jpg";
import chipa from "../Assets/Img/pan_saborizado.jpg";
import torta from "../Assets/Img/torta_vainilla.jpg";
import bunuelos from "../Assets/Img/bunuelos_acelga.jpg";
import pastaFrola from "../Assets/Img/pasta_frola.jpg";

const PRODUCTS = [
  {
    id: "1",
    name: "alfajores",
    price: 200,
    imageUrl: alfajores,
    description: "un riquisimo alfajor de dulce de leche",
    stock: 2,
    category: "dulces",
  },
  {
    id: "2",
    name: "chipa",
    price: 50,
    imageUrl: chipa,
    description: "rellenos de queso",
    stock: 60,
    category: "salados",
  },
  {
    id: "3",
    name: "torta",
    price: 230,
    imageUrl: torta,
    description: "torta riquisima de frutilla",
    stock: 70,
    category: "dulces",
  },
  {
    id: "4",
    name: "pasta frola",
    price: 230,
    imageUrl: pastaFrola,
    description: "de membrillo o de batata, igual de rica",
    stock: 0,
    category: "dulces",
  },
  {
    id: "5",
    name: "talitas",
    price: 230,
    imageUrl: torta,
    description: "para untar o comer solo",
    stock: 70,
    category: "salados",
  },
  {
    id: "6",
    name: "bunuelos de acelga",
    price: 230,
    imageUrl: bunuelos,
    description: "bunuelos caseros de acelga",
    stock: 70,
    category: "salados",
  },
];

export const getProduct = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  } else {
    reject("error");
  }
});

export default getProduct;

import { sampleProducts } from "../Data/sample-products";
let data = [...sampleProducts];

const generateId = (data) =>
  data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

export const insertItem = (item) => {
  item.ProductID = generateId(data);
  item.inEdit = false;

  data.unshift(item);

  let newWeight = calculateWeight(data);
  for (const [i, product] of data.entries()) {
    console.log("product: " + JSON.stringify(product));
    product.Weight = newWeight;
  }

  return data;
};
export const getItems = () => {
  return data;
};
export const updateItem = (item) => {
  let index = data.findIndex((record) => record.ProductID === item.ProductID);
  data[index] = item;
  return data;
};
export const deleteItem = (item) => {
  let index = data.findIndex((record) => record.ProductID === item.ProductID);
  data.splice(index, 1);
  return data;
};

const calculateWeight = (data) => {
  let weight = 100 / data.length;
  console.log("Equal weight is: " + weight);

  for (const [i, product] of data.entries()) {
    console.log("product: " + JSON.stringify(product));
  }

  console.log("Number of products is: " + data.length);
  return weight;
};

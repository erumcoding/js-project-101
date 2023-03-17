// 💡 https://github.com/erumcoding/js-101-part-1

import products from '../products.js';
const button = document.querySelector('button');
const asceButton = document.querySelector('.ascending');
const descButton = document.querySelector('.descending');

const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();
  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();
  myProducts.forEach((product) => {
    createItem(product);
  });
};

const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');

  li.id = product.id;
  h3.className = 'name';
  h3.innerText = product.name;

  const price = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  div.className = 'price';
  div.innerText = price;

  li.append(h3, div);
  ul.append(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener('click', importData);
asceButton.addEventListener('click', sortAsce);
descButton.addEventListener('click', sortDesc);

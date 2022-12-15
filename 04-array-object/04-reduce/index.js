// 💡 https://github.com/erumcoding/js-101-part-1
// ✅ /04-array-object 디렉토리에 해당 파일이 위치해야 합니다.
// ✅ 반드시 이전 강의를 먼저 수강한 다음 이어서 코드를 작성하세요.
import products from '../products.js';

let myProducts;

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
  if (products) {
    myProducts = products.data;
  }

  myProducts.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

importData();

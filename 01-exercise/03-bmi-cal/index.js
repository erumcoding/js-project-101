// 💡 https://github.com/erumcoding/js-101-part-1

const form = document.querySelector('form');

const display = (bmi) => {
  const result = document.querySelector('.result');
  let group;

  if (bmi >= 30.0) {
    group = '중등도비만';
  } else if (bmi >= 25.0) {
    group = '경도비만';
  } else if (bmi >= 23.0) {
    group = '과체중';
  } else if (bmi >= 18.5) {
    group = '정상';
  } else {
    group = '저체중';
  }

  result.innerText = `${bmi} → ${group} 입니다.`;
};

const calculate = (weight, height) => {
  // 키 170㎝에 몸무게 73kg이면, 계산식 : 73 / (1.7 × 1.7)
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (event) => {
  event.preventDefault();

  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');

  if (weightInput.value !== '' && heightInput.value !== '') {
    const weight = weightInput.value;
    const height = heightInput.value / 100;
    const bmi = calculate(weight, height);

    display(bmi);
    heightInput.value = '';
    weightInput.value = '';
  }
};

form.addEventListener('submit', formHandler);

let counterValue = 0;

const decrementBtnRef = document.querySelector(
    '#counter button[data-action="decrement"]',
  );
  const incrementBtnRef = document.querySelector(
    '#counter button[data-action="increment"]',
  );
  const counterRef = document.querySelector('#counter #value')
  
  const onClickDecrement = () => {
      counterValue -= 1;
      counterRef.textContent = counterValue;
  };
  const onClickIncrement = () => {
      counterValue += 1;
      counterRef.textContent = counterValue;
  };
  
  decrementBtnRef.addEventListener('click', onClickDecrement);
  
  incrementBtnRef.addEventListener('click', onClickIncrement);
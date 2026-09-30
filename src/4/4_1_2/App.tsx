// 4_1_2  Fix a component failing to re-render
/*
  Эта кнопка должна переключаться между отображением "Вкл" и "Выкл". Однако она всегда показывает "Выкл". Что не так с этим кодом? Исправьте это.
*/

import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button onClick={handleClick}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}
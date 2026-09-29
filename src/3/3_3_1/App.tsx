// 3_3_1 Synced inputs 
/*
  Эти два входа являются независимыми. Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, и наоборот.
*/

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(newText: string) {
    setText(newText);
  }

  return (
    <>
      <Input
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <Input 
        label="Second input"
        value={text}
        onChange={handleChange}
      />

      <p>
        Synchronized value:
        <span> {text}</span>
      </p>
    </>
  );
}

function Input({ 
  label, 
  value, 
  onChange, 
}: { 
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
}


// 1_3_1 Convert some HTML to JSX
/* 
  Этот HTML был вставлен в компонент, но это не корректный JSX. Исправьте его.
*/

export default function Bio() {
  return (
    <div className="intro">
      <h1>Welcome to my website!</h1>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i> of scientists!</b>
      </p>
    </div>
  );
}
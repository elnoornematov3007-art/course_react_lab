// 3_1_3 Refactor the imperative solution without React
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Представьте, что React не существует. Можете ли вы переделать код в index.js таким образом, чтобы сделать логику менее хрупкой и более похожей на версию React? Как бы это выглядело, если бы состояние было явным, как в React?
*/

import { useState } from 'react';

export default function EditProfile() {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('Jane');
    const [surname, setSurname] = useState('Jacobs');
    return (
        <form onSubmit={e => {
            e.preventDefault();
            setEdit(!edit);
        }}>
            <label>
                Имя:{' '}
                {edit
                    ? <input value={name} onChange={e => setName(e.target.value)} />
                    : <b>{name}</b>}
            </label>
            <label>
                Фамилия:{' '}
                {edit
                ? <input value={surname} onChange={e => setSurname(e.target.value)} />
                : <b>{surname}</b>}
            </label>

            <button>
                {edit ? 'Сохранить' : 'Редактировать'}
            </button>

            <p>
                Привет, {name} {surname}!
            </p>
        </form>
    );
}
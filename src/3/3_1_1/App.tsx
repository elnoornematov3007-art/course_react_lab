// 3_1_1 Add and remove a CSS class
/*
    Сделайте так, чтобы щелчок на картинке удалял CSS-класс background--active из внешнего <div>, но добавлял класс picture--active к <img>. Повторный щелчок по фону восстановит исходные CSS-классы.

    Визуально вы должны увидеть, что щелчок на изображении удаляет фиолетовый фон и выделяет границу изображения. Щелчок за пределами изображения выделяет фон, но убирает выделение границы изображения.
*/

import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    function handlePictureClick(e: React.MouseEvent) {
        e.stopPropagation();
        setIsActive(true);
    }

    function handleBackgroundClick() {
        setIsActive(false);
    }
    return (
        <div 
            className={isActive ? "background" : "background background--active"}
            onClick={handleBackgroundClick}
        >
            <img
                className={isActive ? "picture picture--active" : "picture"}
                onClick={handlePictureClick}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
            />
        </div>
    );
}

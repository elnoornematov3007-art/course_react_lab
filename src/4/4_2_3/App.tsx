// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useRef, useState } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  function handleNextClick() {
    let nextIndex;

    if (index < catList.length - 1) {
      nextIndex = index + 1;
    } else {
      nextIndex = 0;
    }

    setIndex(nextIndex);

    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
  
  return (
    <>
      <nav>
        <button onClick={handleNextClick}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                className={
                  index === i ? 'active' : ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}


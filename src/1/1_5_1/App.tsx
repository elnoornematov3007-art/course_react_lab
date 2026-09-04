// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

const maria = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'Maria',
    profession: 'physicist and chemist',
    awardsCount: 4,
    awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
    discovery: 'polonium (chemical element)'
};

const katsuko = {
    name: 'Katsuko Saruhashi',
    imageId: 'KatsukoSaruhashi',
    profession: 'geochemist',
    awardsCount: 2,
    awards: 'Miyake Prize for geochemistry, Tanaka Prize',
    discovery: 'a method for measuring carbon dioxide in seawater'
};

function Profile(props: {
    name: string;
    imageId: string;
    profession: string;
    awardsCount: number;
    awards: string;
    discovery: string;
}) {
    return (
        <section className="profile">
            <h2>{props.name}</h2>

            <img
                className="avatar"
                src={getImageUrl(props.imageId)}
                alt={props.name}
                width={70}
                height={70}
            />

            <ul>
                <li>
                    <b>Profession: </b>
                    {props.profession}
                </li>

                <li>
                    <b>Awards: {props.awardsCount} </b>
                    ({props.awards})
                </li>

                <li>
                    <b>Discovered: </b>
                    {props.discovery}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>

            <Profile {...maria} />
            <Profile {...katsuko} />
        </div>
    );
}

// 1_7_3 Extracting a list item component
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

/*
  Внешний key я разместил в компоненте Recipe потому, что именно компоненты Recipe создаются в списке с помощью map, а key помогает React отличать их друг от друга.
*/

import { recipes } from "./data";

export function Recipe(props: {
  id: string;
  name: string;
  ingredients: string[];
}) {
  return (
    <div>
      <h2>{props.name}</h2>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}

// import React from 'react';
// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonToolbar
// } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Tab1.css';

// const Tab1: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Ingredients</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Tab 1</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <ExploreContainer name="Tab 1 page" />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Tab1;

import React, { useState } from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonItemDivider,
  IonFabButton,
  IonButton,
} from '@ionic/react';
import { truncate } from 'fs';

export const Tab1: React.FC = () => {
  //React Hooks
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [ingredients, setIngredients] = useState<Array<string>>([
    'apples',
    'peanut butter'
  ]);

  const submit = () => {
    if (text) {
      setIngredients([...ingredients, text]);
      setText('');
    }
  };

  const removeItem = (food: string) => {
    const newIngredients = ingredients.filter(elem => elem !== food);
    setIngredients(newIngredients);
  };

  return (
    <IonContent>
      <IonList>
        {ingredients.map(food => (
          <IonItemSliding key={food}>
            <IonItem>
              <IonLabel>{food}</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption ion-button color="danger" onClick={() => removeItem(food)}>Delete </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
      <IonItemDivider>Default Input with Placeholder</IonItemDivider>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <IonList>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Enter Input"
              onIonChange={e => setText(e.detail.value!)}
            ></IonInput>
            <IonButton type="submit">Submit</IonButton>
          </IonItem>
        </IonList>
      </form>
    </IonContent>
  );
};

export default Tab1;

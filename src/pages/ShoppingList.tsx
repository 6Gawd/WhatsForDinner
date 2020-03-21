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
  IonButton
} from '@ionic/react';
import { useSelector } from 'react-redux';
// import { truncate } from 'fs';

export const ShoppingList: React.FC = () => {
  //React Hooks
  const [text, setText] = useState<string>();
  // const [number, setNumber] = useState<number>();
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

  const email = useSelector((state: any) => state.user.email);

  return (
    <IonContent>
      <h3>Hello {email}</h3>
      <IonList>
        <h2>Ingredients</h2>
        {ingredients.map(food => (
          <IonItemSliding key={food}>
            <IonItem>
              <IonLabel>{food}</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption
                ion-button
                color="danger"
                onClick={() => removeItem(food)}
              >
                Delete{' '}
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
      <IonItemDivider>Default Input with Placeholder</IonItemDivider>
      <IonList>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Enter Input"
            onIonChange={e => setText(e.detail.value!)}
          ></IonInput>
          <IonButton type="submit" onClick={submit}>
            Submit
          </IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default ShoppingList;

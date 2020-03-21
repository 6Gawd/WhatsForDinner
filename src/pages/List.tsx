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
  IonPage
} from '@ionic/react';
  import { User } from '../App';

const List: React.FC = () => {
  //React Hooks
  const [text, setText] = useState<string>();
  // // const [number, setNumber] = useState<number>();
  const [ingredients, setIngredients] = useState<Array<string>>([
    'apples',
    'peanut butter'
  ]);
    const [user, setUser] = useState<User>({
    id:'',
    firstName: '',
    lastName: '',
    email: ''
  })

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

  console.log("List", user)

  return (
    <IonPage>
    <IonContent>
      <h3>Hello </h3>
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
    </IonPage>
  );
};

export default List;

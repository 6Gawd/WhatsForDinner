import React, { useState, useEffect } from 'react';
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
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
// import { truncate } from 'fs';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    console.log(email, password);
  };
  //React Hooks
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Email"
          // Possibly revisit event type
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          placeholder="Password"
          // Possibly revisit event type
          onIonChange={(e: any) => setPassword(e.target.value)}
          type="password"
        />
        <IonButton onClick={loginUser}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

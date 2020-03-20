import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const registerUser = () => {
    console.log(email, password, cpassword);
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
        <IonInput
          placeholder="Confirm Password"
          // Possibly revisit event type
          onIonChange={(e: any) => setCPassword(e.target.value)}
          type="password"
        />
        <IonButton onClick={registerUser}>Login</IonButton>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;

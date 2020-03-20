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
  IonTitle,
  IonLoading
} from '@ionic/react';
// import { truncate } from 'fs';
import { toast } from '../toast';
import { registerUser } from '../fbConfig/fbConfig';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [busy, setBusy] = useState<boolean>(false);

  const register = async () => {
    setBusy(true);
    if (password !== cpassword) {
      return toast('Passwords must match');
    }
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      firstName.trim() === '' ||
      lastName.trim() === ''
    ) {
      return toast('All Fields are required');
    }

    const res = await registerUser(firstName, lastName, email, password);
    if (res) {
      toast('You have registered successfully');
    }
    setBusy(false);
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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading" duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput
          placeholder="First Name"
          // Possibly revisit event type
          onIonChange={(e: any) => setFirstName(e.target.value)}
        />
        <IonInput
          placeholder="Last Name"
          // Possibly revisit event type
          onIonChange={(e: any) => setLastName(e.target.value)}
        />
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
        <IonButton onClick={register}>Register</IonButton>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;

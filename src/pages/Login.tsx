import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import { loginUser } from '../fbConfig/fbConfig';
import { toast } from '../toast';
import { User } from '../App'

export const Login: React.FC = () => {
  const history = useHistory();
  const [busy, setBusy] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User>({
    id:'',
    firstName: '',
    lastName: '',
    email: ''
  })

  const login = async () => {
    setBusy(true);
    const {uid}: any = await loginUser(email, password);
    if (uid) {
      setUser(uid)
      history.replace('/list');
      toast('Login successful');
    }
    setBusy(false);
  };
  //React Hooks
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log('user id:', user)
  }, [user]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Loading" duration={0} isOpen={busy} />
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
        <IonButton onClick={login}>Login</IonButton>
        <p>
          Want to signup?<Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;

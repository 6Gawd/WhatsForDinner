import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './UserProfile.css';
import { logoutUser } from '../fbConfig/fbConfig';
import { useHistory } from 'react-router';

const UserProfile: React.FC = () => {
  const [busy, setBusy] = useState(false);
  const history = useHistory();
  const logout = async () => {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <IonLoading message="Logging out" duration={0} isOpen={busy} />
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;

import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from 'firebase'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import List from './pages/List';
import Recipes from './pages/Recipes';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './fbConfig/fbConfig';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export interface User {
  id: any,
  firstName: string,
  lastName: string,
  email: string
}

// interface LogInSignUpData {
//   email: string;
//   displayName: string;
//   password: string;
// }

// interface UserData {
//   email: string;
//   uid?: string;
//   displayName: string;
//   photoURL: string;
//   password: string;
//   favorites: object;
//   favoritesArray: Array<FavoriteObj>;
// }

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const [user, setUser] = useState<User>()

  // const loggedIn: any = (user: object) => {
  //   setUser(user)
  // }

  // useEffect(() => {
  //   setBusy(true);
  //   getCurrentUser().then((user: any) => {
  //     if (user) {
  //       window.history.replaceState({}, '', '/list');
  //     } else {
  //       window.history.replaceState({}, '', '/login');
  //     }
  //     setBusy(false);
  //   });
  // }, []);

//LESLIE/MIKES
  // useEffect(() => {
  //   setBusy(true);
  //   firebase.auth().onAuthStateChanged(async user => {
  // if (user) {
  //   console.log('Currently logged in!');
  //   let userObj = {
  //     email: user.email || '',
  //     uid: user.uid || ''
  //   };
  // }

  //   })
  //   setBusy(false)
  // }, {})
  console.log("App user", user)

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/list" component={List} exact={true} user={user} />
            <Route path="/recipes" component={Recipes} exact={true} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/"
              render={() => <Redirect to="/login" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="list" href="/list">
              <IonIcon icon={triangle} />
              <IonLabel>List</IonLabel>
            </IonTabButton>
            <IonTabButton tab="recipes" href="/recipes">
              <IonIcon icon={ellipse} />
              <IonLabel>Recipes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="userprofile" href="/userprofile">
              <IonIcon icon={square} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

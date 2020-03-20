import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { setUserState } from './store/redux/userReducer';

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setBusy(true);
    getCurrentUser().then((user: any) => {
      if (user) {
        dispatch(setUserState(user.email));
        window.history.replaceState({}, '', '/list');
      } else {
        window.history.replaceState({}, '', '/login');
      }
      setBusy(false);
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/list" component={List} exact={true} />
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
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

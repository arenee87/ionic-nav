import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import './App.css';

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
import './theme/colors.css';
import Posts from './pages/Posts';
import Bio from './pages/Bio';
import Friends from './pages/Friends';
import Photos from './pages/Photos';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu side="end" menuId="first" contentId="main">
    <IonHeader>
        <IonToolbar>
            <IonTitle>Browse Media</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonList>
            <IonMenuToggle>
                <IonItem routerLink="/">My Profile</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
                <IonItem routerLink="/profile/friends">Visit Friends</IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
                <IonItem routerLink="/profile/bio">Bio</IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
                <IonItem routerLink="/profile/posts">See Posts</IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
                <IonItem routerLink="/profile/photos">Photos</IonItem>
            </IonMenuToggle>
        </IonList>
    </IonContent>
</IonMenu>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/profile/bio">
          <Bio />
        </Route>
        <Route path="/profile/friends">
          <Friends />
        </Route>
        <Route exact path="/profile/posts">
          <Posts />
        </Route>
        <Route exact path="/profile/photos">
          <Photos />
        </Route>
        <Route exact path="/">
          <Redirect to="/profile" />
          <Home />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

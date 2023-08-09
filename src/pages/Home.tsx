import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={ true }>
        <IonToolbar color="magenta">
          <IonTitle>User Profile</IonTitle>
          <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div id="container">
            <h2>Blessings to your profile</h2>
            <img alt="" src="https://media.istockphoto.com/id/1068588904/photo/thinking-outside-the-box-concept.jpg?b=1&s=170667a&w=0&k=20&c=JQsoRV3atp3bQT79KcKeD90wHunH-b-7jHlv8Cl8akA=" />
            <p>
                Happy fun times to come see friends and enjoy life until fun begins but doesn't end and laughs all over everywhere you go. 
            </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const Photos: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar color="magenta">
            <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
            </IonButtons>
              <IonTitle>My Photos</IonTitle>
              <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <div id="container">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://images.unsplash.com/photo-1594000033519-314fe07aabc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxlc3NpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://images.unsplash.com/photo-1602718707118-bdd5f2595e54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsZXNzaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://images.unsplash.com/photo-1526246708488-d433888791b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwY2hlZXRhaHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonImg alt="" src="https://plus.unsplash.com/premium_photo-1666726479244-e271f9301c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle></IonCardTitle>
                                    <IonCardSubtitle></IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
              </div>
          </IonContent>
        </IonPage>
      );
};

export default Photos;
import { IonGrid, IonRow, IonCol, IonCard, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonBackButton } from '@ionic/react';

const Bio: React.FC = () => {
    return(
        <IonPage>
          <IonHeader>
            <IonToolbar color="magenta">
              <IonTitle>Bio</IonTitle>
              <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
            </IonToolbar>
          </IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol size-md="3">
                        <IonCard>
                            <img alt="" src="https://images.unsplash.com/photo-1617551307538-c9cdb9d71289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        </IonCard>
                    </IonCol>
                    <IonCol size-md="9">
                        <div>
                            <h1>My Profile</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonPage>
        )};

export default Bio;

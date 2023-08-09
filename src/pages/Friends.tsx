import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Friends: React.FC = () => {
    const friendList: string[] = [
        "Luke Danes",
        "Lorelai Gilmore",
        "Laine Kim",
        "Dean Forester",
        "Paris Geller",
        "Rory Gilmore",
        "Madeline Lynn",
        "Louise Grant"
    ];

    

    const displayFriends = (items: string[]) => {
        return items.map(item => {
            return (
                <IonItem>
                    <IonLabel>{ item }</IonLabel>
                </IonItem>
            )
        })
    }

    return (
    <IonPage>
        <IonHeader>
        <IonToolbar color="magenta">
            <IonTitle>Friends</IonTitle>
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
            <h2>List of Friends</h2>
            <IonList>
                { displayFriends(friendList) }
            </IonList>

        </div>
        </IonContent>
    </IonPage>
    );
  
};

export default Friends;
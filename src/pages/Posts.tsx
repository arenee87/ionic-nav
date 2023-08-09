import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Posts: React.FC = () => {
    const feed: string[] = [
        "How are you?",
        "Hi there!",
        "Life is good!",
        "Hello world!",
        "Laughs all day!",
        "Here is the new puppy..",
        "Nature is so beautiful!",
        "Happy life, happy faces!"
    ];

   

    const displayPosts = (feed: string[]) => {
        return feed.map(feed => {
            return (
                <IonItem>
                    <IonLabel>{ feed }</IonLabel>
                </IonItem>
            )
        })
    }

    return (
    <IonPage>
        <IonHeader>
        <IonToolbar color="magenta">
            <IonTitle>Post Feed</IonTitle>
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
            <h2> New Posts! </h2>
            <IonList>
                { displayPosts(feed) }
            </IonList>

            
        </div>
        </IonContent>
    </IonPage>
    );
  
};

export default Posts;
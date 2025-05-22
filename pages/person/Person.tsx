import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import './Person.scss'
import PersonComponent from "../../components/Person.Component";

const Person:React.FC = ()=>{
    return <>
        <IonPage>
            <div className="ion-page" id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Person List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList lines="none" id="person-list">
                        <PersonComponent />                        
                        <PersonComponent />                        
                        <PersonComponent />                         
                    </IonList>
                </IonContent>
            </div>
        </IonPage>
    </>
}

export default Person;
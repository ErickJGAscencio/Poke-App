import { createAnimation, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import { handLeft, home, person, triangle } from "ionicons/icons";
import './Menu.scss'
import { useHistory } from "react-router";

const Menu: React.FC = () => {
    const history = useHistory();

    return <>
        <IonMenu contentId="main-content" id="main-menu">
            <IonHeader>
                <IonToolbar>
                    <IonImg 
                        src="https://th.bing.com/th/id/OIP.ruTC4YeorDjXYWOuageFfQHaEY?rs=1&pid=ImgDetMain"
                    />
                    <IonTitle>Gobierno de Tabasco</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding" id="menu-content">
                <IonList lines="none">
                    <IonItem routerLink="/home">
                        <IonIcon icon={home} />
                        <IonTitle>Pokemon Finder</IonTitle>
                    </IonItem>
                    <IonItem routerLink="/api">
                        <IonIcon icon={triangle} />
                        <IonTitle>Api Rest</IonTitle>
                    </IonItem>
                    <IonItem routerLink="/ataques">
                        <IonIcon icon={handLeft} />
                        <IonTitle>Ataques</IonTitle>
                    </IonItem>
                    <IonItem routerLink="/person">
                        <IonIcon icon={person}/>
                        <IonTitle>Person List</IonTitle>
                    </IonItem>
                    {/* <IonItem onClick={() => history.push("/ataques")}>
                        <IonIcon icon={handLeft} />
                        <IonTitle>Ataques</IonTitle>
                    </IonItem> */}
                </IonList>
            </IonContent>
        </IonMenu>
    </>
}

export default Menu;
import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import { handLeft, home, triangle } from "ionicons/icons";
import './Menu.scss'

const Menu: React.FC = () => {

    return <>
        <IonMenu contentId="main-content" id="main-menu">
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding" id="menu-content">
                <IonList lines="none">
                    <IonItem routerLink="/home">
                        <IonIcon icon={home} />
                        <IonTitle>Pokemon</IonTitle>
                    </IonItem>
                    <IonItem routerLink="/segunda">
                        <IonIcon icon={triangle} />
                        <IonTitle>Formas</IonTitle>
                    </IonItem>
                    <IonItem routerLink="/purchases">
                        <IonIcon icon={handLeft} />
                        <IonTitle>Ataques</IonTitle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    </>
}

export default Menu;
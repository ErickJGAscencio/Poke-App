import { IonAvatar, IonImg, IonItem, IonLabel } from "@ionic/react"

const PersonComponent: React.FC = () => {
    return <>
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="https://th.bing.com/th/id/OIP.8t1WtYLAPVB189hu7pCP3gHaHa?rs=1&pid=ImgDetMain" />
            </IonAvatar>
            <IonLabel slot="end">
                <h2>Nombre de una Persona</h2>
                <p>Descripción asociada al avatar <span>:3</span></p>
            </IonLabel>
        </IonItem>
    </>
}

export default PersonComponent;
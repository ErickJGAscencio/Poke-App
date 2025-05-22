import { IonContent, IonPage, IonSpinner, useIonRouter } from "@ionic/react"
import './Loader.scss'

const Loader: React.FC = () => {
    const router = useIonRouter();

    setTimeout(() => {
        router.push('/home');
    }, 1500);

    return <>
        <IonPage>
            <div className="ion-page" id="main-content">
                <IonContent>
                    <div className="flex-center">
                        <IonSpinner />
                    </div>
                </IonContent>
            </div>
        </IonPage>
    </>
}

export default Loader
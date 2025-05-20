import { IonContent, IonPage, IonSpinner, useIonRouter } from "@ionic/react"
import './Loader.scss'
import { useEffect } from "react";

const Loader: React.FC = () => {
    const router = useIonRouter();

    setTimeout(() => {
        router.push('/home');
    }, 1500);

    return <>
        <IonPage>
            <IonContent>
                <div className="flex-center">
                    <IonSpinner />
                </div>
            </IonContent>
        </IonPage>
    </>
}

export default Loader
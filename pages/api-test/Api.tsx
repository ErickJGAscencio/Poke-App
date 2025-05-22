import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonLabel, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import './Api.scss';
import { getUser } from "../../services/service-crud.api";
import { useState } from "react";

const Api: React.FC = () => {
    const [log, setLog] = useState<string>();
    const [id, setId] = useState<number>(0);
    const [data, setData] = useState<any>({});

    const readHandler = async () => {
        try {
            console.log("Getting");
            const response = await getUser();
            setData(response);
            return response;
        } catch (error) {

        }
    }

    return (
        <IonPage>
            <div className="ion-page" id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>API Rest</IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent class="ion-padding centered-content">
                    <div className="card-container">
                        <IonCard> {/*post*/}
                            <IonCardHeader>
                                <IonCardTitle>Create/Insert</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonInput
                                    type="email"
                                    fill="solid"
                                    label="Name"
                                    labelPlacement="floating"
                                    clearInput={true}
                                />

                                <IonButton
                                    onClick={() => readHandler()}
                                    shape="round"
                                    expand="full"
                                >
                                    Send
                                </IonButton>

                                <IonCard>
                                    <IonCardHeader>
                                        <IonNote>Output</IonNote>
                                    </IonCardHeader>
                                    <IonLabel>{log}</IonLabel>
                                </IonCard>
                            </IonCardContent>
                        </IonCard>

                        <IonCard> {/*get*/}
                            <IonCardHeader>
                                <IonCardTitle>Read/Get</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonInput
                                    type="number"
                                    fill="solid"
                                    label="Id-#"
                                    labelPlacement="floating"
                                    clearInput={true}
                                    onChangeCapture={()=>setId}
                                />
                                <IonButton
                                    onClick={() => readHandler()}
                                    shape="round"
                                    expand="full"
                                >
                                    Send</IonButton>

                                <IonCard>
                                    <IonCardHeader>
                                        <IonNote>Output</IonNote>
                                    </IonCardHeader>
                                    <IonLabel>{}</IonLabel>
                                </IonCard>
                            </IonCardContent>
                        </IonCard>

                        <IonCard> {/*put*/}
                            <IonCardHeader>
                                <IonCardTitle>Update/Put</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonInput
                                    type="email"
                                    fill="solid"
                                    label="Name"
                                    labelPlacement="floating"
                                    clearInput={true}
                                />
                                <IonButton shape="round" expand="full">Send</IonButton>

                                <IonCard>
                                    <IonCardHeader>
                                        <IonNote>Output</IonNote>
                                    </IonCardHeader>
                                    <IonLabel>asdasd</IonLabel>
                                </IonCard>
                            </IonCardContent>
                        </IonCard>

                        <IonCard> {/*delete*/}
                            <IonCardHeader>
                                <IonCardTitle>Delete/Delete</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonInput
                                    type="email"
                                    fill="solid"
                                    label="Name"
                                    labelPlacement="floating"
                                    clearInput={true}
                                />
                                <IonButton shape="round" expand="full">Send</IonButton>

                                <IonCard>
                                    <IonCardHeader>
                                        <IonNote>Output</IonNote>
                                    </IonCardHeader>
                                    <IonLabel>asdasd</IonLabel>
                                </IonCard>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </IonContent>
            </div>
        </IonPage>
    );
};

export default Api;

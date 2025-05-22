import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Api.scss";
import { ObtenerEntrada } from "../../services/service-crud.api";
import { useState } from "react";

interface DataResponse{
    id: number,
    userId: number,
    tittle: string, 
    completed: boolean
}

const Api: React.FC = () => {
  const [log, setLog] = useState<string>("Ingrese un numero mayor a 0");
  const [id, setId] = useState<number>(0);
  const [data, setData] = useState<Array<DataResponse>>([]);

  const readHandler = async (id: number) => {
    console.log(id);
    if (id <= 0) {
      setLog("Ingrese un número mayor a 0");
      return;
    }
    try {
      console.log("Getting user with ID:", id);
      const response = await ObtenerEntrada(id);

      if (response && Array.isArray(response)) {
        setData(response);
      } else {
        setData([]);
        setLog("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setLog("Error al obtener datos");
    }
  };

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
            {/* <CardComponent id={id} setId={setId} readHandler={readHandler} log={log} /> */}

            <IonCard>
              {/*post*/}
              <IonCardHeader>
                <IonCardTitle>Create/Insert</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput
                  type="number"
                  fill="solid"
                  label="Id numérico"
                  labelPlacement="floating"
                  clearInput={true}
                  onIonChange={(e) => setId(Number(e.detail.value))}
                />
                <IonButton
                  onClick={() => readHandler(id)}
                  shape="round"
                  expand="full"
                >
                  Send
                </IonButton>
                <IonNote>{log}</IonNote>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Read/Get</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput
                  type="number"
                  fill="solid"
                  label="Id numérico"
                  labelPlacement="floating"
                  clearInput={true}
                  name="id"
                  onIonChange={(e) => setId(Number(e.detail.value))}
                  onBlur={(e) => setId(Number(e.target.value))}
                />

                <IonButton
                  onClick={() => readHandler(id)}
                  shape="round"
                  expand="full"
                >
                  Send
                </IonButton>

                <IonCard>
  <IonCardHeader>
    <IonCardTitle>Datos obtenidos:</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    {data ? (
      <>
        <IonNote>ID: {data.id}</IonNote>
        <IonNote>User ID: {data.userId}</IonNote>
        <IonNote>Title: {data.title}</IonNote>
        <IonNote>Completed: {data.completed ? "✅ Sí" : "❌ No"}</IonNote>
      </>
    ) : (
      <IonNote>No se encontraron datos</IonNote>
    )}
  </IonCardContent>
</IonCard>

              </IonCardContent>
            </IonCard>

            <IonCard>
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
                <IonButton shape="round" expand="full">
                  Send
                </IonButton>

                <IonCard>
                  <IonCardHeader>
                    <IonNote>Output</IonNote>
                  </IonCardHeader>
                  <IonLabel>asdasd</IonLabel>
                </IonCard>
              </IonCardContent>
            </IonCard>

            <IonCard>
              {" "}
              {/*delete*/}
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
                <IonButton shape="round" expand="full">
                  Send
                </IonButton>

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
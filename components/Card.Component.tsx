import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonNote,
} from "@ionic/react";

interface MyProps {
  id: number;
  setId: (value: number) => void;
  readHandler: (id: number) => void;
  log: string;
}

const CardComponent: React.FC<MyProps> = ({ id, setId, readHandler, log }) => {
  return (
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

        <IonButton onClick={() => readHandler(id)} shape="round" expand="full">
          Send
        </IonButton>

        <IonCard>
          <IonCardHeader>
            <IonNote>{log}</IonNote>
            {/* {data ? JSON.stringify(data) : "No data found"} */}
          </IonCardHeader>
        </IonCard>
      </IonCardContent>
    </IonCard>
  );
};

export default CardComponent;

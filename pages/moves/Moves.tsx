import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonInfiniteScroll, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import './Moves.scss'

const Moves: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
    const [toastMessage, setToastMessage] = useState<string>("");

    return <>
        <IonPage>
            <div className="ion-page" id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Movimientos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent class="ion-padding">
                    <SearchBar setPokemonData={setPokemonData} setToastMessage={setToastMessage} />
                    <IonList >
                        {pokemonData?.moves.map((item, index) => (
                            <IonItem  key={index}>
                                <IonLabel>
                                    {item.move.name}
                                </IonLabel>
                            </IonItem>
                        ))}
                    </IonList>
                </IonContent>
            </div>
        </IonPage>
    </>
}

export default Moves;
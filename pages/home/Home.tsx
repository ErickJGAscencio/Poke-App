import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonProgressBar, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import './Home.scss';
import SearchBar from '../../components/SearchBar';
import PokemonInformation from '../../components/PokemonInformation';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [toastMessage, setToastMessage] = useState<string>("");  

  return (
    <IonPage>
      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Pokemon Finder</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <SearchBar setPokemonData={setPokemonData} setToastMessage={setToastMessage}/>
          <PokemonInformation pokemonData={pokemonData} />
        </IonContent>
        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage}
          duration={2000}
          onDidDismiss={()=>setToastMessage("")}
          />
      </div>
    </IonPage>
  );
};

export default Home;

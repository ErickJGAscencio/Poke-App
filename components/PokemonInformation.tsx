import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonList } from '@ionic/react';
import './PokemonInformation.scss';
import { atCircle, hourglassOutline, star } from 'ionicons/icons';

interface ExploreContainerProps {
  pokemonData: PokemonData | null;
}

const PokemonInformation: React.FC<ExploreContainerProps> = ({ pokemonData }) => {
  return (
    <div>
      {pokemonData?.sprite &&
        <IonImg
          src={pokemonData?.sprite}
          alt={`Imagen de ${pokemonData?.name}`}
        />
      }
      <IonCard>
        <IonCardHeader>
          <IonCardTitle> <b>Types</b> </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList lines='none'>
            {pokemonData?.types.map((item, index) => (
              <IonItem key={index}>
                <IonLabel> 
                   {item.type.name}
                  </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>ESTE ES OTRO TITULO</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList lines='none'>
            {pokemonData?.types.map((item, index) => (
              <IonItem key={index}>
                <IonLabel>{item.type.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle> <b>Evolution</b> </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList lines='none'>
            {pokemonData?.evolutions.map((item, index) => (
              <IonItem key={index}>sscs
                <IonLabel>{item.species.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle><b>Abilities</b></IonCardTitle>
        </IonCardHeader>
          <IonCardContent>
            <IonList lines='none'>
              {pokemonData?.abilities.map((ability, index) => (
                <IonItem key={index} >
                  <IonLabel>{ability}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
      </IonCard>

    </div>
  );
};

export default PokemonInformation;

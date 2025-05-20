import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonProgressBar, IonSpinner, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { getEvolutions, getPokemon } from "../services/service";
import './SearchBar.scss';

interface SearchBarProps {
    setPokemonData: (data: PokemonData | null) => void;
    setToastMessage: (message: string |  "") => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setPokemonData, setToastMessage }) => {
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setName(event.target.value);
    };

    const handleSend = async () => {
        if (!name.trim()) {
            setToastMessage("Campo vacío, ingrese un nombre.")
            return;
        }
        setPokemonData(null);
        setIsLoading(true);
        try {
            const data = await getPokemon(name.toLowerCase());
            console.log(data);
            if (data == null) {
                setToastMessage("No se encontró alguna entrada con ese nombre.")
                return;
            }
            const dataEvo = await getEvolutions(data.id);
            console.log(dataEvo);
            setPokemonData({
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                types: data.types,
                abilities: data.abilities.map((ability: Ability) => ability.ability.name),
                evolutions: dataEvo?.chain?.evolves_to ?? [],
                moves: data.moves
            });
            console.log(data.types);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <IonInput            
                label="Pokemon name"
                placeholder="E.g. Charmander"
                type="text"
                value={name}
                onIonInput={handleChange}
                labelPlacement="floating"
                clear-input-icon={true}
                fill="solid"
            />

            <div className="center-container">
                <IonButton
                    onClick={handleSend}
                    expand="block"
                    id="custom-button"
                >
                    Search
                </IonButton>

                {isLoading && (
                    <IonSpinner
                    />
                )}
            </div>
        </>

    );
};

export default SearchBar;
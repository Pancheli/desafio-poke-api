import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "react-bootstrap";
import Select from "react-select";


export default function Pokemones() {
    const [listadoPokemones, setListadoPokemones] = useState();
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
    const [selectedOptions, setSelectedOptions] = useState();
    const navigate = useNavigate();
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
        getListadoPokemones();
    }, []);

    const getListadoPokemones = async() => {
        const resp = await fetch(url_api);
        const data = await resp.json();
        const listado_pokemones = data.results;
        listado_pokemones.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        const listado_pokemones_final = [];
        listado_pokemones.forEach((pokemon) => {
            let pokemon_object = {
                                    value: pokemon.name,
                                    label: pokemon.name
            };
            listado_pokemones_final.push(pokemon_object);
        });
        setListadoPokemones(listado_pokemones_final);
    };

    const handleSelect = (data) => {
        setSelectedOptions(data);
        setPokemonSeleccionado(data.value);
    };

    const verDetallesPokemon = () => {
        navigate(`/pokemones/${pokemonSeleccionado}`);
    };

    return (
        <>
        <section className="container margin-top text-center">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-xs-12">
                    <h2 className="mb-5">Selecciona un Pokémon</h2>
                    <div style={{width: 350, margin: '0 auto', textTransform: 'capitalize'}}>
                        <Select
                            options={listadoPokemones}
                            placeholder="Selecciona un Pokémon"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti={false}
                            theme={(theme) => ({
                                ...theme,
                                borderRaius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#FFDE00',
                                    primary: '#3B4CCA',
                                },
                            })}
                            classNamePrefix="select"
                             />
                    </div>
                    <Button className="btn btn-secondary btn-lg mt-5" onClick={verDetallesPokemon}>Ver detalles</Button>
                </div>
            </div>
        </section>
        </>
    )

}
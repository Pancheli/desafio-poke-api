import { useEffect, useState, useMemo } from "react";

export default function PokemonCard({ infoPokemon }) {
    const [themeColor, setThemeColor] = useState('');
    const typeColor = useMemo(() => {
        return {
            bug: "#26de81",
            dragon: "#ffeaa7",
            electric: "#fed330",
            fairy: "#FF0069",
            fighting: "#30336b",
            fire: "#f0932b",
            flying: "#81ecec",
            grass: "#00b894",
            ground: "#EFB549",
            ghost: "#a55eea",
            ice: "#74b9ff",
            normal: "#95afc0",
            poison: "#6c5ce7",
            psychic: "#a29bfe",
            rock: "#2d3436",
            water: "#0190FF"
        };
    }, []);

    useEffect(() => {
        if (infoPokemon.types && infoPokemon.types[0]) {
            setThemeColor(typeColor[infoPokemon.types[0]]);
        }
    }, [infoPokemon.types, typeColor])

    return (
        <>
        <section id="card" style={{background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`}}>
            <p className="hp">
                <span>HP</span>
                {infoPokemon.hp}
            </p>
            <img src={infoPokemon.img} alt={`Imagen de ${infoPokemon.name}`} />
            <h2 className="poke-name">{infoPokemon.name}</h2>
            <div className="types">
                {infoPokemon.types?.map((type, i) => (
                    <span key={i} style={{backgroundColor: typeColor[type]}}>{type}</span>
                ))}
            </div>

        </section>
        </>
    )

}
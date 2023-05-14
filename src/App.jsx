import { useEffect, useState } from 'react';
import './App.css'

const  Character = ({character}) => {
    const isActive = character.status === "Dead";
    const statusClass = `statusCode ${isActive ? 'statusCodeDead' : 'statusCodeActive'}`

    return <>
     <div className='cardCharacter'>
        <img src={character.image} className='characterImage'/>
        <section className='textContainer'>
            <h2 className="characterName">{character.name}</h2>
            <span className={statusClass}/>
            <span className='characterStatus'>
                {character.status}
            </span>
        </section>
    </div>
    </>
}

export function App() {

    const [characters, setCharacters ] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character').then((response)=> response.json())
        .then(response => setCharacters(response.results))
    }, [])

    console.log(characters)

    return <>
    <header>
        <div className="heroContainer">
            <h2>{'The Ricky and Morty Fetch API'}</h2>
        </div>
    </header>
    <section className="galleryCharacters">
    {characters?.map((character, idx)=> <Character key={idx} character={character}/> )}
    </section>
    </>
}
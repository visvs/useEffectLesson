import './App.css'

const function Character({character}) {

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

function Texto(props) {
    return (
        <>
            <h1>Meu Primeiro componente</h1>
            <h2>Meu nome é {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </>
    )
}

export default Texto
const ButtonDelete = ({eliminar, texto}) => {
    return (
        <button onClick={eliminar}>{texto}</button>
    );
}

export default ButtonDelete;
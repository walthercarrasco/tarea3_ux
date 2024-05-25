const CheckTarea = ({idTask, onChange1}) => {
    return (<input type="checkbox" id={idTask} onChange={onChange1}/>);
}

export default CheckTarea;
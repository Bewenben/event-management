export default function Input(props) {

    return (
        <div className="form__group field">
            <input required="" placeholder={props.name} className="form__field" type={props.type}></input>
            <label className="form__label" htmlFor={props.name}>{props.name}</label>
        </div>
    );
}
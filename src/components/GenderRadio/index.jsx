

export default function GenderRadio({name, id, value, color, children}){
    return(
        <div className="flex space-x-2">
                <input type="radio" name={name} id={id} value={value} className={` accent-${color}-600`} />
                <label htmlFor={id}>
                    {children}
                </label>
        </div>
    )
}
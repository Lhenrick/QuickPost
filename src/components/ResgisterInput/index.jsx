

export default function RegisterInput({inputTitle, inputType, functionOnChange, placeholder, minLength, maxLength, errorConst }) {
    return (
        <>
            <p className="text-white font-bold">{inputTitle}</p>
            <input type={inputType} required onChange={functionOnChange} placeholder={placeholder} minLength={minLength} maxLength={maxLength} className={`p-2 focus:outline-none rounded-xl text-white bg-zinc-900 border-yellow-400 border-2 w-full ${errorConst ? 'border-red-500' : 'border-x-yellow-400'}`} />
            {errorConst && <p className="text-red-500">{errorConst}</p>}
        </>
    )
}
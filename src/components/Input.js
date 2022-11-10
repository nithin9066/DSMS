function Input({reff, lebel, type}) {
    return ( 
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-500">{lebel}</label>
            <input type={type} {...reff} className="border border-gray-300 rounded-md text-slate-500 text-sm font-medium" placeholder={`Enter ${lebel}`} />
        </div>
     );
}

export default Input;

function Select({ list, reff, label, setconponentList, register}) {
    
    const setList = (e) =>{
        if(register !== undefined)
        {
            const data = (JSON.parse(e.target.value));

            register("subscription_id", data.id)
            setconponentList(data.components)
        }
        else
        {
            register(reff, e.target.value)
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-500">{label}</label>
            <select onChange={setList} className="border border-gray-300 rounded-md text-slate-500 text-sm font-medium">
                <option>Select {label}</option>
                {
                    list.length > 0
                        ?
                        list.map((item, inx) => <option key={inx} value={ register !== undefined ? JSON.stringify(item) : item.id}>{ register !== undefined ? item.name : (JSON.parse(item)).name }</option>)
                        : ''
                }
            </select>
        </div>
    );
}

export default Select;
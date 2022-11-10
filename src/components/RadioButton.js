function RadioButton({ name, reff, label, value, value2, label1, label2 }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-500">{label}</label>
            <div className="flex gap-4">
                <div className="space-x-2">
                    <input type={'radio'} value={value} {...reff} name={name} className="border border-gray-300 rounded-md text-slate-500 text-sm font-medium" />
                    <label className="text-xs text-slate-600">{label1}</label>
                </div>
                <div className="space-x-2">
                    <input type={'radio'} value={value2} {...reff} name={name} className="border border-gray-300 rounded-md text-slate-500 text-sm font-medium" />
                    <label className="text-xs text-slate-600">{label2}</label>

                </div>
            </div>
        </div>
    );
}

export default RadioButton;
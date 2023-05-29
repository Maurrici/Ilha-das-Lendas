import { useState } from "react";

const Filter = ({value, setValue, data, placeholder}) => {
    const [name, setName] = useState('');

    const handleFilter = (itemValue) =>{
        setValue(itemValue);
        let item = data.find(item => item.value == itemValue);
        setName(item != undefined ? item.name : "");
    }

    return(
        <div className="select">
            <input 
                type="text" 
                name="role" 
                placeholder={placeholder} 
                value={name}
                readOnly
                onFocus={e => e.target.parentElement.classList.add('focus')}
                onBlur={e => e.target.parentElement.classList.remove('focus')} />
            <div className="dropDown">
                <div className="item" onMouseDown={e => handleFilter("")}>Todos</div>
                {
                    data.map((item, index) => (
                        <div key={index} className="item" onMouseDown={e => handleFilter(item.value)}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Filter;
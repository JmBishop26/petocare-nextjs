import {Input, Select } from 'semantic-ui-react';
import style from "../../src/styles/modules/Booking.module.scss"
export default function ConditionalInput(props){
    const {placeholder, name, condition, type, options, value, onChange, minValue} = props
    return condition ?(
        <Select placeholder={placeholder} name={name} options={options} className={style.select} value={value} onChange={onChange} required={true}/>
    ) : (
        <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} min={minValue} required/>
    )
}
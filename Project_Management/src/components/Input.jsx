import { forwardRef } from "react";

const Input=forwardRef(function Input({type,title},ref){

    return(
        <>
    <label>{title}</label>
    <input  ref={ref} className="input" type={type}></input>
    </>
    );
});
export default Input;
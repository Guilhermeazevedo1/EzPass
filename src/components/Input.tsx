import "./Styles/Input.css"
import TextField from '@mui/material/TextField';
interface InputProps{
    InputText: string;
    type: string;
}

export default function Input({InputText, type}: InputProps){
    return(
        <>
            <TextField type={type} id="outlined-basic" label={InputText} variant="outlined"/>
        </>
    )
}
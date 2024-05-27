import "./Styles/Input.css"
import TextField from '@mui/material/TextField';
interface InputProps{
    InputText: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({InputText, type}: InputProps){
    return(
        <div>
            <TextField type={type} id="outlined-basic" label={InputText} variant="outlined" className="input"/>
        </div>
    )
}
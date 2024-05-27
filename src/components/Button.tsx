import "./Styles/Button.css"
import Button from '@mui/material/Button';

interface ButtonProps{
    nomeButton: String;
    
}

export default function ButtonUsage({nomeButton}: ButtonProps){
    return(
        <div>
            <Button variant="contained" size="large" className="button">{nomeButton}</Button>
        </div>
    )
}
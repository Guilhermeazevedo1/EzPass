import "./Styles/Button.css"
import Button from '@mui/material/Button';

interface ButtonProps{
    nomeButton: String;
    
}

export default function ButtonUsage({nomeButton}: ButtonProps){
    return(
        <>
            <Button variant="contained">{nomeButton}</Button>
        </>
    )
}
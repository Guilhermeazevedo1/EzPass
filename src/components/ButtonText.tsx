import "./Styles/ButtonText.css"
import Button from '@mui/material/Button';

interface ButtonProps{
    nomeButtonText: String;
    
}

export default function ButtonText({nomeButtonText}: ButtonProps){
    return(
        <>
            <Button variant="text">{nomeButtonText}</Button>
        </>
    )
}
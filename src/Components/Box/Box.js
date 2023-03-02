import style from './Box.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Div(){
    return(
        <div className={style.wrapper}>   
         <h3>Track</h3>
        <p>How can I help you?</p>
        
        <h4>Know Your Order   <span className={style.arrow}> <KeyboardArrowRightIcon /> </span></h4>
        <h4>Place Order <span className={style.arrow1}> <KeyboardArrowRightIcon /> </span></h4>
        
        </div>
    )
}
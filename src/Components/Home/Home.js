import { Dialog, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import style from './Home.module.css'
import Div from '../Box/Box';
import { useState } from 'react';
export default function Home(){
    const [open,setOpen]=useState(false)

    const click=()=>{
        setOpen(!open)
    }
    

    return(
        <div className={style.wrapper}>
            <Fab onClick={click} color="primary" aria-label="add">
                {open ? 'X' : <AddIcon onClick={click}/> }
        
          <Dialog 
          className={style.dialog}
          open={!!open}
          variant="outlined"
              >
            <Div/>
          </Dialog>
           
           </Fab>
        </div>
    )
}
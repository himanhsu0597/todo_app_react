import React,{useState} from 'react'
import {List, ListItem, Button,ListItemText, Modal} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import db from './firebase'
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const styling={
    borderWidth:'5',
borderStyle:'outset',
    borderColor:'red'
}


const Todo=(props)=>{
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState('');
    const handleOpen = () => {
        setOpen(true);
    };


    const updateTodo =()=>{
        db.collection('todos').doc(props.text.id).set({
            text:input
        },{
            merge:true
        })
        setOpen(false);
    }
    return(
       <div style={styling}>

               <Modal open={open} onClose={e=>setOpen(false)}>

                   <div  className={classes.paper}>
                       <h1>I am a Modal</h1>

                       <input placeholder={props.text.text} value={input} onChange = {(event) => setInput(event.target.value) }/>
                       <Button  disabled = {!input } variant='contained' color = "primary" onClick={updateTodo} >Update Todo</Button>
                   </div>
               </Modal>
           <List>
               <ListItem >
                   <ListItemText secondary="Dummy Deadline" primary={props.text.text} />
               </ListItem>
               <Button  variant='contained' color = "primary" type="button" onClick={handleOpen}>
                   Open Modal
               </Button>
               <DeleteIcon style={{marginBottom:'1px'}} onClick={event=>{db.collection('todos').doc(props.text.id).delete()}}/>
           </List>
       </div>


    )
}

export default Todo;
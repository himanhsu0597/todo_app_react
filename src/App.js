import React, { useState,useEffect } from 'react'
import { Button, Input, InputLabel, FormControl } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase'
import firebase from "firebase";

const App=()=> {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    //when the app loads ,we need to listen to the database and fetch  todos as new data gets inserted or deleted
    useEffect(()=>{
        //this code fires when app.js loads
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setTodos(snapshot.docs.map((doc)=>({id:doc.id,text:doc.data().text})))
    })
},[])


    const addTodo = (event) => {
        event.preventDefault(); //Will stop refresh of page on form Submit
        db.collection('todos').add({
            text:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
        setInput(''); //clear up the input field
    }

    return (
        <div style = {{ textAlign: 'center' } } className = "App" >
        <h1 > Hello React Enthusiastic ! &#127752;< /h1>
        <form >
            <FormControl >
                <InputLabel > &#9989; Write a Todo < /InputLabel>
                <Input value = { input } onChange = {(event) => setInput(event.target.value) }/>
            </FormControl>
            <Button disabled = {!input } variant = "contained" color = "secondary" type = "submit" onClick = { addTodo } > Add Todo < /Button>
            </form>
            <ul>
                {todos.map((todo) => {
                return <Todo text={ todo } />
                    })
                    }
            </ul>
        </div>
    );
}

export default App;
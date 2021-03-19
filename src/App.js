import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {

    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);


  return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="voornaam"> Voornaam </label>
            <input ref={register} name="voornaam"/>
            <br/>
            <label htmlFor="achternaam"> Achternaam </label>
            <input ref={register} name="achternaam"/>
            <br/>
            <label htmlFor="leeftijd"> Leeftijd </label>
            <input ref={register} name="leeftijd"/>
            <br/>
            <label htmlFor="postcode"> Postcode </label>
            <input ref={register} name="postcode"/>
            <br/>
            <button> Verzend </button>
      </form>
  );
}




export default App;

import React, { useState } from 'react';
import './App.css';

function App() {

    const [countAardbei, setCountAardbei] = useState(0);
    const [voornaamValue, setVoornaamValue] = React.useState('');
    const [achternaamValue, setAchternaamValue] = React.useState('');
    const [leeftijdValue, setLeeftijdValue] = React.useState('');
    const [postcodeValue, setPostcodeValue] = React.useState('');

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <fieldset>
            <legend> Aardbeien </legend>
          <button type="button" onClick={() => setCountAardbei(countAardbei + 1)}>
              +
          </button>
          {countAardbei}
          <button type="button" onClick={() => setCountAardbei(countAardbei - 1)}>
              -
          </button>
      </fieldset>
      <div>
        <form>
            <label htmlFor="Voornaam"> Voornaam: </label>
            <input
                type="text"
                value={voornaamValue}
                onChange={(e) => setVoornaamValue(e.target.value)}
            />
            <br/>
            <label htmlFor="Achternaam"> Achternaam: </label>
            <input
                type="text"
                value={achternaamValue}
                onChange={(e) => setAchternaamValue(e.target.value)}
            />
            <br/>
            <label htmlFor="Leeftijd"> Leeftijd: </label>
            <input
                type="text"
                value={leeftijdValue}
                onChange={(e) => setLeeftijdValue(e.target.value)}
            />
            <br/>
            <label htmlFor="Postcode"> Postcode: </label>
            <input
                type="text"
                value={postcodeValue}
                onChange={(e) => setPostcodeValue(e.target.value)}
            />
            <legend> Bezorgingsfrequentie </legend>
            <br/>
            <input type="radio" id="iedere-week" name="frequentie" value="iedere-week"/>
            <label htmlFor="iedere-week">Iedere week</label><br/>
            <input type="radio" id="om-de-week" name="frequentie" value="om-de-week"/>
            <label htmlFor="om-de-week">Om de week</label><br/>
            <input type="radio" id="iedere-maand" name="frequentie" value="iedere-maand"/>
            <label htmlFor="iedere-maand">Iedere maand</label><br/>
            <input type="radio" id="anders" name="frequentie" value="anders"/>
            <label htmlFor="anders">Anders</label>
            <label htmlFor="opmerkingen"> Opmerkingen: <br/> </label>
            <textarea name="opmerkingen" id="opmerkingen">
            </textarea>
            <br/>
            <input type="checkbox"/>
            <p> Ik ga akkoord met de voorwaarden </p>
            <button type="submit"> Verzend </button>
        </form>
      </div>
    </>
  );
}



export default App;

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
                    <label htmlFor="opmerkingen"> Opmerkingen: <br/> </label>
                    <textarea name="opmerkingen" id="opmerkingen">
                    </textarea>
                    <br/>
                    <button type="submit"> Verzend</button>
            </form>
        </div>
    </>
  );
}



export default App;

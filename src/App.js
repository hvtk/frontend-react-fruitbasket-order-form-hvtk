import React, { useState } from 'react';
import './App.css';

function App() {

    const [countAardbei, setCountAardbei] = useState(0);
    const [voornaamValue, setVoornaamValue] = React.useState('');
    const [achternaamValue, setAchternaamValue] = React.useState('');
    const [leeftijdValue, setLeeftijdValue] = React.useState('');
    const [postcodeValue, setPostcodeValue] = React.useState('');
    const [iedere_weekValue, setIedere_weekValue] = React.useState('');
    const [om_de_weekValue, setOm_de_weekValue] = React.useState('');
    const [iedere_maandValue, setIedere_maandValue] = React.useState('');
    const [andersValue, setAndersValue] = React.useState('');

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
      <form>
        <div>
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
            <input
                type="radio"
                id="iedere_week"
                name="frequentie"
                value={iedere_weekValue}
                onChange={(e) => setIedere_weekValue(e.target.value)}
            />
            <label htmlFor="iedere_week">
                Iedere week
            </label>
            <br/>
            <input
                type="radio"
                id="om_de_week"
                name="frequentie"
                value={om_de_weekValue}
                onChange={(e) => setOm_de_weekValue(e.target.value)}
            />
            <label htmlFor="om_de_week">
                Om de week
            </label>
            <br/>
            <input
                type="radio"
                id="iedere_maand"
                name="frequentie"
                value={iedere_maandValue}
                onChange={(e) => setIedere_maandValue(e.target.value)}
            />
            <label htmlFor="iedere_maand">
                Iedere maand
            </label>
            <br/>
            <input
                type="radio"
                id="anders"
                name="frequentie"
                value={andersValue}
                onChange={(e) => setAndersValue(e.target.value)}
            />
            <label htmlFor="anders">
                Anders
            </label>
            <br/>
            <label htmlFor="opmerkingen"> Opmerkingen: <br/> </label>
            <textarea name="opmerkingen" id="opmerkingen">
            </textarea>
            <br/>
            <input type="checkbox"/>
            <p> Ik ga akkoord met de voorwaarden </p>
            <button type="submit"> Verzend </button>
        </div>
      </form>
    </>
  );
}




export default App;

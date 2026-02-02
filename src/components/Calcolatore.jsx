import '../style/Calcolatore.css'

import { useState } from "react";

function Calcolatore({ forma }) {
    //Indico che lo stato di default è impostato su quadrato
    const [valore, setValore] = useState(0);
    //Ogni dato verrà trasformato in tipo numerico
    const numero = Number(valore);

    let area = 0;
    let circonferenza = 0;
    let formula = "";
    let label = "";
    let perimetro = "";

    if (forma === "quadrato") {
        area = numero * numero;
        circonferenza = 4 * numero;
        formula = "Area = lato², perimetro = lato × 4";
        label = "Lunghezza del lato (cm)";
        perimetro = "Perimetro";
    } else {
        //Alrtimenti, esegui la formula del cerchio
        area = Math.PI * numero * numero;
        circonferenza = 2 * Math.PI * numero;
        formula = "Area = π × r², circonferenza = 2 × π × r";
        label = "Raggio (cm)";
        perimetro = "Circonferenza";
    }

    return (
        <section className='section-calcolo'>
            <h2>Calcola {forma}</h2>
            <div className='div-calcolo'>
                <label>{label}</label>
                {/* Con l'onChange il codice "si accorge" che qualcuno ha scritto in una casella di testo*/}
                {/*Passo un valore che inizialmente è zero, e poi con il setForma, c'è un evento che cattura il valore inserito dall'utente*/}
                <input type="number" value={valore} placeholder="Es: 3" onChange={(e) => setValore(e.target.value)} 
                />
            </div>
            <div className="div-risultati">
                <h4>Risultati</h4>
                {/*con ToFixed(2) andiamo a prendere solo i primi 2 decimali*/}
                <p>Area: {area.toFixed(2)}</p>
                <p>{perimetro}: {circonferenza.toFixed(2)}</p>


            </div>
                <div className="div-formula">
                    <p>Formula: {formula} </p>
                </div>

        </section>

    );
}

export default Calcolatore;
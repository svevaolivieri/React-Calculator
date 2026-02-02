import '../style/SelettoreForma.css'

function Selettore({ forma, setForma }) {

    return (

        <div className="div-selettore">
            <h2>Seleziona la figura geometrica</h2>
            <select value={forma} onChange={setForma}>
                <option value="quadrato">Quadrato</option>
                <option value="cerchio">Cerchio</option>
            </select>
        </div>
    );
}

export default Selettore;

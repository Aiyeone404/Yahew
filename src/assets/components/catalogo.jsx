import Jesusimage from "../components/img/Christians-_Orthodox-_Templar-_Jesus-_Traditionalism-_PP-_PPF.png" 
function Catalogo(){
    return(
        <div id="box-jesus">
            <img src={Jesusimage}alt="god" id="jesus-i"/>
            <div id="palavra-jesus">
                <div className="versiculo">
                <i className="fa-solid fa-book-bible" style={{ color: '#592C1C' }}></i>Isaías 53:5</div>
"Mas ele foi ferido por causa das nossas transgressões, 
esmagado por causa das nossas iniquidades;<br></br>

o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados."
<div id="box-pos">
    <span>
        Este versículo nos lembra que Jesus se entregou por amor. Mesmo sem culpa,
        Ele tomou o nosso lugar para que hoje pudéssemos viver livres do pecado e da condenação.
        Tudo isso por graça, e não por mérito.
    </span>
</div>
            </div>
        </div>
    )
}
export default Catalogo;
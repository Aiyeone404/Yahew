import { useState,useEffect} from "react";
function Inicio(){
    const [nome,Setnome]=useState('');
    useEffect(()=>{
        const nomeDigitado=prompt("DIGITE SEU NOME:")
        if(nomeDigitado){
            Setnome(nomeDigitado)
        }
    },[])
    return(
        <div id="#box-inicio">
            <div className="box-palavra">
                <p className="palavra-Inicio">
                <strong> <i className="fa-solid fa-book-bible" style={{ color: '#592C1C' }}> </i>Mateus 11:28</strong>"Vinde a mim, todos os que estais cansados e sobrecarregados,
                e eu vos darei descanso"
                </p>

                <div className="seg-palavra">
                    <p className="palavra-Inicio">Em meio às pressões, incertezas e lutas que ninguém vê, Jesus está contigo {nome}.
                        Ele conhece cada sonho, cada lágrima escondida, cada pensamento que te inquieta.
                        E mesmo quando o mundo diz que você não é suficiente, Ele te chama de filho amado
                        Sua juventude não é um erro. É um tempo precioso — tempo de plantar fé, descobrir propósito e caminhar com coragem.
                         Com Cristo, até os dias nublados têm sentido.</p>
                </div>
            </div>
        </div>
    )
}
export default Inicio;
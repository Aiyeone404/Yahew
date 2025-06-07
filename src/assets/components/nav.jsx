import ascensao from "../components/img/ascensao (2).png"
import Cruz from "../components/img/cruz.png"
function Nav(){
    return(
        <div id="box-nav">
            <link rel="shortcut icon" href={Cruz} type="image/x-icon" />
            <img src={ascensao} alt="Jesus"/>
            <div id="nav">
            </div>
        </div>
    )
}
export default Nav;
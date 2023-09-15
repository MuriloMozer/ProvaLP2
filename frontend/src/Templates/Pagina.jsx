import Cabecalho from "./Cabecalho";
import Menu from './Menu';

export default function Pagina(props){
    return(
        <>
            <Cabecalho conteudo="Sistema de Gestao Comercial"/>
            <Menu/>
            <div>
                {
                    //filhos da página
                }
                {props.children}
            </div>
        </>
    )
}
import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

interface PaginaProps {
    children?:ReactNode;
};

export default function Pagina(props:PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho className="h-20"/>
            <div className="flex-1 flex boxed">
                <Menu className="hidden lg:block lg:w-64 xl:w-72 w-72"/>
                <main className="flex-1 py-7">{ props.children }</main>
            </div>
            <Rodape className="h-14"/>
        </div>
    );
};
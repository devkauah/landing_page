
export interface CabecalhoProps {
    className?:string;
}

export default function Cabecalho(props:CabecalhoProps) {
    return (
        <header 
            className={
                `flex items-center px-7
                border-b border-zinc-800
                ${ props.className ?? '' }`
            }
        >Cabeçalho</header>
    )
}
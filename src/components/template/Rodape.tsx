
export interface RodapeProps {
    className?:string;
};

export default function Rodape(props:RodapeProps) {
    return (
        <footer 
            className={`
                flex items-center px-7 
                text-zinc-500 text-sm border-t border-zinc-800
                ${ props.className ?? '' }
            `}
        >
            <div className="flex justify-end boxed">
                Todos os direitos reservados &copy; {new Date().getFullYear()}
            </div>
        </footer>
    )
};
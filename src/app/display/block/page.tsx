import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaBlock() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Utilizando Block" descricao="O elemento ocupa toda largura disponível" />
            <div>
                <div>Linha 1</div>
                <div>Linha 2</div>
                <span className="block">Linha 3</span>
                <span className="block">Linha 4</span>
            </div>
        </Pagina>
    )
}
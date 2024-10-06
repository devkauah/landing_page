import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaMargin() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Utilizando Margin" descricao="O espaçamento externo dos elementos" />
            <div>
                <div className="inline-block bg-blue-500 p-7"></div>
            </div>
        </Pagina>
    )
}
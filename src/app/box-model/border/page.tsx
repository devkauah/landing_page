import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaPadding() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Utilizando Padding" descricao="O preenchimento interno dos elementos" />
            <div>
                <div className="inline-block bg-blue-500 p-7"></div>
            </div>
        </Pagina>
    )
}
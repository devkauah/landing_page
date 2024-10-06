import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaInline() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Utilizando Inline" descricao="Aqui onde fica a descrição" />
            <div className="text-center">
                Conteúdo
            </div>
        </Pagina>
    )
}
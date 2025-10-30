import { SideBarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/use-product";




export function ProductForm() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useProduct(id ?? '');

    function handleSave() {

    }

    return (
        <SideBarForm
            title="Cadastro de Produto"
            onSave={handleSave}>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (<p>{JSON.stringify(data)}</p>)}
        </SideBarForm>
    )
}
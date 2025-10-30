import { SideBarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useBrand } from "../hooks/use-brand";



export function BrandForm() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useBrand(id ?? '');

    function handleSave() {

    }

    return (
        <SideBarForm
            title="Cadastro de Marca"
            onSave={handleSave}>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (<p>{JSON.stringify(data)}</p>)}
        </SideBarForm>
    )
}
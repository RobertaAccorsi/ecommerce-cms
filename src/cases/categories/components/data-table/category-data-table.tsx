import { DataTable } from "@/components/ui/data-table";
import { CategoryColumns } from "./category-columns";
import { useCategories } from "../../hooks/use-category";

export function CategoryDataTable(){

    const {data: categories, isLoading} = useCategories();

    return(
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={CategoryColumns} data={categories!}/>    
            )}        
        </div>
    )
}
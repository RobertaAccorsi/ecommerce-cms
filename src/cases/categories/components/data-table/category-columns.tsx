import type { ColumnDef } from "@tanstack/react-table";

import { DataTableAction } from "@/components/layout/data-table-actions";
import type { CategoryDTO } from "../../dto/category.dto";

export const CategoryColumns: ColumnDef<CategoryDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Nome da Categoria'
    },
    {
        accessorKey: 'actions',
        enableHiding: false, 
        cell: ({ row }) => {
            const category= row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableAction itemId={category.id!}/>
                </div>
            )
        }
    }
];
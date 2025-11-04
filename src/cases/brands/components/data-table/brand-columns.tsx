import type { ColumnDef } from "@tanstack/react-table";
import { DataTableAction } from "@/components/layout/data-table-actions";
import type { BrandDTO } from "../../dto/brand.dto";

export const BrandColumns: ColumnDef<BrandDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },

    {
        accessorKey: 'name',
        header: 'Nome da Brand'
    },
        {
            accessorKey: 'actions',
            enableHiding: false, 
            cell: ({ row }) => {
                const brand= row.original;
    
                return(
                    <div className="flex justify-end mr-4">
                        <DataTableAction itemId={brand.id!}/>
                    </div>
                )
            }
        }
    ];
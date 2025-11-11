import type { CustomerDTO } from "@/cases/customers/dtos/customers";
import type { ProductDTO } from "@/cases/products/dto/product.dto";


export interface OrdemItemDTO{
    id?: string; 
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface OrderDTO {
    id?: string; 
    costumer: CustomerDTO;
    status: string; 
    total: number;
    items: OrdemItemDTO[];
    createdAt: Date;
    updatedAt: Date;
}
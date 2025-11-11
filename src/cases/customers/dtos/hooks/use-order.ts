import type { OrderDTO } from "@/cases/orders/dtos/order.dto";
import { OrderService } from "@/cases/orders/service/services/order.service";
import {useQuery} from "@tanstack/react-query";



export function useOrders() {
    return useQuery<OrderDTO[]>({
        queryKey: ['orders'],
        queryFn: OrderService.list
    });
}

export function useOrder(id: string) {
    return useQuery<OrderDTO>({
        queryKey: ['order', id],
        queryFn: () => OrderService.getById(id),
        enabled: !!id //-> or Boolean(id)
    });
}
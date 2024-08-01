import { fetchCustomers } from '@/app/lib/data'
import Table from '@/app/ui/customers/table'
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Customer'
}

export default async function Page() {
    const customers = await fetchCustomers()


    return (
        <Table customers={customers} />
    )
}

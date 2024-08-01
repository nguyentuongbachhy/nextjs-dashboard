import { fetchCustomers } from '@/app/lib/data'
import Table from '@/app/ui/customers/table'
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'
import { Metadata } from "next"
import { Suspense } from 'react'


export const metadata: Metadata = {
    title: 'Customer'
}

export default async function Page() {
    const customers = await fetchCustomers()


    return (
        <Suspense fallback={<InvoicesTableSkeleton />}>
            <Table customers={customers} />
        </Suspense>

    )
}

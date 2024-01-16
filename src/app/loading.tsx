import { Skeleton } from '@/components/loading-skeleton'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <Skeleton className="flex h-12  items-center justify-center rounded-lg bg-[#1f2632] dark:bg-[#323a49]">
      <Loader2 className="animate-spin text-white" />
    </Skeleton>
  )
}

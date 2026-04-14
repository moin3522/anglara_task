import { Skeleton } from "@/app/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-3'>
        <Skeleton className='w-full aspect-square rounded-lg' />
        <Skeleton className='h-6 sm:h-7 lg:h-8 w-3/4 mt-2' />
        <div className='flex gap-2 items-center'>
          <Skeleton className='w-24 h-4 sm:h-5' />
          <Skeleton className='w-8 h-4 sm:h-5' />
        </div>
        <div className='flex items-center gap-2'>
          <Skeleton className='w-16 h-6 sm:h-7 lg:h-8' />
        </div>
      </div>
    </div>
  )
}

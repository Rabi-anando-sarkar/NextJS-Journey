import React from 'react'
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className='w-full flex justify-center text-center'>page
      <Meteors number={10} />
    </div>
  )
}

export default page
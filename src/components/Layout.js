import React from 'react'

import Header from './Header'

function LayoutMain({ children }) {
  return (
    
<div class="flex h-screen">
  <aside class=" w-64 flex-none bg-blue-200 p-4"></aside>
  <main class="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">{children}</main>
</div>
  )
}

export default LayoutMain

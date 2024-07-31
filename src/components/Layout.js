import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar.js'

function LayoutMain({ children }) {
  return (
    
<div class="flex h-screen">
  <aside class=" w-64 flex-none bg-slate-50 p-4"><Sidebar/></aside>
  <main class="min-w-0 flex-1 overflow-auto bg-zinc-100 p-4">{children}</main>
</div>
  )
}

export default LayoutMain

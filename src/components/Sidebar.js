/* eslint-disable linebreak-style */
import React from 'react'
import Notic from '../assets/Notic.svg'
import DarklightMode from '../assets/DarklightMode.svg'
import board from '../assets/board.svg'
import analy from '../assets/analy.svg'
import TodoCreate from 'features/Todo/TodoCreate'
const Sidebar = () => {
    return (
        <>
            <div className="flex  gap-3 pt-5">
                <div className="h-10 w-10">
                    <img className="h-full w-full rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <h1 className="text-xl font-bold text-black">Prashant</h1>
            </div>
            <div className="flex justify-between align-middle my-3">
                <div className="flex gap-2">
                    <img src={Notic} className='hover:cursor-pointer'/>
                    <img src={DarklightMode} className='hover:cursor-pointer' />
                    <h1 className="text-black hover:cursor-pointer">{'>>'}</h1>
                </div>
                <button className="border-2 border-black text-black bg-zinc-200 rounded px-2">Logout</button>
            </div>
            <nav className="list-none">
                <li className="hover:bg-zinc-200 hover:border rounded p-2 text-black flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path></svg>Home</li>
                <li className="hover:bg-zinc-200 hover:border rounded p-2 text-black flex gap-2 "> <img src={board} /> Boards</li>
                <li className="hover:bg-zinc-200 hover:border rounded p-2 text-black flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
                </svg>Setting</li>
                <li className="hover:bg-zinc-200 hover:border rounded p-2 text-black flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 27 4 C 23.145666 4 20 7.1456661 20 11 C 20 11.694215 20.109343 12.364062 20.298828 13 L 5 13 C 3.3550302 13 2 14.35503 2 16 L 2 34 C 2 35.64497 3.3550302 37 5 37 L 16.050781 37 C 16.558532 42.596375 21.274041 47 27 47 C 32.119276 47 36.240954 43.409081 37.460938 38.664062 C 38.643436 39.440841 39.984387 40 41.5 40 C 45.63039 40 49 36.63039 49 32.5 L 49 21 A 1.0001 1.0001 0 0 0 48 20 L 37 20 L 26 20 L 26 17.923828 C 26.327632 17.970927 26.660365 18 27 18 C 30.854334 18 34 14.854334 34 11 C 34 7.1456661 30.854334 4 27 4 z M 27 6 C 29.773666 6 32 8.2263339 32 11 C 32 13.773666 29.773666 16 27 16 C 26.651336 16 26.315457 15.955685 25.988281 15.888672 C 25.927569 14.29544 24.606899 13 23 13 L 22.421875 13 C 22.153458 12.388243 22 11.715897 22 11 C 22 8.2263339 24.226334 6 27 6 z M 42 8 C 40.416667 8 39.101892 8.6297556 38.251953 9.5859375 C 37.402014 10.542119 37 11.777778 37 13 C 37 14.222222 37.402014 15.457881 38.251953 16.414062 C 39.101892 17.370244 40.416667 18 42 18 C 43.583333 18 44.898108 17.370244 45.748047 16.414062 C 46.597986 15.457881 47 14.222222 47 13 C 47 11.777778 46.597986 10.542119 45.748047 9.5859375 C 44.898108 8.6297556 43.583333 8 42 8 z M 42 10 C 43.083333 10 43.768559 10.370244 44.251953 10.914062 C 44.735347 11.457882 45 12.222222 45 13 C 45 13.777778 44.735347 14.542119 44.251953 15.085938 C 43.768559 15.629755 43.083333 16 42 16 C 40.916667 16 40.231441 15.629756 39.748047 15.085938 C 39.264653 14.542118 39 13.777778 39 13 C 39 12.222222 39.264653 11.457881 39.748047 10.914062 C 40.231441 10.370245 40.916667 10 42 10 z M 5 15 L 21.757812 15 L 23 15 C 23.56503 15 24 15.43497 24 16 L 24 16.365234 A 1.0001 1.0001 0 0 0 24 16.919922 L 24 20.832031 A 1.0001 1.0001 0 0 0 24 21.158203 L 24 34 C 24 34.56503 23.56503 35 23 35 L 17.167969 35 A 1.0001 1.0001 0 0 0 16.841797 35 L 5 35 C 4.4349698 35 4 34.56503 4 34 L 4 16 C 4 15.43497 4.4349698 15 5 15 z M 9 19 L 9 21 L 13 21 L 13 31 L 15 31 L 15 21 L 19 21 L 19 19 L 9 19 z M 26 22 L 36 22 L 36 36 C 36 40.982593 31.982593 45 27 45 C 22.356014 45 18.554378 41.508579 18.058594 37 L 23 37 C 24.64497 37 26 35.64497 26 34 L 26 22 z M 38 22 L 47 22 L 47 32.5 C 47 35.54961 44.54961 38 41.5 38 C 40.097088 38 38.851397 37.45098 37.880859 36.591797 C 37.89251 36.384961 38 36.209688 38 36 L 38 22 z"></path>
                </svg>Team</li>
                <li className="hover:bg-zinc-200 hover:border rounded p-2 text-black flex gap-2"><img src={analy} /> Analytics</li>
            </nav>
            <div>
            <TodoCreate isLists className="todo_add_list bg-zinc-200" />
            </div>
        </>
    )
}
export default Sidebar
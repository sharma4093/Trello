import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import fun from '../../assets/fun.jpg'

// components
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'

// redux
import { onDragEndList, onDragEndCard } from 'redux/todo.reducer'

// selectors
import { getColumns, getLists, getCards } from 'redux/todo.selectors'
import Card from '../../components/Card'

function Todo() {
  const dispatch = useDispatch()
  const columnsSelector = useSelector(getColumns)
  const listsSelector = useSelector(getLists)
  const cardsSelector = useSelector(getCards)

  const onDragEnd = (result) => {
    const { type } = result

    if (type === 'LIST') {
      dispatch(onDragEndList(result))
      return false
    }

    if (type === 'CARD') {
      dispatch(onDragEndCard(result))
      return false
    }
  }

  return (
    <div className="todo">
      <div>
        <div className='flex justify-between px-4 text-black'>
          <h1 className='text-2xl font-bold'>Hello, Prashant!</h1>
          <p>help & feedback ❓</p>
        </div>
        <div className='flex justify-between pt-3 '>
          <div class="flex gap-3 max-w-sm py-3 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={fun} className="w-20 h-20" alt="fun" />
            <div>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing Tags</h5>
              <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div class="flex gap-3 max-w-sm py-3 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={fun} className="w-20 h-20" alt="fun" />
            <div>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing Tags</h5>
              <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div class="flex gap-3 max-w-sm py-3 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={fun} className="w-20 h-20" alt="fun" />
            <div>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Introducing Tags</h5>
              <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
        </div>
        <div className="pt-3 flex justify-between">
          <form class=" h-max">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              </div>
          </form>
          <div className=" flex justify-evenly gap-3 text-black">
            <button className='bg-zinc-200 px-3  border rounded-md'>Calendar</button>
            <button className='bg-zinc-200 px-3  border rounded-md'>Automation</button>
            <button className='bg-zinc-200 px-3  border rounded-md'>Filter</button>
              <TodoCreate isLists className="bg-zinc-200 border rounded w-36" />
          </div>
          

        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="LIST">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="todo__container"
              >
                {columnsSelector.length > 0 ? (
                  <>
                    {columnsSelector.map((item, index) => {
                      const lists = listsSelector[item]
                      const cards = lists.cards.map(
                        (card) => cardsSelector[card]
                      )
                      return (
                        <TodoList
                          key={lists.id}
                          listId={lists.id}
                          title={lists.title}
                          cards={cards}
                          index={index}
                        />
                      )
                    })}
                  </>
                ) : null}
                {provided.placeholder}
              
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Todo

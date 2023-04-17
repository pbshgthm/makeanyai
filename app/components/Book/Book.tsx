import { Header } from "@/components/Book/Header"
import { db } from "@/lib/db"
import { IBlock } from "@/lib/types"
import { DragDropContext, Draggable, DropResult, Droppable } from "@hello-pangea/dnd"
import { useEffect, useRef } from "react"
import { Block } from "../Block/Block"
import { useBook } from "./useBook"

export function Book(props: {
  bookId: string
}) {
  const {
    book,
    rename,
    describe,
    updateBlock,
    addBlock,
    removeBlock,
    runBlock,
    runBook,
    clearBook,
    renameBlock,
    saveBlock
  } = useBook(props)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0
    }
  }, [props.bookId])


  const handleDrop = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return
    if (!book) return
    const [reorderedItem] = book.blocks.splice(droppedItem.source.index, 1)
    book.blocks.splice(droppedItem.destination.index, 0, reorderedItem)
    db.books.update(book.id, book)
  }

  return (
    <div className="h-screen overflow-scroll pt-12 pb-64 flex-grow" ref={ref}>
      {book &&
        <div className="flex flex-col gap-12 mx-auto w-[640px]">
          <Header runBook={runBook} book={book} renameBook={rename} describeBook={describe} clearBook={clearBook} />
          <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="list-container">
              {(provided, snapshot) => (
                <div
                  className="list-container flex flex-col gap-2"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {book.blocks.map((block: IBlock, i: number) => (
                    <Draggable key={i.toString()} draggableId={i.toString()} index={i}>
                      {(provided) => (
                        <div
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Block
                            key={i}
                            pos={i}
                            block={block}
                            updateBlock={updateBlock}
                            addBlock={addBlock}
                            removeBlock={removeBlock}
                            runBlock={() => runBlock(block.name)}
                            isDragging={snapshot.isDraggingOver}
                            renameBlock={(text: string) => renameBlock(text, i)}
                            saveBlock={saveBlock}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      }
    </div >
  )
}
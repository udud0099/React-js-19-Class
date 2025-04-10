import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);

  return (
    <div className="m-auto flex min-h-screen w-full itmes-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
        <button
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-black-800 border-2 border-black-800 p-4 ring-rose-500 hover:ring-2 flex gap-2"
          onClick={() => {
            createColumn();
          }}
        >
          <PlusIcon /> Add Column
        </button>
      </div>
    </div>
  );
  function createColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }
};

function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;

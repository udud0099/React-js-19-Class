import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;
  return (
    <>
      <div className="bg-red-50 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
        <div className="bg-amber-200 text-md h-[60px] max-h-[500px] rounded-md flex flex-col">
          <div className="flex">
            <div className="flex justify-center items-center">0</div>
            {column.title}
          </div>
          <button
            onClick={() => {
              deleteColumn(column.id);
            }}
          >
            del
          </button>
        </div>
        {/* content */}
        <div className="flex flex-grow">content</div>
        {/* fotter */}
        <div>Footer</div>
      </div>
    </>
  );
};

export default ColumnContainer;

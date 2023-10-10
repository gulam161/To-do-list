import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemList = (props) => {
  // console.log(props.text);
  const [line, setline] = useState(false);

  const DeleteIt = () => {
    setline(true);
  };
  return (
    <div className="flex flex-row  items-center  pl-3 ">
      <span onClick={DeleteIt}>
        <DeleteIcon className="w-25px h-25px flex justify-center items-center bg-purple-600 rounded-full m-0 mr-5 p-2 text-white shadow-lg  cursor-pointer hover:bg-red-500 hover:text-crimson hover:shadow-md hover:shadow-red transform hover:scale-105" />
      </span>
      <li
        style={{ textDecoration: line ? "line-through" : "none" }}
        className="pl-Upic text-left text-20pic font-semibold min-h-40 flex items-center text-#8566a capitalize list-none"
      >
        {props.text}
      </li>
    </div>
  );
};
export default ItemList;

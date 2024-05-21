import "./App.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ItemList from "./List";

function App() {
  const [item, setitem] = useState("");
  const [newItem, setnewItem] = useState([]);

  const itemEvent = (e) => {
    setitem(e.target.value);
  };
  const addItem = () => {
    if (item.trim() !== "") {
      setnewItem((preVal) => {
        return [...preVal, item];
      });
      setitem("");
    }
  };

  return (
    <Box className="w-full h-screen bg-green-300 flex flex-row justify-center items-center text-center">
      <Box className="w-1/4 h-4/5 bg-white shadow-md rounded-lg flex flex-col gap-10 ">
        <h1 className=" text-3xl mt-11 min-w-64 box-border font-comfortaa font-medium  uppercase drop-shadow-lg">
          To do List
        </h1>
        <Box className="flex justify-evenly">
          <input
            className=" text-center w-3/5 h-30px  bg-transparent text-xl font-normal  border-b-2  border-gray-400 outline-none "
            type="text"
            value={item}
            placeholder="Add an Item"
            onChange={itemEvent}
          />
          <Button
            className="w-50 h-55 bg-teal-600 text-white shadow-md rounded-full"
            onClick={addItem}
          >
            <AddIcon />
          </Button>
        </Box>
        <ol>
          {newItem.map((val, index) => {
            return <ItemList key={index + 1} text={val} />;
          })}
        </ol>
      </Box>
    </Box>
  );
}

export default App;

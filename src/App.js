/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let Modal = ({ title, modalNum }) => {
  return (
    <div className="modal">
      <h4>{title[modalNum]}</h4>
      <p>modalDate</p>
      <p>modalContent</p>
    </div>
  );
};

function App() {
  let post = "Italy";
  let [title, setTitle] = useState([
    "best location to travel",
    "slow music playlist",
    "my movie ranking",
  ]);
  let [date, setDate] = useState("2024-09-04");
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalNum, setModalNum] = useState(0);
  let [inputValue, setInputValue] = useState("");
  let [deleteNum, setDeleteNum] = useState(0);
  const onRemove = (deleteNum) => {
    const removedArray = [...title].filter((t) => t !== title[deleteNum]);
    setTitle(removedArray);
    setDeleteNum = 0;
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h2>楽しい</h2>
      </div>
      {title.map((name, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalNum(i);
              }}
            >
              {title[i]}{" "}
              <span
                onClick={() => {
                  let goodCopy = [...good];
                  goodCopy[i] = goodCopy[i] + 1;
                  setGood(goodCopy);
                }}
              >
                👍
              </span>{" "}
              {good[i]}{" "}
              <button
                onClick={() => {
                  setDeleteNum(i);
                  onRemove(deleteNum);
                }}
              >
                delete
              </button>
            </h4>
            <p>{date} uploaded</p>
          </div>
        );
      })}
      {modal == true ? <Modal title={title} modalNum={modalNum} /> : null}
      <h4 style={{ color: "gold", fontSize: "3vh" }}>{post}</h4>
      <span
        onClick={() => {
          let copy2 = [...title];
          setTitle(copy2.sort());
        }}
      >
        sorting
      </span>
      <br />
      <br />
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTitle([...title, inputValue]);
          setInputValue("");
        }}
      >
        publish
      </button>
    </div>
  );
}

export default App;

{
  /* <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>
          {title[0]}{" "}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>{" "}
          {good}{" "}
        </h4>
        <p>{date} uploaded</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[1]}</h4>
        <p>{date} uploaded</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>
          {title[2]}
          <span
            onClick={() => {
              // setTitle([
              //   "best location to travel",
              //   "slow music playlist",
              //   "my anime ranking",
              // ]);
              let copy = [...title];
              copy[2] = "my anime ranking";
              setTitle(copy);
            }}
          >
            🐸
          </span>
        </h4>
        <p>{date} uploaded</p>
      </div> */
}

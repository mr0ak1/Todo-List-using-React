import { useState } from "react";
import styles from "./AddTodo.module.css";

function Addtodo({ onNewItem }) {
  let [newItem, itemUpdate] = useState("");
  let handleItemChange = (e) => {
    newItem = e.target.value;
    itemUpdate(newItem);
  };

  let [newDate, dateUpdate] = useState("");
  let handleDateChange = (e) => {
    newDate = e.target.value;
    dateUpdate(newDate);
  };
  return (
    <>
      <div class={`container text-center `}>
        <div class={`row ${styles.addContainer}`}>
          <div class="col-6">
            <input
              type="text"
              className={`${styles.inputSection}`}
              placeholder="Enter Your Todo Here"
              onChange={handleItemChange}
            />
          </div>
          <div class="col-4">
            <input
              type="date"
              className={`${styles.inputSection}`}
              onChange={handleDateChange}
            />
          </div>
          <div class="col-2">
            <button
              type="button"
              class={`btn btn-success ${styles.inputSection}`}
              onClick={() => {
                onNewItem(newItem, newDate);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtodo;

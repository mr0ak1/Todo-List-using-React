import styles from "./DisplayItems.module.css";

function DisplayItem({ todoItems, onDeleteItems }) {
  return todoItems.map((item, index) => {
    return (
      <div class={`container text-center `}>
        <div class={`row ${styles.addContainer}`}>
          <div class={`col-6 ${styles.content}`}>{item.toDoWork}</div>
          <div class={`col-4 ${styles.content}`}>{item.dueDate}</div>
          <div class="col-2">
            <button
              type="button"
              class={`btn btn-danger ${styles.content}`}
              onClick={() => onDeleteItems(index)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  });
}

export default DisplayItem;

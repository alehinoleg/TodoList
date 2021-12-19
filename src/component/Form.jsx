import { useState } from "react";

const Form = (props) => {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    props.onAdd(value);
    setValue("");
  }

  if (value === "") {
    console.log("инпут пустой");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          type="text"
          placeholder="добавьте задачу..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="btn">
          <span>+</span>
        </button>
      </div>
    </form>
  );
};

export default Form;

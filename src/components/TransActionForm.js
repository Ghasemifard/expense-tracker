import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransAction(formValues);
    setIsShow(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        // value={formValues.desc}
        placeholder="description"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        // value={formValues.amount}
        placeholder="amount"
      />
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="expense"
          id="type1"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label for="type1">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          id="type2"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label for="type2">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;

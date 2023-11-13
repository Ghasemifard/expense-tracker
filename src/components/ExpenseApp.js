import { useEffect, useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, SetIncome] = useState(0);
  const [transactions, SetTransaction] = useState([]);
  const addTransAction = (formValue) => {
    const data = { ...formValue, id: Date.now() };
    SetTransaction([...transactions, data]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    SetIncome(inc);
  }, [transactions]);
  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransAction={addTransAction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

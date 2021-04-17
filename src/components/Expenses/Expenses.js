import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  console.log(props)
  return (
    props.items.map(expense =>
    <Card className="expenses">
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    </Card>
  ));
}

export default Expenses;

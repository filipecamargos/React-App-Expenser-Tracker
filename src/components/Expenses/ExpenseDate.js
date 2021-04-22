import './ExpenseDate.css'

const ExpenseDate = (props) => {
  //Values to be added to the Date component
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div  className="expense-date">
      <div className="exense-date__month">{month}</div>
      <div className="exense-date__day">{day}</div>
      <div className="exense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

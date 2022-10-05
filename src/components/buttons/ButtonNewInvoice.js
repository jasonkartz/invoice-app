import iconPlus from "../../assets/icon-plus.svg";
export default function ButtonNewInvoice() {
  return (
    <button className="new-invoice">
      <span className="circle">
        <img src={iconPlus} alt="plus icon" />
      </span>
      <span className="text">New Invoice</span>
    </button>
  );
}

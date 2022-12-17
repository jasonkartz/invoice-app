import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceItem.module.css";
import TextField from "./formElements/TextField";
import { useFormContext } from "react-hook-form";

export default function InvoiceItem({
  darkTheme,
  index,
  tallyItems,
  remove,
  field,
}) {
  const { register, getValues, setValue, errors } = useFormContext();
  const [mobileView] = useMobileView();

  return (
    <div
      key={field.id}
      className={`${styles.itemContainer} ${darkTheme && styles.dark}`}
    >
      <TextField
        label={
          mobileView
            ? "Item Name"
            : !mobileView && index === 0
            ? "Item Name"
            : null
        }
        error={errors?.items?.[index]?.name}
        darkTheme={darkTheme}
        customClass={styles.name}
        name="name"
        {...register(`items.${index}.name`, {
          required: true,
        })}
      />

      <TextField
        label={mobileView ? "Qty." : !mobileView && index === 0 ? "Qty." : null}
        error={errors?.items?.[index]?.quantity}
        darkTheme={darkTheme}
        customClass={styles.qty}
        type="number"
        name="quantity"
        {...register(`items.${index}.quantity`, {
          valueAsNumber: true,
          required: true,
          min: 1,

          onChange: (e) => {
            const qty = e.target.value;
            const price = getValues(`items.${index}.price`);
            const sum = price * qty;
            setValue(`items.${index}.total`, sum.toFixed(2));
            tallyItems();
          },
        })}
      />

      <TextField
        label={
          mobileView ? "Price" : !mobileView && index === 0 ? "Price" : null
        }
        error={errors?.items?.[index]?.price}
        darkTheme={darkTheme}
        customClass={styles.price}
        type="number"
        step="any"
        name="price"
        {...register(`items.${index}.price`, {
          valueAsNumber: true,
          required: true,
          min: 1,
          onChange: (e) => {
            const qty = getValues(`items.${index}.quantity`);
            const price = e.target.value;
            const sum = price * qty;
            setValue(`items.${index}.total`, sum.toFixed(2));
            tallyItems();
          },
        })}
      />

      <TextField
        label={
          mobileView ? "Total" : !mobileView && index === 0 ? "Total" : null
        }
        noStyles={true}
        customClass={`${styles.total} ${darkTheme && styles.dark}`}
        name="total"
        {...register(`items.${index}.total`, {
          valueAsNumber: true,
        })}
        readOnly={true}
      />

      <button
        className={styles.delete}
        onClick={() => {
          remove(index);
        }}
      >
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}

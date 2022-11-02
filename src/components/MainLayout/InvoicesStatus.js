import useMobileView from "../../hooks/useMobileView";

export default function InvoicesStatus({ allFiltersFalse, invoiceCount }) {
  const [mobileView] = useMobileView(); //mobile screens and resizing screens

  const invoiceDisplayCount = () => {
    if (allFiltersFalse) {
      return 0;
    } else {
      return invoiceCount;
    }
  };

  if (invoiceDisplayCount() === 0) {
    return <>{"No invoices"}</>;
  } else if (invoiceDisplayCount() === 1) {
    return <>{mobileView ? "1 invoice" : "There is 1 invoice"}</>;
  } else {
    return (
      <>
        {mobileView
          ? `${invoiceDisplayCount()} invoices`
          : `There are ${invoiceDisplayCount()} total invoices`}
      </>
    );
  }
}

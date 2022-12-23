import useMobileView from "../../hooks/useMobileView";

export default function InvoicesStatus({ invoiceCount }) {
  const [mobileView] = useMobileView(); //mobile screens and resizing screens

  if (invoiceCount === 0) {
    return <>{"No invoices"}</>;
  } else if (invoiceCount === 1) {
    return <>{mobileView ? "1 invoice" : "There is 1 invoice"}</>;
  } else {
    return (
      <>
        {mobileView
          ? `${invoiceCount} invoices`
          : `There are ${invoiceCount} total invoices`}
      </>
    );
  }
}

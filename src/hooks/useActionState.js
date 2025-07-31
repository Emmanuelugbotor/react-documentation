import { useActionState } from "react";
import { addToCart } from "../actions/index.js";

// useActionState is a Hook that allows you to update state based on the result of a form action.

function UseActionStateExample({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  console.log("message :", message);
  console.log("isPending :", isPending);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      {/* names attributes from the input fields are transfer to queryData in addToCard func */}
      <input type="hidden" name="itemID" value={itemID} />
      <input type="hidden" name="itemTitle" value={itemTitle} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  );
}

export default UseActionStateExample;

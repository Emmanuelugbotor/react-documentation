"use server";

export async function addToCart(prevState, queryData) {
  // queryData is a formData object

  for (const [key, value] of queryData.entries()) {
    console.log(`${key}: ${value}`);
  }

  console.log("Previous state :", prevState);

  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "Added to cart";
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log("Item is sold out");
    // Simulate a server error.
    // In a real application, you would handle this with proper error handling.
    // Here, we just return a message.
    // You can also throw an error if you want to handle it differently.
    // throw new Error("Item is sold out");
    // Returning a string to display in the UI.
    // This will be shown in the form as a message.
    // The form will not be submitted, and the user will see this message.
    // You can also return a JSON object if you want to handle it differently.
    // For example, you can return { error: "Item is sold out" }.
    // But for simplicity, we return a string here.
    // This message will be displayed in the form.
    // The form will not be submitted, and the user will see this message.
    // You can also return a JSON object if you want to handle it differently.
    // For example, you can return { error: "Item is sold out" }.
    // But for simplicity, we return a string here.
    // This message will be displayed in the form.
    // The form will not be submitted, and the user will see this message.
    // You can also return a JSON object if you want to handle it differently.
    // For example, you can return { error: "Item is sold out" }.         
    return "Couldn't add to cart: the item is sold out.";
  }
}

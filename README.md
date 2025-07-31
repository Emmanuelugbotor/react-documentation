# react-documentation
updated studies on recent react js documentation updates

## React useActionState Example

This project demonstrates the use of the [`useActionState`](src/hooks/useActionState.js) hook introduced in React 19.  
`useActionState` allows you to update state based on the result of a form action, making it easier to handle asynchronous form submissions.

### Usage in this project

- The [`UseActionStateExample`](src/hooks/useActionState.js) component uses `useActionState` to manage the state of adding items to a cart.
- The form action is handled by the [`addToCart`](src/actions/index.js) function, which simulates adding an item and returns a message based on the item ID.

Example usage in [`App.js`](src/App.js):

```js
import UseActionStateExample from "./hooks/useActionState";

function App() {
  return (
    <div className="App">
      <UseActionStateExample itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <UseActionStateExample itemID="2" itemTitle="JavaScript: The Good Parts" />
    </div>
  );
}
```

For more details, see the [React documentation on useActionState](https://react.dev/reference/react/useActionState).
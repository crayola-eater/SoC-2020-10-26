# React 101

## Task 0

- Go to [twitter](https://twitter.com/) and break it down into components that are reused in multiple places

## Task 1

👉 Put the following two script tags at the bottom of your `head` tag. This will load react so that we can use it.

```html
<script
  src="https://unpkg.com/react@17/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
  crossorigin
></script>
```

👉 convert from `document.createElement` to `React.createElement`

## Task 2

👉 Fill in the Button function component which returns a react element `React.createElement`

👉 Give the element a `className` of `"button"`.

👉 Have `handleClick` passed to the on click prop.

## Task 3 - JSX

### 3a

👉 add the following script to the head of the html document. This will load babel which allow us to write JSX. Our JSX will be converted back to the raw api.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

👉 Give the script tag a type attribute of `"text/babel"` so that babel will transpile the contents of our tag to raw JavaScript.

👉 Convert the `Title` component to JSX

### 3b

👉 In the same file, recreate your components from tasks 1 and 2 with JSX instead of `React.createElement()`

## Task 4 - Props

👉 Complete the list item component so that it returns an `li` containing the data from the text prop

## Task 5 - Children

👉 Complete the list component so that it renders its children

## Task 6 - Conditional Rendering

👉 Complete the `CheckBox` component

👉 Create another component that takes in a boolean prop. Respond to that prop in a different way.

## Task 7 - Styling

### 7a

👉 Make a funky button using inline styles

### 7b

👉 Complete the Title and Border elements.

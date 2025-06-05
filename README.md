# What I Learned About Props in React 
   Props in react component the function is pass information from parent component to child component i imagine like father which sending a stuff through props to child, and props which i meant is javascript value like object, array and function.

## Passing Props to a Component

### Step 1: Pass Props to the Child Component
so give any props (properti) to Male for instance the following bellow i used string and number;

``` js // Parent Component
export default function MyBrother() {
  return (
    <Male
      name="zoro"
      age={25}
    />
  )
}
```
### Step 2: Send The Props to the Child Component
After that send the props to the child component and to usage the props it similiar like function parameter but in the learning props you only adding curly bracket inside brackets

``` js // Child Component
function Male({ name, age }) {
  return (
    <p>
      Hi introducing my brother his name is {name} and his age {age}
    </p>
  )
}
// Parent Component
export default function MyBrother() {
  return (
    <Male
      name="zoro"
      age={25}
    />
  )
}```


# What I Learned About Props in React 
  ##### Props in react component the function is pass information from parent component to child component i imagine like father which sending a stuff through props to child, and props which i meant is javascript value like object, array and function.

## Passing Props to a Component

### Step 1: Pass Props to the Child Component
##### so give any props (properti) to Male for instance the following bellow i used string and number;

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
##### After that send the props to the child component and to usage the props it similiar like function parameter but in the learning props you only adding curly bracket inside brackets

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
}
```

 # State
 #####    In React, states are arbitrary data that you can declare and manage in your components. To create a state in React, you need to call the useState hook as shown below:

 ```js import { useState } from 'react'

function ParentComponent() {
  const [name, setName] = useState('John')

}

export default ParentComponent
```
#  React Conditional Rendering
#####  You can control what output is being rendered by a component by implementing conditional rendering in your JSX code.
``` js function App(props) {
  const { user } = props

  if (user) {
    return <button>Logout</button>}
  return <button>Login</button>}

export default App
```
##### You don't need to add an `else` statement in the component because React will stop further processes once it reaches a `return` statement.

#####    In the example above, React will render the logout button when the `user` value is truthy, and the login button when `user` is falsy.
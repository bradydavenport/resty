# LAB - Class 26, 27

## Project: RESTy

### Author: Brady Davenport

### Problem Domain

#### Phase 1: Application Setup (18 Jul 2022)

Set up basic scaffolding of RESTy application, with intent to add more functionality to the system.

##### Phase 1 Feature Tasks

1. Refactor starter code

- Convert all child components of `App.js` from classes to functions
  - `App` is parent of all sub-components of this app
  - `App` itself remains as a class component
  - All base styles for `App` are included in a `.scss` imported within `App.js`
  - `Header`, `Footer`, `Results`, and `Form` components are impored using ES6 `import` syntax

2. Use `.scss` files to style each component

- Each component has its own `.scss`

3. Core app functionality remains unchanged

- `Form` component
  - calls a function on submit that updates `App/>` component via a function sent down as props so that the app can process the form values.
  - `Results/>` component should show mock API results.

#### Phase 2: Retrieving User Input and Managing State (19 Jul 2022)

##### Phase 2 Feature Tasks

1. Refactor any components using `this.setState` to implement the `useState()` React API hook
2. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

##### Suggested Component Hierarchy and Application Architecture

- `index.js` - Entry Point
- `App.js` - Container
  - Holds application state: The Request (from the form) and the Response (from the API)
  - A class method that can update state
  - Renders 2 Child Components
- `<Form />`
  - Expects a function to be sent to it as a prop
  - Renders a URL entry form
  - A selection of REST methods to choose from (“get” should be the default)
    - The active selection should be displayed/styled differently than the others
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request
  - On submit
    - Send the Form entries back to the `<App>` using the method sent down in props
    - Form will run the API request
      - Toggle the “loading” status before and after the request
- `<Results />`
  - Conditionally renders “Loading” or the data depending on the status of the request
  - Expects the count, headers, results to be sent in as props
  - Renders the count
  - Renders the Result Headers as “pretty” JSON
  - Renders the Result Body as “pretty” JSON

### Links and Resources

[GitHub Repo](https://github.com/bradydavenport/resty)
[CodeSandbox](https://codesandbox.io/s/resty-pvwji7)

![UML](/public/UML.png)

### How to use

### Setup

# LAB - Class 26

## Project: RESTy

### Author: Brady Davenport

### Problem Domain

#### Phase 1: Application Setup (18 Jul 2022)

Set up basic scaffolding of RESTy application, with intent to add more functionality to the system.

##### Feature Tasks

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

### Links and Resources

[GitHub Repo](https://github.com/bradydavenport/resty)

![UML]()

### How to use

### Setup

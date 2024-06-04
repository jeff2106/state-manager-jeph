# StateManager

StateManager is a simple JavaScript class that provides state management capabilities using a Proxy object. This class allows you to manage state in a clear and concise manner, offering methods to get and set state properties, check if all keys have values, and more.

## Features

- **Proxy-based state management:** Allows for dynamic state handling.
- **Get and set state properties:** Easily access and update state properties.
- **Check if all keys have values:** Verify if all keys in the state have non-empty values, with the option to ignore certain keys.

## Installation

To include `StateManager` in your project, you can simply import it from your JavaScript file:

```javascript
const StateManager = require('state-manager-jeph');
```

## Usage

### Creating an instance

Create an instance of `StateManager` by passing an initial state object to the constructor.

```javascript
const initialState = { key1: 'value1', key2: 'value2' };
const stateManager = new StateManager(initialState);
```

### Getting the state

Use the `getState` method to retrieve the current state.

```javascript
console.log(stateManager.getState());
```

### Setting the state

Use the `setState` method to update the state with new values.

```javascript
const newState = { key1: 'newValue1', key3: 'value3' };
stateManager.setState(newState);
console.log(stateManager.getState());
```

### Getting a specific property

Use the `getProperty` method to retrieve the value of a specific state property.

```javascript
console.log(stateManager.getProperty('key1'));
```

### Setting a specific property

Use the `setProperty` method to update the value of a specific state property.

```javascript
stateManager.setProperty('key2', 'newValue2');
console.log(stateManager.getState());
```

### Checking if all keys have values

Use the `allKeysHaveValues` method to check if all keys in the state have non-empty values. You can pass an array of keys to ignore during this check.

```javascript
console.log(stateManager.allKeysHaveValues()); // true or false

const ignoreKeys = ['key3'];
console.log(stateManager.allKeysHaveValues(ignoreKeys)); // true or false
```

## Methods

### `getState()`

- **Description:** Returns the current state.
- **Returns:** `Object`

### `setState(newState)`

- **Description:** Updates the state with new values.
- **Parameters:**
  - `newState` (`Object`): An object containing the new state values.

### `getProperty(prop)`

- **Description:** Retrieves the value of a specific state property.
- **Parameters:**
  - `prop` (`String`): The property name to retrieve.
- **Returns:** `any`

### `setProperty(prop, value)`

- **Description:** Updates the value of a specific state property.
- **Parameters:**
  - `prop` (`String`): The property name to update.
  - `value` (`any`): The new value to set.

### `allKeysHaveValues(ignoreKeys = [])`

- **Description:** Checks if all keys in the state have non-empty values.
- **Parameters:**
  - `ignoreKeys` (`Array`): An optional array of keys to ignore during the check.
- **Returns:** `Boolean`

### `checkValues(obj, ignoreKeys)`

- **Description:** Helper method to recursively check if all keys in an object have non-empty values, considering nested objects.
- **Parameters:**
  - `obj` (`Object`): The object to check.
  - `ignoreKeys` (`Array`): An array of keys to ignore during the check.
- **Returns:** `Boolean`

## License

This project is licensed under the MIT License.

---

Feel free to customize this README file further according to your specific needs or preferences.
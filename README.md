PromiseState
===========

[![NPM version](https://badgen.net/npm/v/@donnikitos/react-usepromise)](https://www.npmjs.com/package/@donnikitos/react-usepromise)
[![License](https://badgen.net/npm/license/@donnikitos/react-usepromise)](https://www.npmjs.com/package/@donnikitos/react-usepromise)

A very simple function to use Promises with React.js's states.

Install with [npm](https://www.npmjs.com/):

```bash
# via npm
npm install --save-dev @donnikitos/react-usepromise
```

## Usage

The `usePromiseState` function takes a string or component that should be displayed while the promise is not yeat resolved.
It returns a variable and a setter function very much like in React.js.

The setter function may take up to 2 parameters: 1st - Promise; 2nd -

```js
import React from 'react';
// import usePromiseState from '@donnikitos/react-usepromise';
import { usePromise } from '@donnikitos/react-usepromise';


// use in Component
export default function Comp(props) {
	const [display, setDisplay] = usePromise('Loading...');

	React.useEffect(() => {
		setDisplay(import('./link-to-file'));						// loads the default export from link-to-file
	}, []);

	return (<div>
		{display}
	</div>);
};
```

### Alternate usage

Alternatively you can use the `updateState` function to update the state with a Promise:

```js
import React from 'react';
import { updateState } from '@donnikitos/react-usepromise';


// use in Component
export default function Comp(props) {
	const [display, setDisplay] = usePromiseState('Loading...');
	const updateDisplay = updateState(setDisplay);

	React.useEffect(() => {
		updateDisplay(import('./link-to-file'), 'someExport');		// loads the someExport export from link-to-file -> also possible with the normal version
	}, []);

	return (<div>
		{display}
	</div>);
};
```

## License

[MIT](LICENSE).

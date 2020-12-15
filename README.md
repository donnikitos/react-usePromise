PromiseState
===========

[![NPM version](https://badgen.net/npm/v/classnames)](https://www.npmjs.com/package/promisestate)
[![License](https://badgen.net/npm/license/classnames)](https://www.npmjs.com/package/promisestate)

A very simple function to use Promises with React.js's states.

Install with [npm](https://www.npmjs.com/):

```bash
# via npm
npm install promisestate
```

## Usage

The `classNames` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{ foo: true }`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
import React from 'react';
import usePromiseState from 'promisestate';


// use in Component
export default function Comp(props) {
	const [display, setDisplay] = usePromiseState('Loading...');

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
import { updateState } from 'promisestate';


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

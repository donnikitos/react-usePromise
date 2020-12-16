/*!
	Copyright (c) 2020 Nikita 'donnikitos' Nitichevski.
	Licensed under the MIT License (MIT), see
	https://github.com/donnikitos/react-usePromise
*/
import React from 'react';


function promiseWorker($promise, $resolveModule, $setter) {
	$promise.then(($r) => {
		let Comp = $r.default ?? $r;
		for(const k of $resolveModule.split('.')) {
			if(!Comp[k])
				break;

			Comp = Comp[k];
		}
		if(typeof Comp == 'function') {
			const rElem = React.createElement(Comp);
			if(React.isValidElement(rElem))
				Comp = rElem;
		}

		$setter(Comp);
	});
}

function usePromiseStateFN($default) {
	const [state, setState] = React.useState($default);

	return [
		state,
		($promise, $resolveModule = '') => promiseWorker($promise, $resolveModule, setState)
	];
}

function updateStateFN($stateSetter) {
	return ($promise, $resolveModule = '') => promiseWorker($promise, $resolveModule, $stateSetter);
}


if(typeof module !== 'undefined' && module.exports) {
	module.exports = {
		usePromiseState: usePromiseStateFN,
		usePromise: usePromiseStateFN,
		updateState: updateStateFN
	};
}
export default usePromiseStateFN;
export const usePromiseState = usePromiseStateFN;
export const usePromise = usePromiseStateFN;
export const updateState = updateStateFN;

/*!
	Copyright (c) 2020 Nikita 'donnikitos' Nitichevski.
	Licensed under the MIT License (MIT), see
	https://github.com/donnikitos/promiseState
*/
import React from 'react';


function usePromiseStateFN($default) {
	const [state, setState] = React.useState($default);

	return [
		state,
		($promise, $param = 'default') => {
			$promise.then(($r) => {
				const Comp = ($r.default[$param] ?? $r.default);
				setState(React.createElement(Comp));
			});
		}
	];
}
export default usePromiseStateFN;
export const usePromiseState = usePromiseStateFN;
export const usePromise = usePromiseStateFN;

function updateStateFN($stateSetter) {
	return ($promise, $param = 'default') => {
		$promise.then(($r) => {
			const Comp = ($r.default[$param] ?? $r.default);
			$stateSetter(React.createElement(Comp));
		});
	};
}
export const updateState = updateStateFN;

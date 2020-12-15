/*!
	Copyright (c) 2020 Nikita 'donnikitos' Nitichevski.
	Licensed under the MIT License (MIT), see
	https://github.com/donnikitos/promiseState
*/
import React from 'react';


function usePromiseState($default) {
	const [state, setState] = React.useState($default);

	return [
		state,
		($promise, $param = 'default') => {
			$promise.then(($r) => {
				const Comp = ($r.default[$param] ?? $r.default);
				setState(<Comp />);
			});
		}
	];
}
export default usePromiseState;
export const usePromise = usePromiseState;
export const usePromiseState = usePromiseState;


function updateState($stateSetter) {
	return ($promise, $param = 'default') => {
		$promise.then(($r) => {
			const Comp = ($r.default[$param] ?? $r.default);
			$stateSetter(<Comp />);
		});
	};
}
export const updateState = updateState;

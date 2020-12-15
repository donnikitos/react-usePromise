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

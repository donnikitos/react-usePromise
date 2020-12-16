declare function usePromiseStateFN(initialState: any): [any, (promise: Promise<any>, resolveModule?: string) => void];
export default usePromiseStateFN;

export function usePromiseState(initialState: any): [any, (promise: Promise<any>, resolveModule?: string) => void];

export function usePromise(initialState: any): [any, (promise: Promise<any>, resolveModule?: string) => void];

export function updateState(stateSetter: Function): (promise: any, resolveModule?: string) => void;

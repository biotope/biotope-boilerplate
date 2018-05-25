export const SIMPLE_COMP_ACTION = {
    SET: 'SIMPLE_COMP_ACTION/SET',
	COUNT_UP: 'SIMPLE_COMP_ACTION/COUNT_UP',
	COUNT_DOWN: 'SIMPLE_COMP_ACTION/COUNT_DOWN'
};

export const setCounter = (id: string, counter: number) => ({
    type: SIMPLE_COMP_ACTION.SET,
    id,
    payload: {
        counter
    }
});

export const countUp = (id: string) => ({
	type: SIMPLE_COMP_ACTION.COUNT_UP,
	id
});

export const countDown = (id: string) => ({
	type: SIMPLE_COMP_ACTION.COUNT_DOWN,
	id
});

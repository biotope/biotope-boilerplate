export const biotopeState = (filter: Object) => {
    return (target: Object) => {
        console.log('filter', filter);
        console.log('target', target);
    };
};

export const jsonLdToState = (filter: Object) => {
    return (target: Object) => {
        console.log('filter2', filter);
        console.log('target2', target);
    };
};

export const attributeToState = (filter: Object) => {
    return (target: Object) => {
        console.log('filter2', filter);
        console.log('target2', target);
    };
};

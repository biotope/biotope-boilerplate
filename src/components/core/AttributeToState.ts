import {Store} from "redux";

export interface AttributeToStateConfig {
    component: any,
    componentId: string,
    store: Store
}

export const AttributeToState = {
    init: (config: AttributeToStateConfig) => {
        
    }
};
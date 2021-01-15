import { ADD_ITEM } from './constants';

export function setCard(item) {
    return {
        type: ADD_ITEM,
        value: item
    }
}

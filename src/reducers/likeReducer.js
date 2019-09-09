import { IMAGES } from '../constants';

const likeReducer = (state = [], action) => {
    if (action.type === IMAGES.LIKE) {
        return [...state, action.id];
    }
    else if (action.type === IMAGES.DISLIKE) {
        const arr = state.filter(id => {
            return id!==action.id
        })
        return arr;
    }
    return state;
};

export default likeReducer;

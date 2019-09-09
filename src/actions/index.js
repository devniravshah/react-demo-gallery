import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const likeImage = id => ({
    type: IMAGES.LIKE,
    id,
});

const dislikeImage = id => ({
    type: IMAGES.DISLIKE,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    likeImage,
    dislikeImage
};

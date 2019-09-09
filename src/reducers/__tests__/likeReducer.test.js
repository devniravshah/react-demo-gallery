import reducer from "../likeReducer";
import { IMAGES } from '../../constants';

describe('REDUCER', () => {
   it('should return the initial state', () => {
     expect(reducer(undefined, [])).toEqual([])
    })
   it('should handle "IMAGES.LIKE" action', () => {
       let id = 3
    expect(reducer([1,2], { type: IMAGES.LIKE, id })).
      toEqual([1,2,3])
   })
   it('should handle "IMAGES.DISLIKE" action', () => {
    let id = 3
    expect(reducer([1,2,3], { type: IMAGES.DISLIKE, id })).
    toEqual([1,2])
})
})

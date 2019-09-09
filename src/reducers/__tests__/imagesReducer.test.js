import reducer from "../imagesReducer";
import { IMAGES } from '../../constants';

describe('REDUCER', () => {
   it('should return the initial state', () => {
     expect(reducer(undefined, [])).toEqual([])
    })
   it('should handle "IMAGES.LOAD_SUCCESS" action', () => {
       let images = [{id:'1',title:'abc'}]
    expect(reducer([], { type: IMAGES.LOAD_SUCCESS, images })).
      toEqual([{id:'1',title:'abc'}])
   })
})

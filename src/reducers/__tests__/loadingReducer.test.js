import reducer from "../loadingReducer";
import { IMAGES } from '../../constants';

describe('REDUCER', () => {
   it('should return the initial state', () => {
     expect(reducer(undefined, {})).toEqual(false)
    })
   it('should handle "IMAGES.LOAD_SUCCESS" action', () => {
    expect(reducer(false, { type: IMAGES.LOAD_SUCCESS })).
     toEqual(false)
    })
    it('should handle "IMAGES.LOAD_FAIL" action', () => {
    expect(reducer(null, { type: IMAGES.LOAD_FAIL })).
        toEqual(false)
    })
    it('should handle "IMAGES.LOAD" action', () => {
        expect(reducer(false, { type: IMAGES.LOAD })).
          toEqual(true)
       })
})

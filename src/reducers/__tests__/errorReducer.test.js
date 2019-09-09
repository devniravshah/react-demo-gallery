import reducer from "../errorReducer";
import { IMAGES } from '../../constants';

describe('REDUCER', () => {
   it('should return the initial state', () => {
     expect(reducer(undefined, {})).toEqual(null)
    })
   it('should handle "IMAGES.LOAD" action', () => {
    expect(reducer(null, { type: IMAGES.LOAD })).
      toEqual(null)
   })
   it('should handle "IMAGES.LOAD_SUCCESS" action', () => {
    expect(reducer(null, { type: IMAGES.LOAD_SUCCESS })).
     toEqual(null)
    })
    it('should handle "IMAGES.LOAD_FAIL" action', () => {
    let error = 'error found'
    expect(reducer(null, { type: IMAGES.LOAD_FAIL, error })).
        toEqual('error found')
    })
})

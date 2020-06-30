import { combineReducers } from 'redux'
import serachRegionReducer from './serachRegionReducer'

export default combineReducers({
    fetchRegion: serachRegionReducer
})
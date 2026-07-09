import { configureStore } from '@reduxjs/toolkit'
import themeslice from '../features/themeslice'
export default configureStore({
  reducer: {
    theme:themeslice}
})
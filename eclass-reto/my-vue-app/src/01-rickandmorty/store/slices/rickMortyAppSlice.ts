import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Characters, Data, Result } from '../../interfaces/characters';
import { getData } from '../reducers/rickMortyAppReducer';

export interface RickMortyInitalState{

  characters : Characters;

}

const initialState: RickMortyInitalState = {} as RickMortyInitalState;

export const rickMorySlice = createSlice({
  name: 'rickMortyData',
  initialState,
  reducers: {
    increment: (state) => {
      
    },
    rementByAmount: (state, action: PayloadAction) => {

    },
  },
  extraReducers : (builder)=> {
    builder.addCase(getData.pending,(state : RickMortyInitalState ,action)=>{

    }),
    builder.addCase(getData.fulfilled,(state : RickMortyInitalState ,action : PayloadAction<Data>)=>{

    }),
    builder.addCase(getData.rejected,(state : RickMortyInitalState ,action)=>{

    })

  }
})


export const { increment } = rickMorySlice.actions;

export default rickMorySlice.reducer;
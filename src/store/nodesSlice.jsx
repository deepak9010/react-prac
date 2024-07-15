import { createSlice } from '@reduxjs/toolkit';

const nodesSlice = createSlice({
  name: 'nodes',
  initialState: [],
  reducers: {
    createNode: (state, action) => {
      state.push(action.payload);
    },
    deleteNode: (state, action) => {
      return state.filter((node) => node.id!== action.payload);
    },
    updateNodeLabel: (state, action) => {
      const node = state.find((node) => node.id === action.payload.id);
      if (node) {
        node.data.label = action.payload.label;
      }
    },
  },
});

export const { createNode, deleteNode, updateNodeLabel } = nodesSlice.actions;
export default nodesSlice.reducer;
export const selectNodes = (state) => state.nodes;
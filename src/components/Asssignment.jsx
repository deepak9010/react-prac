import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNode, deleteNode, selectNodes } from '../store/nodesSlice';
import Node from '../components/Node';
import NodePopup from '../components/NodePopup';
import { updateNodeLabel } from '../store/nodesSlice';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
const Home = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);

  const handleCreateNode = () => {
    const newNode = {
      id: Date.now(),
      type: 'rectangle',
      position: { x: 100, y: 100 },
      data: { label: '' },
    };
    dispatch(createNode(newNode));
  };

  const handleDeleteNode = (id) => {
    dispatch(deleteNode(id));
  };

  const handleEditNode = (id, label) => {
    dispatch(updateNodeLabel({ id, label }));
  };

  return (
    <div>
      <button onClick={handleCreateNode}>Create node</button>
      <ReactFlow nodes={nodes} onNodeClick={handleEditNode} 
      onNodeMouseEnter={handleShowDeleteIcon} 
      onNodeMouseLeave={handleHideDeleteIcon} onEdgeDelete={handleDeleteEdge}>
        {nodes.map((node) => (
          <Node key={node.id} node={node} onDelete={handleDeleteNode} />
        ))}
      </ReactFlow>
      <NodePopup />
    </div>
  );
};

export default Home;
import React from 'react';
import { useSelector } from 'react-redux';
import { selectNodes } from '../store/nodesSlice';

const Node = ({ node, onDelete }) => {
  const nodes = useSelector(selectNodes);
  const [showDeleteIcon, setShowDeleteIcon] = React.useState(false);

  const handleDelete = () => {
    onDelete(node.id);
  };

  const handleMouseEnter = () => {
    setShowDeleteIcon(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteIcon(false);
  };

  return (
    <div className={`node ${showDeleteIcon ? 'show-delete-icon' : ''}`} style={node.position} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="label">{node.data.label}</div>
      {showDeleteIcon && <div className="delete-icon" onClick={handleDelete} />}
    </div>
  );
};

export default Node;
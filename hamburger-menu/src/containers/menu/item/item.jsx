import './item.css';

// eslint-disable-next-line react/prop-types
const Item = ({ title, index }) => {
  return (
    <li
      style={{
        transform: `translateY(-${index * 72}px)`,
      }}
      className='Item'
    >
      {title}
    </li>
  );
};

export default Item;

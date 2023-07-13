import "./index.css";

const Item = (props) => {
  const { items } = props;
  const { name, url, img } = items;
  return (
    <div className="list">
      <a href={url} rel="noreferrer" target="_blank">
        <img className="img-css" alt={name} src={img} />
      </a>
      <a href={name} rel="noreferrer" target="_blank" className="name">
        {name}
      </a>
    </div>
  );
};

export default Item;

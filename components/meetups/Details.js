import css from "./Details.module.css";

export default function Details({ image, title, address, description }) {
  return (
    <div className={css.detail}>
      <img src={image} alt={title + " image"} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
}

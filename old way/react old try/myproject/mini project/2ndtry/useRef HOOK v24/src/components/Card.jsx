export default function Card({ img, alt }) {
  return (
    <>
      <div>
        <div>
          <img src={img} alt={alt} />
        </div>
        <div>
          <p>{alt}</p>
        </div>
      </div>
    </>
  );
}

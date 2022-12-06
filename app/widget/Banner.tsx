import shop from '~/data/Home.json';
function Banner() {
  return (
 <div className="col-md-12 p-3 p-md-5">
 <img
 className="img-fluid rounded"
 src={shop.banner}
 alt={shop.title}
width="100%"
height="100%"
/>
</div>
  );
}

export default Banner;
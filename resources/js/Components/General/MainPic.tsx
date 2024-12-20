interface Props {
  className?: string;
}

export default function MainPic(prop: Props) {
  return (
    <div className={prop.className}>
      <img
        src="images/banner/circelPink.png"
        width="560"
        height="560"
        alt="hero 1"
        className="absolute top-0 left-32"
      />
      <img
        src="images/banner/circulePurpel.png"
        width="800"
        height="800"
        alt="hero 1"
        className="z-0 absolute -bottom-14 lg:right-56 right-2 "
      />
      <img
        src="images/banner/dogBanner.png"
        loading="lazy"
        width="744"
        height="900"
        alt="hero 1"
        className=" z-10 absolute -bottom-16 lg:right-56 right-2 "
      />
    </div>
  );
}

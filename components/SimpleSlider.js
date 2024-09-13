"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="z-50 absolute inset-y-0 right-0 p-4 grid items-center rounded bg-slate-800"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="z-50 absolute inset-y-0 left-0 p-4 grid items-center rounded bg-slate-800"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: "linear"
  };
  return (
    <div className="px-4 md:px-12 pt-8 pb-14">
      <Slider {...settings}>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">1</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text
              </h3>
            </div>
          </Link>
        </div>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">2</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">3</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">4</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">5</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link className="group/slide relative w-4/5 aspect-video flex items-center mx-auto rounded-lg bg-slate-700" href="#">
            <h3 className="mx-auto font-bold text-4xl text-white">6</h3>
            <div className="absolute inset-x-0 -bottom-16 h-16 flex items-center justify-center bg-slate-800/70 transition-[bottom] delay-700 group-hover/slide:delay-0 group-hover/slide:bottom-0">
              <h3 className="font-bold text-xl text-white">
                Text</h3>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
import React from 'react';
import Slider from 'react-slick';

const VideoSlider = ({videourl}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
        <a href="#" class="image fit">
        <video width="300" height="200" controls>
          <source src="your-video-1.mp4" type="video/mp4" />
         <iframe width="350" height="350" src={videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </video>
        </a>
      </div>
      {/* <div>
        <h3>2</h3>
        <video width="300" height="200" controls>
          <source src="your-video-2.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <h3>3</h3>
        <video width="300" height="200" controls>
          <source src="your-video-3.mp4" type="video/mp4" />
        </video>
      </div> */}
    </Slider>
  );
}

export default VideoSlider;

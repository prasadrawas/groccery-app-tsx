import * as React from 'react';
import { Banner, SimpleCarousel } from 'react-native-simple-banner-carousel';

const BannerCarousel = () => {
  const images = [
    'https://links.papareact.com/gn7',
    'https://links.papareact.com/gn7',
    'https://links.papareact.com/gn7',
    'https://links.papareact.com/gn7',
  ];

  return (
    <SimpleCarousel
      data={images}
      renderItem={(props, i, width) => {
        return <Banner id={`${i}`} source={{ uri: props }} width={width} />;
      }}
    />
  );
};

export default BannerCarousel;

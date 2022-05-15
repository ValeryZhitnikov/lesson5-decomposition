import React from 'react';
import News from '../News/News';
import School from '../School/School';
import Currencies from '../Currencies/Currencies';
import Search from '../Search/Search';
import Banner from '../Banner/Banner';
import Weather from '../Weather/Weather';
import Map from '../Map/Map';
import OnAir from '../OnAir/OnAir';
import Favorite from '../Favorite/Favorite';
import TV from '../TV/TV';

/**
 * Обертка всего приложения
 */

export default function Main() {
  return (
    <div className="main">
      <div className="row">
        <div className="col-9">
          <News />
          <Currencies />
        </div>
        <School>
          <p>Смотрите на Яндексе и запоминайте</p>
        </School>
      </div>
      <Search />
      <Banner />
      <div className="row flex-wrap-wrap">
        <Weather />
        <Map />
        <OnAir />
        <Favorite />
        <TV />
      </div>
    </div>
  );
}

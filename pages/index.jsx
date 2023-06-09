import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import AppLayout from '../components/AppLayout';
import Card from '../components/Card';

const Home = () => {

  return (
    <AppLayout >
      <Helmet>
        <title>포켓몬</title>
      </Helmet>
      <Link to="name-game" >
        <Card
          name="포켓몬 이름 맞추기"
          imgSrc="https://64.media.tumblr.com/d7ca42feb2449e7c27cb815b782bd4f0/tumblr_inline_o42grsx8DJ1tcy5f4_540.jpg"
          color="green"
        />
      </Link>
      <Link to="pokemon-search">
        <Card
          name="포켓몬 검색"
          imgSrc="https://blog.kakaocdn.net/dn/pWFlZ/btqXgpiSsn1/5fikiWoiYmwlipGykLFQfk/img.jpg"
          color="tomato"
        />
      </Link>
    </AppLayout>
  );
}

export default Home;
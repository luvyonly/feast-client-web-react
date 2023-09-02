import React from "react";
import * as S from "./styled";
import Category from "./components/Category";
import TopBanner from "./components/TopBanner";

function Home() {
  return (
    <S.Container>
      <TopBanner />
      <Category />
    </S.Container>
  );
}

export default Home;

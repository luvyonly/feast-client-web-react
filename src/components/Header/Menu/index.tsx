import React from "react";
import * as S from "./Styled";
import icon_menu from "../../../assets/img/icon_menu.svg";
import "./index.css";

import icon_on_namul from "../../../assets/img/icon_on_namul.svg";
import icon_off_namul from "../../../assets/img/icon_off_namul.svg";

export function Menu(): JSX.Element {
  return (
    <>
      <S.HorizonLine />

      <S.MenuWrap>
        <S.Frame>
          <S.FrameMaterialSymbols alt="Material symbols" src={icon_menu} />

          <div className="category-list-box">
            <ul className="category-list">
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src={icon_off_namul}
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src={icon_on_namul}
                  alt="on-icon"
                />
                <span>나물•무침</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>나물</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>무침</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/f68cee74-477c-44da-8c87-62618e9d55e5"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/474629bc-e53e-4bab-86aa-98a48e52d701"
                  alt="on-icon"
                />
                <span>국 · 찌개</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>국 · 탕</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>찌개 · 전골</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/c4256803-f1ec-4ac5-87a5-b68d3d23f6e0"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/6395a299-344b-4f16-b5e7-d88096037c58"
                  alt="on-icon"
                />
                <span>1인분</span>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/34168b18-94ee-4946-8430-0a6239054ad6"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/238e117a-38df-4e50-b40e-dbe97d0c0b67"
                  alt="on-icon"
                />
                <span>식재료</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>야채</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>수산 · 건어물</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>견과류 · 두부</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>참치 · 햄 · 통조림</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>음료</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>소스 · 향식료</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/3067199c-f080-4205-b7a4-bb1b6eef5d12"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/9311fc30-7666-432b-9b24-ce2e3e0e267c"
                  alt="on-icon"
                />
                <span>조림 · 복음 · 찜</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>조림</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>볶음</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>찜</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/82ae12ba-4876-455d-82e8-c6997613559b"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/7b12c11b-7cb5-4f21-a40c-a6a6ef345efd"
                  alt="on-icon"
                />
                <span>정육 · 양념육</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>조림</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>볶음</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>찜</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/28f2b10d-a0b9-4ecc-bb51-325d01197326"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/433eff6b-f970-4527-91a1-4abf754953a7"
                  alt="on-icon"
                />
                <span>김치 · 정임류</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>김치</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>절임 · 장아찌</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>젓갈</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/df435e92-3356-4717-b765-567ed9fb9fc1"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/7545f807-66e7-4fbf-b658-e7b60d19415d"
                  alt="on-icon"
                />
                <span>구이･ 전</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>구이</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>전</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/15449666-5758-44db-bb71-620d2736664c"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/e339c1d5-995c-4520-ae34-ff6b854dce08"
                  alt="on-icon"
                />
                <span>밥 ･ 면 ･ 떡</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>밥</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>면</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>떡</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/d0f84ec7-7391-44e7-ad4d-962ba4b52443"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/c91aeedb-1254-4dc9-93c7-befe0cfadec7"
                  alt="on-icon"
                />
                <span>샐러드</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>샐러드</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>도시락</span>
                  </li>
                </ul>
              </li>
              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/9044b1a5-e992-408d-acda-7acdbd3c8e53"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/0d35a6f4-2310-4228-94e6-f0707b27085d"
                  alt="on-icon"
                />
                <span>간편냉동</span>
                <ul className="category-list-item--sub-list">
                  <li className="category-list-item--sub-list-item">
                    <span>전체</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>만두 · 떡뽁이 · 간식</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>돈까스 · 튀김 · 육류</span>
                  </li>
                  <li className="category-list-item--sub-list-item">
                    <span>빵 · 디저트</span>
                  </li>
                </ul>
              </li>

              <li className="category-list-item">
                <img
                  className="category-list-item--icon icon-off"
                  src="https://img-cf.kurly.com/category/icon/pc/9044b1a5-e992-408d-acda-7acdbd3c8e53"
                  alt="icon"
                />
                <img
                  className="category-list-item--icon icon-on"
                  src="https://img-cf.kurly.com/category/icon/pc/0d35a6f4-2310-4228-94e6-f0707b27085d"
                  alt="on-icon"
                />
                <span>밀키트</span>
              </li>
            </ul>
          </div>
          <S.FrameTextWrapper>카테고리</S.FrameTextWrapper>
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>할인특가</S.LabelTextWrapper>
          <S.LabelTextWrapper>신상품</S.LabelTextWrapper>
          <S.LabelTextWrapper>베스트100</S.LabelTextWrapper>
          <S.LabelTextWrapper>정기배송</S.LabelTextWrapper>
          <S.LabelTextWrapper>이벤트</S.LabelTextWrapper>
        </S.Label>
      </S.MenuWrap>

      <S.HorizonLine />
    </>
  );
}

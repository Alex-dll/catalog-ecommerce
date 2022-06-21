import React from "react";
import { Section, Card, TitleBox, Heading } from "components";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import * as S from "./styles";

import img from "../../../../public/noimageavailable.svg";

type SliderListProps = {
  products: NewProducts;
};

const SliderList: React.FC<SliderListProps> = ({
  products,
}: SliderListProps) => {
  return (
    <Section>
      <S.Container>
        <TitleBox>
          <Heading className="center" align="center" type="h2">
            {products.length > 0 ? "Produtos" : "Nenhum produto encontrado"}
          </Heading>
        </TitleBox>

        <S.slideBox>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={4}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Card
                  image={product.image ? product.image : img}
                  alt={product.description}
                  width="700"
                  height="900"
                  title={product.title}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.slideBox>
      </S.Container>
    </Section>
  );
};

export { SliderList };

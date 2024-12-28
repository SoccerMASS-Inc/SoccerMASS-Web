"use client";

import Link from "next/link";
import { VscHome } from "react-icons/vsc";
import styles from "./manager.module.scss";

import { COMPETITIONS } from "utils/constants";
import { Breadcrumb, Button, Carousel, CarouselProps } from "antd";
import Image from "next/image";

const settings: CarouselProps = {
  dots: false,
  speed: 2000,
  arrows: false,
  infinite: true,
  autoplay: true,
  cssEase: "linear",
  centerMode: false,
  autoplaySpeed: 2000,
  pauseOnHover: false,
};

export default function Manager({ slidesToShow, deviceWidth }: { slidesToShow: number; deviceWidth: number }) {
  return (
    <div className={styles.manager} data-testid="manager">
      <div role="presentation" style={{ padding: "30px 0 30px 20px" }}>
        <Breadcrumb items={[{ href: "", title: <VscHome /> }, { title: "Wave Research" }, { href: "/games", title: "Football Manager" }]} />
      </div>

      {deviceWidth > 620 ? (
        <div className={styles.carousel}>
          <Carousel {...settings} slidesToShow={slidesToShow}>
            {COMPETITIONS.map(({ id, image, title }) => (
              <figure key={id}>
                <Image src={image} alt={`Wave Research ${title}`} width={70} height={70} />
              </figure>
            ))}
          </Carousel>
        </div>
      ) : (
        false
      )}

      <div className={styles.managerIntro}>
        <div>
          <div>
            <Image alt="Wave Research Clubs" src="/images/layout/intro-signup.webp" width={200} height={200} />
          </div>
          <span>Step up to the challenge and beat the best managers. Take charge and steer your team to victory by joining now.</span>

          <Link href="/accounts/signup">
            <Button type="primary">Sign up</Button>
          </Link>
        </div>

        <div>
          <div>
            <Image width={200} height={200} alt="Wave Research Clubs" src="/images/layout/intro-clubs.webp" />
          </div>
          <div>
            <Image width={200} height={200} alt="Wave Research Players" src="/images/layout/intro-players.png" />
          </div>
        </div>

        <div>
          <div>
            <Image width={200} height={200} alt="Wave Research Clubs" src="/images/layout/intro-signin.webp" />
          </div>
          <span>Assemble your team and manage club finances, your players are eager for your leadership.</span>
          <Link href="/accounts/signin">
            <Button type="primary">Sign in</Button>
          </Link>
        </div>
      </div>

      {deviceWidth > 620 ? (
        <div className={styles.carousel}>
          <Carousel {...settings} slidesToShow={slidesToShow} rtl>
            {clubs.map((club, index) => (
              <figure key={club}>
                <Image src={`/images/clubs/${club}.webp`} alt={`Wave Research  club ${index + 1}`} width={70} height={70} />
              </figure>
            ))}
          </Carousel>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

const clubs = ["club00001", "club00043", "club00021", "club00031", "club00024", "club00002", "club00026", "club00022", "club00042", "club00011", "club00025"];

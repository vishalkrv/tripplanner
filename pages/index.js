import { React, useState, useEffect } from "react";
import { Layout, Card, ProgressRing } from "../components";
import ReactFullpage from "@fullpage/react-fullpage";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { TiArrowRightThick } from "react-icons/ti";

const originalColors = ["white", "#6B46C1", "yellow"];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState({
    sectionsColor: [...originalColors],
    fullpages: [
      {
        text: "Section 1",
        slides: [
          {
            image: "bali",
            title: "Indonesia",
            description: "Klingking Beach, Bali, Indonesia",
            destination: [
              {
                title: "Pura Ulun Danu Bratan",
                image: "bali_1.jpg",
                rating: 4,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "bali_2.jpg",
                rating: 3,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "bali_3.jpg",
                rating: 5,
              },
            ],
          },{
            image: "china",
            title: "China",
            description:
              "Some description here for the site to show. Testing long text",
            destination: [
              {
                title: "Pura Ulun Danu Bratan",
                image: "vegas_3.jpg",
                rating: 4,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "vegas_1.jpg",
                rating: 4,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "vegas_2.jpg",
                rating: 4,
              },
            ],
          },
          {
            image: "thailand",
            title: "Thailand",
            description:
              "Some description here for the site to show. Testing long text",
            destination: [
              {
                title: "Pura Ulun Danu Bratan",
                image: "bali_3.jpg",
                rating: 4,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "bali_1.jpg",
                rating: 4,
              },
              {
                title: "Pura Ulun Danu Bratan",
                image: "vegas_3.jpg",
                rating: 4,
              },
            ],
          },
        ],
      },
    ],
  });

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  const afterLoad = (origin, destination, direction) => {
    if (destination.index == 1) {
      console.log('I m in second section')
    }
  };

  return (
    <Layout>
      <ReactFullpage
        navigation={false}
        onLeave={onLeave}
        autoScrolling={true}
        sectionsColor={page.sectionsColor}
        slidesNavigation={true}
        controlArrows={false}
        loopHorizontal={true}
        afterLoad={afterLoad}
        render={(comp) =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              {page.fullpages.map((item) => (
                <div key={item.text} className="section">
                  {item.slides &&
                    item.slides.map((t) => (
                      <div key={t.title} className="slide" data-anchor="slide1">
                        <div
                          style={{
                            height: "100%",
                            backgroundImage: `url(assets/${t.image}.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className={styles.homePage}>
                            <Flex
                              direction="column"
                              paddingLeft="4%"
                              marginTop="-200px"
                              alignItems="flex-start"
                            >
                              <Text
                                color="white"
                                fontSize="7.5rem"
                                textTransform="uppercase"
                                fontFamily="fantasy"
                                lineHeight="1"
                              >
                                {t.title}
                              </Text>
                              <Text
                                color="white"
                                fontSize="3xl"
                                paddingLeft="0.5rem"
                              >
                                {t.description}
                              </Text>
                              <Button
                                rightIcon={<TiArrowRightThick></TiArrowRightThick>}
                                colorScheme="pink"
                                variant="solid"
                                size="lg"
                                marginTop="10px"
                                marginLeft="10px"
                              >
                                Explore
                              </Button>
                            </Flex>
                            <Flex
                              height="450px"
                              marginTop="-250px"
                              justifyContent="space-between"
                              width="100%"
                              padding="0px 50px 0px 350px"
                            >
                              {t.destination.map((item, key) => (
                                <Card
                                  key={key}
                                  option={{ width: "15rem", ...item }}
                                ></Card>
                              ))}
                            </Flex>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
              {/* <div className="section">
                <Flex justifyContent="space-between" padding="0 20%">
                  <ProgressRing radius={180} stroke={8} progress={100} count={1290} content="Total Trips"/>
                  <ProgressRing radius={180} stroke={8} progress={100} count={1234} content="Total Advisors"/>
                  <ProgressRing radius={180} stroke={8} progress={100} count={1000} content="Total Savings"/>
                </Flex>
              </div> */}
            </ReactFullpage.Wrapper>
          )
        }
      />
    </Layout>
  );
}

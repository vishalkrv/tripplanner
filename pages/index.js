import { React, useState, useEffect } from "react";
import Layout from "../components/layout";
import Card from "../components/card/card";
import ProgressRing from "../components/progressRing/progressRing";
import ReactFullpage from "@fullpage/react-fullpage";
import { Flex, Button, Text, Spacer, Box } from "@chakra-ui/react";
import { TiArrowRightThick } from "react-icons/ti";

const originalColors = ["white", "#6B46C1", "yellow"];

export default function Home() {
  const [section, setSection] = useState(0);
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
          {
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
      setSection(1);
    }
  };

  return (
    <Layout isLogin={false}>
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
          console.log("render prop changes") || (
            <ReactFullpage.Wrapper>
              {page.fullpages.map((item) => (
                <Box as="div" key={item.text} className="section">
                  {item.slides &&
                    item.slides.map((t) => (
                      <Box
                        as="div"
                        key={t.title}
                        className="slide"
                        data-anchor="slide1"
                      >
                        <Flex
                          h="100%"
                          alignItems="center"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                          backgroundImage={`url(assets/${t.image}.jpg)`}
                        >
                          <Flex
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Flex
                              direction="column"
                              pl="20px"
                              alignItems="flex-start"
                            >
                              <Text
                                color="white"
                                fontSize="7.5rem"
                                textTransform="uppercase"
                                fontWeight="700"
                                fontFamily="Kalam, cursive"
                                lineHeight="1"
                                textShadow="1px 1px #000"
                              >
                                {t.title}
                              </Text>
                              <Text
                                color="white"
                                fontSize="3xl"
                                fontWeight="300"
                                fontFamily="Kalam, cursive"
                                paddingLeft="0.5rem"
                                textShadow="1px 1px #000"
                              >
                                {t.description}
                              </Text>
                              <Button
                                rightIcon={
                                  <TiArrowRightThick></TiArrowRightThick>
                                }
                                colorScheme="pink"
                                variant="outline"
                                size="lg"
                                marginTop="10px"
                                marginLeft="10px"
                              >
                                Explore
                              </Button>
                            </Flex>
                            <Flex>
                              {t.destination.map((item, key) => (
                                <Card
                                  key={key}
                                  option={{ width: "15rem", ...item }}
                                ></Card>
                              ))}
                            </Flex>
                          </Flex>
                        </Flex>
                      </Box>
                    ))}
                </Box>
              ))}
              <Box as="div" className="section">
                <Flex justifyContent="space-between" padding="0 20%">
                  <ProgressRing
                    trigger={section === 1 ? true : false}
                    count={1290}
                    content="Total Trips"
                  />
                  <ProgressRing
                    trigger={section === 1 ? true : false}
                    count={1234}
                    content="Total Advisors"
                  />
                  <ProgressRing
                    trigger={section === 1 ? true : false}
                    count={1000}
                    content="Total Savings"
                  />
                </Flex>
              </Box>
            </ReactFullpage.Wrapper>
          )
        }
      />
    </Layout>
  );
}

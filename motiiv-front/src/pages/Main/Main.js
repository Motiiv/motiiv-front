import React from 'react';
import SwiperBanner from './sections/SwiperBanner';
import AdBanner from './sections/AdBanner';
import Section from '../../components/common/Section/Section'

const SliderObject = [
  {
      idx: 0,
      TextInfo : {
          category: "Hot Motiiv",
          categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
          videoTxt : `"영화 "굿 윌 헌팅" 명장면"`,
          hashTag: [
              "movie",
              "pride"
          ]
      },
      VideoInfo : {
          src : "https://user-images.githubusercontent.com/61861809/103744800-bbdf4500-5041-11eb-92b0-5ba27fcdd976.png",
          runningTime: "02:09"
      }
  },
  {
      idx: 1,
      TextInfo : {
          category: "Best Motiiv",
          categoryTxt: "어제 하루 좋아요가 가장 많았던 모티브",
          videoTxt : `"영화 "울프 오브 월스트리트" 명장면"`,
          hashTag: [
              "무무",
              "프라"
          ]
      },
      VideoInfo : {
          src : "https://user-images.githubusercontent.com/61861809/103744805-bd107200-5041-11eb-8cd2-f5f626827b7b.png",
          runningTime: "03:32"
      }
  },
  {
      idx: 2,
      TextInfo : {
          category: "Most motivated motiiv",
          categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
          videoTxt : "The Devil Wears Prada final scene",
          hashTag: [
              "movie",
              "pride"
          ]
      },
      VideoInfo : {
          src : "https://user-images.githubusercontent.com/61861809/103744809-beda3580-5041-11eb-83c9-fb3005a13832.png",
          runningTime: "22:01"
      }
  },
  {
      idx: 3,
      TextInfo : {
          category: "Most motivated motiiv",
          categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
          videoTxt : "The Devil Wears Prada final scene",
          hashTag: [
              "movie",
              "pride"
          ]
      },
      VideoInfo : {
          src : "https://user-images.githubusercontent.com/61861809/103744796-b97ceb00-5041-11eb-8e2f-4d950f90ae4c.png",
          runningTime: "22:01"
      }
  },
  {
      idx: 4,
      TextInfo : {
          category: "Most motivated motiiv",
          categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
          videoTxt : "The Devil Wears Prada final scene",
          hashTag: [
              "movie",
              "pride"
          ]
      },
      VideoInfo : {
          src : "https://www.youtube.com/embed/8xCfGlYQiPI",
          runningTime: "22:01"
      }
  }
]

function Main({ object }) {
  return (
    <>
            <SwiperBanner/>
            <Section object = {SliderObject} type = "top" size = "large" color = "gray" text = "motiiv top10"></Section>
            <Section object = {SliderObject}  ></Section>
            <Section object = {SliderObject}  ></Section>
            <Section object = {SliderObject}  ></Section>
            <AdBanner />
            <Section object = {SliderObject}  ></Section>
            <Section object = {SliderObject}  ></Section>
            <Section object = {SliderObject}  ></Section>
    </>
  );
}

export default Main;

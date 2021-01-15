# 💡Motiiv WEB💡

![logo_motion](https://user-images.githubusercontent.com/55133871/103452365-e5cafb80-4d11-11eb-8ff7-967f170daf4b.gif)

#### 일을 시작하는 순간, Motiiv

> 일을 시작하기 직전, 부스트️⚡️를 얻고 싶다면? <br>
> 나의 시선을 뺏는 많은 콘텐츠 속에서 내가 원하는 영상만 켜고 <br>
> 영상을 본 뒤 나의 워크스페이스로 바로 이동하세요! <br><br>
> 개발 기간 : ~2021-01-16

<br>

## ✔프로젝트 구조

```
├── App.js
├── assets
│   ├── global
│   │   ├── btn_next.png
│   │   ├── btn_previous.png
│   │   ├── gray_logo.png
│   │   ├── ic_editorpick_tag.png
│   │   ├── ic_search.png
│   │   ├── motiiv_logo.png
│   │   ├── sampleImage.PNG
│   │   └── star.png
│   └── main
├── components
│   ├── Category
│   │   └── CategoryComponent.js
│   ├── Detail
│   │   └── DetailComponent.js
│   └── common
│       ├── Banner
│       │   └── BottomBanner.js
│       ├── Button
│       │   └── MoreBtn.js
│       ├── Card
│       │   └── Card.js
│       ├── Footer
│       │   └── Footer.js
│       ├── Grid
│       │   └── Grid.js
│       ├── ImageSlider
│       │   └── ImageSlider.js
│       ├── Navbar
│       │   └── Navbar.js
│       └── Tag
│           └── Tag.js
├── index.js
├── lib
│   ├── api
│   │   ├── client.js
│   │   └── user.js
│   └── createRequestSaga.js
├── modules
│   ├── index.js
│   ├── loading.js
│   └── user.js
├── pages
│   ├── Admin
│   │   └── Admin.js
│   ├── Category
│   │   └── Category.js
│   ├── Detail
│   │   └── Detail.js
│   ├── Main
│   │   ├── Main.js
│   │   └── sections
│   │       ├── AdBanner.js
│   │       ├── SwiperBanner.js
│   │       └── SwiperContent.js
│   ├── MyMotiiv
│   │   └── MyMyotiiv.js
│   ├── SignIn
│   │   └── SignIn.js
│   ├── SignUp
│   │   └── SignUp.js
│   └── Upload
│       └── Upload.js
├── reportWebVitals.js
├── setupTests.js
└── style
    ├── fonts
    │   ├── Campton-BoldDEMO\ 2.otf
    │   ├── Campton-LightDEMO\ 2.otf
    │   ├── Spoqa\ Han\ Sans\ Neo\ Bold.otf
    │   ├── Spoqa\ Han\ Sans\ Neo\ Light.otf
    │   └── Spoqa\ Han\ Sans\ Neo\ Regular.otf
    ├── index.css
    └── theme.js
```

<br>

## ✔기술 스택 및 사용 라이브러리

<p align="center"><img width="832" alt="KakaoTalk_20210102_162246197" src="https://user-images.githubusercontent.com/55133871/103452843-0e092900-4d17-11eb-965c-73e2de8cfc3b.png"></>

<br>

## ✔서비스 핵심 기능

[서비스 핵심 기능 소개 페이지](https://www.notion.so/W-3-cce0823108ca48a199dcb3de056d6708)

<br>

## ✔웹 개발자

|                                 **🎩 [김정욱](https://github.com/neity16)**                                  |                                **🐧 [엄서영](https://github.com/tjdud0123)**                                 |                                 **☀️ [장세영](https://github.com/Say-young)**                                 |                                **📹 [김동관](https://github.com/dk-master)**                                 |
| :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| ![jw](https://user-images.githubusercontent.com/55133871/103453540-80c9d280-4d1e-11eb-8f0d-552e910ab104.png) | ![sy](https://user-images.githubusercontent.com/55133871/103453538-7f98a580-4d1e-11eb-9279-5e5ed547315e.png) | ![say](https://user-images.githubusercontent.com/55133871/103453542-81626900-4d1e-11eb-9333-e8ae0f06fe3b.png) | ![dk](https://user-images.githubusercontent.com/55133871/103453539-80c9d280-4d1e-11eb-9e9f-0c386fe2ab2f.png) |

#### 작업 분담

- [피그마](https://www.figma.com/file/CW3Z0fEkW4rJTfqvJ8GP2k/Motiiv-Kanban-Board?node-id=0%3A1)
- [GIT](https://github.com/Motiiv/motiiv-front/projects/1)

<br>

## ✔깃 컨벤션

- git branch

  - git flow를 적용합니다. 각 기능별로 feature/{페이지 이름}-{기능 이름}을 생성해 작업한 후 develop branch에 merge합니다.

- git comment message rule

  - 기능 추가 : 이슈번호 - A - 페이지 이름 - 작업 내용, close #이슈번호
  - 기능 수정 : 이슈번호 - F - 페이지 이름 - 작업 내용, close #이슈번호

- git merge rule
  - pull request를 날릴 경우 자신이 작업한 내용을 자세하게 comment로 남깁니다.
  - 이 때, 코드 리뷰가 필요할 경우 comment를 남길 수 있습니다.
- prettier

  - ESLint와 prettier를 사용해 코드 포맷팅 규격화
    <br>

        {
          "singleQuote": true,
          "semi": true,
          "useTabs": false,
          "tabWidth": 2,
          "trailingComma": "all",
          "printWidth": 80,
          "arrowParens": "avoid"
        }

<br>

## ✔모티브의 서버

- [Server](https://github.com/Motiiv/motiiv-server)

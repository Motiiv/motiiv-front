# 💡Motiiv WEB💡

![motiiv](https://user-images.githubusercontent.com/55133871/104766238-95da4300-57ad-11eb-86a9-260e895e4816.gif)

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

### ✔main
![main](https://user-images.githubusercontent.com/55133871/104784494-c03af900-57cb-11eb-93ea-f633be8e1b6a.gif)
1. 상단 배너
어제 하루 조회수가 가장 높았던 영상 등 3가지 영상을 소개합니다. 사용자는 매일 새로운 영상을 배너에서 확인할 수 있습니다.
일정 타이밍이 지나면 배너가 자동으로 넘어가고, 사용자는 버튼을 통해 옆으로 넘길 수 있습니다.
2. motiiv top10
모티브가 추천하는 동기 부여 영상 10개를 확인할 수 있습니다.
한 화면에서 영상을 3개씩 확인할 수 있으며, 좌우 버튼을 통해 영상을 넘겨가며 확인할 수 있습니다.
3. 하단 영상 섹션
사용자별로 큐레이션 된 동기부여 영상들이 카테고리별로 제공됩니다. 영상에 마우스 호버 시 미리보기 gif가 재생됩니다.
사용자는영상 썸네일 우측 상단의 저장 버튼을 통해 쉽게 영상을 저장할 수 있습니다.
영상 하단의 태그 클릭 시, 클릭한 태그에 해당하는 영상을 모아보는 category 페이지로 이동합니다.
4. GNB
main, category, mymotiiv로 이동할 수 있으며, 로그인을 하지 않은 상태일 경우에는 우측 상단의 로그인 버튼을 누르면 로그인 창을 볼 수 있습니다.
로그인을 했을 경우 프로필 이미지 사진이 보이게 되며, 해당 사진을 클릭 시 자신의 프로필 모달창을 확인할 수 있습니다.

### ✔category
![category](https://user-images.githubusercontent.com/55133871/104785039-f036cc00-57cc-11eb-96ee-6438dcd11a55.gif)
1. 왼쪽 카테고리 선택 영역
카테고리를 선택할 경우 해당 카테고리의 영상들이 필터링되어 제공됩니다.
상단 GNB와 함께 위치를 고정시켜 사용자는 언제든 다른 카테고리를 선택하거나 다른 곳으로 쉽게 이동할 수 있습니다.
카테고리를 호버 했을 경우와 클릭 했을 경우 변화를 주어 사용자는 카테고리를 클릭하는 행위를 자연스럽게 느낄 수 있습니다.
2. 오른쪽 정렬 모달창
최신순, 좋아요순, 저장순, 조회순을 클릭하면 각 기준에 맞게 영상이 정렬됩니다.
사용자가 부드럽고 자연스럽게 정렬 모달을 펼치고 접을 수 있도록 애니메이션이 적용되어 있습니다.
3. 영상 태그
영상 하단의 태그 클릭 시, 클릭한 태그에 해당하는 영상들이 필터링되어 제공됩니다.

### ✔detail
![detail](https://user-images.githubusercontent.com/55133871/104785177-4441b080-57cd-11eb-8b09-f67a2fc92add.gif)
1. 클릭한 영상 정보
사용자가 클릭한 영상을 시청하고 영상과 관련된 정보를 확인할 수 있습니다.
2. 좋아요, 저장, 공유
해당 영상을 좋아요/저장 하여 mymotiiv 페이지에서 확인할 수 있고, 해당 영상의 링크를 공유할 수 있습니다.
3. 추천 모티브
오른쪽에 관련된 영상이 제공됩니다. 브라우저의 너비가 일정 너비 이하로 좁아질 경우 오른쪽의 영상들은 아래로 위치가 변동됩니다.

### ✔mymotiiv
![mymotiiv](https://user-images.githubusercontent.com/55133871/104783056-9b915200-57c8-11eb-9135-442d01edca32.gif)
1. 워크스페이스
사용자가 동기부여 영상을 보고 바로 업무에 착수할 수 있도록 **본인이 자주 방문하는 워크스페이스를 추가, 수정, 삭제**할 수 있는 공간입니다.
링크를 입력할 경우 **해당 링크가 유효한지 검사**를 거친 후 워크스페이스가 추가되며, 해당 **url의 파비콘이 함께 추가**됩니다.
2. 워크스페이스 바로가기 토글
토글 버튼을 활성화할 경우 **모티브의 모든 뷰에서 바로 워크스페이스로 접근할 수 있도록 하는 플로팅 버튼**이 나타나게 됩니다.
플로팅 버튼에 대해서는 아래 항목에서 자세하게 설명합니다.

### ✔mymotiiv floating button
![mymotiiv_btn](https://user-images.githubusercontent.com/55133871/104783057-9d5b1580-57c8-11eb-8889-9070b416c5ff.gif)
1. 워크스페이스 플로팅 버튼
토글버튼을 활성화할 경우 모든 뷰에서 볼 수 있는 플로팅 버튼입니다.
가로형 버튼을 호버할 경우 원 모양으로 버튼이 변하며, 해당 상태의 버튼을 클릭할 경우 워크스페이스가 나타납니다.
이때, 매끄러운 사용자 경험을 위해 워크스페이스의 개수에 따라 각각 다른 애니메이션이 적용되어 있습니다.

### ✔dark mode
![darkmode](https://user-images.githubusercontent.com/55133871/104783081-a946d780-57c8-11eb-8790-5f5fdeff6839.gif)
1. 전체 뷰 다크 모드
로그인한 유저들은 모티브의 다크모드를 사용할 수 있습니다. GNB의 프로필 모달창에서 토글 버튼으로 다크모드 활성화가 가능합니다.
단순 1:1 색상 대응이 아닌, 각 뷰에 최적화된 색 조합에 맞춰 작업해 사용자들은 다크모드에서도 정보를 효율적으로 확인할 수  있습니다.

### ✔setting
![setting](https://user-images.githubusercontent.com/55133871/104783059-9f24d900-57c8-11eb-9c19-72c6917a345c.gif)
1. 회원정보수정
사용자의 프로필 이미지, 이름, 직군, 관심사를 수정할 수 있습니다.

### ✔social login
![login](https://user-images.githubusercontent.com/55133871/104785985-2bd29580-57cf-11eb-9b60-efae171189ef.gif)
1. 카카오 소셜 로그인
카카오 계정으로 소셜 로그인이 가능합니다.
만약 회원가입 이력이 없을 경우 카카오 로그인 이후 바로 회원가입을 위한 추가 정보 선택 화면으로 이동합니다.

[motiiv의 기능에 대해 더 자세한 설명이 보고 싶다면?](https://www.notion.so/W-3-cce0823108ca48a199dcb3de056d6708)

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

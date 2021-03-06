<h3>2020.05.16</h3>

<h1>< vue.js 끝장내기 - 실무에 필요한 모든 것 ></h1>

## 목차
- [1. 강의 오리엔테이션](#1-강의-오리엔테이션)   
- [2. 개발환경 구성](#2-개발환경-구성)   
- [3. 프로젝트 생성 및 환경 구성](#3-프로젝트-생성-및-환경-구성)   
- [4. 라우터 & 컴포넌트 설계](#4-라우터-&-컴포넌트-설계)   
- [5. 회원 가입 페이지 개발](#5-회원-가입-페이지-개발)   
- [6. 실무 환경을 위한 프로젝트 설정](#6-실무-환경을-위한-프로젝트-설정)   
- [7. 로그인 페이지 개발](#7-로그인-페이지-개발)   
- [8. 로그인 상태 관리와 스토어](#8-로그인-상태-관리와-스토어)   
- [10. 학습 노트 데이터 조회](#10-학습-노트-데이터-조회)   
- [2. 개발환경 구성](#2-개발환경-구성)   
- [11. 브라우저 저장소를 이용한 인증 값 관리](#11-브라우저-저장소를-이용한-인증-값-관리)   
- [12. 학습 노트 데이터 생성](#12-학습-노트-데이터-생성)   
- [13. 중간 정리](#13-중간-정리)   
- [14. API 함수 모듈화](#14-API-함수-모듈화)   
- [15. 학습 노트 데이터 삭제](#15-학습-노트-데이터-삭제)   
- [16. 학습 노트 데이터 수정](#16-학습-노트-데이터-수정)   
- [17. 데이터 포맷팅](#17-데이터-포맷팅)   
- [18. 라우터 심화](#18-라우터-심화)   
- [19. 프런트엔드 테스팅 소개](#19-프런트엔드-테스팅-소개)   
- [20. 강의 마무리](#20-강의-마무리)   


## 1. 강의 오리엔테이션

<h3> 2강 (현대 프런트엔드 개발 절차와 역할) </h3>

- 현대 웹 서비스 개발 절차

    : 요구사항 -> 서비스 기획 -> UI, UX 상세 설계 -> GUI 디자인 -> 퍼블리싱 -> 백엔드 API 개발 -> 프런트엔드 개발 -> QA
- 프런트엔드 개발자의 역할 :
	- 화면단 코드 작성
	- 기획, 디자인, 퍼블리싱, 백엔드 개발자와 소통 (커뮤니케이션의 역할이 크다)


<h3> 3강 (수업에서 사용할 API 문서 소개) </h3>

- 백엔드 개발자가 정한 API 문서를 보고 이해하고 소통하고 개발할 줄 알아야한다.
- Swagger( https://swagger.io/ ) : API문서를 자동화하는 도구.
- 이 수업에서 목적으로 하는 것은 API 문서를 보고 백엔드 개발자와 어떤 식으로 소통하고 협업해야 하는지를 아는것!


<hr/>


<h2>2. 개발환경 구성</h2>

<h3> 4강 (개발 환경 소개) </h3>

- 깃헙 리포지토리 링크 :
https://github.com/joshua1988/vue-til

- 프로그램 설치 안내 동영상 - Vue.js 시작하기 :
https://www.inflearn.com/course/Age-of-Vuejs/lecture/21333

- 개발환경 목록 페이지 링크 :
https://github.com/joshua1988/vue-til/tree/master#%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD



<h3> 5강 (VSCode 플러그인 및 테마 설정) </h3>

- VSCode 명령어 팔레트 단축키
     - 윈도우 : Ctrl + Shift + P    
     - 맥 : Cmd + Shift + P

- VSCode 플러그인 설치 및 설정 동영상 - Vue.js 시작하기 :
https://www.inflearn.com/course/Age-of-Vuejs/lecture/21397



<h3> 6강 (API 서버 프로젝트 구성) </h3>

- API 서버 깃헙 리포지토리 주소 :
https://github.com/joshua1988/vue-til-server


- $node -v : 터미널에서 v10이상이어야 의미있는 설치가 된다. 버전10 이상일 때 npm i ~를 해주자.

<img src="./imgs/end6.png" width="700"/>



<h3> 7강 (Node.js 버전 관리가 필요한 이유와 버전 변경하는 방법) </h3>

- 프로젝트마다 node.js버전을 변경할 필요가 있다. 모든 프로젝트가 최신은 아니기 때문.
- 이번 강의에서는 node.js버전을 낮춰줘야 한다.
- node.js사이트에서 ‘다운로드’메뉴에서 페이지 아래에 있는 ‘이전릴리즈’를 클릭 한 후, 원하는 버전을 다운받으면 된다.
- 이번 강의에서는 v10.16.~ 버전이면 된다.

- Node.js 이전 릴리즈 다운로드 페이지 :
	https://nodejs.org/ko/download/releases/
- OS 별로 아래 파일을 다운로드 받으시면 됩니다 :)
	- 윈도우 64비트 : x64-msi 파일
	- 윈도우 32비트 : x86-msi 파일
	- 맥 : pkg 파일
	- 리눅스 : tar 파일



<h3> 8강 (NVM(Node Version Manager) 소개 및 설치) </h3>

- 아래의 명령어를 터미널에 입력하면 NVM 설치됨.

		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
	===> 주의해야할 점은 마지막이 bash라고 되어있어야 한다. 

- 위의 설치를 한 후 터미널에 nvm -v을 입력해서 버전을 확인하면 확인이 안된다.
- 그 이유는 어딘가에 저장을 해줘야하기 때문인데, 이를 해결해보자.

- 터미널에   vi ~/.bashrc 를 입력해준다.(리눅스 편집기를 이용해서 편집할 파일을 연결)
- 아래의 명령어를 입력한 후, ‘esc’키를 눌러줘서 쓰기모드를 해제한다. 그 후, :wq를 입력하고 엔터를 누르면 저장이 된다. (만약 저장하지 않고 그냥 나가려면 :q를 입력하면 종료된다.)( :q! 는 강제종료!!)

		export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
		[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm


	=====> 내 컴퓨터(맥북)에 설치할 때 그냥 vi ~/.bashrc로 들어가서 입력하니까 nvm을 찾을 수가 없다고만 나와서 vi ~/.bash_profile로 들어가서 설치해 줬더니 성공했다!

- NVM 깃헙 설치 링크 :
https://github.com/nvm-sh/nvm#installing-and-updating





<h3> 9강 (NVM으로 Node.js 버전 변경 및 설치) </h3>

- NVM 설치 및 버전 변경 절차 문서 :
https://github.com/joshua1988/vue-til-server#nvm-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EB%B2%84%EC%A0%84-%EB%B3%80%EA%B2%BD-%EB%B0%A9%EB%B2%95

- 만약 노드 버전을 그냥 전환하고 싶다면  `nvm use 버전 이름`을 써보세요 :)



<h3> 10강 (API 서버 실행 및 확인) </h3>

- npm i 로 라이브러리 설치.
- npm run dev 로 서버 실행. 
    - 실행하고 나면 터미널에 VUE TIL SERVER IS RUNNING ON 3000라고 뜬다.
    - 3000은 app.js파일의 중간부분에 적혀있으므로, 만약 3000이라는 로컬주소가 존재할 경우 기존에 존재하는 3000을 끄던지, app.js에서 3000을 다른 숫자(ex)4000)으로 바꿔주면 된다.
    
			// server setup
			let port;
			async function configServer() {
			  port = 3000 || (await detectPort(3000));
			}
			configServer();

    - 제대로 서버가 실행됬는지 확인하려면 브라우저에서 localhost:3000이라고 쳐보자.
    - 화면에 Cannot GET /라고 뜨면 제대로 된것.




<h3> 11강 (데이터 베이스 연결 안내) </h3>

- 기본적으로 node.js어플리케이션은 app.js를 기준으로 실행되고 있다.




<h3> 12강 (MongoDB Cloud 사이트 소개 및 회원 가입 안내) </h3>


- MongoDB Cloud 사이트 :
https://www.mongodb.com/cloud

==> MongoDB 가입. (id:desi~@na~, pw:기본x1 )




<h3> 13강 (MongoDB 인스턴스 생성 후 Node.js에 연결) </h3>

- Free 클러스터 이용하자..!
- MongoDB를 생성하고, 생성한 주소를 app.js의 중간에 있는 부분에 넣어준 후, 다시 npm run dev를 해준다. ( 이때 터미널에 200번대가 찍히면 성공한 것 )

		mongoose.connect(
		  'mongodb+srv://test:1234@cluster0-tb8u4.mongodb.net/test?retryWrites=true&w=majority',
		  {
		    useNewUrlParser: true,
		  },
		);

- localhost:3000/api/docs : 브라우저에 이 주소를 치면 내가 설치한 api 문서를 확인 가능하다.

- 여기까지가 API를 Swagger라는 라이브러리를 이용해 짠 것이다.




<h3> 14강 (API 문서 보는 법과 사용하는 방법) </h3>

- localhost:3000/api/docs에서 API를 돌려보고 확인해 볼 수 있는 것이다.(편하게 Swagger를 이용해서)


<hr/>


<h2>3. 프로젝트 생성 및 환경 구성</h2>

<h3> 15강 (Vue CLI로 프로젝트 생성) </h3>

- Vue CLI 설치 안내 페이지 :
https://cli.vuejs.org/guide/installation.html

- 프로젝트 설치 옵션
	- Manually select features
	- Babel, Linter, Unit
	- Prettier
	- Lint on Save
	- Jest
	- In dedicated config files
	- n



<h3> 17강 (ESLint 에러가 화면에 표시되지 않게 하는 방법) </h3>

<img src="./imgs/end17_1.png"  width="300"/>

- ESLint 에러가 나지않는 더 좋은 코드를 작성할 수 있도록 도와주는 것이지, 에러는 실질적으로 애플리케이션을 실행하는데 영향은 없다.

- 하지만 화면을 덮어서 애플리케이션을 실행할 수 없게 하기 때문에, 항상 해당 에러를 해결하고 넘어가야 한다. 생산성에 영향을 준다.

	따라서, 이 에러를 무시하고도 애플리케이션을 개발할 수 있게 설정해 볼 것이다.
	
	해당 프로젝트 폴더에서 새파일로 vue.config.js를 만들어 준다.
	
   	 ==> 설정 파일이라고 보면 된다.


<img src="./imgs/end17_2.png"  width="500"/>

- 새롭게 생성한 vue.config.js파일에 위의 이미지처럼 작성해 주면 ESLint 에러가 브라우저에서 화면을 덮지 않고, 터미널에서만 보여지게 된다.

	===> 생산성이 높아짐!


<h3> 18강 (ESLint 설정 파일 안내) </h3>

- ESLint  : ESLint는 JavaScript 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구입니다.

<img src="./imgs/end18.png"  width="500"/>

===> rules: { } 의 “no-console” : “off”




<h3> 19강 (Prettier 소개 및 ESLint와 같이 사용해야 하는 이유) </h3>

- prettier 사이트: 
https://prettier.io/
- Prettier 사이트에서 get started를 누른 후 목록 중 Configuring Prettier의 Options를 보자.

- Prettier를 .eslintrc.js에서 설정해야하는 이유가 있다. 그 이유는 만약 프로젝트 폴더에서 .prettierrc라고 새 파일을 만들면 여기 파일에서 정의한 기준으로 프로젝트를 작성하게 된다. 하지만 이렇게 하면 .eslintrc.js에서 정의한 rules와 충돌하기 때문에, .eslintrc.js가 우선시 되어야 한다. 따라서, Prettier가 .eslintrc.js에 들어가야 하는 것이다.




<h3> 20강 (ESLint에 Prettier 규칙 적용) </h3>

- prettier를 설정해서 기준을 정해 놓으면 , 팀을 이뤄 프로젝트를 할 때 통일된 규칙의 코드를 작성할 수 있는 이점이 있다.

<img src="./imgs/end20.png"  width="500"/>

- Vue.js 개발 생산성을 높여주는 도구 3가지 :
https://joshua1988.github.io/web-development/vuejs/boost-productivity/




<h3> 21강 (ESLint 플러그인 설치 및 설정 변경) </h3>

- ESLint 플러그인을 다운로드 후, VSCode의 설정화면 접속.

  (설정 메뉴 접속 단축키)
  
   : 윈도우 기준 ctrl + ‘,’
   
   : 맥 기준 command + ‘,’
   
- ‘설정’에서 eslint를 검색 후 아래로 내리면 Eslint: Probe가 나온다. 이것이 eslint가 동작할 파일의 확장자들을 나열한 것이다. 
- 조금 더 내리면 Eslint: Validate가 있다. ‘settings.json에서 편집’버튼을 눌러 접속 후, 아래의 코드를 추가해 준다.


- 깃헙 브랜치에 올라간 코드 확인하기(브라우저에 깃헙 계정 로그인 필요) :
https://github.com/joshua1988/vue-til/blob/complete/settings.json

		코드 내용
		{
		  // ESLint
		  "eslint.validate": [
		    {
		      "language": "vue",
		      "autoFix": true
		    },
		    {
		      "language": "javascript",
		      "autoFix": true
		    },
		    {
		      "language": "javascriptreact",
		      "autoFix": true
		    },
		    {
		      "language": "typescript",
		      "autoFix": true
		    },
		    {
		      "language": "typescriptreact",
		      "autoFix": true
		    }
		  ],
		  "editor.codeActionsOnSave": {
		    "source.fixAll.eslint": true
		  },
		  // don't format on save
		  "editor.formatOnSave": false
		}





<h3> 22강 (Prettier 플러그인 확인 및 설정할 때 주의 사항) </h3>

- Prettier같은 경우에는 Eslint를 쓸 때 같이 활용해야 한다기 보다는, Prettier플러그인이 설치되어 있을 경우 해제해야 한다는 관점에서 보면 된다.
- prettier검색 후 우측클릭 후 사용안함 눌러준 후, ‘다시 로드 필요’버튼을 클릭해줘서 프로젝트를 다시 실행시켜 준다.
- 그런 후, cmd + ‘,’을 눌러 ‘설정’에 접속 후 format on save를 검색해 준 후, format on save의 체크 박스를 체크되지 않게 바꿔준다.

    ===> eslint로 정리할지 format on save로 정리할 지 충돌이 일어나기 때문에 꺼주는 것.

	====아니 근데 왜 내 VSCode에서는 안되는거야….?휴…
	====해결 되었다!!! 내가 코드 덜 적어놓고서 몰랐음...ㅋㅋ....



<h3> 23강 (프로젝트 레벨로 ESLint 규칙을 관리해야 하는 이유와 ESLint 규칙 설명) </h3>

- 개발 tool의 기능에 의존하게 되면 개발 tool이 달라졌을 때, 코드가 일관되지 못할 것이다. 따라서 개발 tool의 종류에 영향을 받지 않고, 프로젝트 소스 레벨에서 설정을 관리하는게 팀차원에서 개발하는게 생산성이나 효율이 높다는 것을 알고 있자.
- 프로젝트 폴더 속 폴더 중에 node_modules는 package.json 속에 정리되어 있는 라이브러리의 목록을 볼 수 있다. 목록 중 @vue를 눌러보면 eslint, prettier들이 있는 걸 볼 수 있다.



<h3> 24강 (파일의 절대 경로를 설정해야 하는 이유) </h3>

	import Demo from '../../demo/basic/Demo';
- 이렇게 ../ 으로 파일 경로를 접근하는 것은 거슬러 올라가는 것으로 파일의 ‘상대 경로’라고 한다.

    파일이 깊어질수록 파일을 거슬러 올라가는 ../ 가 많이 붙게 되므로, 나중에 assets에 img를 넣는다거나 font를 관리할 때에 번거로워질 수 있다.
- 따라서, ../ 대신 앞에 @를 사용해서 접근할 수 있도록 하자.


- 단, VSCode가 아닌 다른 개발 tool일 경우에는 적용되지 않을 수도 있단 점 알아두자!!!




<h3> 25강 (파일을 절대 경로로 찾기 설정) </h3>

- 프로젝트 폴더를 열고, jsconfig.json이라는 파일을 새로 만들어 준다.(이는 프로젝트가 아닌 VSCode를 위한 설정이라는 것을 잊지 말자!)

<img src="./imgs/end25.png"  width="500"/>

- jsconfig.json 파일 링크(Vue TIL 리포지토리):
https://github.com/joshua1988/vue-til/blob/complete/jsconfig.json

- VSCode의 jsconfig.json 파일 설명 글:
https://code.visualstudio.com/docs/languages/jsconfig




<h3> 26강 (애플리케이션 코딩 컨벤션 및 뷰 스타일 가이드 소개) </h3>

- 애플리케이션을 제작할 때 사용할 코딩 컨벤션.
- 이번 강의에서 제작하는 애플리케이션은 style guide문서에서 우선순위 A: 필수, 우선순위 B: 매우 추천함을 기준으로 제작할 것이다.


- Vue.js 스타일 가이드 문서 :
https://kr.vuejs.org/v2/style-guide/index.html




<hr/>




<h2>4. 라우터 & 컴포넌트 설계</h2>

<h3> 27강 (깃헙 리포지토리 안내 및 클론) </h3>

- 아래의 깃헙 리포지토리에서 clone 주소를 복사한다.
- finder에서 END-GAME폴더에서 터미널을 오픈한 후, 

    “ $ git clone 복사한 주소 ” 를 적는다.
- 새로운 프로젝트 파일이 생성된다.
- 생성 후 터미널에서 $ ls를 입력해 설치가 되었는지 확인해 본다.
- VSCode를 키고 해당 프로젝트에서 터미널을 오픈한다.
- 터미널에서 $git checkout 1_setup 을 입력해 설치한다. 
- 설치 후 $npm I 를 이용해 설치를 완료한다.

- 수업 깃헙 리포지토리 안내 :
https://github.com/joshua1988/vue-til




<h3> 28강 (뷰 라우터 설치 및 연결) </h3>

- 이번 강의에서 만들 애플리케이션은 화면 구성이 ‘로그인’, ‘회원가입’, ‘메인’, ‘추가/수정’으로 될 것이다.
- Vue.use( ) : 기본적으로 플러그인을 실행하기 위해서, 초기화하기 위해서 필요한 코드.




<h3> 29강 (페이지 컴포넌트 생성 및 연결) </h3>

<img src="./imgs/end29.png"  width="500"/>


<h3> 30강 (라우팅 동작 확인) </h3>

<img src="./imgs/end30.png"  width="500"/>



<h3> 31강 (코드 스플리팅 소개 및 적용) </h3>

- App.js 안에 모든 페이지들의 정보가 들어가있는 것이다.
- 실제 애플리케이션에서는 화면의 갯수가 매우 많다. 따라서 그 수많은 페이지를 한번에 다 로드해 오는 것은 굉장한 시간이 걸린다. 
- 따라서, 만약 30페이지일 경우 첫 페이지가 로그인이면 로그인 페이지만 가져오고, 나머지 29페이지는 해당 url로 이동했을 때만 들고오는 것이 코드 스플리팅의 역할이다.

- 즉, 코드 스플리팅(Code Splitting)이란 모든 컴포넌트를 한 번에 로드하는 것이 아닌, 현재 필요한 컴포넌트만 불러오는 것이다.
- 이렇게 싱글페이지 애플리케이션을 만들 때 어떤 페이지를 코드 스플리팅할지 고민해서 제작하면, 초기에 애플리케이션을 로딩하는 속도는 줄어들고, 사용자의 경험이 향상되는 결과를 얻을 수 있다!. 


- Window History API :
https://developer.mozilla.org/en-US/docs/Web/API/Window/history

- 웹팩 코드 스플리팅 문서 :
https://webpack.js.org/guides/code-splitting/

- Vue.js 다이나믹 임포트 문서 :
https://vuejs.org/v2/guide/components-dynamic-async.html#ad

<img src="./imgs/end31.png"  width="500"/>
===> 29강의 index.js에서 작성한 routes와 달리 코드 스플리팅을 이용해 연결시켜 줬다.


<h3> 32강 (초기 진입 페이지 설정) </h3>

- redirect 설정 : url을 입력해서 첫 화면에 접속 했을 때 연결될 루트를 입력해 주는 것.

<img src="./imgs/end32.png"  width="500"/>


- 뷰 라우터 오픈 소스 :
https://github.com/vuejs/vue-router



<h3> 33강 (없는 페이지를 접근할 때의 라우터 처리) </h3>

- 라우터의 폴백(Fall Back) 기능 : 라우터의 속성에 정해지지 않는 즉, 없는 url에 대해 반응하는 라우터를 의미한다.

<img src="./imgs/end33_1.png"  width="500"/>
<img src="./imgs/end33_2.png"  width="500"/>
<img src="./imgs/end33_3.png"  width="500"/>
==> end33_3.png를 보면, 라우터에서 등록하지 않은 /main으로 url을 연결해 주었고, 콜백기능에 의해서 @/views/NotFoundPage.vue로 이동되어 Page is not found라는 글자가 보인다.



<h3> 34강 (history mode 설정 및 싱글 페이지 애플리케이션 배포할 때 주의 사항) </h3>

- router에서 mode: ‘history’ 를 작성해 주면 url에서 /#/이 붙는 것을 제거해 준다.

- 뷰 라우터 History Mode 주의 사항 문서 :
https://router.vuejs.org/guide/essentials/history-mode.html




<hr/>





<h2>5. 회원 가입 페이지 개발</h2>

<h3> 35강 (회원 가입 페이지 개발을 위한 준비) </h3>

- vue-til-server폴더를 열어 API 서버 실행 명령어인 npm run dev를 입력해 준다.
- vue-til-server는 api파일들, vue-til은 애플리케이션.



<h3> 36강 (헤더 컴포넌트 마크업 및 회원 가입 컴포넌트 생성) </h3>

- page컴포넌트는 드라이하게 남아있는 것이 좋다. 비지니스 로직이 많이 연계되는 것보다는 비지니스 로직을 들고있는 컴포넌트를 등록할 수 있게 하는 게 좋다.

<img src="./imgs/end36.png"  width="500"/>


 
<h3> 38강 (회원 가입 폼 데이터 바인딩 및 이벤트 연결) </h3>

- vim + tab키 : 

		import New from ‘@/components/New.vue';
- vda + tab키 : 


 		data() {
        	 return {
                   key: value
       		 }
    		},



<img src="./imgs/end38.png"  width="500"/>




<h3> 39강 (회원 가입 API 요청을 위한 문서 확인) </h3>

<img src="./imgs/end39_1.png"  width="500"/>
	
	===> signup쪽에 POST 요청으로 어떠한 내용을 보내는지 볼 수 있다.
	      POST요청이라는 것은 기본적으로 서버에 어떤 데이터를 받아서 보내는 역할을 한다. 
	      따라서, Parameters에 어떤 값들이 들어가는지 체크를 해줘야 한다.	
	===> username, password, nickname 총 3개의 데이터를 POST로(formdata로) 보낸다.
	
	===> 데이터를 받았을 때, 요청에 대한 응답은 200, 409, 500으로 나타난다.
<br/>

<img src="./imgs/end39_2.png"  width="500"/>
	
	===> username, password, nickname을 입력하고(input 내용들) excute버튼을 누르면 
	     요청이 서버로 보내진다.

<br/>

<img src="./imgs/end39_3.png"  width="500"/>

	===> 요청을 보냈을 때, Request URL이 우리가 서버 쪽으로 보내야하는 주소다.
	
	===> Response body
		- 방금보냈던 username과 password, nickname에 대해서 서버로부터 응답이 온 것을 확인할 수 있다.
		- 또한, 각각의 고유한 id와 언제 이 데이터가 생성되었는지에 대한 정보까지 백엔드에서 생성해서 보내주는 것을 볼 수 있다.
	
	===> Response headers
		- 서버로부터 온 HTTP header의 설정이다.
		- content-type이라던지 인코딩 등을 확인할 수 있다. 


<h3> 40강 (API 폴더와 회원 가입 API 함수 생성) </h3>

- npm i axios : axios 설치.



- 설치한 axios는 package.json에서 확인할 수 있다.
- axios를 바로 SignupForm.vue에서 import해서 사용하는 것보다는, src폴더 내에 따로 api폴더(index.js)를 만들어서 사용하는 것이 훨씬 구조적이면서 나중에 수정할 때에도 편리하다.

<br/>

- api(axios)를 구조화해보자.

- VSCode는 웹기술로 만들어진 개발 툴이다. 이 개발 툴 자체가 타입스크립트로 만들어 진 것이다.

- 따라서, api 규칙에 대해서(들어오는 인자들에 대해서) 볼 수 있게 된다.

<img src="./imgs/end40.png"  width="500"/>

- api end point : node.js를 실행한 서버의 주소???

<br/>
<img src="./imgs/end40_2.png"  width="500"/>

	- registerUser를 export 해주면 SignupForm.vue에서 export된 registerUser를 import하고 호출할 수 있다.
	- axios.post()의 결과가 promise이기 때문에, promise를 return을 해줘야지 
	  registerUser를 호출하고 이후의 비동기 동작을 수행할 수 있게 된다.



<br/>

- 타입스크립트 핸드북 :
https://joshua1988.github.io/ts/




<h3> 41강 (회원 가입 API 호출과 주의 사항) </h3>

<img src="./imgs/end41_1.png"  width="500"/>

	- console의 Network의 XHR은 네트워크 요쳥에 대해서만 필터링을 해서 볼 수 있는 것이다.
<br/><br/>

<img src="./imgs/end41_2.png"  width="500"/>

	===> url은 이미 api폴더의 index.js에서 localhost:3000이 작성되어 있기 때문에 여기서는 적을 필요가 없는 것.
	===> userData 내의 객체들이 registerUser(userData)를 통해서 api폴더의 index.js의 post까지 전달되는 것이다.
	===> 이렇게 login 내용이 전달 된 것을 Network에서 확인 가능하다.
	
	+) username, password, nickname이라고 이름을 부여한 이유는
	   api문서 내에 정해져있는 Parameters의 이름이기 때문이다.(다른 이름의 parameter를 넘기면 오류가 발생한다)

<br/>

<img src="./imgs/end41_3.png"  width="500"/>




<h3> 42강 (회원 가입 이후의 동작 구현) </h3>

- 41강에서는 api를 요청하고 호출하는 확인만 했었는데, api상으로 의미가 있으려면 회원가입을 했을 때 회원가입이 완료되었다는 메세지를 뜨게 하는 등의 부가적인 동작들을 하기 위해서 submitForm을 비동기 처리해줘야 한다.

<img src="./imgs/end42_1.png"  width="500"/>

	===> .then( ).catch( )를 사용해서 작성해줘도 된다.
		(이게 기존에 내가 배웠고 사용했던 방법)
<br/><br/>

<img src="./imgs/end42_2.png"  width="500"/>

	===> asyne await(어씽크 어웨잍)를 이용해서 처리할 수 도 있다.
	===> submitForm에 async를 태우고 registerUser(promise가 반환되는 api함수) 앞에 await를 붙여주면,
	     여기에 대한 결과를 response로 받을 수 있게 된다.

<br/> <br/>

<img src="./imgs/end42_3.png"  width="500"/>

	===> 그 결과를 response로 받아볼 수 있다.
	

<br/><br/>

- Network에서 데이터들이 잘 넘어왔는지 확인을 해야한다. 

<br/><br/>

<img src="./imgs/end42_4.png"  width="500"/>

	===> Network에서 signup쪽에서 url와 input단에서 입력해줬던 data들(username, password, nickname)이 잘 넘어갔는지 확인할 수 있다.
	
<br/>

<img src="./imgs/end42_5.png"  width="500"/>

	===> input을 입력한 후 회원가입 버튼을 누르면 form을 포맷해주는 함수를 작성한다.
	
<br/>

<img src="./imgs/end42_6.png"  width="500"/>

	===> response 중에서 우리가 원하는 데이터는 response.data에 있다.
	===> destructring을 이용해서 response의 data를 바로 꺼낼 수 있다. { data }
	     response.data이렇게 적지 않아도 된다.
	     
	===> destructuring assignment(비구조화 할당)
		- 객체나 배열에서 바로 값을 가져와서 변수에 할당할 수 있는 기능이다. (ECMAScript 2015에 새로 들어온 기능)
		
   ===> destructuring: <a href="https://github.com/EunJaePark/TIL/blob/master/200518.md">내용 정리 참고.</a>


<br/><br/>

- async await 정리글 :
https://joshua1988.github.io/web-development/javascript/js-async-await/

- ES6 템플릿 리터럴(백틱) 정리글 :
https://joshua1988.github.io/es6-online-book/template-literal.html

- ES6 Destructuring 정리글 :
https://joshua1988.github.io/es6-online-book/destructuring.html




<hr/>





<h2>6. 실무 환경을 위한 프로젝트 설정</h2>
<h3> 43강 (API 설정 공통화) </h3>

<img src="./imgs/end43_1.png"  width="500"/>

	==> 공통된 url을 보다 효율적으로 사용할 수 있도록 공통화를 해줄 필요가 있다.

<br/><br/>

<img src="./imgs/end43_2.png"  width="500"/>

	===> 공통된 부분을 config를 선언해서 별도로 작성해 준 것이다.
	===> 기존에 내가 배웠고, 사용했던 방식.
	
<br/><br/>	

<img src="./imgs/end43_3.png"  width="500"/>

	===> 기존에 사용하던 방식 대신 이 방식을 쓰면 더 깔끔하게 작성 가능하다.
	===> 필요한 것들을 작성 가능.
	
	===> const vm = new Vue({})를 생성하는 방식과 같다고 보면 된다.(인스턴스를 생성해서 라이브러리를 사용.)

<br/><br/>

<img src="./imgs/end43_4.png"  width="500"/>
	
```
===> return instance.post('signup', userData);
```



- axios create() 문서 :
https://github.com/axios/axios#axioscreateconfig




<h3> 44강 (env 파일과 설정 방법) </h3>

- api주소를 환경변수로 관리하는 방법.
- 프로젝트에 .env파일을 만들어 준다.

    => .env는 ‘키=값' 형태로 정의할 수 있는 환경 변수 파일.
    
<img src="./imgs/end44_1.png"  width="500"/>

	==> .env파일에 API_URL을 작성해 준다.
        	‘VUE_APP’라는 접두사가 붙은 변수는 자동 로드가 된다.

<br/><br/>

<img src="./imgs/end44_2.png"  width="500"/>

	==> process.env.~를 이용해서 보다 편리하게 공통된 url을 불러올 수 있다.

- 웹팩 DefinePlugin 문서 :
https://webpack.js.org/plugins/define-plugin/



<h3> 45강 (Vue CLI의 env 파일 규칙과 실무 환경 구성 방법) </h3>

- .env 파일 규칙에 대해 살펴보자.

<img src="./imgs/end45_1.png"  width="500"/>

	===> 대부분의 웹서비스는 퍼블릭한 도메인에 오픈이 되기 때문에, 기본적으로 localhost를 바라보는 것은 맞지 않다.
	===> 따라서, 서버에 배포했을 때 들어갈 url을 따로 만들어 줬다. 
	===> 하지만 .env에서 분리해서 관리하는게 아니라 .env.development를 만들어 관리해준다.

<br/>

- 프로토타이핑 단계를 development라고 vue-cli에서 내부적으로 정의하고 있다.  
- 따라서,  .env.development에 localhost url를 옮겨준다.

<br/>
<img src="./imgs/end45_2.png"  width="500"/>
<img src="./imgs/end45_3.png"  width="500"/>

	===> .env는 이렇게 3가지 파일이 사용 가능하다.
	===> .env.production에 배포했을 때의 url을 넣어준다. (강의 실습에서는 https://vue-til.com/을 넣어주면 된다.)

	===> npm run build를 했을 때 .env.production이 들어가게 되고, 로컬서버를 띄웠을 때는 .env.development가 들어가게 된다.
	
<br/><br/>

<img src="./imgs/end45_4.png"  width="500"/>

	===> .env.production이나 .env.development파일이 없을 경우 .env파일이 가장 높은 우선순위를 가지게 된다.


<br/>


- 설정 파일을 변경했을 때에는 서버를 껐다가 재실행해줘야 한다. 웹팩이 설정이 변경된 것을 인식하지 못하기 때문.


- Vue CLI env 파일 규칙 문서 :
https://cli.vuejs.org/guide/mode-and-env.html#modes-and-environment-variables




<hr/>





<h2>7. 로그인 페이지 개발</h2>

<h3> 46강 (로그인 폼 컴포넌트 생성 및 마크업) </h3>

- LoginPage.vue 역시 드라이하게 냅두고, LoginForm.vue 컴포넌트를 제작해서 연결시켜준다.



<h3> 48강 (로그인 API 문서 확인 및 API 함수 생성) </h3>

<img src="./imgs/end48.png"  width="500"/>



<h3> 49강 (로그인 기능 구현) </h3>

<img src="./imgs/end49.png"  width="500"/>

	 ===> 48강에서 작성했던 LoginForm.vue의 methods를 바꿔줌. (api를 들여와서 수정)
<br/>


<h3> 50강 (에러가 났을 때의 대처 방법과 로그 분석하는 방법) </h3>

- 실제로 애플리케이션을 개발할 때에는 기능보다도 에러를 잘 처리해야 완성도 높은 애플리케이션을 만들 수 있다.

<img src="./imgs/end50_1.png"  width="500"/>

	===> 로그인 정보가 틀려서 에러가 뜬 상태. 당황하지 말고 위에서부터 에러를 하나하나 살펴보자. 
	===> post요청을 했는데 401(Unauthorized)이 뜬 상태.

	===> 401코드 때문에 에러가 났다고 나와있다.
	===> <LoginForm>에서 에러가 발생했다고 나와있다.
	===> 하지만 정확히 어디서 발생했는지는 나와있지 않다.
		 따라서, 에러 처리를 잘해줘야 디버깅도 수월해지고 사용자 입장에서도 사용성이 깨지지 않게 된다.
<br/>

<img src="./imgs/end50_2.png"   width="500"/>

	===> Network패널로 이통해서 login을 눌러보면, 동일한 url로 요청을 했지만 권한이 없다는 의미의 401이 떠있다.
	===> 옆의 Preview를 살펴보자.
<br/>

<img src="./imgs/end50_3.png"  width="500"/>

	===> Network패널의 Preview를 살펴보면 ‘인증이 실패했다. 비밀번호가 틀렸다.’라는 메세지를 보내줌.
<br/>

- 다음 강의(51강)에서 이 에러부분들을 어떻게 개선할 수 있을지 async await의 에러처리 방법에 대해 배울 것이다.






<h3> 51강 (네트워크 에러 확인 방법과 에러 처리 코드 구현) </h3>

- try{ }와 catch(error) { }를 이용해서 작성해 준다.

   이를 이용하면 error가 발생한 라인을 세부적으로 알려주기 때문에 error 확인이 용이해진다.

<img src="./imgs/end51_1.png"  width="500"/>

	===> try{ } 속에 기존의 로그인성공 로직을 넣어준다. 
	===> catch( ) { } 에는 로그인실패시 에러를 확인할 수 있도록 콘솔로 찍어준다.
<br/>

<img src="./imgs/end51_2.png"  width="500"/>

	===> LoginForm.vue에서 에러를 콘솔에 찍히도록 코드를 작성했기 때문에, 비밀번호를 틀리게 친 경우 console에 에러가 뜬다. 
	===> 50강에서 에러를 나타내는 것은 LoginForm.vue 전체를 가리키기 때문에, 어디서 에러가 나는지 알 수 없었다.
	===> 하지만 이번에는 정확하게 43번째 라인을 가리켜 주기 때문에 try{ }안에서의 에러라는 것을 파악할 수 있게 된다.
<br/>

	===> 콘솔에 뜬 에러를 보면 POST요청에 대한 에러인 것을 알 수 있다. 따라서 이 에러는 안에 Response가 있다는 것을 알 수 있는 것이다.
	===> Network로 갔을 때, login의 Response가 들어온 것을 확인할 수 있다.
<img src="./imgs/end51_3.png"  width="500"/>

	===> 따라서, LoginForm.vue로 돌아와서 catch(error) { }에서 콘솔로 찍을 때, console.log(error)이 아닌 console.log(error.response)를 하게 되면 에러에 대한 상세 내용들을 콘솔에 띄울 수 있게 된다.
	
<br/>

<img src="./imgs/end51_4.png"   width="500"/>

	===> Network의 Response에서 보았던 메세지는 data에 나타나는 것을 볼 수 있다.


- 이처럼, 일반적으로 백엔드에서는 에러가 나면 에러 메세지나 에러 코드를 보내주기 때문에, 그걸 받아서 일차적으로는 화면에 노출시키는게 좋은 에러 결 방법이다.(콘솔 말고!!)





<h3> 52강 (에러 메시지 출력 및 에러 피드백 표시 방법) </h3>

- 에러가 났을 때, 에러 메세지가 콘솔로 출력되면 사용자 입장에서는 알 수 없다. 따라서 무조건 화면에 표시를 해줘야 하는게 기본적인 웹의 사용성이다.

<img src="./imgs/end52_1.png"  width="500"/>

	===> data에 만들어놓았던 logMessage를 이용해서 error을 넣어준다.
	===> 그 결과, 로그인시 에러가 발생하면 브라우저 화면에 메세지가 뜬다.

<img src="./imgs/end52_2.png"  width="500"/>

<br/>


+) 
- 로그인 input창을 비워주는 함수실행코드의 위치는 상황에 맞게 넣어주면 된다. 
- try{ }나 catch( ){ } 중 상황에 맞게 넣어주면 됨. 만약 중복된다 싶을 때에는 try와 catch의 뒤에 finally{ }를 만들어서 넣어주면 된다.
<img src="./imgs/end52_3.png"  width="500"/>





<h3> 53강 (사용자 폼 유효성 검사 안내) </h3>

- 로그인 input에서 
	-  입력된 id와 pw가 없으면 로그인이 활성화가 되지 않도록 하고, 
	-  id입력 input에서 이메일이 아닌 것을 입력했을 경우에도 로그인이 활성화되지 않도록 할 것이다.
- 이메일이 아닌 것을 찾는 정규식을 써야 하는데 새롭게 만들지 않고, 아래의 링크에서 가져다 쓸 것이다.
- 정규식을 LoginForm.vue의 script안에 적어도 되지만, loginForm뿐만 아니라 signup을 할 때 부터 사용되어야 하기 때문에 

	src폴더 밑에 utils폴더를 새롭게 만들어서 작성해준다.(validation.js파일 생성)

- Email Validation 정규 표현식 코드 :
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

<img src="./imgs/end53_1.png"  width="500"/>
<img src="./imgs/end53_2.png"  width="500""/>



<h3> 54강 (computed 속성을 이용한 이메일 형식 검사) </h3>

- validation이라고 하면 username에 들어가는 값들은 validateEmail 함수를 돌려 확인할 것이다.
- 일반적으로 computed를 사용하게 될 것이다. data의 변화에 따라서 그 내용들을 자동으로 계산해주는 연산식이다.

<img src="./imgs/end54_1.png"   width="500"/>
<img src="./imgs/end54_2.png"  width="500"/>

	===> 유효한 id를 입력했을 때, vue의 LoginForm의 isFormValid가 true임을 볼 수 있다.	
<br/>

<img src="./imgs/end54_3.png"  width="500"/>

	===> 유효하지 않은 id를 입력했을 때, vue의 LoginForm의 isFormValid가 false임을 볼 수 있다.
<br/>

<img src="./imgs/end54_4.png"  width="500"/>

	===> <button>을 조건이 성립할 때에만 활성화 시켜준다. 
	===> (isUsernameValid는 computed의 isFormValid 이름을 수정해준 것임.)
	===> !isUsernameValid : input에 입력된 id를 한글자한글자 비교해서 틀릴 경우 false일 때 button을 비활성(disabled)하게 함.
	     !password : password가 입력되지 않았을 경우 button을 비활성해줌.




<h3> 55강 ([퀴즈] 회원 가입 컴포넌트 유효성 검사) </h3>

- SignupForm.vue의 input들을 LoginForm.vue에서처럼 만들어 보세요~~


<hr/>


<h2>8. 로그인 상태 관리와 스토어</h2>

<h3> 56강 (메인 페이지 개발을 위한 브랜치 안내 및 코드 정리) </h3>

- 메인페이지 개발 전 스타일링을 적용한 브런치로 이동할 것.
- $ git checkout 5_styling -f


- 5_styling로 이동하면 2가지 에러가 뜬다. (크게 개의치 않아도 됨)
<img src="./imgs/end56_1.png"  width="500"/>

	===> validation.js의 정규표현식에서 오류가 발생하는 것.
<br/>

<img src="./imgs/end56_2.png"  width="500"/>

	===> 빨간 밑줄 그어져있는 역슬래쉬를 지워주면 오류가 사라진다.

<br/><br/>

	- $ git checkout 5_styling -f 을 한 후 폴더에 변경이 생겼다.
	- components폴더의 common폴더 속에 있던 LoginForm.vue와 SignupForm.vue가 components폴더 바로 아래로 이동했다. 
	  (AppHeader.vue는 그대로 common폴더 속에 위치.)



<h3> 57강 (로그인 동작 확인 및 구현 방향 복습) </h3>

- Network의 Preview에서 token을 볼 수 있다.
- token에 대해서 api를 어떻게 처리할지 확인하기 전에, 로그인을 하고나서 main페이지로 이동을 하도록 코딩을 먼저 짜보자.(58강)




<h3> 58강 (메인 페이지 라우팅 구현 및 확인) </h3>

- 로그인을 하고나서 이동할 페이지를 router에 정의하자.

    views폴더 속에 MainPage.vue파일을 생성하고, routes(index.js)에서 연결시켜 준다.
- 로그인을 하고나서 main페이지로 이동하도록 하는 것을 공식문서에서는 ‘프로그래메틱 네비게이션(Programmatic Navigation)’이라고 한다.



<h3> 59강 (자바스크립트로 페이지 이동하기 구현 및 설명) </h3>


- router.push( )를 이용해서 원하는 위치로 이동이 가능하다.

  url이 아닌 replace라던지 기타 형식들을 넣을 수 있다.
  
  ( path, params(파라미터), query등을 넘길 수 있다. )
  
<img src="./imgs/end59.png"  width="500"/>

	===> 로그인을 하면 ‘/main’페이지로 이동하도록 router에 ‘/main’을 push해 주었다.



<br/>



	+) LoginForm.vue에서 로그인 시 ‘/main’으로 이동하도록 코드를 작성했는데 전혀 이동이 되지않았다.

	   ===> 심지어 화면에 찍어내던 ‘~님 로그인 하셨습니다’라는 태그도 주석처리 했는데 그대로 보이던 것이다!!

	   ===> 그 이유는, 기존에 내가 만들어 놓았던 LoginForm.vue는 component폴더의 common폴더 속에 위치해 있었다. 

	   ===> 그러나, $git checkout 5_styling -f를 하면서 내용이 조금 변했다. 

	   ===> LoginForm.vue가 component폴더 속으로 위치하도록 변경되었던 것!! 

	   (물론, 내가 기존에 만들어 놓았던 common폴더와 그 속의 컴포넌트들도 그대로 있긴있다. 
	   하지만 views의 파일들에서 import경로가 component속에 있는 컴포넌트로 바뀌어졌기 때문에 
	   새롭게 생겨난 component폴더 속의 LoginForm.vue에서 작성했어야 했던것!! 
	   나는 계속 기존의 common 속의 컴포넌트를 수정하고 있었기에 작동하지 않았던 것이었다….ㅠㅠ 답답해 죽는줄….)


- 뷰 라우터 Programmatic Navigation 문서 :
https://router.vuejs.org/guide/essentials/navigation.html#programmatic-navigation




<h3> 60강 (로그인 이후의 동작 설명) </h3>

- 로그인 후 화면에 뿌렸던
```javascript
  this.logMessage = `${data.user.username} 님 환영합니다`;
  ```
  를 59강에서 주석처리 해줬었다.
  
- 기존에는 테스트용으로 화면에 찍어냈던 것이지만, 이제는 로그인을 하고 나서도 어떤 유저인지 보여줘야한다.
- 현재는 로그인 후 같은 아이디로 계속 로그인을 하는 게 가능했다. 로그아웃 기능도 따로 없고 방해하는 요소가 없었기 때문. 이는 차차 수정할 것이다.

- 로그인 한 유저의 이름을 화면 상단에 보이도록 할 것이다.

<img src="./imgs/end60_1.png"  width="500"/>

	===> 로그인을 했을 때 <LoginForm>의 결과값을< AppHeader>로 넘겨줘야 한다.





<h3> 61강 (컴포넌트 간 데이터 전달 방법 3가지와 구현 방향) </h3>

- 로그인을 했을 때 결과(유저 네임)을 어떻게 하면 AppHeader로 올릴 수 있을까?
<img src="./imgs/end61.png"  width="500"/>

	===> 현재 컴포넌트 구조.
	===> LoginForm에서의 id를 LoginPage와 App을 거쳐서 AppHeader로 전달해야하는 상황이다.(3가지 방법 있음)
		  1)  LoginForm에서 LoginPage로, LoginPage에서 App으로 event를 2번 올리고, App에서 AppHeader로 props를 내리는 방법.
		  2) eventbus를 활용해서 LoginForm에서 AppHeader로 바로 event를 보내는 방법.

		  3) 여러개의 컴포넌트가 생길 경우에 좀더 효과적으로 user name을 관리하는 방법이 있다.
		  컴포넌트 통신이나 eventbus보다는 store(Vuex)를 활용하게 되면 더 효율적으로 관리할 수 있다.



<h3> 62강 (뷰엑스 설치 및 연결) </h3>

- ```$ npm i vuex``` 를 이용해서 설치.
- 이를 이용해 Vuex를 설치하게 되면 package.json의 dependencies에 들어가게 된다.
- dependencies와 devDependencies의 차이점을 구별하자. 
	- dependencies : 애플리케이션 로직과 관련된 라이브러리 목록.
			     dependencies에 들어있는 다섯개의 라이브러리들은 
			     ```$ npm run build``` 명령어를 실행하면 최종적으로 자원이 압축(변환)되어서 html, css이 나오게 되고 그 안에 이 다섯개의 라이브러리 내용이 포함되어서 들어간다.

	- devDependencies의 라이브러리들은 ```$ npm run build``` 명령어를 실행한 결과물에 들어가지 않는다.
	   즉, 배포할 때 포함되지 않는다.


<img src="./imgs/end62_1.png"  width="500"/>

===> Vuex 역시 dependencies에 들어온다.
===> 실제 애플리케이션이 작동할 때 Vuex도 필요하기 때문이다.


<br/>


- 프로젝트의 src폴더 속에 store( index.js )폴더를 만들어야 한다.
<img src="./imgs/end62_2.png"  width="500"/>
	
	===> store의 state는 여러 컴포넌트 간 공유되는 데이터다.

<br/>


<img src="./imgs/end62_3.png"  width="500"/>

	===> store의 index.js파일 작성.
	===> store파일을 생성 후, main.js로 가서 store를 import해줘야 한다.

	===> main.js에서 store를 import해주고, 아래에 store라는 변수를 넣어준다.

- npm run serve로 서버 실행을 한 번 해줘야 한다.


<img src="./imgs/end62_4.png"  width="500"/>

	===> store를 생성하고 import 후 브라우저에서 vue화면을 확인하면 state에서 username이 생성된 것을 볼 수 있다.
          	Vuex가 연결되었다는 것을 나타냄.
		
<br/>

- 개발용 라이브러리와 배포용 라이브러리 구분하기 문서 :
https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#%EA%B0%9C%EB%B0%9C%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-%EB%B0%B0%ED%8F%AC%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0




<h3> 63강 (로그인 아이디 헤더에 표시하기) </h3>

- 로그인한 사용자 정보를 username에 담아보자.

<img src="./imgs/end63_1.png"  width="500"/>

	===> mutations은 data를 바꾸는 것이다. 즉, state를 바꾼다.
	===> setUsername을 호출하면 state의 username이 바뀌에 되는 것.

<br/>

- store파일을 작성 후, LoginForm.vue에서 로그인한 유저이름을 넘겨주는 코드를 작성해야 한다.
	- ```this.$store.commit('setUsername', data.user.username);```
	
	
<img src="./imgs/end63_2.png"  width="500"/>

	===> logMessage는 주석처리를 해줘도 된다.

<br/>

<img src="./imgs/end63_3.png"  width="500"/>

	===> 브라우저로 가서 로그인을 하면 vue화면에서 setUername이 호출되면서 state값과 mutation의 type와 payload까지 볼 수 있다.

<br/>

<img src="./imgs/end63_4.png"  width="500"/>

	===> AppHeader.vue에서 $store의 username를 화면에 찍히도록 해준다.

<br/>

<img src="./imgs/end63_5.png"  width="500"/>

	===> 그 결과, 브라우저에서 로그인을 하면 AppHeader부분에 로그인한 유저의 id가 나타난다.





<h3> 64강 (로그인 했을 때의 헤더 버튼 분기 처리) </h3>

- 로그인이 되면 ‘로그인’과 ‘회원가입’버튼을 보이지 않게 할 필요가 있다.
- 이를 처리하기 위해서는 로그인이 되었다는 ‘상태값’으로 구분을 해야 한다. 
- 구분하는 상태값으로는 state의 username의 값으로 구분하면 된다.
	- 처음에는 username이 빈 문자열이므로 빈문자열일 경우 로그인이 되지 않은 경우라고 볼 수 있다.


<img src="./imgs/end64_1.png"  width="500"/>

	===> getters로 state의 값이 변경되었을 때 특정 상태를 계산할 수 있도록 한다.
	     getters의 첫 번째 인자로는 state가 온다.
	     getters는 기본적으로 return값을 가진다. ( computed라고 생각하면 된다. )

```javascript
isLogin(state) {
     state.username !== ‘ ’ 
}
// username이 빈문자열이 아닐 경우 login상태라는 함수.
```
          
<br/>

<img src="./imgs/end64_2.png"  width="500"/>

	===> getters를 작성한 후 브라우저에서 로그인을 하면 state의 username에 값이 들어오고, getters의 isLogin값이 true가 된 것을 볼 수 있다.
	===> 나중에 logout을 구현하게 되면 isLogin이 false로 바뀌는 것을 볼 수 있을 것이다.
<br/>

<img src="./imgs/end64_3.png"  width="500"/>

	===> AppHeader.vue에서 v-if, v-else를 사용하기 위해 두개의 <template>로 나눠준다.
	===> v-if=“$store.getters.isLogin” 처럼 getters의 값을 바로 접근해도 되지만,
		export default{}에서 getters의 값을 편하게 접근할 수 있도록 해도 된다.
<br/>

<img src="./imgs/end64_4.png"  width="500"/>

	===> computed에서 getters의 값을 불러와서 template에서는 깔끔하고 간결하게 작성을 했다.


<br/>

+ 64강 정리 :  로그인 상태에 따라서 버튼이 보이도록, 보이지 않도록 하는 분기처리를 해보았다.
	     getters와 template표현식의 computed를 이용해서 간결하게 표현하는 방법들에 대해 살펴보았다.






<h3> 65강 (로그 아웃 기능 구현) </h3>

<img src="./imgs/end65_1.png"  width="500"/>

	===> header의 로고를 클릭할 경우 ‘/‘ 즉, 기본 위치로 이동하게 되어있어, 로그인이 되어있는 상태에서 로그인페이지로 이동을 하게 된다.
	===> 따라서 로그인이 되어있는 상태에서 로고를 클릭할 경우 main으로 이동하도록 수정하는 것은 강의 후반부에서 진행할 것이다.
	===> 이번 강의에서는 로그아웃이 실행되도록 만들어 볼 것이다.
<img src="./imgs/end65_2.png"  width="500"/>

<br/>


<img src="./imgs/end65_3.png"  width="500"/>

	===> store(index.js)의 mutations에서 logout코드를 작성해준다.
	===> 이때는 setUsername( )과 다르게 state만 인자로 받는다. 
		어차피 username을 빈문자열로 초기화 할 것이기 때문이다.

<br/>


<img src="./imgs/end65_4.png"  width="500"/>

	===> AppHeader.vue에서 isUserLogin이라는 조건을 준 template 속에 Logout버튼을 생성해준다.(<a>태그)
	===> 앵커 태그의 기본 기능을 무력화시켜주기 위해 href=“javascript:;” 코드를 삽입해 주었다. 

	===> methods에 logout버튼을 클릭 시 실행 될 logoutUser( )함수를 작성해준다.



- 강의 후반부에서 router navigation gaurd들을  이용해서 어떻게하면 로그인 상태에서 header의 로고를 클릭했을 때 main에 머무를 수 있게 할지 알아볼 것이다.



<hr/>



<h2>9. 토큰을 이용한 API 인증 처리</h2>

<h3> 66강 (브랜치 전환 및 변경 사항 안내) </h3>

- 학습노트 조회페이지를 제작해보자.
- 스타일의 변화가 있으니까 $ git checkout 6_vuex -f 으로 코드를 바꿔주자.
    - ‘ -f ’ 옵션을 주면 기존 코드가 모두 덮어지게 되니 주의!! (그런데 나는 기존 코드 그대로 있고 추가로 생성이 되는거 같은데..?)

- public폴더의 index.html파일에 폰트와 아이콘 추가됨.
- AppHeader.vue파일에 로그인 한 유저의 이름이라던지 로그아웃의 스타일 약간 변경됨.
- MainPage.vue 변경됨.

<br/>

<h3> 67강 (학습 노트 조회 API를 호출하는 방법과 확인 사항) </h3>

- 학습 노트 조회하는 페이지는 Mainpage.vue이다.

<img src="./imgs/end67_1.png"  width="500"/>

	===> /posts 부분이 학습 노트 조회 부분.
	===> GET: 조회 /  POST: 생성 /  PUT: 변경 /  DELETE: 삭제
<br/>

- 로그인을 해서 사용자가 인증되었을 때만 token이 발행됨. ( 로그인 후 api의 인증값 이라고 볼 수 있다.)
- jwt: ‘json 웹 토큰’ 이라고 하는 토큰 형식. 가장 보편적으로 사용되는 웹토큰 유형 중 하나.


- Json web 토큰 문서 :
https://jwt.io/


<br/>

<h3> 68강 (로그인 토큰 값 확인) </h3>

- LoginForm.vue에서 submitForm()함수에서 콘솔로 data를 찍어보면, token값을 찾을 수 있다.

<br/>

<h3> 69강 (HTTP 헤더에 토큰 값을 실는 방법) </h3>

<img src="./imgs/end69_1.png"  width="500"/>

	===> api(index.js)에 headers속성을 추가하고 그 속에 Authorization 속성을 넣어준다. 
		  (test를 위해 test1234라는 값을 넣어줘봄)
	===> headers와 Authorization은 기본적으로 HTTP 헤더에 정의되어 있는 속성들이다.

	===> axios.create로 생성할 때 주입한 그 안의 옵션 속성들은 인스턴스로 http, get, post, but, delete등의 요청을 할 때마다 옵션 속성들이 정의 된 상태로 수행되는 것이라는 걸 알고 있자!!

<br/>

<img src="./imgs/end69_2.png"  width="500"/>

	===>  위에서 Authorization에 test1234라는 값을 배정한 후 브라우저에서 로그인 한 뒤에
              Network의 Headers의 Request Headers를 확인하면 ,
              Authorization에 우리가 임의로 배정한 test1234값이 들어가 있는 것을 확인할 수 있다.



<br/>





<h3> 70강 (스토어를 이용한 토큰 저장 및 활용) </h3>

- token값을 header에 실어보자.

<img src="./imgs/end70_1.png"  width="500"/>

	===> store(index.js)에서 state 속에 token을 생성해주고, 
             state속 token에 값을 넘겨줄 수 있도록 mutations에 setToken(){}함수를 만들어 준다.

<br/>

<img src="./imgs/end70_2.png"  width="500"/>

	===> token값을 store에 넘겨줄 수 있도록 LoginForm.vue에서 this.$store.commit(‘setToken’, data.token);을 작성해 준다.

<br/>

<img src="./imgs/end70_3.png"  width="500"/>

	===> 로그인 후, Vue를 살펴보면 token값이 들어온 것을 확인할 수 있다.
<br/>

<img src="./imgs/end70_4.png"  width="500"/>

	===> token값을 api로 연결시켜주기 위해, api(index.js)에서 Authorization에 store.state.token을 연결해준다.


<br/>



<h3> 71강 (저장된 토큰 값을 이용한 API 요청 및 의도치 않은 동작 확인) </h3>

- api함수가 정의되어 있는 index.js파일에서 sotre의 index.js파일에 접근하기 위해서는 import store를 해주어야 한다. 
- store의 index.js파일이 export default되어있기 때문이다.

<img src="./imgs/end71.png"  width="500"/>

<br/><br/>

	===> 강의에서는 이렇게까지 했을 때,(70강, 71강처럼) 
	login을 하고 Network를 확인하면 Request Header에 token값이 들어오지 않을 수 밖에 없다고 다음강의에서 그 해결방법을 알아볼거라는데,
	나는 token값이 잘 들어와지는데……????????뭐지……????? 일단 다음강의 들어보자…….

<br/>


<h3> 72강 (문제가 되는 동작 분석 및 해결 방향 안내) </h3>

- token 값이 비어있는 이유는, LoginForm.vue에서 loginUser()를 실행시키기 전에 이미 api(index.js)의 Authorization이 정의되어 있으므로 login한 유저의 정보가 전달되기도 전에 실행 된 비어있는 token값이 들어가기 때문이다.

- vue에서는 자동으로 추적해서 값이 바뀔때 알아서 추적해서 수정해주는 기능이 있지만, javascript인 경우라면 알아서 수정을 해주는 기능이 없기 때문에 에러가 발생할 것이다.

- 이런 문제는 ‘인터셉터’를 사용해서 해결할 수 있다.

<br/>

<h3> 73강 (액시오스 인터셉터 소개) </h3>

- token값을 header에 잘 싣기 위한 api들을 살펴보자. 해결방법을 살펴보자.

- Interceptors(인터셉터) : 서버로 요청을 보내는 것과 서버에서 받은 요청을 화면단(컴포넌트)에서 처리하기 전에 추가 로직을 넣을 수 있는 기능. 단어 그대로 ‘가로채기’인 것이다.


- 액시오스 인터셉터 문서 :
https://github.com/axios/axios#interceptors


<br/>


<h3> 74강 (액시오스 인터셉터 모듈화 및 인스턴스에 연결하는 방법) </h3>

- 인터셉터를 api(index.js)에 넣어보자.

<img src="./imgs/end74_1.png"  width="500"/>

	===> 73강에서 인터셉터 문서 링크로 들어가서 복사한 후 api(index.js)에 붙여넣어 준다.
	===> 붙여넣은 후 axios.interceptors~~의 axios를 instance로 바꿔줘야 한다.
	     그 이유는, 처음 프로젝트를 생성했을 때 api요청을 axios.post(‘/http://localhost~~')로 요청했었지만, 
	     지금은 .env를 이용해서 instance를 만들어서 api를 요청하고 있기 때문이다.

	===> api의 index.js에 인터셉터 코드를 넣으니 한눈에 코드들을 보기에 복잡해졌다. 
	===> 따라서, api에 common 폴더를 새로 생성하고, 그 안에 interceptors.js파일을 새로 만들어서 인터셉트 코드를 넣어주자.
	===> 코드를 그냥 넣으면 산만하니까, function setInterceptors(){}함수를 생성해서 그 안에 넣어주자.

<br/>

<img src="./imgs/end74_2.png"  width="500"/>

	===> interceptors.js에 인터셉트 코드를 옮긴 모습.
	===> function setInterceptors() {}앞에 export를 붙여줘서 api(index.js)에서 받을 수 있도록 해준다.
	===> api(index.js)에서는 import로 setInterceptors를 가져와야 한다.

<br/>

<img src="./imgs/end74_3.png"  width="500"/>

	===> api(index.js)에서 import로 setInterceptors를 받은 후 instance아래에서 setInterceptors를 실행시켜준다. 
	===> 실행시키면서 instance를 인자로 보내주고, interceptors.js의 setInterceptors함수에서 인자로 instance를 받을 수 있도록 추가해준다.
	===> interceptors.js의 setInterceptors함수에서 instance를 받아서 interceptors들을 설정한 후 
	     마지막에 다시 리턴되도록 해당 함수 마지막에 return instance;를 추가해준다. 
	===> 그러면 api(index.js)에서 실행한 setInterceptors()의 값으로 수정된 instance값이 나올 것이다.
<br/>

<img src="./imgs/end74_4.png"   width="500"/>

	===> setInterceptors()을 통해 산출된 instance를 사용하기 위해 const newInstance = setInterceptors(instance);를 선언해 
	     아래의 registerUser()와 loginUser()에 instance대신 newInstance라고 넣어줘도 된다.
	===> 하지만 이러면 새로운 이름이 늘어나고 정신없어 보이니까, 함수를 새로 만들어서 
	     그 안에 instance속성들과 setInterceptors(instance);를 넣어주자.
<br/>

<img src="./imgs/end74_5.png"  width="500"/>

	===> 이렇게 함수로 생성해준다.
	===> 함수실행을 시키고 그 실행문을 instance라고 선언해줘야한다.
             그 이유는, 함수로 바꾸면서 instance라는 변수는 createInstance()함수 속에서만 존재하게 되었기 때문에, 
	     함수 속에서 return으로 setInterceptors(instance); 를 통해 새로 값이 정해진 instance를 내보내 주고, 
	     createInstance();실행문에 instance라고 선언해주는 것이다

<br/><br/>

	=====> 즉, 이렇게 수정해서 나온 instance는 
	       'axios.create를 이용한 공통설정’과  ‘interceptors까지 설정된  instance’를 모두 포함하게 되는 것이다.

<br/>

- 74강 요약 : 
	- 인터셉터 모듈화
	- 다음 강의에서는 인터셉터에 token을 어떻게 씌울 수 있는 지 배워보자.





<br/>




<h3> 75강 (인터셉터를 이용한 HTTP 헤더 설정) </h3>

- 일단 api(index.js)에서 작성한 headers와 import store는 지워주자. 임시로 작성했던 거니까.

- 매 api실행마다 token값을 싣어서 보내주면 된다.
- 먼저, config를 찍어서 어떤 정보가 나오는지 확인해 보자.

<br/>

<img src="./imgs/end75_1.png"  width="500"/>

	===> interceptors에서 config를 콘솔로 찍어본다.

<br/>

<img src="./imgs/end75_2.png"  width="500"/>

	===> 위의 코드 작성 후 브라우저에서 로그인을 해보면, 콘솔에 정보가 찍힌다.
	===> 이 중, headers에 Authorization을 넣으면 되겠다!!
<br/>

<img src="./imgs/end75_3.png" width="500"/>

	===> config의 header에 Authorization을 넣어서 token값을 연결해준다.

<br/><br/>

	===> 나는 로그인하면 Network에서 Authorization값이 비어있게 나오네!!!!! 
	    오히려 71강에서 했을 떄에 token값이 나오고 지금은 token값이 비어서 나온다….ㅠㅠㅠㅠㅠㅠㅠㅠㅠ 왜이래…..
	===> 아니다. 
	     새로고침 후 로그인하면 token값이 비어나오고, 
	     새로고침하지 않고 다시 로그인하면 token값이 나온다.

	===> https://www.inflearn.com/questions/26383 에서 답변을 보면, 수업 후반부에서 이런 문제를 수정하는듯?



<hr/>




<h2>10. 학습 노트 데이터 조회</h2>

<h3> 76강 (학습 노트 조회 API 함수 구현) </h3>

- 메인페이지를 개발해 보자.
- 게시물을 조회하는 API를 실제 MainPage에 연결해서 뿌리는 것까지 해봄.

<img src="./imgs/end76_1.png"  width="500"/>

	===> api(index.js)에서 학습노트 데이터 조회용 api작성 후 export해줌.
<br/>

<img src="./imgs/end76_2.png"  width="500"/>

	===> MainPage.vue에서 학습노트데이터 조회용 api를 구현.



<br/>




<h3> 77강 (학습 노트 목록 표시를 위한 데이터 바인딩) </h3>

- 학습 노트를 조회해 와서 화면에 뿌려보자.

<img src="./imgs/end77.png"  width="500"/>

	===> 76강에서 response라고 선언한 것을 바로 { data }라고 작성함으로써 간단하게 response안에 들은 data를 가져올 수 있다.

<br/>



<h3> 78강 (학습 노트 생성 및 생성된 데이터 확인) </h3>

- 데이터 학습노트를 생성하는 페이지를 만들지는 않았지만, swagger를 이용해서 임시 데이터를 넣어보고 확인을 해 볼 수 있다.

<img src="./imgs/end78_1.png"  width="500"/>

	===> 스웨거에서 임시 post를 생성해보았더니 401오류가 발생했다.
	===> 스웨서에서 login을 하고 받은 token값을 복사해 authorize에서 넣어준 뒤, 다시 post를 생성해보니 201코드가 뜨면서 성공했다.
<br/>

<img src="./imgs/end78_2.png"  width="500"/>

	===> 브라우저에서 다시 로그인을 하면 스웨거에서 생성한 post의 title을 볼 수 있다.(77강에서 마크업 해줬으니까)



<br/>



<h3> 79강 (학습 노트 목록 마크업 및 스타일링) </h3>

- 이번 강의는 학습노트 마크업과 스타일링 해보자.

<img src="./imgs/end79_1.png"  width="500"/>

	===> 마크업 후 브라우저에서 확인해보면 title, contents, time이 나타나는 것을 볼 수 있다.

<br/>


<h3> 80강 (학습 노트 목록 아이템 컴포넌트화) </h3>

<img src="./imgs/end80_1.png"  width="500"/>

	===> post내용을 위한 컴포넌트를 따로 제작해주자.

	===> components폴더에서 posts폴더를 생성 후, PostListItem.vue파일을 새롭게 만들어준다.
<br/>

<img src="./imgs/end80_2.png"  width="500"/>

	===> MainPage.vue파일에서 마크업했던 post내용들은 주석처리 해준 후, 별도로 만든 post컴포넌트를 import해온다.
	===> <PostListItem>의 각각의 li들은 별도로 만든 post컴포넌트에 있게된다.
		이렇게 했을 때,  MainPage에서 props를 하나 내리면 된다.
	===> props는 :postItem=“postItem”로 작성한다. 
		- :postItem은 props로 값을 받기위해 설정한 이름. 
		- 그 뒤의 “postItem”은 <PostListItem>에서 v-for로 돌릴 때 정한 이름.
		- postItem이라는 props를 <PostListItem>의 컴포넌트(= PostListItem.vue)에서 받으면 된다.

<br/>

<img src="./imgs/end80_3.png"  width="500"/>

	===> PostListItem.vue에서 받은 상태.

	===> props는 최대한 자세하게 정의해줘야 한다!!!
	===> type은 기본으로 넘어오는게 object형태이기 때문에 object로 해준다.
	===> reuqired를 true로 주어서 값이 넘어오는지 확인을 하는 것이다.
	===> 값이 넘어오지 않았을 경우 validation에 의해서 error이 뜰 것이다.
	
<br/>

	===> 이렇게 list item의 컴포넌트화 진행 후, 브라우저에서 확인하니 401에러가 발생하네….! 강의속 선생님화면에서는 잘 작동되는데….!
	===> 아니다!!! 다시 로그인하고 보니 제대로 작동한다!!!!


<br/>


<h3> 81강 (데이터 로딩 상태 표시) </h3>

<img src="./imgs/end81_1.png"  width="500"/>

	===> isLoading이라는 데이터를 생성 후 기본값으로 false를 준다.
	===> data가 로딩되기 전에는 값을 true로 바꿔주고, data가 불러와진 뒤에는 원래대로 값을 false로 되돌린다.
<br/>

<img src="./imgs/end81_2.png"  width="500"/>

	===> 로딩용 div를 생성하고 v-if를 준다.
	===> data를 보여주는 태그에는 v-else를 준다.
<br/>

<img src="./imgs/end81_3.png"  width="500"/>

	===> data가 불러와지기 전에 화면에 Loading…이라는 문구가 뜨는 것을 확인할 수 있다.

<br/>




<h3> 82강 (로딩 상태를 표시하는 스피너 등록) </h3>

<img src="./imgs/end82.png"  width="500"/>

	===> components - common - LoadingSpinner.vue를 이용해서 로딩화면을 이미지화해보자.



<hr/>


<h2>11. 브라우저 저장소를 이용한 인증 값 관리</h2>

<h3> 83강 (브랜치 전환 안내) </h3>

- 학습 노트를 조회하기 위해서 데이터를 생성하는 페이지를 만들어보자.
- $ git checkout 7_til-list -f 를 입력해서 브랜치 전환.


<br/>


<h3> 84강 (화면 새로 고침 했을 때의 문제점 분석) </h3>

<img src="./imgs/end84.png"  width="500"/>

- 로그인 후 학습노트가 조회되는 화면에서 새로고침을 하면 401에러가 발생하고, 에러에 대한 처리가 되지 않는 상태이다.
	- 로그인을 했을 때 받을 수 있는 Authorization값이 비어있기 때문이다.
	-  Authorization값(token)을 자바스크립트 레벨 즉, vue개발자 도구에서 볼 수 있는 state(store)에만 저장을 해놨기 때문이다.
	- 이 상황에서 새로고침하게 되면, store의 내용이 사라지기 때문에 새로고침시 에러가 발생하게 되는 것이다.

- 다음 강의에서 이 에러를 ‘쿠키’에 담는 방법으로 해결해보자.


<br/>


<h3> 85강 (로그인 인증 값 브라우저 저장소에 저장 후 확인) </h3>

- LoginForm에서 로그인 시 브라우저 저장소를 이용해서 token값을 저장해주자. 그러면 새로고침을 하더라도, 브라우저 저장소에서 token값을 가져와서 사용할 수 있다.

<img src="./imgs/end85_1.png"  width="500"/>

	===> utils폴더의 cookies.js파일 속 함수들을 이용할 것이다.
<br/>

<img src="./imgs/end85_2.png"  width="500"/>

	===> cookied의 함수를 import해준다.
	===> { }를 이용해서 cookies파일 속의 함수를 바로 불러온 것.
<br/>

<img src="./imgs/end85_3.png"  width="500"/>

```javascript
   // ===> 
	saveAuthToCookie(data.token);
	saveUserToCookie(data.user.username);
   // 으로 import한 함수를 실행하고, 브라우저 저장소에 저장할 내용을 인자로 준다.
```

<br/>

<img src="./imgs/end85_4.png"  width="500"/>

	===> 브라우저 Application의 Cookies를 확인하면 저장소에 저장된 것을 볼 수 있다.
<br/>

===> 다음시간에는 새로고침 했을 때 저장소의 값을 가져와서 담아주는 것을 진행해보자.


<br/>


<h3> 86강 (브라우저 저장소로 인증 값 보존) </h3>

- 저장소에 저장된 값을 vue의 store로 연결해줘보자.

<img src="./imgs/end86_1.png"  width="500"/>

	===> store(index.js)에서 cookies 속 함수를 이용해 저장소에 저장된 내용을 불러와준다.
	===> getUserFromCookie() || ‘ ’    
	     : getUserFromCookie()를 통해 가져온 값을 주거나, 값이 없으면 빈 문자열을 준다는 의미.

<br/>

<img src="./imgs/end86_2.png"  width="500"/>

	===> 이제 새로고침을 해도 오류가 나지 않는다.

	===> 브라우저의 vue의 store패널을 보면 token과 username에 값이 보존되고 있음을 알 수 있다.

<br/>




<h3> 87강 (actions 속성을 이용한 로그인 기능 구현과 비동기 처리시 유의할 점) </h3>

- LoginForm.vue에서 login 후 처리 로직이 굉장히 복잡해진 것을 리팩토링해보자.



<img src="./imgs/end87_1.png"  width="500"/>

	===> 리팩토링 전의 복잡한 상태.

	===> 컴포넌트에 비즈니스 로직이 너무 많이 노출되지 않도록 다른 파일에 옮겨주자.

	===> store(index.js)의 mutations아래에 actions를 생성해서 옮긴다.
<br/>

<img src="./imgs/end87_2.png"  width="500"/>

	===> store의 index.js파일의 actions로 login로직을 옮겨줬다.

	    ( 사진 속 코드와 주석을 잘 읽어보자. )

<br/>

<img src="./imgs/end87_3.png"  width="500"/>

	===> 옮긴 login로직이 있었던 LoginForm.vue에서 기존의 로직을 주석처리(삭제)해준다.

	===> store의 LOGIN함수로 userData를 인자로 넘겨주는 dispatch를 작성해준다.
	===> 이때 await를 붙이는 이유는 사진 속 주석을 잘 읽어보자.
	===> await 처리를 하지 않을 경우, login이 되기 전에 /main에 진입하게되어 error가 뜨게 될 것이다.
	     (브라우저의 Cookie를 비워주고 새로고침 후 login해보면 된다)


	===> import부분도 store로 로직들을 넘겼기 때문에 주석처리(삭제)해준다.
<br/>

<hr/>



<h2>12. 학습 노트 데이터 생성</h2>

<h3> 88강 (학습 노트 등록 페이지로 이동하기 위한 버튼 생성 및 아이콘 적용) </h3>

- MainPage.vue에서 add라우터 생성.

<img src="./imgs/end88.png"  width="500"/>

	===> 이전에 index.html에 불러왔던 아이오닉 아이콘 이용.
<br/>

- 아이오닉 아이콘 사이트 :
https://ionicons.com/usage/

<br/>

<h3> 89강 (학습 노트 등록 페이지 라우터 생성 및 확인) </h3>

- PostAddPage.vue파일 생성.(views폴더 속에)
- router에서도 연결 path만들어주기.

<br/>

<h3> 90강 (학습 노트 등록 폼 마크업 및 스타일링) </h3>

- components폴더의 common 속에 PostAddForm.vue파일 생성 후 PostAddPage.vue에 import해준다.
- common.css를 기준으로 스타일도 설정해준다.

<br/>

<h3> 91강 (학습 노트 등록 폼의 데이터 바인딩 및 이벤트 연결) </h3>

- Input, textarea의 입력내용을 v-model을 이용해 데이터 바인딩 해준다.
- form은 @submit.prevent를 감지할 떄 submitForm()함수를 실행하도록 해준다.

<img src="./imgs/end91_1.png"  width="500"/>
<img src="./imgs/end91_2.png"  width="500"/>

	===> 입력한 내용을 vue개발자에서 확인할 수 있다.
<br/>

<h3> 92강 (학습 노트 등록 API 구현 및 동작 확인) </h3>

- api에 학습노트 생성 API를 만들어준다.

<img src="./imgs/end92_1.png"  width="500"/>

	===> 생성 후, export까지 해주자.
<br/>

<img src="./imgs/end92_2.png"  width="500"/>

	===> api를 import해온 후, submitForm에서 실행시켜준다.(async await 이용)
	===> createPost()를 실행시킬 때 넘겨줄 인자를 별도의 이름으로 만들지 않고, createPost()함수 안에서 선언해주었다.
	===> 인자가 잘 들어가는지 console.log()를 이용해 확인해보자.
<br/>

<img src="./imgs/end92_3.png"  width="500"/>

	===> title과 contents를 생성 후 create버튼을 클릭하면, Network에서 생성된 내용이 찍히는 것을 확인할 수 있다.
<br/>



<h3> 93강 (학습 노트 등록 에러 처리) </h3>

- error가 날 경우의 처리를 위해 ```try{} catch() {}```를 이용하자.

<img src="./imgs/end93_1.png"  width="500"/>

	===> 같은 title로 생성을 해보면 error가 날 것이다.
	===> 400에러가 발생.
	===> swagger를 확인해보면 400에러가 무슨 에러인지 알 수 있다.
<br/>

- catch(error) { } 에서 console에 보이도록 한 error를 더 자세하게 찍어보자.
```javascript
console.log(error.response.data.message);
```

<img src="./imgs/end93_2.png"  width="500"/>

- 화면에서도 보이도록 에러메시지를 띄워줄 ```<p>```태그 생성 후, data에 logMessage를 생성해 ```<p>```태그 속에 넣어주자.

<img src="./imgs/end93_3.png"  width="200"/>



<br/>



<h3> 94강 (학습 노트 본문 길이 유효성 검사 기능 구현) </h3>

- contents의 길이 유효성 검사를 해보자.
- ```<textarea>```태그에서 5줄로 맞춰놨었기 때문에 대략 200자 정도를 입력할 수 있을 것이다.
	
  200자를 넘을 경우 너무 길다는 표시를 추가하는 validation을 해보자.



<img src="./imgs/end94_1.png"  width="500"/>

	===> computed에서 글자수를 확인하는 함수를 생성해준다.
	===> 200자가 넘을 경우 경고 메세지가 뜨도록 <p>태그를 생성해준다.
	===> 해당 <p>태그에 v-if로 computed에 생성한 함수로 조건을 준다.

<br/>


<img src="./imgs/end94_2.png"  width="200"/>

	===> contents의 글자수가 200자를 넘기면 아래에 경고 문구가 생기는 것을 볼 수 있다.


<hr/>


<h2>13. 중간 정리</h2>

<h3> 95강 (중간 리뷰) </h3>

<h4> <지금까지 진행한 내용을 살펴보겠습니다 😄> </h4>

1. 개발환경 설정
- 개발 툴 및 필요 프로그램 설치
- API 서버 프로젝트 클론

2. Vue CLI 프로젝트 생성
- Prettier
- ESLint
- jsconfig

3. 뷰 라우터 및 컴포넌트 설계
- ```<router-link>```
- ```<router-view>```
- ```mode: history```와 서버 배포시 주의 사항
- 코드 스플리팅 ```component: () => import(‘경로')```
	- 웹팩의 코드 스플리팅을 사용하는 것이다.(lazy loading)
	- router에서 코드 스플리팅을 사용할 때는, 특정 페이지로 이동할 때 그때 페이지를 당겨오는 것.

4. 회원 가입 페이지 개발
- 사용자 폼 처리
- ```async & await```
- ```axios```
- swagger API 문서 보는 방법

5. 실무 환경 구성
- ```axios.create()```
- env 파일 설정 방법
- Vue CLI 버전 3 이상에서의 env 파일 규칙

6. 로그인 페이지 개발
- 사용자 폼 처리 기능 구현
- async & await 에러 처리 방법
- 사용자 폼 유효성 검사

7. 로그인 상태 관리
- 뷰엑스를 이용한 사용자 아이디 관리
- ```this.$router.push(‘/main')```
	- 프로그래메틱 네비게이션 - 자바스크립트 레벨에서 라우터를 어떻게 움직일 수 있는지.

8. API 인증 처리를 위한 토큰 관리
- JSON Web Token
- Authorization 토큰 값으로 API 인증을 받는 방법
- ```axios.interceptors```

9. 학습 노트 데이터 조회
- 학습 노트 목록 표시 기능 구현
- 목록 아이템 컴포넌트화
- 스피너를 이용한 데이터 로딩 상태 표시

10. 브라우저 저장소를 이용한 인증 값 관리
- 쿠키를 이용한 로그인 인증 값 저장
- actions를 이용한 컴포넌트 로직 정리

11. 학습 노트 데이터 생성
- 학습 노트 생성 기능 구현
- 학습 노트 본문 길이 유효성 검사

<br/>

- 중간리뷰 내용:
https://github.com/joshua1988/vue-til/blob/9_review/review.md


<br/>


<h3> 96강 (이후 강의 내용 요약) </h3>

<h4> <프로젝트 완성을 위해 더 해야될 일을 알아볼까요? 😄> </h4>

- 데이터 성격 별로 API 함수 모듈화
- 학습 노트 삭제 기능
- 날짜 형식 포맷팅 ```filter```
- 학습 노트 데이터 수정
- 라우터 심화 
	- 인증되지 않은 사용자들이 특정 라우터로 url을 입력해서 들어가는 것을 방지하는 부분 살펴볼 것이다.
- 프런트엔드 테스팅
	- 구현한 기능들에 대해서 코드로 보증할 수 있는지, 동작을 증명할 수 있는지 테스팅 해 볼것이다.




<br/>






<h2>14. API 함수 모듈화</h2>

<h3> 97강 (API 모듈화를 위한 현재 구조 분석) </h3>

- git checkout 9_reviews -f
- 현재 api폴더의 index.js에 생성해 놓은 많은 api들이 있다. 

  이런 식으로 하나의 파일에서 모든 것을 관리하게 되면, 이후에 실제 애플리케이션을 제작하게 될 경우 몇백줄의 api가 생기게 될 것이다. 
- 따라서 es6의 모듈화 혹은 instance들을 조합해서 데이터 성격별로 파일을 쪼갤 수 있다. 

<br/>

<h3> 98강 (인스턴스 생성 함수 분할) </h3>

************강의 다시보자 이해가 잘 안된다!!!!**************

- 같은 단어 선택 단축키 
	- Mac : command + ‘d’
	- win : ctrl + ‘d’


- api모듈화 작업을 진행해보자.
- authorization token이 필요한 함수와 필요 없는 함수로 분리해 보자.
<br/>

- 그동안 ‘엑시오스 초기화함수’로 ‘회원가입 함수’와 ‘로그인 함수’까지 같이 사용하고 있던 것을 분리하기.
	- ‘회원가입’과 ‘로그인’은 authorization값이 없어도 되기 때문.



<img src="./imgs/end98_1.png" width="500" />

	===> 기본 url만 생성해주는 함수를 따로 만들어주자.

	===> 기존에 생성했던 엑시오스 초기화 함수의 이름을 중복되지 않게 수정해주고, url을 인자로 넣어준다.
	===> 기존의 엑시오스 초기화 함수 속 baseURL역시 수정해준다.

	===> posts 변수를 선언해준다. (기본 url이 항상 posts가 된 변수)

<br/>

<img src="./imgs/end98_2.png" width="200" />

	===> 각 함수마다 들어가는 last url이 있다.
             (swagger에서 볼 수 있음)
	===> 이에 따라서 각 회원가입, 로그인, 학습노트 관련 api들에 입력해줬었다.

	===> 이를 분리해주자.(파일로) - 다음강의.(99강)


<br/>



<h3> 99강 ([실습 안내] 계정 관련 API 분할 및 실습 안내) </h3>

- api폴더에 auth.js파일 새로 생성.
	- authorization token값이 필요한 함수만 넣어줄 파일이다.


<img src="./imgs/end99_1.png" width="500" />

	===> api - index.js에 있던 회원가입, 로그인 함수를 가져온다.
	===> 두 함수에 필요한 instance를 import해준다.
	===> 회원가입, 로그인 함수를 export해준다.

	===> index.js파일에 있던 로그인, 회원가입 함수는 삭제해주고, export에서도 지워준다.
	===> 단, index.js파일에 있는 instance변수 선언은 export를 앞에 붙여줘서 auth.js에서 받을 수 있게 해준다.

<br/>

- index.js의 posts도 별도의 파일을 생성해보자.



<br/>



<h3> 100강 ([실습 답안] API 함수 모듈화 정리) </h3>

<img src="./imgs/end100_1.png" width="500" />

	===> index.js에 있던 학습 노트 데이터 관련 함수를 옮겨준다.

	===> 학습노트 관련 함수에 instance 대신 posts를 사용해준다. 
	===> posts를 index.js에서 import해온다.
	===> index.js에서 posts변수를 export해줘야 한다.
	===> 미리 모듈화를 했기 때문에, ‘post’를 ‘/‘로 바꿔준다.

	===> 학습노트 관련 함수들을 export해준다.

	===> index.js에 있던 export는 이제 지워도 된다.  
		  ( export할게 없기 때문. )

<br/>


- api폴더의 index.js에는 setup과 관련된 함수만 남게 된다.
- api폴더의 posts.js에는 학습노트 데이터 관련된 함수, auth.js는 회원가입, 로그인 관련 함수가 들어가게 된다.

<br/>

<img src="./imgs/end100_2.png" width="500" />

	===> api분할 정리를 해주면, 경로를 수정해줘야한다.
             (파일들의 경로가 바뀌어 에러가 발생!)

<br/>

- SignupFrom.vue
<img src="./imgs/end100_3.png" width="300" />

<br/>

- LoginForm.vue은 store를 이용했기에, store에서 수정.
<img src="./imgs/end100_4.png" width="300" />

<br/>

- MainPage.vue의 fetchPosts
<img src="./imgs/end100_5.png" width="300" />

<br/>

- PostAddForm.vue
<img src="./imgs/end100_6.png" width="300" />




<br/>
<hr/>



<h2>15. 학습 노트 데이터 삭제</h2>

<h3> 101강 (삭제 기능 마크업 및 이벤트 연결) </h3>

- $ git checkout 10_api-modules -f
- PostListItem.vue에서 수정, 삭제버튼을 ```<i>```태그로 생성해주자.

<img src="./imgs/end101_1.png" width="500" />
<img src="./imgs/end101_2.png" width="200" />

<br/>


<h3> 102강 (삭제 API 함수 및 기능 구현) </h3>

- swagger에서 삭제 기능 api를 확인하고, 코드로 구현해보자.

<img src="./imgs/end102_1.png" width="500" />

	===> 게시물 삭제를 위해서는 해당 게시물의 특정한 id가 필요하다.

<br/>

<img src="./imgs/end102_2.png" width="500" />

	===> vue개발자 도구에서 한 게시물의 정보를 살펴보면 보이는 _id가 해당 게시물의 특정한 id이다.

<br/>

<img src="./imgs/end100_3.png" width="300" />

	===> api의 posts.js에서 삭제 api를 생성 후, export까지 해준다.
	===> export한 api를 PostListItem.vue에서 import한다.

<br/>

<img src="./imgs/end100_4.png" width="300" />

	===> PostListItem.vue에서 import하고, deleteItem 메서드에 import한 deletePost를 넣어준다.
	===> deletePost의 인자로 게시물의 id를 보내준다.
<br/>

- 여기까지 하면, 삭제버튼 클릭 후 새로고침을 하면 해당 게시물이 삭제된 것을 볼 수 있다.
- 아직 바로 삭제되도록 연결되지는 않은 상태.

<br/>


<h3> 103강 (삭제 기능 UX 개선) </h3>

- 삭제 된 내용을 화면에 찍히도록 해주자.
<br/>

- PostListItem.vue에서 게시물이 삭제되었다는 신호를 MainPage.vue로 올려보내준다.
- MainPage.vue의 <PostListItem>태그에 게시물이 삭제되었다는 신호를 감지할 수 있도록 해준다.



<img src="./imgs/end103_1.png" width="500" />

	===> 삭제되었다는 신호를 ‘refresh’라는 말로 보내줌.
<br/>

<img src="./imgs/end103_2.png" width="500" />

	===> refresh라는 신호를 받으면 다시한번 fetchData함수를 실행하게 한다.
	===> 가장 최신의 데이터를 받아 화면에 보이도록 하는 것.
<br/>

<img src="./imgs/end103_3.png" width="500" />

	===> 삭제 버튼을 누르면 알림창이 뜨도록 해준다.
	===> 사용자가 잘못 삭제하지 않도록 알림창을 띄워서 동의, 비동의하게 해주는 것.

<br/>


- 데이터를 새롭게 생성했을 때, 아직은 MainPage로 바로 이동하지 않는다. 
  (데이터가 생성되었음을 개발자 화면에서만 확인할 수 있을 뿐)
- MainPage.vue로 바로 이동할 수 있도록 다음 강의에서 다뤄보자.



<br/>



<h3> 104강 (학습 노트 생성 기능 관련 UX 수정) </h3>

<img src="./imgs/end104.png" width="500" />

	===> PostAddForm.vue에서 생성 함수에 
	     this.$router.push(‘/main’);
	     을 작성해서 이동 라우터를 넣어준다.

<br/>
<hr/>

<h2>16. 학습 노트 데이터 수정</h2>

<h3> 105강 (학습 노트 수정 아이콘 이벤트 연결 및 구현 방향 안내 ) </h3>

- $ git checkout 11_til-delete -f
- edit은 버튼을 클릭했을 때 바로 수정이 아닌, 수정 페이지로 이동하게 만들 것이다.

- 다음강의에서 다이나믹 라우트 매칭을 이용해 postEditPage로 넘어가도록 해볼 것이다.
- ‘다이나믹 라우트 매칭’은 이전 강의를 들었으면 배웠을 거라는데 나 왜 기억이 안나지…?

<img src="./imgs/end105.png" width="500" />

	===> edit버튼에 클릭하면 routeEditPage함수가 실행되도록 신호를 준다.
	===> routeEditPage()함수에서 router에 정보를 줘서 페이지 이동을 할 수 있게 해준다.
	===> 클릭한 게시물의 id를 넘겨주는 것.
<br/>


<h3> 106강 (학습 노트 수정 페이지 생성 및 라우터 연결) </h3>

- Dynamic Route Matching : 라우터에 path를 정의할 때 파라미터로 id를 받아서 해당 페이지로 진입했을 때 그 id로 접근할 수 있는 형태.
- 페이지를 접근할 때 /:id 형태로 접근한다.

<img src="./imgs/end106_1.png" width="300" />

- views폴더에 PostEditPage.vue파일을 생성한다. 이 파일은 PostListItem.vue파일과 구조가 같게 만들면 된다.
- components폴더의 posts폴더에도 PostEditForm.vue파일을 생성해 준다.
- PostEditPage에서 PostEditForm을 import해준다.

<br/>


<h3> 107강 (학습 노트 수정 페이지 마크업 및 라우터 파라미터 연결) </h3>

- edit페이지로 넘어갔을 때 실제로 페이지를 수정할 수 있도록 간단한 마크업을 해보자.
- PostAddForm과 비슷하니 여기의 마크업을 복사해온 뒤 손보자.(add, submit글자들을 edit로 체인지)
- PostAddForm의 script 중 data와 computed를 복사하자.
- methods에 submitForm()함수 새로 생성해주자.

<br/>
- edit버튼을 눌렀을 때, 해당 게시물의 id를 editPage로 넘겨서 넘겨진 id에 해당하는 데이터를 불러와야 한다.

<img src="./imgs/end107_1.png" width="500" />

	===> edit할 게시물의 id를 넘겨준다.
<br/>

<img src="./imgs/end107_2.png" width="500" />

	===> 수정하려는 게시물의 id가 넘어온 것을 확인할 수 있다.
<br/>


<h3> 108강 (학습 노트 수정을 위한 특정 게시물 조회 기능 구현) </h3>

- 수정페이지로 넘어갔을 때 왜 데이터를 받아와야 하는가?
	- 기본적으로 웹서비스는 동시성을 보장해야 한다. 
	   즉, 한 id로 여러사람이 조작을 했을 때, 조작된 정보들을 최신의 정보로 반영해줘야 한다는 것이다.
	- 이렇게 해야 이후에 있을 오류들을 수정하기에도 좋다.

<img src="./imgs/end108_1.png" width="500" />

	===> swagger에서 확인할 수 있는 ‘특정 게시물을 조회하는 API’.
<br/>

<img src="./imgs/end108_2.png" width="500" />

	===> 학습 노트를 조회하는 API를 생성한다.
             학습 노트 데이터 목록을 조회하는 API와 다르다.
<br/>

<img src="./imgs/end108_3.png" width="500" />

	===> api인 fetchPost를 import해온다.
	===> create에서 수정하려는 게시물의 id를 가져와 data내용들까지 화면에 넣어준다.
<br/>

<img src="./imgs/end108_4.png" width="500" />

	===> 그 결과, 화면에서 수정하려는 게시물의 내용이 화면에 나타난 것을 확인할 수 있다.


<br/>


<h3> 109강 (학습 노트 수정 API 및 기능 구현) </h3>

<img src="./imgs/end109_1.png" width="500" />

	===> swagger에서 ‘특정 게시물을 수정하는 API’를 확인할 수 있다.
	===> id는 이미 가져왔기 때문에 넣을 필요가 없다.
	===> title, contents만 넣어주면 된다.
<br/>

<img src="./imgs/end109_2.png" width="500" />

	===> 데이터 수정 api를 작성하고 export해준다
	===> id와 수정할 data를 인자로 받는다.
<br/>

<img src="./imgs/end109_3.png" width="500" />

	===> editPost를 import해온다.
	===> methods의 submitForm역시 asyncs await를 이용해준다.
	===> 수정할 게시물의 id와 data를 전달해준다.

	===> 템플릿을 PostAdd와 같이 작성해 놓았기 때문에, 이렇게 작성하면 edit버튼 클릭 시 수정된 내용이 들어가질 것이다.
<br/>

<img src="./imgs/end109_4.png" width="300" />

	===> 전송할 data를 try catch를 이용해서 넣어준다.
	===> 혹시라도 에러가 났을 때 에러를 확인하기 위함.

	===> 성공하면 /main으로 화면 이동시켜준다.

<br/>

- 이후 강의에서는 Toast라는 ui 어떤 컴포넌트를 이용해서 특정 액션이 일어났을 때, 팝업이 일어났다 감춰지는 기능도 구현해 볼 것이다.


- Toast Popup 코드는 이 소스를 참고하세요 :) :
https://github.com/joshua1988/vue-til/blob/complete/src/components/common/ToastPopup.vue


<br/>


<h2>17. 데이터 포맷팅</h2>

<h3> 110강 (뷰 필터 소개 및 적용) </h3>

- vue.js필터를 이용해서 게시물에 나오는 날짜, 시간을 나타내는 방식을 수정해 볼 것이다.
- $ git checkout 12_til_edit -f

<img src="./imgs/end110_1.png" width="500" />

	===> filters를 이용해서 formatDate함수를 생성해준다.
	===> 뷰 필터 안내 문서에서 볼 수 있듯이 태그에  | formatDate라고 입력해 주면, 브라우저에 시간표시가 바뀐 것을 볼 수 있다.
<br/>

<img src="./imgs/end110_2.png" width="300" />
<img src="./imgs/end110_3.png" width="300" />

     ===> 기존 시간표현이었던 첫번째 사진에서 두번째 사진처럼 시간표현이 바뀐다.

<br/>


- 뷰 필터 안내 문서 :
https://vuejs.org/v2/guide/filters.html#ad


<br/>


<h3> 111강 (전역 필터 소개 및 설정) </h3>

- 필터를 여러 컴포넌트에 적용할 수 있도록 바꿔보자.
- utils폴더의 filters.js를 이용하면 된다.(강의에서 만들어 놓은 것.)


<img src="./imgs/end111_1.png" width="400" />

	===> utils의 filters.js에 있는 formatDate함수를 Import해온다.
	===> Vue.filter()를 이용해서 전역필터로 작성해준다.


	===> 110강에서 PostListItem.vue의 지역 필터였던 filters의 formatDate()함수를 주석처리해주고 브라우저에서 확인해보면, 전역필터가 적용된 것을 확인할 수 있다.

<br/>


<h2>18. 라우터 심화</h2>

<h3> 112강 (라우터 네비게이션 가드 소개) </h3>

- 로그인을 하지 않아도 url에 라우터 링크( /main 등…)를 입력하면 넘어가지는 문제들을 해결해볼 것이다.
- $ git checkout 13_filter -f
<br/>

- 이전 강의들에서 네비게이션 가이드를 이용해 데이터를 먼저 호출하고 받아왔을 때만 로딩하도록 했었었다.
- 이제는 특정 url에 들어가는 것을 막도록 네비게이션 가이드를 적용해 볼 것이다.

<br/>

- 라우터 네비게이션 가드 문서 :
https://router.vuejs.org/guide/advanced/navigation-guards.html

- 라우터 네비게이션 가드 관련 영상(완벽 가이드 수강 권한 필요) :
https://www.inflearn.com/course/vue-js/lecture/17055



<br/>



<h3> 113강 (라우터 네비게이션 가드 기초 코드) </h3>

<img src="./imgs/end113_1.png" width="400" />

	===> 기존에 작성해놓은 routes의 index.js
	===> 네비게이션 가드를 사용하려면 약간의 수정이 필요하다.
<br/>

<img src="./imgs/end113_2.png" width="500" />

	===> new VueRouter를 router라고 선언해준 뒤, export해준다.
<br/>

<img src="./imgs/end113_3.png" width="500" />

	===> router변수에 담았던 인스턴스들을 beforeEach를 이용한다.
	===> 기본적으로 콜백함수를 이용한다. 
	     콜백에는 to, from, next가 들어간다.(각 성질은 위의 이미지에 적어놓았다)
<br/>

- to를 console에 찍어보면, 기본적으로 서버를 실행하고 들어온 main페이지(기본페이지)에서 index.js가 나타나는 것을 볼 수 있다.
- 하지만, next를 불러오지 않았기 때문에 기본적으로 라우터가 다음페이지로 넘어가지 않았다는 것을 vue개발자 화면에서 보면 <RouterView>의  functional로 확인할 수 있다.
- 그렇기 때문에 next();를 호출해줘야 다음 페이지로 이동할 수 있다. 중요!!!


<br/>


<h3> 114강 (페이지별 인증 권한 설정) </h3>

- 특정페이지에 어떻게 권한을 부여할 수 있는지 살펴보자.
- login, signup은 사용자가 로그인하지 않아도 접속 가능한 페이지.
- main, add, post는 로그인을 해야지 접속 가능한 페이지.

<img src="./imgs/end114_1.png" width="500" />

	===> 로그인을 해야 접속할 수 있는 페이지에 meta를 부여한다.
	===> auth: true라고 줘서 true인 경우에는 로그인을 했는지 체크하고, 로그인이 되어있지 않으면 로그인 페이지로 넘어가도록 할 것이다.
	===> auth는 임의로 준 속성의 이름이다.(지어주고 싶은데로 지을 수 있음)
<br/>

<img src="./imgs/end114_2.png" width="500" />

	===> beforeEach에서 auth를 불러와 true일 경우에 console에 ‘인증이 필요합니다’라는 문장을 찍히도록 해보자.
<br/>

<img src="./imgs/end114_3.png" width="500" />

	===> 브라우저에서 main, add, edit페이지 접속 시 ‘인증이 필요합니다’가 console에 찍히는 것을 확인할 수 있다.
	     (login, signup에서는 안찍힘)
<br/>



<h3> 115강 (인증되지 않은 사용자 접근 제어) </h3>

<img src="./imgs/end115.png" width="500" />

	===> 사용자가 로그인을 했는지 확인할 수 있는 getters의 isLogin을 store에서 불러와 if문에 넣어준다.
	     (store를 import해와야 하는 것 잊지말기!)
	===> 로그인이 안되어있다면 next()를 이용해 /login페이지로 이동시켜준다.
	===> return은 잊지말고 넣어줘야한다.
<br/>



<h3> 116강 (로그인 상태에 따른 로고 이동 링크 처리) </h3>

- appHeader의 로고를 클릭했을 때, 로그인 상태에 따라 이동이 달라지도록 처리해보자.


<img src="./imgs/end116_1.png" width="400" />

	===> 기본적으로 logo의 링크는 ‘/‘로 줬다.
	===> ‘/‘는 ‘/login’으로 이동되도록 했었지.
<br/>

<img src="./imgs/end116_2.png" width="400" />

	===> login여부에 따라 연결링크가 바뀌도록 v-bind를 이용해 computed의 logoLink를 연결시키자.
<br/>

<img src="./imgs/end116_3.png" width="400" />

	===> computed에 logoLink()를 생성한다.
	===> login이 되었으면 /main으로, login이 되지 않은 상태면 /login이 전달 되도록 한다.
<br/>


<h3> 117강 (로그 아웃 관련 코드 수정) </h3>

- 로그아웃 버튼을 클릭했음에도 cookie가 삭제되지 않는 문제를 해결해 보자.

<img src="./imgs/end117_1.png" width="400" />

	===> 현재는 logout버튼 클릭 시 state의 내용만 비워지고 cookie는 비워지지 않는 코드이다.
<br/>

- utils폴더의 cookies.js에 있는 deleteCookie()함수를 이용하자.(강사님이 만들어놓은 함수)
- 먼저 AppHeader.vue에서 import해준다.
```javascript
  import { deleteCookie } from '@/utills/cookies';
```

- 그런 뒤, logoutUser()함수에서 deleteCookie를 사용해 쿠키에 저장한 til_auth와 til_user를 비워준다. 
<img src="./imgs/end117_2.png" width="400" />
<br/>



- 토큰값도 제거해주자.
<img src="./imgs/end117_3.png" width="400" />

	===> store의 index.js파일에서 clearToken()함수를 추가해 준다.
<img src="./imgs/end117_4.png" width="400" />

	===> 그런 뒤, AppHeader.vue의 logoutUser()에서 clearToken을 실행해준다.
<br/>

===> 브라우저의 application, vue개발자모드에서 로그인 정보가 지워진 것을 확인할 수 있다.






<br/>





<h2>19. 프런트엔드 테스팅 소개</h2>

<h3> 118강 (테스팅 환경 구성) </h3>

- $ git checkout 14_router-navigation-guard -f
- checkout을 하면, jest.config.js파일에 testMatch를 적어놓은 것을 확인할 수 있을 것이다.

<img src="./imgs/end118_1.png" width="500" />

	===> package.json파일에서 test:util부분을 수정해준다.
	===> 사진 속 빨간 줄쳐진 가운데 부분처럼 수정.

	===> 이 파일에는 주석을 생성하면 에러가 난다. 삭제해야한다. 왜지.?
<br/>

- components폴더에 LoginForm.spec.js파일을 생성해준다.
- 그런 뒤, 터미널에서 npm t를 쳐보면 package.json에서 설정했던 명령어에 따라서 LoginForm.spec.js가 실행되고 fail이라고 나올 것이다.

  (아직LoginForm.spec.js에 코드가 없으니까)

<br/>


<h3> 119강 (테스트 코드가 필요한 이유) </h3>

- 테스팅을 하는 목적 : 테스트 코드는 일일이 기능을 손으로 확인하는 시간을 줄여준다.
<br/>

- 예를 들어 login 기능들을 적어보면, 아래 2가지가 있다.
	- 1. id 인풋박스에 이메일을 입력했을 때 이메일이 맞는지 확인하는 로직.
	- 2. id, pw가 맞는 경우에 로그인 처리가 된다. 그 후 다음 페이지로 이동.
- 2가지의 login기능들을 확인하려면 매변 로그인 페이지에서 id와 pw를 입력해서 확인을 해야한다.
- 하지만 테스트 코드를 사용하면 일일이 손으로 입력해서 확인하는 번거로움을 줄이게 되는 것이다.

<br/

<h3> 120강 (Jest 소개) </h3>

- Jest : 테스트 코드를 작성할 때 사용하는 라이브러리이다.
- jest를 설치할 필요가 없다. vue-cli로 프로젝트를 생성했을 때, jest까지 생성되었기 때문이다.
<br/>

- State of JS 2019 - 테스팅 :
https://2019.stateofjs.com/testing/

- Jest 공식 사이트 :
https://jestjs.io/en/

<br/>

<h3> 121강 (자바스크립트 테스트 파일 소개 및 파일 경로 관련 안내) </h3>

- 기본적으로 ‘자바스크립트 테스트 파일’과 ‘일반 자바스크립트 파일’의 차이는 .js앞에 spec가 붙느냐 안붙느냐의 차이다.

     예) LoginForm.js.  /  LoginForm.spec.js
- jest.config.js파일에서 testMatch라는 속성을 생성해서 test파일의 대상을 지정하지 않았다면, 

  test파일을 tests폴더 밑에다가 작성해야 한다.
- 하지만 대부분의 사람들이 test파일은 test하려는 대상파일과 근접해야 한다는 이유로,

  대상 파일이 있는 폴더 속에 _test_폴더를 생성해서 test파일을 제작하는 편이다.

<br/>


<h3> 122강 (자자바스크립트 테스트 코드 시작하기) </h3>

- 자바스크립트 테스트 코드를 작성해보자.
- components폴더에 math.js파일을 생성해서 연습용 테스트 코드를 제작해보자.

<img src="./imgs/end122_1.png" width="500" />

	===> sum함수를 생성하고 export해준다.
<br/>

<img src="./imgs/end122_2.png" width="500" />

	===> LoginForm.spec.js 테스트 파일에서 테스트 함수를 작성해준다.
	===> describe()라는 Jest에서 제공하는 API를 이용한다.(각 함수별 설명은 이미지 속 주석을 읽어보자)
	===> 테스트 함수 생성 후 터미널에서 npm t를 입력하면 이미지와 같이 결과가 나온다.
<br/>




<h3> 123강 (테스트 코드 작성 팁) </h3>

- 122강에서 작성한 테스트 코드에 빨간 줄이 뜬 이유는 eslint에서 jest문법을 이해할 수 없기 때문에 뜨는 현상이다.
- 따라서, eslint에서 우리가 정의한 규칙에 어긋나는 것만 빨간줄이 생기도록 수정해야한다.


<img src="./imgs/end123_1.png" width="500" />

	===> .eslintrc.js에서 env속에 jest: true라고 작성해주면 된다.
<br/>


- 테스트 코드를 짤 때, 122강에서 작성한 코드처럼 옳은 값으로 테스트를 하는 것보다는 

  틀린 값으로 테스트코드를 작성해서 테스트 해보는게 더 정확하게 테스트 코드를 짰다고 볼 수 있다.
<br/>

<img src="./imgs/end123_2.png" width="500" />

	===> toBe값에 틀린 값인 15를 넣어줘보았다.
<br/>

<img src="./imgs/end123_3.png" width="500" />

	===> 실제로 사용할 때는 매번 테스트할 틀린 값을 넣어주기보다는, toBe앞에 not을 붙여준다.
	===> 테스트코드 혹은 기능이 깨지는 케이스에 대해 먼저 점검을 하고 범위를 줄여나가는 것이 좋기 때문에 not을 이용한다.
<br/>

- Jest describe() API 문서 :
https://jestjs.io/docs/en/api#describename-fn

<br/>


<h3> 124강 (뷰 컴포넌트 테스트 방법) </h3>

- js가 아닌 vue컴포넌트의 테스트 코드를 작성하는 방법에 대해 알아보자.(123강까지는 js테스트코드였다.)

<img src="./imgs/end124.png" width="500" />

<br/>


<h3> 125강 (뷰 테스트 유틸 라이브러리 소개 및 적용) </h3>

- Vue Test Utils : Vue.js를 위한 unit tasing 공식 라이브러리.
<br/>

- Vue Test Utils 공식 문서 :
https://vue-test-utils.vuejs.org/guides/

<img src="./imgs/end125.png" width="500" />

	===> Vue Test Utils을 import해온다.
	===> 기존에 import했던 Vue는 필요없어졌기 때문에 지워준다.
	===> shallowMount()를 이용해서 LoginForm을 마운팅한다.
	===> shallowMount를 하게 되면 wraper라고 하는 것이 떨어지게 된다.
	===> 따라서, 124강에서 instance라고 선언했던 것이 이제는 wrapper.vm으로 바뀐다.
<br/>



<h3> 126강 (find()를 이용한 컴포넌트 HTML 요소 검색) </h3>

<img src="./imgs/end126.png" width="500" />

	===> find()를 이용해서 쫓고자 하는 태그(#username)의 내용들을 console로 찍어보았다.
<br/>


<h3> 127강 (로그인 폼의 인풋 박스 관련 테스트 코드 작성) </h3>

<img src="./imgs/end127.png" width="500" />

	===> LoginForm의 data에 넣었던 username(여기선 ‘test’)이 v-model을 이용해서 LoginForm.vue에 있는 input박스까지 연결 된 것을 확인할 수 있다.
<br/>



<h3> 128강 (이메일 유효성 검사 기능 동작 테스트 코드로 확인) </h3>

<img src="./imgs/end128.png" width="500" />

	===> LoginForm.vue의 isUsernameValid를 불러와서 확인한 것.
<br/>

- 실질적으로는 사용자 관점에서의 test가 작성되어야 한다. 현재는 사용자 관점은 아니다.
- 다음 강의에서 사용자 관점에서 test를 작성하는 방법을 배울 것이다.

<br/>




<h3> 129강 (로그인 컴포넌트 첫 번째 테스트 코드 작성) </h3>

- 만약 id가 이메일 형식에 맞지 않을 경우, 

  사용자 입장에서 알 수 있는 방법은 인지 텍스트 또는 인지 스타일로 알아차릴 수 있다.
- 우리는 LoginForm.vue에서 ```<span class=“waring">```태그로 ‘Please enter an email address’라는 빨간 텍스트가 뜨도록 해놓았었다.
- 따라서, .warning라는 이름의 ```<span>``` 태그가 뜨면 정확하게 사용자 관점에서 테스트가 이뤄진 것이라고 볼 수 있다.

<img src="./imgs/end129.png" width="500" />
<br/>

- find() API 문서 :
https://vue-test-utils.vuejs.org/api/wrapper/#find



<br/>




<h3> 130강 (로그인 컴포넌트 두 번째 테스트 코드 작성) </h3>

- 2번째 테스트 코드를 작성해보자.
- id와 pw가 형식에 맞지 않으면 LoginForm.vue의 ‘로그인’버튼이 활성화 되지 않도록 수정할 것이다.

<img src="./imgs/end130_1.png" width="500" />

	===> 로그인 버튼에 삼항연산자로 형식이 올바르지 않을 경우 버튼이 비활성화 되도록 :class를 준다.
<br/>

<img src="./imgs/end130_2.png" width="500" />

	===> test케이스를 작성하고 난 후, 테스트 코드가 잘 작성되었는지 확인하려면 반대 코드를 넣어보는 것이 좋다.
	===> 이번 test코드는 id, pw가 형식에 맞지 않을 경우를 찾는 것이기 때문에, 올바른 id와 pw를 넣어서 테스트를 해보면 된다.
<br/>




<h3> 131강 ([실습 안내] 회원가입 컴포넌트 테스트 코드 작성) </h3>

- SignupForm에 대한 테스트 코드 작성해보자.

- login테스트 코드 작성 때처럼, SignupForm.spec.js파일을 생성해준다.

- 답안은 git branch를 확인하자.


<br/>
<hr/>

<h2>20. 강의 마무리</h2>

<h3> 132강 (학습 내용 정리 및 향후 학습 로드맵 안내) </h3>

<수업 정리>

- 프로젝트 구성 방법
	- ESLint + Prettier 
		: 이 둘을 어떻게 함께 사용할 수 있는지,
	          그걸 위해서는 vscode에서 어떤 식으로 플러그인을 구성해야 하는지 배웠음.
	- env
	
- REST API를 이용한 CRUD 애플리케이션 구현 방법
- 백엔드 API 문서 보는 방법 및 백엔드 개발자와 협업할 때 주의할 점
- Axios 인터셉터와 모듈화를 이용한 API 함수 설계
- 라우터 페이지 권한 처리
- 프런트엔드 테스팅 방법

























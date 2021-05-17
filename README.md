# Ckt

1. 설치 프로그램

   - ApacheII : 

   - Node.js (nodejs.org): 환경파일저장, javascript로 작성한 파일이 app.js 경우, 실행 #> node app.js 

   - npm install forever 내려받은다.

   - 실행 forever start app.js 종료: forever stop app.js : 데몬이 죽으면 자동으로 다시 시작함.

2. Angular compile:

  - git 에서 소스를 내려받는다.

  - Visual Studio Code에서 package.json에 있는 패키지를 내려받는다.  - npm install

  - Visual Studio Code에서 컴파일 한다.

  - ng build --prod=true

  - dist/ckt 아래에 컴파일된 js 가 있음. 전체파일 복사

  - ApacheII로 전송한다.

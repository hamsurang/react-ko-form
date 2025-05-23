# React-Ko-Form 기여하기

## 1. 목표

React-Ko-Form 레포지토리는 **React Hook Form**의 공식 문서(https://react-hook-form.com/docs)를 한국어로 번역하는 프로젝트입니다. 이 레포지토리는 비공식 한국어 문서로서, React Hook Form의 공식 레포지토리와는 별개로 유지됩니다.

단, 공식 문서 업데이트 및 changes 발생 시에는, 그에 맞춰 업데이트될 예정입니다. 관련 사항 발생 시, issue 탭에서 공유합니다.

## 2. 이슈

기여를 원하시는 분들은 먼저 [이슈 탭](https://github.com/hamsurang/react-ko-form/issues)을 확인하여 현재 진행 중인 작업이나 요청된 작업이 있는지 확인해주세요. 새로운 이슈를 제안하고자 하는 경우, 명확하고 구체적으로 설명하여 이슈를 생성해 주시기 바랍니다.

### 이슈 작성 요령

- **제목**: 명확하고 간결한 제목을 작성합니다.
- **내용**: 이슈의 목적, 배경, 필요한 작업을 명확하게 설명합니다.
- **라벨**: 적절한 라벨을 지정해 이슈의 종류와 우선순위를 명시해 주세요. (라벨은 추후 생성 예정)

## 3. 작업 컨벤션

작업자는 기여 전에 아래 컨벤션을 참조하여 준수한 후 PR을 올려주시기 바랍니다.

1. **어미 컨벤션**

   - React-Ko-Form은 문서의 톤앤매너를 통일시키기 위해 아래와 같이 어미를 통일시킵니다.
   - 전반적인 어미의 끝맺음은 "~다"로 끝맺습니다.
   - 다만, 권유의 경우에만 "~요."로 끝맺을 수 있습니다.

2. **어색한 번역투 제거**

   - 번역기를 돌릴 경우, 어색한 번역투가 나오기 마련입니다.
   - 작업자는 PR을 올리기 전, 어색한 번역투는 다듬거나 맞춤법 검사기 등으로 검사 후에 올려주시기 바랍니다.

3. **한글과 영어 병기**
   - 기본적으로 병기는 없습니다.
   - 애매한 용어는 영어로 그대로 적습니다.
   - 다만, 애매한 부분에 있어서는 PR을 올리실 때, description에 설명해 주시기 바랍니다.
   - 이 부분은 메인테이너가 리뷰 후 반영하겠습니다.
   - 해당 위키 링크(https://github.com/hamsurang/react-ko-form/wiki/react%E2%80%90ko%E2%80%90form%EC%9D%98-%EB%B2%88%EC%97%AD-%EA%B7%9C%EC%B9%99
)를 꼭 참조해 주세요.  

## 4. Pull Requests

PR(Pull Request)은 **master-ko** 브랜치로 보내주세요. 이 프로젝트는 비공식 한국어 문서 번역을 위한 것이므로, **master** 브랜치와는 별개로 유지됩니다. (**master** 브랜치는 공식 docs와 업데이트 changes 확인용입니다.)

### PR 작성 요령

- **브랜치**: 작업하실 때는 `master-ko` 브랜치에서 새로운 작업 브랜치를 생성하세요.
- **이슈 연결**: PR이 특정 이슈와 관련이 있다면, 해당 이슈 번호를 PR 설명에 연결해주세요. 예: `이 PR은 #12 이슈를 해결합니다.`
- **커밋 메시지**: 커밋 메시지는 명확하고 간결하게 작성합니다. 예: `Docs: useForm 페이지 번역`
- **리뷰**: PR 제출 후 다른 기여자나 관리자의 리뷰를 기다려주세요. 필요한 경우 추가 수정 요청이 있을 수 있습니다.

## 5. 커뮤니케이션

- 프로젝트와 관련된 논의는 주로 [Issues](https://github.com/hamsurang/react-ko-form/issues)와 [Pull Requests](https://github.com/hamsurang/react-ko-form/pulls)에서 이루어집니다.
- 필요시 [Discussions](https://github.com/your-repository/discussions) 탭을 통해 더 광범위한 논의를 진행할 수 있습니다.

---

이 프로젝트에 기여해 주셔서 감사합니다! 여러분의 도움 덕분에 React Hook Form 문서를 더 많은 한국 개발자들이 쉽게 접근할 수 있게 됩니다.

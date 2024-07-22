import typographyStyles from "../styles/typography.module.css"

export default {
  title: "React Hook Form - 성능이 좋고, 유연하며 확장 가능한 폼 라이브러리",
  description: "번거롭지 않은 폼 밸리데이션을 위한 React hook",

  slogan:
    "성능이 좋고, 유연하며 확장 가능한 폼에 사용하기 쉬운 밸리데이션 기능이 포함되어 있어요.",
  getStarted: "시작하기",
  demo: "데모",
  findInteresting: {
    heading: "시작할 준비가 되셨나요?",
    description: (
      <p className={typographyStyles.homeParagraph}>
        폼 처리는 까다롭지 않아야 해요. React Hook Form은 더 적은 코드로 더 나은
        성능을 달성하는 데 도움을 줘요.
      </p>
    ),
  },
  features: [
    {
      title: "개발자 경험(DX)",
      description: `직관적이고 완벽한 기능을 갖춘 API로 개발자가 폼을 구축할 때 원활한 경험을 제공해요.`,
    },
    {
      title: "HTML 표준",
      description: `기존 HTML 마크업을 활용하고, 우리의 constraint-based 벨리데이션 API로 폼을 검증하세요.`,
    },
    {
      title: "매우 가벼워요",
      description: `패키지 크기는 중요해요. React Hook Form은 어떤 의존성도 없는 작은 라이브러리예요.`,
    },
    {
      title: "성능",
      description: `리렌더링을 최소화하고, 밸리데이션 계산을 최소화하며 마운트 속도가 더욱 빨라요.`,
    },
    {
      title: "적용 가능성",
      description: `폼의 상태는 본래 지역적이므로, 다른 의존성 없이 쉽게 적용할 수 있어요.`,
    },
    {
      title: "사용자 경험(UX)",
      description: `최상의 사용자 경험을 제공하기 위해 노력하며, 내부적으로 일관된 밸리데이션 전략을 사용하고 있어요.`,
    },
  ],
  codeComparison: {
    title: "더 적은 코드로, 더 나은 성능을 경험하세요.",
    description: (
      <p id="codeComparison" className={typographyStyles.homeParagraph}>
        React Hook Form은 불필요한 리렌더링을 줄이면서 작성해야 하는 코드의 양을
        줄여요. 아래 예제에서 이를 자세히 경험해보세요:
      </p>
    ),
  },
  isolateRender: {
    title: "리렌더링을 분리해요",
    description: (
      <>
        <p className={typographyStyles.homeParagraph}>
          컴포넌트 단위로 리렌더링을 분리할 수 있어, 페이지나 앱의 성능 향상에
          기여해요. 아래 예제에서 이를 확인할 수 있어요:
        </p>
      </>
    ),
  },
  watcher: {
    title: "구독",
    description: (
      <p className={typographyStyles.homeParagraph}>
        성능은 폼을 구축할 때 사용자 경험의 중요한 요소예요. 전체 폼을 다시
        렌더링하지 않고 각각의 입력과 폼 상태 업데이트를 구독할 수 있어요.
      </p>
    ),
  },
  mount: {
    title: "빠른 마운트",
    description: (
      <p className={typographyStyles.homeParagraph}>
        다음 스크린샷은 React Hook Form이 다른 것들과 비교해서 얼마나 빠르게
        컴포넌트를 마운트하는지 보여줘요.
      </p>
    ),
    totalMount: "No. of mount(s)",
    totalChange: "No. of committing change(s)",
    totalTime: "Total time",
  },
  liveDemo: {
    description: (
      <>
        아래의 폼은 폼 검증이 어떻게 동작하는지 보여줘요. 각 열은 커스텀
        hook에서 저장된 내용을 나타내요. <strong>수정</strong> 버튼을 클릭하여
        폼의 필드를 변경할 수도 있어요.
      </>
    ),
    submit: "제출",
    watchTitle: "Watch",
    errorTitle: "Errors",
    touchedTitle: "Touched",
    watch: "입력값을 변경하면 관찰되는 값(watched value)이 업데이트돼요.",
    error: "밸리데이션 오류가 여기에 표시돼요.",
    touched: "터치된 필드는 이곳에 나타나요.",
  },
  validationResolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allow you to run any external validation methods, such
          as{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          and etc. In fact, the goal is not only limited Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be empty object{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> returning errors
          object's key should be relevant to your inputs.
        </p>
      </>
    ),
  },
}

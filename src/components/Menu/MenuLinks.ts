import { Pages } from "../../types/types"

export const advancedLinks: Pages = [
  {
    name: "접근성 (A11y)",
    pathname: "#AccessibilityA11y",
  },
  {
    name: "단계별 폼(Wizard Form) / 퍼널",
    pathname: "#WizardFormFunnel",
  },
  {
    name: "똑똑한 폼 컴포넌트",
    pathname: "#SmartFormComponent",
  },
  {
    name: "에러 메세지",
    pathname: "#ErrorMessages",
  },
  {
    name: "폼 연결하기",
    pathname: "#ConnectForm",
  },
  {
    name: "FormProvider 성능",
    pathname: "#FormProviderPerformance",
  },
  {
    name: "제어 컴포넌트와 비제어 컴포넌트의 혼합 사용",
    pathname: "#ControlledmixedwithUncontrolledComponents",
  },
  {
    name: "Resolver를 활용한 커스텀 훅",
    pathname: "#CustomHookwithResolver",
  },
  {
    name: "가상화된(virtualized) 리스트 다루기",
    pathname: "#Workingwithvirtualizedlists",
  },
  {
    name: "폼 테스트",
    pathname: "#TestingForm",
  },
  {
    name: "변환 및 파싱",
    pathname: "#TransformandParse",
  },
]

export const faqLinks: Pages = [
  {
    name: "Performance of React Hook Form",
    pathname: "#PerformanceofReactHookForm",
  },
  {
    name: "How to create an accessible input error and message?",
    pathname: "#Howtocreateanaccessibleinputerrorandmessage",
  },
  {
    name: "Does it work with Class Components?",
    pathname: "#DoesitworkwithClassComponents",
  },
  {
    name: "How to reset the form?",
    pathname: "#Howtoresettheform",
  },
  {
    name: "How to initialize form values?",
    pathname: "#Howtoinitializeformvalues",
  },
  {
    name: "How to share ref usage?",
    pathname: "#Howtosharerefusage",
  },
  {
    name: "What if you don't have access to ref?",
    pathname: "#Whatifyoudonthaveaccesstoref",
  },
  {
    name: "Why is the first keystroke not working?",
    pathname: "#Whyisthefirstkeystrokenotworking",
  },
  {
    name: "React Hook Form, Formik or Redux Form?",
    pathname: "#ReactHookFormFormikorReduxForm",
  },
  {
    name: "watch vs getValues vs state",
    pathname: "#watchvsgetValuesvsstate",
  },
  {
    name: "Why is default value not changing correctly with ternary operator?",
    pathname: "#Whyisdefaultvaluenotchangingcorrectlywithternaryoperator",
  },
  {
    name: "How to work with modal or tab forms?",
    pathname: "#Howtoworkwithmodalortabforms",
  },
]

export const apiLinks: Pages = [
  {
    pathname: "/docs/useform",
    name: "useForm",
    pages: [
      { pathname: "/docs/useform/register", name: "register" },
      { pathname: "/docs/useform/unregister", name: "unregister" },
      { pathname: "/docs/useform/formstate", name: "formState" },
      { pathname: "/docs/useform/watch", name: "watch" },
      { pathname: "/docs/useform/handlesubmit", name: "handleSubmit" },
      { pathname: "/docs/useform/reset", name: "reset" },
      { pathname: "/docs/useform/resetfield", name: "resetField" },
      { pathname: "/docs/useform/seterror", name: "setError" },
      { pathname: "/docs/useform/clearerrors", name: "clearErrors" },
      { pathname: "/docs/useform/setvalue", name: "setValue" },
      { pathname: "/docs/useform/setfocus", name: "setFocus" },
      { pathname: "/docs/useform/getvalues", name: "getValues" },
      { pathname: "/docs/useform/getfieldstate", name: "getFieldState" },
      { pathname: "/docs/useform/trigger", name: "trigger" },
      { pathname: "/docs/useform/control", name: "control" },
      { pathname: "/docs/useform/form", name: "Form" },
    ],
  },
  {
    pathname: "/docs/usecontroller",
    name: "useController",
    pages: [
      {
        pathname: "/docs/usecontroller/controller",
        name: "Controller",
      },
    ],
  },
  {
    pathname: "/docs/useformcontext",
    name: "useFormContext",
    pages: [
      {
        pathname: "/docs/formprovider",
        name: "FormProvider",
      },
    ],
  },
  {
    pathname: "/docs/usewatch",
    name: "useWatch",
  },
  {
    pathname: "/docs/useformstate",
    name: "useFormState",
    pages: [
      {
        pathname: "/docs/useformstate/errormessage",
        name: "ErrorMessage",
      },
    ],
  },
  {
    pathname: "/docs/usefieldarray",
    name: "useFieldArray",
  },
  {
    pathname: "/docs/createFormControl",
    name: "createFormControl",
  },
]

export const tsLinks: Pages = [
  {
    name: "Resolver",
    pathname: "#Resolver",
  },
  {
    name: "SubmitHandler",
    pathname: "#SubmitHandler",
  },
  {
    name: "Control",
    pathname: "#Control",
  },
  {
    name: "UseFormReturn",
    pathname: "#UseFormReturn",
  },
  {
    name: "UseFormProps",
    pathname: "#UseFormProps",
  },
  {
    name: "UseFieldArrayReturn",
    pathname: "#UseFieldArrayReturn",
  },
  {
    name: "UseFieldArrayProps",
    pathname: "#UseFieldArrayProps",
  },
  {
    name: "UseControllerReturn",
    pathname: "#UseControllerReturn",
  },
  {
    name: "UseControllerProps",
    pathname: "#UseControllerProps",
  },
  {
    name: "FieldError",
    pathname: "#FieldError",
  },
  {
    name: "FieldErrors",
    pathname: "#FieldErrors",
  },
  {
    name: "Field",
    pathname: "#Field",
  },
  {
    name: "FieldPath",
    pathname: "#FieldPath",
  },
  {
    name: "FieldPathByValue",
    pathname: "#FieldPathByValue",
  },
  {
    name: "FieldValues",
    pathname: "#FieldValues",
  },
  {
    name: "FieldArrayWithId",
    pathname: "#FieldArrayWithId",
  },
  {
    name: "Mode",
    pathname: "#Mode",
  },
  {
    name: "RegisterOptions",
    pathname: "#RegisterOptions",
  },
  {
    name: "FormStateProxy",
    pathname: "#FormStateProxy",
  },
  {
    name: "NestedValue",
    pathname: "#NestedValue",
  },
]

export const getStartedLinks: Pages = [
  {
    name: "빠른 시작",
    pathname: "#Quickstart",
  },
  {
    name: "React 웹 비디오 튜토리얼",
    pathname: "#ReactWebVideoTutorial",
  },
  {
    name: "Register fields",
    pathname: "#Registerfields",
  },
  {
    name: "Apply validation",
    pathname: "#Applyvalidation",
  },
  {
    name: "기존 폼 통합",
    pathname: "#Integratinganexistingform",
  },
  {
    name: "UI 라이브러리와 통합",
    pathname: "#IntegratingwithUIlibraries",
  },
  {
    name: "제어된 입력 통합",
    pathname: "#IntegratingControlledInputs",
  },
  {
    name: "전역 상태와 통합",
    pathname: "#Integratingwithglobalstate",
  },
  {
    name: "서비스와 통합",
    pathname: "#Integratingwithservices",
  },
  {
    name: "Handle errors",
    pathname: "#Handleerrors",
  },
  {
    name: "서비스와 통합",
    pathname: "#Integratingwithservices",
  },
  {
    name: "스키마 검증",
    pathname: "#SchemaValidation",
  },
  {
    name: "React Native",
    pathname: "#ReactNative",
  },
  {
    name: "TypeScript",
    pathname: "#TypeScript",
  },
  {
    name: "디자인과 철학",
    pathname: "#Designandphilosophy",
  },
]

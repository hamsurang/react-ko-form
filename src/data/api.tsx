import CodeArea from "../components/CodeArea"
import useFieldArrayArgument from "../components/codeExamples/useFieldArrayArgument"
import generic from "./generic"
import Link from "next/link"
import typographyStyles from "../styles/typography.module.css"
import buttonStyles from "../styles/button.module.css"
import tableStyles from "../styles/table.module.css"
import TabGroup from "../components/TabGroup"

export default {
  title: "API Documentation",
  header: {
    description: "focuses on providing the best DX by simplifying the API.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        By invoking <code>useForm</code>, you will receive the following methods{" "}
        :
      </>
    ),
    description: (
      <p>
        <code>useForm</code> is a custom hook for managing forms with ease. It
        takes one object as <b>optional</b> argument. The following example
        demonstrates all of its properties along with their default values.
      </p>
    ),
    validateCriteriaMode: (
      <ul style={{ marginLeft: 0, paddingLeft: 15 }}>
        <li>
          <p>
            When set to <code>firstError</code> (default), only the first error
            from each field will be gathered.
          </p>
        </li>
        <li>
          <p>
            When set to <code>all</code>, all errors from each field will be
            gathered.
          </p>
        </li>
      </ul>
    ),
    validateContext: (
      <>
        <p>
          This context <code>object</code> is mutable and will be injected into{" "}
          the <code>resolver</code>'s second argument or{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          validation's context object.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        Validation is triggered on the <code>submit</code> event, and inputs
        attach <code>onChange</code> event listeners to re-validate themselves.
      </>
    ),
    validateOnBlur: (
      <>
        Validation is triggered on the <code>blur</code> event.
      </>
    ),
    validateOnChange: (
      <>
        Validation is triggered on the <code>change</code>
        event for each input, leading to multiple re-renders. Warning: this
        often comes with a significant impact on performance.
      </>
    ),
    validationOnAll: (
      <>
        Validation is triggered on both <code>blur</code> and{" "}
        <code>change</code> events.
      </>
    ),
    validationOnTouched: (
      <>
        <p>
          Validation is initially triggered on the first <code>blur</code>{" "}
          event. After that, it is triggered on every <code>change</code> event.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> when using with{" "}
          <code>Controller</code>, make sure to wire up <code>onBlur</code> with{" "}
          the <code>render</code> prop.
        </p>
      </>
    ),
    values: (
      <>
        <p>
          The <code>values</code> props will react to changes and update the
          form values, which is useful when your form needs to be updated by
          external state or server data.
        </p>

        <CodeArea
          rawData={`// set default value sync
function App({ values }) {
  useForm({
    values  // will get updated when values props updates       
  })
}

function App() {
  const values = useFetch('/api');
  
  useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    values, // will get updated once values returns
  })
}
`}
        />
      </>
    ),
    resetOptions: (
      <>
        <p>
          This property is related to value update behaviors. When{" "}
          <code>values</code> or <code>defaultValues</code> are updated, the{" "}
          <code>reset</code> API is invoked internally. It's important to
          specify the desired behavior after <code>values</code> or{" "}
          <code>defaultValues</code> are asynchronously updated. The
          configuration option itself is a reference to the{" "}
          <Link href="/docs/useform/reset">reset</Link> method's options.
        </p>

        <CodeArea
          tsUrl="https://codesandbox.io/s/useform-resetoptions-7bsuud"
          rawData={`// by default asynchronously value or defaultValues update will reset the form values
useForm({ values })
useForm({ defaultValues: async () => await fetch() })

// options to config the behaviour
// eg: I want to keep user interacted/dirty value and not remove any user errors
useForm({
  values,
  resetOptions: {
    keepDirtyValues: true, // user-interacted input will be retained
    keepErrors: true, // input errors will be retained with value update
  }
})
`}
        />
      </>
    ),
    defaultValues: (
      <>
        <p>
          The <code>defaultValues</code> prop populates the entire form with
          default values. It supports both synchronous and asynchronous
          assignment of default values. While you can set an input's default
          value using <code>defaultValue</code> or <code>defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (as detailed in the official React documentation)
          </a>
          , it is <strong>recommended</strong> to use <code>defaultValues</code>{" "}
          for the entire form.
        </p>

        <CodeArea
          rawData={`// set default value sync
useForm({
  defaultValues: {
    firstName: '',
    lastName: ''
  }
})

// set default value async
useForm({
  defaultValues: async () => fetch('/api-endpoint');
})`}
        />

        <h3 className={typographyStyles.rulesTitle}>Rules</h3>

        <ul>
          <li>
            <p>
              You <strong>should avoid</strong> providing <code>undefined</code>{" "}
              as a default value, as it conflicts with the default state of a
              controlled component.
            </p>
          </li>
          <li>
            <p>
              <code>defaultValues</code> are cached. To reset them, use the{" "}
              <Link href="/docs/useform/reset">reset</Link> API.
            </p>
          </li>
          <li>
            <p>
              <code>defaultValues</code> will be included in the submission
              result by default.
            </p>
          </li>
          <li>
            <p>
              It's recommended to avoid using custom objects containing
              prototype methods, such as <code>Moment</code> or{" "}
              <code>Luxon</code>, as <code>defaultValues</code>.
            </p>
          </li>
          <li>
            <p>There are other options for including form data:</p>
            <CodeArea
              rawData={`// include hidden input
<input {...register("hidden")} type="hidden" />
register("hidden", { value: "data" })

// include data onSubmit
const onSubmit = (data) => {
  const output = {
    ...data,
    others: "others"
  }
}
`}
            />
          </li>
        </ul>
      </>
    ),
    reValidateMode: (
      <p>
        This option allows you to configure validation strategy when inputs with
        errors get re-validated <strong>after</strong> a user submits the form (
        <code>onSubmit</code> event and{" "}
        <Link href="/docs/useform/handlesubmit">
          <code>handleSubmit</code>
        </Link>{" "}
        function executed). By default, re-validation occurs during the input
        change event.
      </p>
    ),
    validationFields: (
      <p>
        Providing an array of fields means only included fields will be
        validated. This option is useful when you want to toggle which fields
        are required to validate.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          When set to <code>true</code> (default), and the user submits a form
          that fails validation, focus is set on the first field with an error.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> only registered fields
          with a <code>ref</code> will work. Custom registered inputs do not
          apply. For example: <code>{`register('test') // doesn't work`}</code>{" "}
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> the focus order is
          based on the <code>register</code> order.
        </p>
      </>
    ),
    shouldUnregister: (
      <>
        <p>
          By default, an input value will be retained when input is removed.
          However, you can set <code>shouldUnregister</code> to{" "}
          <code>true</code> to <code>unregister</code> input during unmount.
        </p>

        <ul>
          <li>
            <p>
              This is a global configuration that overrides child-level
              configurations. To have individual behavior, set the configuration
              at the component or hook level, not at <code>useForm</code>.
            </p>
          </li>
          <li>
            <p>
              By default, <code>shouldUnregister: false</code> means unmounted
              fields are <strong>not validated</strong> by built-in validation.
            </p>
          </li>
          <li>
            <p>
              By setting <code>shouldUnregister</code> to true at{" "}
              <code>useForm</code> level, <code>defaultValues</code> will{" "}
              <b>not</b> be merged against submission result.
            </p>
          </li>
          <li>
            <p>
              Setting <code>shouldUnregister: true</code> makes your form behave
              more closely to native forms.
            </p>
            <ul>
              <li>
                <p>Form values are stored within the inputs themselves.</p>
              </li>
              <li>
                <p>Unmounting an input removes its value.</p>
              </li>
              <li>
                <p>
                  Hidden inputs should use the <code>hidden</code> attribute for
                  storing hidden data.
                </p>
              </li>
              <li>
                <p>Only registered inputs are included as submission data.</p>
              </li>
              <li>
                <p>
                  Unmounted inputs must be notified at either{" "}
                  <code>useForm</code> or <code>useWatch</code>'s{" "}
                  <code>useEffect</code> for the hook form to verify that the
                  input is unmounted from the DOM.
                </p>

                <CodeArea
                  rawData={`const NotWork = () => {
  const [show, setShow] = React.useState(false);
  // ❌ won't get notified, need to invoke unregister
  return {show && <input {...register('test')} />}
}

const Work = ({ control }) => {
  const { show } = useWatch({ control })
  // ✅ get notified at useEffect
  return {show && <input {...register('test1')} />}
}

const App = () => {
  const [show, setShow] = React.useState(false);
  const { control } = useForm({ shouldUnregister: true });
  return (
    <div>
      // ✅ get notified at useForm's useEffect
      {show && <input {...register('test2')} />}
      <NotWork />
      <Work control={control} />
    </div>
  )
}
`}
                />
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
    delayError: (
      <p>
        This configuration delays the display of error states to the end-user by
        a specified number of milliseconds. If the user corrects the error
        input, the error is removed instantly, and the delay is not applied.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          This method allows you to <code>unregister</code> a single input or an
          array of inputs. It also provides a second optional argument to keep
          state after unregistering an input.
        </p>

        <div className={tableStyles.tableWrapper}>
          <h2 className={typographyStyles.subTitle}>Props</h2>

          <p>
            The example below shows what to expect when you invoke the{" "}
            <code>unregister</code> method.
          </p>

          <CodeArea
            rawData={`<input {...register('yourDetails.firstName')} />
<input {...register('yourDetails.lastName')} />
`}
          />

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Input Name</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <code>unregister("yourDetails")</code>
                </td>
                <td>
                  <code>{`{}`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <code>unregister("yourDetails.firstName")</code>
                </td>
                <td>
                  <code>{`{ lastName: '' }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string[]</code>
                </td>
                <td>
                  <code>unregister(["yourDetails.lastName"])</code>
                </td>
                <td>
                  <code>{`''`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          이 메서드를 사용하면 입력 또는 선택 요소를 등록(register)하고 React
          Hook Form에 유효성 검사 규칙을 적용할 수 있습니다. 유효성 검사 규칙은
          모두 HTML 표준을 기반으로 하며 사용자 정의 유효성 검사 메서드도
          허용합니다.
        </p>

        <p>
          register 함수를 호출하고 입력의 이름을 제공하면 다음과 같은 메서드가
          제공됩니다:
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name}</th>
                <th>{generic.type}</th>
                <th>{generic.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onChange</code>
                    속성은 입력 변경 이벤트를 구독합니다.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onBlur</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onBlur</code> 속성은 입력 블러(blur) 이벤트를
                    구독합니다.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>입력 이름을 등록(registered)합니다.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    example: "Submit Result",
    selectHelp: "register 옵션을 선택하면 아래의 API 표가 업데이트됩니다.",
    options: {
      title: "Select Options",
      registerWithValidation: "유효성 검사를 포함한 register",
      registerWithValidationMessage:
        "유효성 검사와 에러메세지를 포함한 register",
      note: (
        <>
          <h2 className={typographyStyles.subTitle}>Tips</h2>

          <h4 className={typographyStyles.questionTitle}>Custom Register</h4>

          <p>
            <code>useEffect</code>로 입력을 <code>등록</code>하고 가상 입력처럼
            처리할 수도 있습니다. 제어 컴포넌트의 경우, 이 과정을 처리하기 위해
            custom hook인 <Link href="/docs/usecontroller">useController</Link>{" "}
            와 <Link href="/docs/usecontroller/controller">Controller</Link>{" "}
            컴포넌트를 제공합니다.
          </p>

          <p>
            필드를 수동으로 등록(register)하고 싶다면,{" "}
            <Link href="/docs/useform/setvalue">setValue</Link>를 사용하여 입력
            값을 업데이트해야 합니다..
          </p>

          <CodeArea
            rawData={`register('firstName', { required: true, min: 8 });

<TextInput onTextChange={(value) => setValue('lastChange', value))} />
`}
          />

          <h4 className={typographyStyles.questionTitle}>
            innerRef, inputRef를 어떻게 사용하나요?
          </h4>

          <p>
            사용자 정의 입력 컴포넌트가 ref를 노출하지 않는 경우, 다음과 같은
            방법을 통해 동작시킬 수 있습니다.
          </p>

          <CodeArea
            rawData={`// not working, because ref is not assigned
<TextInput {...register('test')} />

const firstName = register('firstName', { required: true })
<TextInput
  name={firstName.name}
  onChange={firstName.onChange}
  onBlur={firstName.onBlur}
  inputRef={firstName.ref} // you can achieve the same for different ref name such as innerRef
/>

// correct way to forward input's ref
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value="20">20</option>
    <option value="30">30</option>
  </select>
));
`}
          />
        </>
      ),
    },
    validation: {
      required: (
        <>
          <p>
            폼을 제출하기 전에 입력 필드에 값이 있어야 함을 나타내는 Boolean
            값입니다. true로 설정하면 입력 필드가 필수 항목이 됩니다. 문자열을
            할당하여
            <code>errors</code> 객체에서 오류 메시지를 반환할 수 있습니다.
          </p>

          <p>
            <b className={typographyStyles.note}>Note: </b>이 구성은 필수 입력
            유효성 검사를 위한 웹 제한 API와 일치합니다. <code>객체</code> 나{" "}
            <code>배열</code> 유형의 입력인 경우 <code>validate</code> 함수를
            대신 사용하세요.
          </p>
        </>
      ),
      maxLength: "이 입력에서 허용할 값의 최대 길이.",
      minLength: "이 입력에서 허용할 값의 최소 길이.",
      max: "이 입력에서 허용할 최대값.",
      min: "이 입력에서 허용할 최소값.",
      pattern: (
        <>
          <p>입력에 대한 정규식 패턴.</p>
          <p>
            <b className={typographyStyles.note}>Note:</b>
            /g 플래그를 가진 RegExp 객체는 일치가 발생한 마지막 인덱스를
            추적합니다.
          </p>
        </>
      ),
      validate: (
        <>
          <p>
            콜백 함수를 인수로 전달하여 유효성을 검사하거나 콜백 함수의 객체를
            전달하여 모든 함수의 유효성을 검사할 수 있습니다. 이 함수는{" "}
            <code>required</code> 속성에 포함된 다른 유효성 검사 규칙에 의존하지
            않고 독립적으로 실행됩니다.
          </p>
          <p>
            <b className={typographyStyles.note}>Note:</b>다른 규칙들은 주로{" "}
            <code>문자열</code> ,<code>문자열 배열(string[])</code>,{" "}
            <code>숫자</code> 및 <code>boolean</code> 데이터 타입에 적용되기
            때문에 <code>객체</code> 또는 <code>배열</code> 입력 데이터의 경우
            유효성 검사에 validate 함수를 사용하는 것이 권장됩니다.
          </p>
        </>
      ),
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>
          이 객체는 전체 폼 상태에 대한 정보를 포함하고 있습니다. 폼
          애플리케이션과 사용자의 상호작용을 추적하는 데 도움이 됩니다.
        </p>
      </>
    ),
    isSubmitSuccessful: (
      <p>런타임 에러 없이 폼이 성공적으로 제출되었음을 나타냅니다.</p>
    ),
    isDirty: (
      <>
        <p>
          사용자가 입력 중 하나라도 수정한다면 <code>true</code>로 설정됩니다.
        </p>
        <ul>
          <li>
            <p>
              <b>중요:</b> 모든 입력의 기본값을 useForm에 제공해야 hook form이
              폼이 변경이 되었는지 비교할 수 있는 단일 소스를 가질 수 있습니다.
            </p>
            <CodeArea
              rawData={`const {
  formState: { isDirty, dirtyFields },
  setValue,
} = useForm({ defaultValues: { test: "" } });

// isDirty: true
setValue('test', 'change')
 
// isDirty: false 왜냐하면 getValues() === defaultValues 이기 때문
setValue('test', '') 
`}
            />
          </li>
          <li>
            <p>
              파일 타입 입력은 파일 선택 취소 및{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
                target="_blank"
                rel="noopener noreferrer"
              >
                FileList
              </a>{" "}
              객체 관리 때문에 애플리케이션 수준에서 관리되어야 합니다.
            </p>
          </li>
          <li>
            <p>사용자 정의 객체, 클래스 또는 파일 객체는 지원하지 않습니다.</p>
          </li>
        </ul>
      </>
    ),
    isSubmitted: (
      <>
        폼이 제출된 후 <code>true</code>로 설정됩니다.
        <code>reset</code> 메서드가 호출될 때까지 <code>true</code>로
        유지됩니다.
      </>
    ),
    dirtyFields: (
      <>
        <p>
          사용자가 수정한 필드를 포함하는 객체입니다. 라이브러리가{" "}
          <code>defaultValues</code>와 비교할 수 있도록 useForm을 통해 모든
          입력의 defaultValues를 제공해야 합니다.
        </p>
        <ul>
          <li>
            <p>
              <b>중요:</b> useForm에서 defaultValues를 제공하여, hook form이 각
              필드의 변경 상태를 비교할 수 있는 단일 소스를 가질 수 있도록 해야
              합니다.
            </p>
          </li>

          <li>
            <p>
              Dirty 필드는 전체 폼이 아닌 개별 필드 수준에서 dirty로 표시되므로,
              Dirty 필드는 폼이 <code>isDirty</code> 상태임을 나타내지{" "}
              <strong>않습니다</strong>. 전체 폼 상태를 확인하려면{" "}
              <code>isDirty</code>를 사용하세요.
            </p>
          </li>
        </ul>
      </>
    ),
    touched: "사용자가 상호작용한 모든 입력을 포함하는 객체입니다.",
    defaultValues: (
      <p>
        <Link href="/docs/useform" aria-label="read more about reset api">
          useForm
        </Link>
        의 defaultValues에 설정된 값 또는{" "}
        <Link href="/docs/useform/reset" aria-label="read more about reset api">
          reset
        </Link>{" "}
        API를 통해 업데이트된 defaultValues입니다.
      </p>
    ),
    isSubmitting: (
      <>
        폼이 현재 제출 중이면 <code>true</code>, 그렇지 않으면{" "}
        <code>false</code> 입니다.
      </>
    ),
    isLoading: (
      <>
        <p>
          비동기 기본 값을 로드 중인 경우 <code>true</code>입니다.
        </p>
        <p>
          <b className={typographyStyles.note}>중요:</b> 이 속성은 비동기{" "}
          <code>defaultValues</code>에만 적용됩니다.
        </p>
        <CodeArea
          rawData={`const { 
  formState: { isLoading } 
} = useForm({ 
  defaultValues: async () => await fetch('/api') 
});
`}
        />
      </>
    ),
    submitCount: "폼이 제출된 횟수입니다.",
    isValid: (
      <>
        폼에 에러가 없으면 <code>true</code>로 설정됩니다.
      </>
    ),
    isValidating: (
      <>
        유효성 검사 중 <code>true</code>로 설정됩니다.
      </>
    ),
    validatingFields: <>비동기 유효성 검사가 이뤄지는 필드를 캡쳐합니다.</>,
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Object containing form errors and error messages corresponding to each
          field.
        </p>
      </>
    ),
    types: (
      <>
        <p style={{ marginTop: 0 }}>
          This is useful when you want to return all validation errors for a
          single input. For instance, a password field that is required to have
          a minimum length and contain a special character.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You need to set{" "}
          <code>criteriaMode</code> to <code>'all'</code> for this option to
          work.
        </p>
      </>
    ),
    message: `If you registered your input with an error message, then it will be put in this field, otherwise it's an empty string by default.`,
    ref: `Reference for your input element.`,
    note: (
      <>
        <p>
          <b className={typographyStyles.note}>Important:</b> Avoid using error
          object key names to avoid data overwrite. <br />
          eg:{" "}
          <code>
            register('user'); register('user.type');{" "}
            <span role="img" aria-label="Big Red X">
              ❌
            </span>
            {" // error's type will get overwritten."}
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You can use the{" "}
          <Link href="/docs/useformstate/errormessage">ErrorMessage</Link>{" "}
          component to help display your error states
        </p>
      </>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          This method will watch specified inputs and return their values. It is
          useful to render input value and for determining what to render by
          condition.
        </p>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Watch input value by name (similar to lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          function)
        </>
      ),
      multiple: "Watch multiple inputs",
      all: "Watch all inputs",
      callback: "Watch all inputs and invoke a callback",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          This function will receive the form data if form validation is
          successful.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>SubmitHandler</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`(data: Object, e?: Event) => Promise<void>`}</code>
                </td>
                <td>A successful callback.</td>
              </tr>
              <tr>
                <td>SubmitErrorHandler</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`(errors: Object, e?: Event) => Promise<void>`}</code>
                </td>
                <td>An error callback.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>
        <ul>
          <li>
            <p>You can easily submit form asynchronously with handleSubmit.</p>
            <CodeArea
              rawData={`// It can be invoked remotely as well
handleSubmit(onSubmit)();

// You can pass an async function for asynchronous validation.
handleSubmit(async (data) => await fetchAPI(data))`}
            />
          </li>
          <li>
            <p>
              <code>disabled</code> inputs will appear as <code>undefined</code>{" "}
              values in form values. If you want to prevent users from updating
              an input and wish to retain the form value, you can use{" "}
              <code>readOnly</code> or disable the entire {`<fieldset />`}. Here
              is an{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-disabled-inputs-oihxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                example
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              <code>handleSubmit</code> function will not swallow errors that
              occurred inside your onSubmit callback, so we recommend you to try
              and catch inside async request and handle those errors gracefully
              for your customers.
            </p>

            <CodeArea
              rawData={`const onSubmit = async () => {
  // async request which may result error
  try {
    // await fetch()
  } catch (e) {
    // handle your error
  }
};

<form onSubmit={handleSubmit(onSubmit)} />
`}
            />
          </li>
        </ul>
      </>
    ),
  },
  reset: {
    title: "reset",
    description: (
      <>
        <p>
          Reset the entire form state, fields reference, and subscriptions.
          There are optional arguments and will allow partial form state reset.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <p>
          <code>Reset</code> has the ability to retain formState. Here are the
          options you may use:{" "}
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name}</th>
                <th>{generic.type}</th>
                <th>{generic.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>values</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>object</code>
                </td>
                <td>
                  <p>
                    An optional object to reset form values, and it's
                    recommended to provide the <strong>entire</strong>{" "}
                    <>defaultValues</> when supplied.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepErrors</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    All errors will remain. This will not guarantee with further
                    user actions.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepDirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>DirtyFields</code> form state will remain, and{" "}
                    <code>isDirty</code> will temporarily remain as the current
                    state until further user's action.
                  </p>

                  <p>
                    <b className={typographyStyles.note}>Important: </b>this
                    keep option doesn't reflect form input values but only dirty
                    fields form state.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepDirtyValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>DirtyFields</code> and <code>isDirty</code> will
                    remain, and only non-dirty fields will be updated to the
                    latest rest value.{" "}
                    <a
                      href="https://codesandbox.io/s/react-keepdirtyvalues-o8to91"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out the example.
                    </a>
                  </p>
                  <p>
                    <b className={typographyStyles.note}>Important: </b>
                    formState <code>dirtyFields</code> will need to be
                    subscribed.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>Form input values will be unchanged.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepDefaultValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    Keep the same defaultValues which are initialised via{" "}
                    <code>useForm</code>.
                  </p>

                  <ul>
                    <li>
                      <p>
                        <code>isDirty</code> will be checked again: it is set to
                        be the result of the comparison of any new values
                        provided against the original <code>defaultValues</code>
                        .
                      </p>
                    </li>
                    <li>
                      <p>
                        <code>dirtyFields</code> will be updated again if values
                        are provided: it is set to be result of the comparison
                        between the new values provided against the original
                        <code>defaultValues</code>.
                      </p>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepIsSubmitted</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isSubmitted</code> state will be unchanged.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepTouched</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isTouched</code> state will be unchanged.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepIsValid</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isValid</code> will temporarily persist as the current
                    state until additional user actions.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepSubmitCount</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>submitCount</code> state will be unchanged.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              For controlled components you will need to pass{" "}
              <code>defaultValues</code> to <code>useForm</code> in order to{" "}
              <code>reset</code> the <code>Controller</code> components' value.
            </p>
          </li>
          <li>
            <p>
              When <code>defaultValues</code> is not supplied to{" "}
              <code>reset</code> API, then HTML native{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset"
              >
                reset
              </a>{" "}
              API will be invoked to restore the form.
            </p>
          </li>
          <li>
            <p>
              Avoid calling <code>reset</code> before <code>useForm</code>'s{" "}
              <code>useEffect</code> is invoked, this is because{" "}
              <code>useForm</code>'s subscription needs to be ready before{" "}
              <code>reset</code> can send a signal to flush form state update.
            </p>
          </li>
          <li>
            <p>
              It's recommended to <code>reset</code> inside{" "}
              <code>useEffect</code> after submission.
            </p>
            <CodeArea
              rawData={`useEffect(() => {
  reset({
    data: 'test'
  })
}, [isSubmitSuccessful])
`}
            />
          </li>
        </ul>
      </>
    ),
  },
  setError: {
    title: "setError",
    description: (
      <>
        <p>The function allows you to manually set one or more errors.</p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>input's name.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>error</code>
                </td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`{ type: string, message?: string, types: MultipleFieldErrors }`}</code>
                </td>
                <td>
                  <p>Set an error with its type and message.</p>
                </td>
              </tr>
              <tr>
                <td>config</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`{ shouldFocus?: boolean }`}</code>
                </td>
                <td>
                  <p>
                    Should focus the input during setting an error. This only
                    works when the input's reference is registered, it will not
                    work for custom register as well.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This method will not persist the associated input error if the
              input passes <code>register</code>'s associated rules.
            </p>
            <CodeArea
              rawData={`register('registerInput', { minLength: 4 });
setError('registerInput', { type: 'custom', message: 'custom message' });
// validation will pass as long as minLength requirement pass
`}
            />
          </li>
          <li>
            <p>
              An error that is not associated with an input field will be
              persisted until cleared with <code>clearErrors</code>. This
              behaviour is only applicable for built-in validation at field
              level.
            </p>
            <CodeArea
              rawData={`setError('notRegisteredInput', { type: 'custom', message: 'custom message' });
// clearErrors() need to invoked manually to remove that custom error 
`}
            />
          </li>
          <li>
            <p>
              You can set a server or global error with <code>root</code> as the
              key. This type of error will not persist with each submission.
            </p>

            <CodeArea
              rawData={`setError('root.serverError', { 
  type: '400',
});
setError('root.random', { 
  type: 'random', 
});`}
            />
          </li>
          <li>
            <p>
              Can be useful in the <code>handleSubmit</code> method when you
              want to give error feedback to a user after async validation. (ex:
              API returns validation errors)
            </p>
          </li>
          <li>
            <p>
              <code>shouldFocus</code> doesn't work when an input has been
              disabled.
            </p>
          </li>
          <li>
            <p>
              This method will force set <code>isValid</code> formState to{" "}
              <code>false</code>, however, it's important to aware{" "}
              <code>isValid</code> will always be derived by the validation
              result from your input registration rules or schema result.
            </p>
          </li>
          <li>
            <p>
              There are certain keyword which need to avoid before conflicting
              with type check. They are <code>type</code>, <code>types</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <>
        <p>This function can manually clear errors in the form.</p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>Remove all errors.</td>
              <td>
                <code>clearErrors()</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>Remove single error.</td>
              <td>
                <code>clearErrors("yourDetails.firstName")</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string[]</code>
              </td>
              <td>Remove multiple errors.</td>
              <td>
                <code>clearErrors(["yourDetails.lastName"])</code>
              </td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>
            <p>
              <code>undefined</code>: reset all errors
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: reset the error on a single field or by key
              name.
            </p>

            <CodeArea
              rawData={`register('test.firstName', { required: true });
register('test.lastName', { required: true });
clearErrors('test'); // will clear both errors from test.firstName and test.lastName
clearErrors('test.firstName'); // for clear single input error
`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              <code>string[]</code>: reset errors on the given fields
            </p>
          </li>
        </ul>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This will not affect the validation rules attached to each inputs.
            </p>
          </li>
          <li>
            <p>
              This method doesn't affect validation rules or{" "}
              <code>isValid</code> formState.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          This function allows you to dynamically set the value of a{" "}
          <strong>registered</strong> field and have the options to validate and
          update the form state. At the same time, it tries to avoid unnecessary
          rerender.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th></th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td></td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <ul>
                    <li>
                      <p>Target a single field by name.</p>
                    </li>
                    <li>
                      <p>When used with field array.</p>
                      <ul>
                        <li>
                          <p>
                            You can use methods such as{" "}
                            <Link href="/docs/usefieldarray#replace">
                              <code>replace</code>
                            </Link>{" "}
                            or{" "}
                            <Link href="/docs/usefieldarray#update">
                              <code>update</code>
                            </Link>{" "}
                            for field array, however, they will cause the
                            component to unmount and remount for the targeted
                            field array.
                          </p>

                          <CodeArea
                            rawData={`const { update } = useFieldArray({ name: 'array' });
                            
// unmount fields and remount with updated value
update(0, { test: '1', test1: '2' }) 

// will directly update input value
setValue('array.0.test1', '1');
setValue('array.0.test2', '2');
`}
                          />
                        </li>
                        <li>
                          <p>
                            It will not create a new field when targeting a
                            non-existing field.
                          </p>

                          <CodeArea
                            rawData={`const { replace } = useFieldArray({ name: 'test' })
                          
// ❌ doesn't create new input  
setValue('test.101.data') 

// ✅ work on refresh entire field array
replace([{data: 'test'}]) 
`}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <code>value</code>
                </td>
                <td></td>
                <td>
                  <code className={typographyStyles.typeText}>unknown</code>
                </td>
                <td>
                  <p>
                    The value for the field. This argument is required and can
                    not be <code>undefined</code>.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>options</code>
                </td>
                <td>
                  <code>shouldValidate</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <ul>
                    <li>
                      <p>
                        Whether to compute if your input is valid or not
                        (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          errors
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether to compute if your entire form is valid or not
                        (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          isValid
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      This option will update <code>touchedFields</code> at the
                      specified field level <b>not</b> the entire form touched
                      fields.
                    </li>
                  </ul>
                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldValidate: true })`}
                    withOutCopy
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <code></code>
                </td>
                <td>
                  <code>shouldDirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <ul>
                    <li>
                      <p>
                        Whether to compute if your input is dirty or not against
                        your defaultValues (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          dirtyFields
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether to compute if your entire form is dirty or not
                        against your defaultValues (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          isDirty
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      This option will update <code>dirtyFields</code> at the
                      specified field level <b>not</b> the entire form dirty
                      fields.
                    </li>
                  </ul>

                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldDirty: true })`}
                    withOutCopy
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <code></code>
                </td>
                <td>
                  <code>shouldTouch</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>Whether to set the input itself to be touched.</p>
                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldTouch: true })`}
                    withOutCopy
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>Only the following conditions will trigger a re-render:</p>
            <ul>
              <li>
                <p>When an error is triggered or corrected by a value update</p>
              </li>
              <li>
                <p>
                  When setValue cause state update, such as dirty and touched.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              It's recommended to target the field's name rather than make the
              second argument a nested object.
            </p>

            <CodeArea
              rawData={`setValue('yourDetails.firstName', 'value'); // ✅ performant
setValue('yourDetails', { firstName: 'value' }); // less performant

register('nestedValue', { value: { test: 'data' } }); // register a nested value input
setValue('nestedValue.test', 'updatedData'); // ❌ failed to find the relevant field
setValue('nestedValue', { test: 'updatedData' } ); // ✅ setValue find input and update
`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              It's recommended to register the input's name before invoking{" "}
              <code>setValue</code>. To update the entire Field Array, make sure
              the <code>useFieldArray</code> hook is being executed first.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b> use{" "}
              <Link href="/docs/usefieldarray#replace">
                <code>replace</code>
              </Link>{" "}
              from <code>useFieldArray</code> instead, update entire field array
              with <code>setValue</code> will be removed in the next major
              version.
            </p>
            <CodeArea
              rawData={`// you can update an entire Field Array,
setValue('fieldArray', [{ test: '1' }, { test: '2' }]); // ✅

// you can setValue to a unregistered input
setValue('notRegisteredInput', 'value'); // ✅ prefer to be registered

// the following will register a single input (without register invoked)
setValue('resultSingleNestedField', { test: '1', test2: '2' }); // 🤔

// with registered inputs, the setValue will update both inputs correctly.
register('notRegisteredInput.test', '1')
register('notRegisteredInput.test2', '2')
setValue('notRegisteredInput', { test: '1', test2: '2' }); // ✅ sugar syntax to setValue twice
`}
              withOutCopy
            />
          </li>
        </ul>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          An optimized helper for reading form values. The difference between{" "}
          <code>watch</code> and <code>getValues</code> is that{" "}
          <code>getValues</code> <strong>will not</strong> trigger re-renders or
          subscribe to input changes.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>{generic.type}</th>
                <th>{generic.description}</th>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>undefined</code>
                </td>
                <td>Returns the entire form values.</td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>Gets the value at path of the form values. </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>array</code>
                </td>
                <td>
                  Returns an array of the value at path of the form values.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={typographyStyles.subTitle}>Example</h3>

        <div className={tableStyles.tableWrapper}>
          <p>
            The example below shows what to expect when you invoke{" "}
            <code>getValues</code> method.
          </p>

          <CodeArea
            rawData={`<input {...register('root.test1')} />
<input {...register('root.test2')} />
`}
          />

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Output</th>
              </tr>
              <tr>
                <td>
                  <code>getValues()</code>
                </td>
                <td>
                  <code>{`{ root: { test1: '', test2: ''} }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues("root")</code>
                </td>
                <td>
                  <code>{`{ test1: '', test2: ''}`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues("root.firstName")</code>
                </td>
                <td>
                  <code>{`''`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues(["yourDetails.lastName"])</code>
                </td>
                <td>
                  <code>{`['']`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              Disabled inputs will be returned as <code>undefined</code>. If you
              want to prevent users from updating the input and still retain the
              field value, you can use <code>readOnly</code> or disable the
              entire {`<fieldset />`}. Here is an{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-disabled-inputs-oihxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                example
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              It will return <code>defaultValues</code> from{" "}
              <code>useForm</code> before the <b>initial</b> render.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
    description: (
      <>
        <p>
          Manually triggers form or input validation. This method is also useful
          when you have dependant validation (input validation depends on
          another input's value).
        </p>
        <h2 className={typographyStyles.subTitle}>Props</h2>

        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>name</td>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>Triggers validation on all fields.</td>
              <td>
                <code>trigger()</code>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>
                Triggers validation on a specific field value by{" "}
                <strong>name</strong>
              </td>
              <td>
                <code>trigger("yourDetails.firstName")</code>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <code className={typographyStyles.typeText}>string[]</code>
              </td>
              <td>
                Triggers validation on multiple fields by <strong>name</strong>.
              </td>
              <td>
                <code>trigger(["yourDetails.lastName"])</code>
              </td>
            </tr>
            <tr>
              <td>shouldFocus</td>
              <td>
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  Should focus the input during setting an error. This only
                  works when the input's reference is registered, it will not
                  work for custom register as well.
                </p>
              </td>
              <td>
                <code>{`trigger('name', { shouldFocus: true })`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          필드 배열(동적 폼)을 다루는 커스텀 훅으로, 더 나은 사용자 경험과
          성능을 제공하는 데 초점을 맞추고 있습니다.{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            짧은 영상
          </a>{" "}
          에서 성능 향상의 차이를 확인할 수 있습니다.{" "}
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name}</th>
                <th>{generic.type}</th>
                <th>{generic.required}</th>
                <th>{generic.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>✓</td>
                <td>
                  <p>
                    필드 배열의 이름. <b>참고: </b>동적인 이름은 지원하지
                    않습니다.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td />
                <td>{generic.control}</td>
              </tr>
              <tr>
                <td>
                  <code>shouldUnregister</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td />
                <td>
                  <p>필드 배열이 언마운트된 후, 등록 해제될 지 여부.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string = id</code>
                </td>
                <td></td>
                <td>
                  <p>
                    자동 생성된 식별자를 <code>key</code> prop으로 사용하기 위한
                    속성의 이름. 이 prop은 더 이상 필수 항목이 아니며, 다음 주요
                    버전에서 제거될 예정입니다.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>rules</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>
                  <p>
                    <Link href="/docs/useform/register">register</Link>와 동일한
                    유효성 검사 <code>rules</code> API를 사용하며, 포함되는
                    규칙은 다음과 같습니다:
                  </p>
                  <p>required, minLength, maxLength, validate</p>
                  <CodeArea
                    url="https://codesandbox.io/s/react-hook-form-usefieldarray-rules-iyejbp?file=/src/index.js"
                    withOutCopy
                    rawData={`useFieldArray({
  rules: { minLength: 4 } 
})
`}
                  />
                  <p>
                    만약 유효성 검사 에러가 발생하면, <code>root</code> 속성이{" "}
                    <code>formState.errors?.fieldArray?.root</code>에 추가되며,
                    이는{" "}
                    <Link href="/ts/#FieldError">
                      <code>FieldError</code>
                    </Link>{" "}
                    타입을 가집니다.
                    <p>
                      <b className={typographyStyles.note}>중요: </b>이 동작은
                      <strong>내장된</strong> 검증에만 적용됩니다.
                    </p>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="shouldUnregister-example" className={typographyStyles.subTitle}>
          Examples
        </h3>

        <CodeArea rawData={useFieldArrayArgument} />
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            이 <code>object</code>에는 컴포넌트의 <code>defaultValue</code>와{" "}
            <code>key</code>가 포함됩니다.
          </td>
        </tr>
        <tr>
          <td>
            <code id="append">append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], focusOptions) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              입력 필드를 기존 필드의 끝에 추가하고 포커스를 이동합니다. 이
              과정에서 입력 값이 등록(registered)됩니다
            </p>
            <p>
              <b className={typographyStyles.note}>중요: </b>추가할 데이터는
              필수이며, 일부만 제공될 수 없습니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="prepend">prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[], focusOptions) =&gt; void
            </code>
          </td>
          <td>
            <p>
              입력 필드를 기존 필드의 시작 부분에 추가하고 포커스를 이동합니다.
              이 과정에서 입력 값이 등록(registered)됩니다.
            </p>
            <p>
              <b className={typographyStyles.note}>중요: </b>추가할 데이터는
              필수이며, 일부만 제공될 수 없습니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="insert">insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              {`(index: number, value: object | object[], focusOptions) => void`}
            </code>
          </td>
          <td>
            <p>입력 필드를 특정 위치에 추가하고 포커스를 이동합니다.</p>
            <p>
              <b className={typographyStyles.note}>중요: </b>추가할 데이터는
              필수이며, 일부만 제공될 수 없습니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="swap">swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드의 위치를 서로 변경합니다.</td>
        </tr>
        <tr>
          <td>
            <code id="move">move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드를 다른 위치로 이동합니다.</td>
        </tr>
        <tr>
          <td>
            <code id="update">update</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              입력 필드를 특정 위치에서 업데이트하면, 변경된 필드는
              언마운트되었다가 다시 마운트됩니다. 이 동작을 원하지 않는 경우,{" "}
              <Link href="/docs/useform/setvalue">
                <code>setValue</code>
              </Link>{" "}
              API를 사용하세요.
            </p>
            <p>
              <b className={typographyStyles.note}>중요: </b>업데이트할 데이터는
              필수이며, 일부만 제공될 수 없습니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="replace">replace</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object[]) =&gt; void
              </code>
            </code>
          </td>
          <td>전체 필드 배열 값을 교체합니다.</td>
        </tr>
        <tr>
          <td>
            <code id="remove">remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
            </code>
          </td>
          <td>
            특정 위치의 입력 필드를 제거하거나, 인덱스를 제공하지 않으면 모든
            필드를 제거합니다.
          </td>
        </tr>
      </>
    ),
  },
  Controller: {
    title: "Controller",
    tips: (
      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>

        <ul>
          <li>
            <p>
              It's important to be aware of each prop's responsibility when
              working with external controlled components, such as MUI, AntD,
              Chakra UI. Controller acts as a "spy" on your input by reporting
              and setting value.
            </p>
            <ul>
              <li>
                <p>
                  <b>onChange</b>: send data back to hook form
                </p>
              </li>
              <li>
                <p>
                  <b>onBlur</b>: report input has been interacted (focus and
                  blur)
                </p>
              </li>
              <li>
                <p>
                  <b>value</b>: set up input initial and updated value
                </p>
              </li>
              <li>
                <p>
                  <b>ref</b>: allow input to be focused with error
                </p>
              </li>
              <li>
                <p>
                  <b>name</b>: give input an unique name
                </p>
              </li>
            </ul>
            <p>The following codesandbox demonstrate the usages:</p>

            <ul>
              <li>
                <p>
                  <a
                    href="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MUI and other components
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://codesandbox.io/s/chakra-ui-5mp8g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chakra UI components
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Do not <code>register</code> input again. This component is made
              to take care of the registration process.
            </p>
            <CodeArea
              rawData={`<Controller
  name="test"
  render={({ field }) => {
    // return <input {...field} {...register('test')} />; ❌ double up the registration
    return <input {...field} />; // ✅
  }}
/>
`}
            />
          </li>
          <li>
            <p>
              Customise what value gets sent to hook form by transforming the
              value during <code>onChange</code>.
            </p>
            <CodeArea
              rawData={`<Controller
  name="test"
  render={({ field }) => {
    // sending integer instead of string.
    return <input {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />;
  }}
/>
`}
            />
          </li>
        </ul>
      </>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <Link href="/ts#FieldPath" title="FieldPath type">
              <code className={typographyStyles.typeText}>FieldPath</code>
            </Link>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>control</td>
          <td>
            <Link href="/ts#Control" title="Control type">
              <code className={typographyStyles.typeText}>Control</code>
            </Link>
          </td>
          <td></td>
          <td>
            <Link href="/docs/useform/control">
              <code>control</code>
            </Link>{" "}
            object is from invoking <code>useForm</code>. Optional when using{" "}
            <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            <p>
              This is a{" "}
              <a
                href="https://reactjs.org/docs/render-props.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                render prop
              </a>
              . A function that returns a React element and provides the ability
              to attach events and value into the component. This simplifies
              integrating with external controlled components with non-standard
              prop names. Provides <code>onChange</code>, <code>onBlur</code>,{" "}
              <code>name</code>, <code>ref</code> and <code>value</code> to the
              child component, and also a <code>fieldState</code> object which
              contains specific input state.
            </p>
            <TabGroup buttonLabels={["Standard", "With Focus"]}>
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                rawData={`<Controller
  control={control}
  name="test"
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <Checkbox
      onBlur={onBlur} // notify when input is touched
      onChange={onChange} // send value to hook form
      checked={value}
      inputRef={ref}
    />
  )}
/>`}
              />
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-focus-okzu8"
                rawData={`<Controller
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
  }) => (
    <TextField
      value={value}
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched
      inputRef={ref} // wire up the input ref
    />
  )}
  name="TextField"
  control={control}
  rules={{ required: true }}
/>`}
              />
            </TabGroup>
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>unknown</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> Can not apply{" "}
              <code>undefined</code> to <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>.
            </p>
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or <code>useForm</code>'s{" "}
                  <code>defaultValues</code>. <code>undefined</code> is not a
                  valid value.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to provide <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
              </li>
              <li>
                <p>
                  Calling <code>onChange</code> with <code>undefined</code> is
                  not valid. You should use <code>null</code> or the empty
                  string as your default/cleared value instead.
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <p>
              Validation rules in the same format for{" "}
              <Link href="/docs/useform/register#options">
                <code>register</code> options
              </Link>
              , which includes:
            </p>
            <p>required, min, max, minLength, maxLength, pattern, validate</p>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-ipynf"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>shouldUnregister</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              Input will be unregistered after unmount and defaultValues will be
              removed as well.
            </p>
            <p>
              <b>Note:</b> this prop should be avoided when using with{" "}
              <code>useFieldArray</code> as <code>unregister</code> function
              gets called after input unmount/remount and reorder.
            </p>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form embraces uncontrolled components and native inputs,
          however it's hard to avoid working with external controlled component
          such as{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          and{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
            MUI
          </a>
          . This wrapper component will make it easier for you to work with
          them.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <>
        <p>
          This custom hook allows you to access the form context.{" "}
          <code>useFormContext</code> is intended to be used in deeply nested
          structures, where it would become inconvenient to pass the context as
          a prop.
        </p>
      </>
    ),
    description: "",
  },
  control: {
    title: "control",
    description: (
      <>
        <p>
          This object contains methods for registering components into React
          Hook Form.
        </p>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <p>
          <b className={typographyStyles.note}>Important:</b> do not access any
          of the properties inside this object directly. It's for internal usage
          only.
        </p>
      </>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>A simple component to render associated input's error message.</p>
    ),
    table: {
      name: <>Name of the field.</>,
      errors: (
        <>
          <code>errors</code> object from React Hook Form. Optional if you are
          using <code>FormProvider</code>.
        </>
      ),
      message: <>Inline error message.</>,
      as: (
        <>
          Wrapper component or HTML tag. For example: <code>as="span"</code> or{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
          This is a{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          for rendering error message or messages.
          <p>
            <b className={typographyStyles.note}>Note:</b> you need to set{" "}
            <code>criteriaMode</code> to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allows you to use any external validation library such
          as{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/vriad/zod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zod
          </a>
          ,{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ealush/vest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vest
          </a>
          ,{" "}
          <a
            href="https://github.com/ajv-validator/ajv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajv
          </a>{" "}
          and many others. The goal is to make sure you can seamlessly integrate
          whichever validation library you prefer. If you're not using a
          library, you can always write your own logic to validate your forms.
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            color: "white",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        Behaves similarly to the <code>watch</code> API, however, this will
        isolate re-rendering at the custom hook level and potentially result in
        better performance for your application.
      </p>
    ),
  },
  useController: {
    title: "useController",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <Link href="/ts#FieldPath" title="FieldPath type">
              <code className={typographyStyles.typeText}>FieldPath</code>
            </Link>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <Link href="/ts#Control" title="Control type">
              <code className={typographyStyles.typeText}>Control</code>
            </Link>
          </td>
          <td></td>
          <td>
            <Link href="/docs/useform/control">
              <code>control</code>
            </Link>{" "}
            object provided by invoking <code>useForm</code>. Optional when
            using <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>unknown</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> Can not apply{" "}
              <code>undefined</code> to <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>.
            </p>
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or <code>useForm</code>'s{" "}
                  <code>defaultValues</code>. <code>undefined</code> is not a
                  valid value.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to provide <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <p>
              Validation rules in the same format for <code>register</code>,
              which includes:
            </p>
            <p>required, min, max, minLength, maxLength, pattern, validate</p>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>shouldUnregister</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              Input will be unregistered after unmount and defaultValues will be
              removed as well.
            </p>
            <p>
              <b>Note:</b> this prop should be avoided when using with{" "}
              <code>useFieldArray</code> as <code>unregister</code> function
              gets called after input unmount/remount and reorder.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>disabled</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              <code>disabled</code> prop will be returned from `field` prop.
              Controlled input will be disabled and its value will be omitted
              from the submission data.
            </p>
          </td>
        </tr>
      </tbody>
    ),
    tips: (
      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>

        <ul>
          <li>
            <p>
              It's important to be aware of each prop's responsibility when
              working with external controlled components, such as MUI, AntD,
              Chakra UI. Its job is to spy on the input, report, and set its
              value.
            </p>

            <ul>
              <li>
                <p>
                  <b>onChange</b>: send data back to hook form
                </p>
              </li>
              <li>
                <p>
                  <b>onBlur</b>: report input has been interacted (focus and
                  blur)
                </p>
              </li>
              <li>
                <p>
                  <b>value</b>: set up input initial and updated value
                </p>
              </li>
              <li>
                <p>
                  <b>ref</b>: allow input to be focused with error
                </p>
              </li>
              <li>
                <p>
                  <b>name</b>: give input an unique name
                </p>
              </li>
            </ul>

            <p>
              It's fine to host your state and combined with{" "}
              <code>useController</code>.
            </p>

            <CodeArea
              url="https://codesandbox.io/s/usecontroller-own-state-wncet2?file=/src/App.tsx"
              rawData={`const { field } = useController();
const [value, setValue] = useState(field.value);

onChange={(event) => {
  field.onChange(parseInt(event.target.value)) // data send back to hook form
  setValue(event.target.value) // UI state
}}
`}
            />
          </li>
          <li>
            <p>
              Do not <code>register</code> input again. This custom hook is
              designed to take care of the registration process.
            </p>
            <CodeArea
              rawData={`const { field } = useController({ name: 'test' })

<input {...field} /> // ✅
<input {...field} {...register('test')} /> // ❌ double up the registration
`}
            />
          </li>
          <li>
            <p>
              It's ideal to use a single <code>useController</code> per
              component. If you need to use more than one, make sure you rename
              the prop. May want to consider using <code>Controller</code>{" "}
              instead.
            </p>
            <CodeArea
              rawData={`const { field: input } = useController({ name: 'test' })
const { field: checkbox } = useController({ name: 'test1' })

<input {...input} />
<input {...checkbox} />
`}
            />
          </li>
        </ul>
      </>
    ),
    description: (
      <>
        <p>
          This custom hook powers{" "}
          <Link href="/docs/usecontroller/controller">
            <code>Controller</code>
          </Link>
          . Additionally, it shares the same props and methods as{" "}
          <code>Controller</code>. It's useful for creating reusable Controlled
          input.
        </p>
      </>
    ),
  },
  setFocus: {
    description: (
      <>
        <p>
          This method will allow users to programmatically focus on input. Make
          sure input's ref is registered into the hook form.
        </p>

        <h2 id="props" className={typographyStyles.subTitle}>
          Props
        </h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th></th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td></td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>A input field name to focus</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>options</code>
                </td>
                <td>
                  <code>shouldSelect</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>Whether to select the input content on focus.</p>
                  <CodeArea
                    rawData={`const { setFocus } = useForm()\n
setFocus("name", { shouldSelect: true })
`}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This API will invoke focus method from the ref, so it's important
              to provide <code>ref</code> during <code>register</code>.
            </p>
          </li>
          <li>
            <p>
              Avoid calling <code>setFocus</code> right after <code>reset</code>{" "}
              as all input references will be removed by <code>reset</code> API.
            </p>
          </li>
        </ul>
      </>
    ),
  },
}

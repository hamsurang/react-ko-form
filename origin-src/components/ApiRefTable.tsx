import { useState } from "react"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import styles from "./ApiRefTable.module.css"
import register from "./codeExamples/register"
import registerTs from "./codeExamples/registerTs"

export default function ApiRefTable({ api }: { api: any }) {
  const [isStandard, toggleOption] = useState(true)

  return (
    <>
      {api.register.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name}</code>
              </th>
              <th>{api.register.example}</th>
            </tr>
            <tr>
              <td>
                <code>register("firstName")</code>
              </td>
              <td>
                <code>{`{firstName: 'value'}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>register("name.firstName")</code>
              </td>
              <td>
                <code>{`{name: { firstName: 'value' }}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>register("name.firstName.0")</code>
              </td>
              <td>
                <code>{`{name: { firstName: [ 'value' ] }}`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <section>
        <p>
          <b className={typographyStyles.note}>Tip:</b> register API를 호출한 후
          입력 필드에 어떤 일이 발생했는지 알아보세요:
        </p>
      </section>

      <CodeArea
        rawData={`const { onChange, onBlur, name, ref } = register('firstName'); 
// 제공한 이름으로 필드 경로에 대한 타입 검사를 포함합니다.
        
<input 
  onChange={onChange} // onChange 이벤트 할당
  onBlur={onBlur} // onBlur 이벤트 할당 
  name={name} // name 속성 할당
  ref={ref} // ref 속성 할당
/>
// 위와 동일
<input {...register('firstName')} />
`}
      />

      <h2 className={typographyStyles.subTitle} id="options">
        Options
      </h2>

      <p>{api.register.selectHelp}</p>

      <fieldset className={styles.fieldset} style={{ marginTop: 20 }}>
        <legend>{api.register.options.title}</legend>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register.options.registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register.options.registerWithValidationMessage}
        </label>
      </fieldset>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: isStandard ? 140 : 240,
                }}
              >
                {generic.name}
              </th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                {generic.description}
              </th>
              <th
                style={{
                  minWidth: 250,
                }}
              >
                {generic.codeExample}
              </th>
            </tr>
            <tr>
              <td>
                <code>ref</code>
                <br />
                <code className={typographyStyles.typeText}>React.Ref</code>
              </td>
              <td>React 요소 참조(ref).</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input {...register("test")} />`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>required</code>
                <br />
                <code className={typographyStyles.typeText}>
                  {isStandard
                    ? "boolean"
                    : `string |
{
  value: boolean,
  message: string
}`}
                </code>
              </td>
              <td>{api.register.validation.required}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    ${
      isStandard
        ? "required: true"
        : `required: 'error message' // JS only: <p>error message</p> TS only support string`
    }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>maxLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.maxLength}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
      ${
        isStandard
          ? "maxLength: 2"
          : `maxLength : {
        value: 2,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>minLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.minLength}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    minLength: ${
      isStandard
        ? 1
        : `{
      value: 1,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>max</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.max}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register('test', {
    max: ${
      isStandard
        ? 3
        : `{
      value: 3,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>min</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.min}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register("test", {
    min: ${
      isStandard
        ? 3
        : `{
      value: 3,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>pattern</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "RegExp"
                      : `{
  value: RegExp,
  message: string
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.pattern}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    pattern: ${
      isStandard
        ? "/[A-Za-z]{3}/"
        : `{
      value: /[A-Za-z]{3}/,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>validate</code>
                <br />
                <code className={typographyStyles.typeText}>
                  Function | Object
                </code>
              </td>
              <td>{api.register.validation.validate}</td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    validate: ${
      isStandard
        ? `(value, formValues) => value === '1'`
        : `value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string`
    }
  })}
/>
// object of callback functions
<input
  {...register("test1", {
    validate: ${
      isStandard
        ? `{
      positive: v => parseInt(v) > 0,
      lessThanTen: v => parseInt(v) < 10,
      validateNumber: (_, values) =>
        !!(values.number1 + values.number2), 
      checkUrl: async () => await fetch(),
    }`
        : `{
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      validateNumber: (_: number, formValues: FormValues) => {
        return formValues.number1 + formValues.number2 === 3 || 'Check sum number';
      },
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'error message',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['test', 'test2']
    }`
    }
  })}
/>
`}
                />
              </td>
            </tr>
            <tr>
              <td>
                valueAsNumber:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  보통 숫자를 반환합니다. 문제가 발생하면 <code>NaN</code> 이
                  반환됩니다.
                </p>
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> 프로세스는 유효성 검사{" "}
                      <strong>전</strong>에 발생합니다.
                    </p>
                  </li>
                  <li>
                    <p>
                      {`<input type="number" />`}에만 적용되고 지원되지만
                      trim이나 다른 데이터 조작 없이도 숫자 타입으로
                      캐스팅됩니다.
                    </p>
                  </li>
                  <li>
                    <code>defaultValue</code> 나 <code>defaultValues</code>는
                    변환되지 않습니다.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register("test", {
    valueAsNumber: true,
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                valueAsDate:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  보통 <code>Date</code> 객체를 반환합니다. 문제가 발생하면
                  <code>Invalid Date</code>가 반환됩니다.
                </p>
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> 프로세스는 유효성 검사{" "}
                      <strong>전</strong>에 발생합니다.
                    </p>
                  </li>
                  <li>
                    <p>{`<input />`}에만 적용됩니다.</p>
                  </li>
                  <li>
                    <code>defaultValue</code> 나 <code>defaultValues</code>는
                    변환되지 않습니다.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  type="date"
  {...register("test", {
    valueAsDate: true,
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                setValueAs:
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`<T>(value: any) => T`}</code>
              </td>
              <td>
                <p>함수를 실행하여 입력값을 반환합니다.</p>
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> 프로세스는 유효성 검사{" "}
                      <strong>전</strong>에 발생합니다. 또한,{" "}
                      <code>valueAsNumber</code> 나 <code>valueAsDate</code>가{" "}
                      <code>true</code>인 경우 <code>setValueAs</code>는
                      무시됩니다.
                    </p>
                  </li>
                  <li>
                    <p>텍스트 입력에만 적용됩니다. </p>
                  </li>
                  <li>
                    <code>defaultValue</code> 나 <code>defaultValues</code>는
                    변환되지 않습니다.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register("test", {
    setValueAs: v => parseInt(v),
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
                <br />
                <code className={typographyStyles.typeText}>
                  boolean = false
                </code>
              </td>
              <td>
                <p>
                  <code>disabled</code>를 <code>true</code>로 설정하면 입력 값이{" "}
                  <code>undefined</code>가 되며 입력 컨트롤이 비활성화됩니다.
                </p>
                <ul>
                  <p>
                    <code>Disabled</code> 속성은 <strong>내장된</strong> 유효성
                    검사 규칙도 제외합니다.
                  </p>
                  <p>
                    스키마 유효성 검사를 위해, 입력 또는 컨텍스트 객체에서
                    반환된 <code>undefined</code> 값을 활용할 수 있습니다.
                  </p>
                </ul>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    disabled: true
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>onChange</code>
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`(e: SyntheticEvent) => void`}</code>
              </td>
              <td>
                <p>
                  변경 이벤트에서 호출될 <code>onChange</code> 함수.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`register('firstName', {
  onChange: (e) => console.log(e)
})`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>onBlur</code>
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`(e: SyntheticEvent) => void`}</code>
              </td>
              <td>
                <p>
                  블러(blur) 이벤트에서 호출될 <code>onBlur</code> 함수.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`register('firstName', {
  onBlur: (e) => console.log(e)
})`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>value</code>
                <br />
                <code className={typographyStyles.typeText}>unknown</code>
              </td>
              <td>
                <p>
                  등록된(registered) 입력의 값을 설정합니다. 이 속성은{" "}
                  <code>useEffect</code> 내부에서 사용하거나 한 번만 호출해야
                  하며, 재실행할 때마다 입력 값을 업데이트하거나 덮어씁니다.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`register('firstName', { value: 'bill' })`}
                />
              </td>
            </tr>
            <tr>
              <td>
                shouldUnregister:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  입력이 언마운트된 후 등록이 해제되며 defaultValues도
                  제거됩니다.
                </p>
                <p>
                  <b>참고:</b> 이 속성은 입력이 언마운트/리마운트 및 재정렬된 후{" "}
                  <code>unregister</code> 함수가 호출되므로{" "}
                  <code>useFieldArray</code>와 함께 사용할 때 피해야 합니다.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    shouldUnregister: true,
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                deps:
                <br />
                <code className={typographyStyles.typeText}>
                  string | string[]
                </code>
              </td>
              <td>
                <p>
                  유효성 검사는 종속 입력에 대해 트리거 됩니다. 이는{" "}
                  <code>trigger</code>가 아닌 <code>register</code> api 에만
                  제한됩니다.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    deps: ['inputA', 'inputB'],
  })}
/>`}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              <code>name</code> 은 <b>필수</b> 이며 <b>고유</b>해야 합니다(기본
              라디오 및 체크박스 제외). 입력 이름은 점과 대괄호 구문을 모두
              지원하므로 중첩된 폼 필드를 쉽게 만들 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              <code>name</code> 은 숫자로 시작하거나 키 이름으로 숫자를 사용할
              수 없습니다. 특수 문자의 사용도 피해야 합니다.
            </p>
          </li>
          <li>
            <p>
              TypeScript 사용 시 일관성을 위해 점 구문만을 사용하고 있으므로,
              배열 폼 값에는 대괄호 <code>[]</code> 를 사용할 수 없습니다.
            </p>

            <CodeArea
              rawData={`register('test.0.firstName'); // ✅
register('test[0]firstName'); // ❌`}
            />
          </li>
          <li>
            <p>
              <code>비활성화</code>된 입력은 <code>undefined</code> 폼 값을
              결과로 제공합니다. 사용자가 입력을 업데이트하지 못하도록 하려면{" "}
              <code>readOnly</code> 를 사용하거나 전체
              {`<fieldset />`}을 비활성화할 수 있습니다. 다음은{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-disabled-inputs-oihxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                예제
              </a>
              입니다.
            </p>
          </li>
          <li>
            <p>
              필드 배열을 생성하려면 입력 이름 뒤에 점과 숫자를 붙여야 합니다.
              예: <code>test.0.data</code>
            </p>
          </li>
          <li>
            <p>
              렌더링할 때마다 이름을 변경하면 새로운 입력이
              등록(registered)됩니다. 따라서 각 등록된(registered) 입력에 대해
              고정된 이름을 사용하는 것이 좋습니다.
            </p>
          </li>
          <li>
            <p>
              언마운트에 따라 입력 값과 참조는 더 이상 제거되지 않습니다. 해당
              값과 참조를 제거하려면 unregister를 호출할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              개별 register 옵션은 <code>undefined</code> 나 <code>{`{}`}</code>
              로 제거할 수 없습니다. 대신 개별 속성을 업데이트할 수 있습니다.
            </p>

            <CodeArea
              rawData={`register('test', { required: true });
register('test', {}); // ❌
register('test', undefined); // ❌
register('test', { required: false });  // ✅
`}
            />
          </li>
          <li>
            <p>
              타입 검사와 충돌을 피하기 위해 <code>ref</code>, <code>_f</code>{" "}
              와 같은 키워드는 피해야 합니다.
            </p>
          </li>
        </ul>

        <h2 id="example" className={typographyStyles.subTitle}>
          Examples
        </h2>

        <CodeArea
          rawData={register}
          url="https://codesandbox.io/s/register-is0sfo"
          tsRawData={registerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-register-ts-ip2j3"
        />

        <h2 className={typographyStyles.subTitle}>Video</h2>
        <p>
          다음 동영상에서는 <code>register</code> API에 대해 자세히 설명합니다.
        </p>

        <iframe
          width="100%"
          height="528"
          title="react hook form controller build"
          src="https://www.youtube.com/embed/JFIpCoajYkA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {api.register.options.note}
      </div>
    </>
  )
}

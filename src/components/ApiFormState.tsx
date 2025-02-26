import { memo } from "react"
import typographyStyles from "../styles/typography.module.css"
import FormStateTable from "./FormStateTable"
import TabGroup from "./TabGroup"
import CodeArea from "./CodeArea"
import formStateUseEffect from "./codeExamples/formStateUseEffect"
import formStateUseEffectTs from "./codeExamples/formStateUseEffectTs"

function ApiFormState({ api }: { api: any }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          formState: <span className={typographyStyles.typeText}>Object</span>
        </h2>
      </code>
      {api.formState.description}

      <FormStateTable api={api} />

      <h2 id="rules" className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <ul>
        <li>
          <p>
            <code>formState</code>는 렌더링 성능을 향상시키고 특정 상태가
            구독되지 않았을 때 추가 로직을 건너뛰기 위해{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proxy
            </a>{" "}
            로 감싸져 있습니다. 따라서 상태 업데이트를 활성화하려면{" "}
            <code>렌더링</code> 전에 formState을 호출하거나 읽어야 합니다.
          </p>
        </li>
        <li>
          <p>
            <code>formState</code>는 일괄적으로 업데이트됩니다.
            <code>useEffect</code>를 통해 <code>formState</code>를 구독하려면{" "}
            <code>formState</code>를 의존성 배열(optional array)에 포함시켜야
            합니다.
          </p>
          <TabGroup buttonLabels={["snippet", "example"]}>
            <CodeArea
              rawData={`useEffect(() => {
  if (formState.errors.firstName) {
    // 여기에 로직을 작성하세요.
  }
}, [formState]); // ✅ 
// ❌ formState.errors는 useEffect를 트리거하지 않습니다.        
`}
            />
            <CodeArea
              rawData={formStateUseEffect}
              tsRawData={formStateUseEffectTs}
            />
          </TabGroup>
        </li>
        <li>
          <p>
            <code>formState</code>를 구독할 때 논리 연산자에 주의하세요.
          </p>

          <CodeArea
            rawData={`// ❌ formState.isValid는 조건부로 접근됩니다, 
// 따라서 Proxy는 해당 상태의 변경 사항을 구독하지 않습니다.
return <button disabled={!formState.isDirty || !formState.isValid} />;
  
// ✅ 변경 사항을 구독하려면 모든 formState 값을 읽으세요.
const { isDirty, isValid } = formState;
return <button disabled={!isDirty || !isValid} />;
`}
          />
        </li>
      </ul>
    </>
  )
}

export default memo(ApiFormState)

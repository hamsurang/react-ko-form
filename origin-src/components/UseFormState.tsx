import Footer from "./Footer"
import Link from "next/link"
import api from "../data/api"
import useFormState from "./codeExamples/useFormState"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import FormStateTable from "./FormStateTable"
import CodeArea from "./CodeArea"
import tableStyles from "../styles/table.module.css"
import generic from "../data/generic"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

const UseFormState = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFormState
      </h1>
      <p className={typographyStyles.subHeading}>폼 상태 업데이트를 구독</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useFormState:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`({ control: Control }) => FormState`}</span>
              </h2>
            </code>

            <p>
              이 커스텀 훅을 사용하면 개별 폼 상태를 구독하고, 해당 커스텀 훅
              수준에서 리렌더링을 격리할 수 있습니다. 이 훅은 폼 상태 구독과
              관련하여 자체적인 범위를 가지므로, 다른 useFormState 나 useForm 에
              영향을 주지 않습니다. 이 훅을 활용하면 규모가 크고 복잡한 폼
              애플리케이션에서 리렌더링 영향을 줄일 수 있습니다.
            </p>

            <h2 className={typographyStyles.subTitle}>Props</h2>

            <p>
              다음 표는 <code>useFormState</code>의 인자에 대한 정보를 포함하고
              있습니다.
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
                      <code>control</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>object</code>
                    </td>
                    <td>
                      <code>useForm</code>이 제공하는{" "}
                      <Link href="/docs/useform/control">
                        <code>control</code>
                      </Link>{" "}
                      객체. <code>FormProvider</code>를 사용하고 있다면 선택
                      사항입니다.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>name</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        string | string[]
                      </code>
                    </td>
                    <td>
                      단일 입력 필드의 이름을 지정하거나, 여러 입력 필드의 경우
                      배열로 제공할 수 있으며, 모든 입력 필드의 formState
                      업데이트를 구독할 수도 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>disabled</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        boolean = false
                      </code>
                    </td>
                    <td>
                      <p>구독을 비활성화할 수 있는 옵션.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>exact</code>
                    </td>
                    <td>
                      <code className={typographyStyles.typeText}>
                        boolean = false
                      </code>
                    </td>
                    <td>
                      <p>
                        이 prop을 사용하면 입력 필드 이름 구독 시 정확히
                        일치하는 항목만 구독할 수 있습니다.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FormStateTable api={api} />

            <h2 id="rules" className={typographyStyles.rulesTitle}>
              Rules
            </h2>

            <p>
              반환된 <code>formState</code> 는 Proxy 로 감싸져 있어, 특정 상태가
              구독되지 않은 경우 불필요한 연산을 건너뛰어 렌더링 성능을
              향상시킵니다. 따라서 구독을 활성화하려면 formState 를 렌더링 전에
              반드시 구조 분해하거나 읽어야 합니다.
            </p>

            <CodeArea
              rawData={`const { isDirty } = useFormState(); // ✅
const formState = useFormState(); // ❌ formState를 구조 분해해야 합니다.     
`}
            />

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={useFormState}
              url="https://codesandbox.io/s/useformstate-75xly"
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default UseFormState

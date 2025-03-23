import generic from "../data/generic"
import tableStyles from "../styles/table.module.css"
import typographyStyles from "../styles/typography.module.css"
import Link from "next/link"
import { FormStateApi } from "./FormStateApi"

const UseControllerMethods = ({
  isController = false,
}: {
  isController: boolean
}) => {
  return (
    <>
      <h2 className={typographyStyles.subTitle}>Return</h2>
      <p>
        다음 표는 <code>{isController ? "Controller" : "useController"}</code>가 제공하는 프로퍼티에 대한 정보를 포함하고 있습니다.
      </p>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Object Name</th>
            <th>{generic.name}</th>
            <th>{generic.type}</th>
            <th>{generic.description}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>onChange</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>
                {"(value: any) => void"}
              </code>
            </td>
            <td>
              <p>입력값을 라이브러리에 전송하는 함수.</p>
              <ul>
                <li>
                  이 함수는 입력 필드의 <code>onChange</code> prop에 할당되어야 하며,
                  <b>
                    <code>undefined</code> 가 아니어야</b> 합니다. 
                </li>
                <li>
                  <p>
                    이 prop은 {" "}
                    <Link
                      href="/docs/useform/formstate"
                      aria-label="read more about formstate"
                    >
                      formState
                    </Link>{" "}
                    를 업데이트 하므로,{" "}
                    <Link
                      href="/docs/useform/setvalue"
                      aria-label="read more about setValue"
                    >
                      setValue
                    </Link>{" "}
                    또는 필드 업데이트와 관련된 다른 API를 호출하지 않아야 합니다.
                  </p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>onBlur</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>{"() => void"}</code>
            </td>
            <td>
              <p>
                입력 필드의 onBlur 이벤트를 라이브러리로 전달하는 함수입니다. 
                이 함수는 입력 필드의 <code>onBlur</code> prop에 할당되어야 합니다. 
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>value</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>unknown</code>
            </td>
            <td>
              <p>제어 컴포넌트의 현재 값.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>disabled</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>입력 필드의 비활성화 상태.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>name</code>
            </td>
            <tr>
              <code className={typographyStyles.typeText}>string</code>
            </tr>
            <td>
              <p>등록(registered)된 입력 필드의 이름.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>ref</code>
            </td>
            <tr>
              <code className={typographyStyles.typeText}>React.Ref</code>
            </tr>
            <td>
              <p>
                hook form을 입력 필드와 연결하는데 사용하는 ref. 이{" "}
                <code>ref</code>를 컴포넌트 입력 필드의 ref에 할당하여 hook form이 에러가 있는 인풋 필드에 포커스를 맞출 수 있도록 합니다.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>invalid</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>현재 입력 필드의 유효하지 않은 상태.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>isTouched</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>현재 제어 입력 필드의 터치된 상태.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>isDirty</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>현재 제어 입력 필드의 변경된 상태.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>error</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>object</code>
            </td>
            <td>
              <p>특정 입력 필드에 대한 에러.</p>
            </td>
          </tr>
          <FormStateApi columnIndent />
        </tbody>
      </table>
    </>
  )
}

export default UseControllerMethods

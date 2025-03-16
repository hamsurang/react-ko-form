import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useFieldArrayConditional from "./codeExamples/useFieldArrayConditional"
import useFieldArrayTS from "./codeExamples/useFieldArrayTS"
import useFieldArrayFocus from "./codeExamples/useFieldArrayFocus"
import Link from "next/link"
import useFieldArrayPreview from "./codeExamples/useFieldArrayPreview"

export default function UseFieldArrayContent({ api }: { api: any }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFieldArray:{" "}
          <Link href="/ts#UseFieldArrayProps">
            <code className={typographyStyles.typeText}>
              UseFieldArrayProps
            </code>
          </Link>
        </h2>
      </code>

      {api.useFieldArray.description}

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name}</th>
              <th>{generic.type}</th>
              <th>{generic.description}</th>
            </tr>
            {api.useFieldArray.table}
          </tbody>
        </table>
      </div>

      <h2 id="rules" className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <ul>
        <li>
          <p>
            <code>useFieldArray</code>는 <code>key</code> prop으로 사용되는
            고유한 식별자인 <code>id</code>를 자동으로 생성합니다. 왜 이 기능이
            필요한지에 대한 자세한 내용은 아래 링크를 참고하세요:{" "}
            <a
              href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://react.dev/learn/rendering-lists
            </a>
          </p>
          <p>
            <code>field.id</code>(그리고 <code>index</code>가 아니라)이 반드시
            컴포넌트의 key로 추가되어야 합니다. 그렇지 않으면 리렌더링 시 필드가
            깨질 수 있습니다:
            <CodeArea
              withOutCopy
              rawData={`// ✅ correct:
{fields.map((field, index) => <input key={field.id} ... />)}

// ❌ incorrect:
{fields.map((field, index) => <input key={index} ... />)}
`}
            />
          </p>
        </li>
        <li>
          <p>동작을 연달아 여러 번 실행하는 것은 권장되지 않습니다.</p>
          <CodeArea
            withOutCopy
            rawData={`
onClick={() => {
  append({ test: 'test' });
  remove(0);
}}
            
// ✅ 더 나은 해결책: remove 동작은 두 번째 렌더링 후에 실행됩니다.
React.useEffect(() => {
  remove(0);
}, [remove])

onClick={() => {
  append({ test: 'test' });
}}
            `}
          />
        </li>
        <li>
          <p>
            각 <code>useFieldArray</code>는 고유하며 자체적인 상태 업데이트를
            가집니다. 즉, 동일한 <code>name</code>을 가진 useFieldArray를 여러
            개 사용해서는 안 됩니다.
          </p>
        </li>
        <li>
          <p>
            각 입력 필드의 name 값은 고유해야 합니다. 만약 같은 name을 사용하는
            체크박스나 라디오 버튼을 만들어야 한다면, <code>useController</code>{" "}
            또는 <code>Controller</code>와 함께 사용하세요.
          </p>
        </li>
        <li>
          <p>평면 필드 배열(flat field array)은 지원되지 않습니다.</p>
        </li>
        <li>
          <p>
            append, prepend, insert, update를 사용할 때, 필드 배열에 빈 객체{" "}
            <code>{}</code>를 추가할 수 없습니다. 모든 입력 필드의
            defaultValues를 제공해야 합니다.
          </p>
          <CodeArea
            withOutCopy
            rawData={`append(); ❌
append({}); ❌
append({ firstName: 'bill', lastName: 'luo' }); ✅`}
          />
        </li>
      </ul>

      <h2 className={typographyStyles.subTitle}>TypeScript</h2>

      <ul>
        <li>
          <p>
            입력 필드를 <code>register</code>할 때, <code>name</code> 값을{" "}
            <code>const</code>로 캐스팅해야 합니다.
          </p>
          <CodeArea
            withOutCopy
            rawData={`<input key={field.id} {...register(\`test.\${index}.test\` as const)} />`}
          />
        </li>
        <li>
          <p>
            순환 참조(circular reference)는 지원되지 않습니다. 자세한 내용은 이{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form/issues/4055"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github issue
            </a>{" "}
            를 참고하세요.
          </p>
        </li>
        <li>
          <p>
            중첩된 필드 배열(nested field array)을 사용할 경우, 필드 배열을
            name으로 캐스팅해야 합니다.
          </p>
          <CodeArea
            withOutCopy
            rawData={`const { fields } = useFieldArray({ name: \`test.\${index}.keyValue\` as 'test.0.keyValue' });`}
          />
        </li>
      </ul>

      <h2 id="example" className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup
        buttonLabels={[
          "useFieldArray",
          "Nested Form",
          "conditional Field Array",
          "Focus Name/index",
        ]}
      >
        <CodeArea
          rawData={useFieldArray}
          tsRawData={useFieldArrayTS}
          tsUrl="https://codesandbox.io/s/calc-i231d"
          url="https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn"
        />
        <CodeArea
          rawData={useFieldArrayPreview}
          url="https://codesandbox.io/s/usefieldarray-with-preview-odmtx5"
        />
        <CodeArea
          rawData={useFieldArrayConditional}
          url="https://codesandbox.io/s/usefieldarray-conditional-2wi6f"
        />
        <CodeArea rawData={useFieldArrayFocus} />
      </TabGroup>

      <h2 className={typographyStyles.subTitle}>Video</h2>
      <p>
        다음 영상에서 <code>useFieldArray</code>의 기본 사용 방법을 설명합니다.
      </p>

      <iframe
        width="100%"
        height="528"
        title="react hook form - useFieldArray"
        src="https://www.youtube.com/embed/4MrbfGSFY2A"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h2 className={typographyStyles.subTitle}>Tips</h2>
      <h4 className={typographyStyles.questionTitle}>Custom Register</h4>
      <p>
        실제 입력 필드가 없어도 <code>Controller</code>에서 입력을{" "}
        <code>register</code>할 수 있습니다. 이를 통해{" "}
        <code>useFieldArray</code>를 복잡한 데이터 구조에서도 빠르고 유연하게
        활용할 수 있으며, 실제 데이터가 입력 필드 내부에 저장되지 않는 경우에도
        사용할 수 있습니다..
      </p>

      <CodeArea
        url="https://codesandbox.io/s/usefieldarray-virtual-input-v9wyw"
        rawData={`import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const ConditionalInput = ({ control, index, field }) => {
  const value = useWatch({
    name: "test",
    control
  });

  return (
    <Controller
      control={control}
      name={\`test.\$\{index\}.firstName\`}
      render={({ field }) =>
        value?.[index]?.checkbox === "on" ? <input {...field} /> : null
      }
    />
  );
};

function App() {
  const { control, register } = useForm();
  const { fields, append, prepend } = useFieldArray({
    control,
    name: "test"
  });

  return (
    <form>
      {fields.map((field, index) => (
        <ConditionalInput key={field.id} {...{ control, index, field }} />
      ))}
    </form>
  );
}
`}
      />

      <h4 className={typographyStyles.questionTitle}>Controlled Field Array</h4>

      <p>
        필드 배열 전체를 제어해야 하는 경우가 있을 수 있으며, 이때 각 onChange
        이벤트는 <code>fields</code> 객체에 반영됩니다.
      </p>

      <CodeArea
        url="https://codesandbox.io/s/infallible-bush-c92l0?file=/src/App.tsx"
        rawData={`import { useForm, useFieldArray } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, control, watch } = useForm<FormValues>();
  const { fields, append } = useFieldArray({
    control,
    name: "fieldArray"
  });
  const watchFieldArray = watch("fieldArray");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });

  return (
    <form>
      {controlledFields.map((field, index) => {
        return <input {...register(\`fieldArray.\${index}.name\` as const)} />;
      })}
    </form>
  );
}`}
      />
    </>
  )
}

export default `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; 이 속성을 사용하여 필드에 값을 채울 수 있습니다.
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(\`test.\${index}.firstName\`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={\`test.\${index}.lastName\`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}
`

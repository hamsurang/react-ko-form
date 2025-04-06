export default `import { TextField } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

function Input({ control, name }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField 
      onChange={field.onChange} // hook form에 값 전달
      onBlur={field.onBlur} // 입력 필드가 touched/blur 되었을 때 알림
      value={field.value} // 입력값
      name={field.name} // 입력 필드의 이름을 전달
      inputRef={field.ref} // 입력 필드의 ref를 전달하여, 에러가 발생했을 때 입력 필드에 포커스를 맞출 수 있도록 함
    />
  );
}
`

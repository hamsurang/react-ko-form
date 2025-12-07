export default `import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    // 렌더링 전에 formState를 읽어 Proxy를 통해 폼 상태를 구독하세요.
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
}
`

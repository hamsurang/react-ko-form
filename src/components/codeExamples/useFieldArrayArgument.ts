export default `function FieldArray() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props는 useForm에서 제공됨 (FormProvider를 사용 중이라면 선택 사항)
    name: "test", // 필드 배열의 고유한 이름
  });

  return (
    {fields.map((field, index) => (
      <input
        key={field.id} // 필드의 id를 key로 포함하는 것이 중요함
        {...register(\`test.\${index}.value\`)} 
      />
    ))}
  );
}

`

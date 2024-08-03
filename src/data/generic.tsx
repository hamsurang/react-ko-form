import Link from "next/link"

export default {
  copy: "Copy",
  codeCopied: "Copied",
  required: "Required",
  learnMore: {
    title: "Want to learn more?",
    description:
      "Check out the React Hook Form documentation and learn all about the API.",
    buttonText: "Checkout API",
  },
  advanceUsage: {
    title: "Advanced Usage",
    description: `Learn how to build complex and accessible forms`,
    buttonText: `Learn Advanced Usage`,
  },
  needYourSupport: {
    title: "지원해 주셔서 감사합니다",
    description:
      "프로젝트에서 React Hook Form이 유용하다고 생각하신다면, 스타를 눌러 지원해 주시길 부탁드립니다.",
    buttonText: "GitHub에서 스타 누르기",
  },
  codeExample: "Code Examples",
  menu: "Menu",
  note: "Note",
  select: "Select",
  name: "Name",
  type: "Type",
  default: "Default",
  description: "Description",
  features: "Features",
  delete: "Delete",
  example: "Example",
  edit: "수정",
  cancelEdit: "Cancel Edit",
  deleteAll: "Delete All",
  create: "Create",
  update: "Update",
  copied: "Copy code into your clipboard.",
  return: "Return",
  blog: "Articles/Blog",
  video: "Videos",
  newsletter: "Newsletter",
  binding: "3rd Party Bindings",
  liveDemo: "라이브 데모",
  control: (
    <>
      <Link href="/docs/useform/control">
        <code>control</code>
      </Link>{" "}
      object provided by <code>useForm</code>. It's optional if you are using
      FormProvider.
    </>
  ),
}

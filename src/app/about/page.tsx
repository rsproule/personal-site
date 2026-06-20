import { PageHeading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const about: SimpleListItem[] = [
  {
    title:
      "Software engineer slash venture investor with deep interest in distributed systems and applied cryptography.",
  },
  {
    title: "Github",
    href: "https://github.com/rsproule",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/rsproule",
  },
];

export default function About() {
  return (
    <>
      <PageHeading>About</PageHeading>
      <SimpleList items={about} />
    </>
  );
}

import { PageHeading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const about: SimpleListItem[] = [
  {
    title: "Software engineer, venture investor, startup founder, ex athlete.",
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

import { PageHeading, PageSubheading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const books: SimpleListItem[] = [
  {
    title: "Dune",
    credit: "Frank Herbert",
    description: "1-4 are excellent; 5 and 6 get weird.",
  },
  {
    title: "The Lord of the Rings",
    credit: "J.R.R. Tolkien",
    description:
      "Read this every year from age 12-17. Greatest story ever written.",
  },
  {
    title: "Hyperion",
    credit: "Dan Simmons",
    description: "Canterbury tales style but incredible sci-fi world building",
  },
  {
    title: "Red Rising",
    credit: "Pierce Brown",
    description:
      "Extremely entertaining, decently written heroic sci-fi action.",
  },
  {
    title: "The Will of the Many",
    credit: "James Islington",
    description:
      "Pretty much like hunger games but grounded magic/sci fi system",
  },
];

export default function Books() {
  return (
    <>
      <PageHeading>Books</PageHeading>
      <PageSubheading>
        I don&apos;t write books (...yet), but here are some that I like.
      </PageSubheading>
      <SimpleList items={books} />
    </>
  );
}

import { PageHeading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const writing: SimpleListItem[] = [
  {
    href: "https://merit.systems/blog/manifesto",
    title: "Open Source Capitalism",
    description:
      "Manifesto for a new economic engine for open source innovation.",
    date: "2025-01-01",
  },
  {
    href: "https://www.youtube.com/watch?v=vLhnNVdRGfE",
    title: "Account Abstraction Panel at Layer 2 Day in Denver",
    description:
      "Panel discussion on account abstraction with @tarunchitra, @gluk64, and @wjvill at Layer 2 Day in Denver.",
    date: "2023-03-28",
  },
  {
    href: "https://blockchain.capital/a-developers-guide-to-the-zkgalaxy/",
    title: "The Developer's Guide to the zkGalaxy",
    description:
      "Living document with an overview of the latest developer tools for working with zk.",
    date: "2023-02-08",
  },
  {
    href: "https://medium.com/p/73f874cfa9a5",
    title: "Power of predicates",
    description:
      "Technical deep dive into predicates and why this design is interesting for account abstraction implementation.",
    date: "2023-01-18",
  },
  {
    href: "https://medium.com/p/86cf9ccdc159",
    title: "Exploring the FuelVM",
    description:
      "High level overview of Fuels UTXO based blockchain focused virtual machine.",
    date: "2022-10-19",
  },
];

export default function Writing() {
  return (
    <>
      <PageHeading>Writing</PageHeading>
      <SimpleList items={writing} />
    </>
  );
}

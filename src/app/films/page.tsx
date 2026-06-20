import { PageHeading, PageSubheading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const films: SimpleListItem[] = [
  {
    title: "Denis Villeneuve",
    description: "Dune, Arrival, Blade Runner 2049",
  },
  {
    title: "Christopher Nolan",
    description: "The Prestige, Memento, Interstellar",
  },
  {
    title: "David Fincher",
    description: "The Social Network, Se7en, Zodiac",
  },
  {
    title: "Stanley Kubrick",
    description: "2001: A Space Odyssey, The Shining, Dr. Strangelove",
  },
  {
    title: "Bong Joon-ho",
    description: "Parasite, Memories of Murder, Snowpiercer",
  },
  {
    title: "Wes Anderson",
    description:
      "The Grand Budapest Hotel, Fantastic Mr. Fox, Moonrise Kingdom",
  },
  {
    title: "Edgar Wright",
    description: "Hot Fuzz, Shaun of the Dead, Baby Driver",
  },
  {
    title: "Coen Brothers",
    description: "No Country for Old Men, Fargo, The Big Lebowski",
  },
  {
    title: "Guy Ritchie",
    description: "Snatch, Lock, Stock and Two Smoking Barrels, The Gentlemen",
  },
];

export default function Films() {
  return (
    <>
      <PageHeading>Films</PageHeading>
      <PageSubheading>
        I don&apos;t make films (...yet), but here are some people that do and I
        like their work.
      </PageSubheading>
      <SimpleList items={films} />
    </>
  );
}

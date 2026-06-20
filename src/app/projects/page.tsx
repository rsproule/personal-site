import Link from "next/link";

const projects = [
  {
    link: "https://github.com/rsproule/super-spreader",
    title: "Farcaster Super Spreader",
    description:
      "A farcaster frame based game where users work to spread or kill a virtual virus.",
    date: "2024-01-25",
  },
  {
    link: "https://github.com/rsproule/tanks",
    title: "Tact",
    description: "An on-chain PvP strategy game.",
    date: "2023-07-11",
  },
  {
    link: "https://github.com/rsproule/gotcha",
    title: "gotcha",
    description: "Rust based ETH transaction crawler to trace flow of funds in 3D.",
    date: "2023-06-27",
  },
  {
    link: "https://github.com/rsproule/zk-sentiment",
    title: "zk-sentiment",
    description: "Proof of sentiment in zero knowledge.",
    date: "2023-04-27",
  },
  {
    link: "https://github.com/rsproule/n-per-epoch",
    title: "n-per-epoch",
    description: "Privacy preserving smart contract rate limiting modifier.",
    date: "2023-03-31",
  },
  {
    link: "https://ethereumpostalservice.com",
    title: "Ethereum Postal Service",
    description:
      "Send physical mail driven by blockchain events. Collab with sragss.",
    date: "2023-02-18",
  },
  {
    link: "https://github.com/BlockchainCap/fuel-order-book",
    title: "fuel-order-book",
    description: "Order book implementation using predicates on fuel",
    date: "2022-11-08",
  },
  {
    link: "https://github.com/BlockchainCap/swaymigo",
    title: "swaymigo",
    description:
      "A library for common smart contract patterns in Sway on the FuelVM.",
    date: "2022-10-18",
  },
  {
    link: "https://github.com/BlockchainCap/zk-vote",
    title: "zkVote",
    description:
      "Privacy preserving governance mechanism using zero knowledge for proof of merkle inclusion.",
    date: "2022-05-13",
  },
  {
    link: "https://github.com/rsproule/ens-searcher",
    title: "ens-searcher",
    description: "Search for ens names by certain traits",
    date: "2022-03-18",
  },
  {
    link: "https://github.com/BlockchainCap/node-provider-benchmark",
    title: "node-benchmark",
    description:
      "Template for benchmarking arbitrary RPC calls against multiple providers.",
    date: "2022-03-25",
  },
];

export default function Projects() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Projects</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {projects.map((project) => (
            <li key={project.link}>
              <Article {...project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface ArticleProps {
  link: string;
  title: string;
  description: string;
  date: string;
}

function Article(props: ArticleProps) {
  const title = props.link.startsWith("http") ? (
    <a href={props.link}>{props.title}</a>
  ) : (
    <Link href={props.link}>{props.title}</Link>
  );

  return (
    <>
      {props.date} {title} - {props.description}
    </>
  );
}

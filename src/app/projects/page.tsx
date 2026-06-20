import { PageHeading } from "@/components/page-heading";
import { SimpleList, type SimpleListItem } from "@/components/simple-list";

const projects: SimpleListItem[] = [
  {
    href: "https://tryponcho.com",
    title: "Poncho",
    description: "Hosted agent harness purpose built for Agentic Commerce",
    date: "2026-03-23",
  },
  {
    href: "https://mppscan.com",
    title: "mppscan",
    description: "Marketplace and discovery layer for mpp resources",
    date: "2026-02-11",
  },
  {
    href: "https://agentcash.dev",
    title: "AgentCash",
    description: "Agent wallet for paying + using x402 + mpp resources",
    date: "2026-02-11",
  },
  {
    href: "https://x402scan.com",
    title: "x402scan",
    description: "Marketplace hub for x402 merchants",
    date: "2025-09-23",
  },
  {
    href: "https://echo.merit.systems",
    title: "Echo",
    description: "Drop in pay per use LLM for application developers",
    date: "2025-05-05",
  },
  {
    href: "https://terminal.merit.systems",
    title: "The Terminal",
    description: "Open source capital allocation for open source.",
    date: "2024-07-15",
  },
  {
    href: "https://github.com/rsproule/super-spreader",
    title: "Farcaster Super Spreader",
    description:
      "A farcaster frame based game where users work to spread or kill a virtual virus.",
    date: "2024-01-25",
  },
  {
    href: "https://github.com/rsproule/tanks",
    title: "Tact",
    description: "An on-chain PvP strategy game.",
    date: "2023-07-11",
  },
  {
    href: "https://github.com/rsproule/gotcha",
    title: "gotcha",
    description:
      "Rust based ETH transaction crawler to trace flow of funds in 3D.",
    date: "2023-06-27",
  },
  {
    href: "https://github.com/rsproule/zk-sentiment",
    title: "zk-sentiment",
    description: "Proof of sentiment in zero knowledge.",
    date: "2023-04-27",
  },
  {
    href: "https://github.com/rsproule/n-per-epoch",
    title: "n-per-epoch",
    description: "Privacy preserving smart contract rate limiting modifier.",
    date: "2023-03-31",
  },
  {
    href: "https://ethereumpostalservice.com",
    title: "Ethereum Postal Service",
    description:
      "Send physical mail driven by blockchain events. Collab with sragss.",
    date: "2023-02-18",
  },
  {
    href: "https://github.com/BlockchainCap/fuel-order-book",
    title: "fuel-order-book",
    description: "Order book implementation using predicates on fuel",
    date: "2022-11-08",
  },
  {
    href: "https://github.com/BlockchainCap/swaymigo",
    title: "swaymigo",
    description:
      "A library for common smart contract patterns in Sway on the FuelVM.",
    date: "2022-10-18",
  },
  {
    href: "https://github.com/BlockchainCap/zk-vote",
    title: "zkVote",
    description:
      "Privacy preserving governance mechanism using zero knowledge for proof of merkle inclusion.",
    date: "2022-05-13",
  },
  {
    href: "https://github.com/rsproule/ens-searcher",
    title: "ens-searcher",
    description: "Search for ens names by certain traits",
    date: "2022-03-18",
  },
  {
    href: "https://github.com/BlockchainCap/node-provider-benchmark",
    title: "node-benchmark",
    description:
      "Template for benchmarking arbitrary RPC calls against multiple providers.",
    date: "2022-03-25",
  },
];

export default function Projects() {
  return (
    <>
      <PageHeading>Projects</PageHeading>
      <SimpleList items={projects} />
    </>
  );
}

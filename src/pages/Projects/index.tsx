export const Projects = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Projects</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <Article
              link="projects/ethmail"
              title="EthMail"
              description="Send physical mail driven by blockchain events. Collab with sragss. "
              date="2023-02-18"
            />
          </li>
          <li>
            <Article
              link="https://github.com/BlockchainCap/fuel-order-book"
              title="fuel-order-book"
              description="Order book implementation using predicates on fuel"
              date="2022-11-08"
            />
          </li>
          <li>
            <Article
              link="https://github.com/BlockchainCap/swaymigo"
              title="swaymigo"
              description="A library for common smart contract patterns in Sway on the FuelVM."
              date="2022-10-18"
            />
          </li>
          <li>
            <Article
              link="https://github.com/BlockchainCap/zk-vote"
              title="zkVote"
              description="Privacy preserving governance mechanism using zero knowledge for proof of merkle inclusion."
              date="2022-05-13"
            />
          </li>
          <li>
            <Article
              link="https://github.com/rsproule/ens-searcher"
              title="ens-searcher"
              description="Search for ens names by certain traits"
              date="2022-03-18"
            />
          </li>
          <li>
            <Article
              link="https://github.com/rsproule/ens-searcher"
              title="node-benchmark"
              description="Template for benchmarking arbitrary RPC calls against multiple providers."
              date="2022-03-25"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

interface ArticleProps {
  link: string;
  title: string;
  description: string;
  date: string;
}
const Article = (props: ArticleProps) => {
  return (
    <>
      {props.date} <a href={props.link}>{props.title}</a> - {props.description}
    </>
  );
};

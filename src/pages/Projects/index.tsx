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
              link="https://github.com/rsproule/tanks"
              title="Tank turn tactics"
              description="An on-chain PvP strategy game."
              date="2023-07-11"
            />
          </li>
          <li>
            <Article
              link="https://github.com/rsproule/gotcha"
              title="gotcha"
              description="Rust based ETH transaction crawler to trace flow of funds in 3D."
              date="2023-06-27"
            />
          </li>
          <li>
            <Article
              link="https://github.com/rsproule/zk-sentiment"
              title="zk-sentiment"
              description="Proof of sentiment in zero knowledge."
              date="2023-04-27"
            />
          </li>
          <li>
            <Article
              link="https://github.com/rsproule/n-per-epoch"
              title="n-per-epoch"
              description="Privacy preserving smart contract rate limiting modifier."
              date="2023-03-31"
            />
          </li>
          <li>
            <Article
              link="projects/eps"
              title="Ethereum Postal Service"
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
              link="https://github.com/BlockchainCap/node-provider-benchmark"
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

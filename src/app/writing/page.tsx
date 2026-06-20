const writing = [
  {
    link: "https://www.youtube.com/watch?v=vLhnNVdRGfE",
    title: "Account Abstraction Panel at Layer 2 Day in Denver",
    description:
      "Panel discussion on account abstraction with @tarunchitra, @gluk64, and @wjvill at Layer 2 Day in Denver.",
    date: "2023-03-28",
  },
  {
    link: "https://blockchain.capital/a-developers-guide-to-the-zkgalaxy/",
    title: "The Developer's Guide to the zkGalaxy",
    description:
      "Living document with an overview of the latest developer tools for working with zk.",
    date: "2023-02-08",
  },
  {
    link: "https://medium.com/p/73f874cfa9a5",
    title: "Power of predicates",
    description:
      "Technical deep dive into predicates and why this design is interesting for account abstraction implementation.",
    date: "2023-01-18",
  },
  {
    link: "https://medium.com/p/86cf9ccdc159",
    title: "Exploring the FuelVM",
    description:
      "High level overview of Fuels UTXO based blockchain focused virtual machine.",
    date: "2022-10-19",
  },
];

export default function Writing() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Writing</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {writing.map((article) => (
            <li key={article.link}>
              <Article {...article} />
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
  return (
    <>
      {props.date} <a href={props.link}>{props.title}</a> - {props.description}
    </>
  );
}

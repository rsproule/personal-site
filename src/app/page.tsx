import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Ryan Sproule</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          Software engineer slash venture investor with deep interest in
          distributed systems and applied cryptography... among other things.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>
            <Link href="/writing">Writing</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <a href="https://twitter.com/ryanfsproule">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/rsproule">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

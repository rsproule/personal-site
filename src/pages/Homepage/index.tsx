import { useState } from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import Snake from "react-simple-snake";

export const Homepage = () => {
  const [snake, setSnake] = useState<boolean>(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Ryan Sproule</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          Software engineer slash venture investor with deep interest in
          distributed systems and applied cryptography... among other things.{" "}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>
            <Link to="/writing">Writing</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href="https://twitter.com/sproule_">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/rsproule">Github</a>
          </li>
        </ul>
      </div>

      {snake ? (
        <div
          style={{
            marginTop: "5rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "5rem",
              width: "100vh",
            }}
          >
            <Snake percentageWidth={80} />
          </div>
        </div>
      ) : (
        <div
          style={{
            marginTop: "5rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p onClick={() => setSnake(true)}>snek</p>
        </div>
      )}
    </div>
  );
};

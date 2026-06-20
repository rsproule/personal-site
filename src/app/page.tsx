import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1 className="mb-4 text-base font-semibold leading-6">Ryan Sproule</h1>

      <nav aria-label="Primary">
        <ul className="space-y-1">
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <Link href="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <Link href="/writing">Writing</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <Link href="/projects">Projects</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <Link href="/books">Books</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <Link href="/films">Films</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <a href="https://twitter.com/rsproule">Twitter</a>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-mono text-base font-normal leading-6"
            >
              <a href="https://github.com/rsproule">Github</a>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}

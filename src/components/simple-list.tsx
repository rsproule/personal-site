import { cn } from "@/lib/utils";
import Link from "next/link";

export interface SimpleListItem {
  title: string;
  credit?: string;
  description?: string;
  date?: string;
  href?: string;
}

interface SimpleListProps {
  items: SimpleListItem[];
  emptyText?: string;
}

export function SimpleList({
  items,
  emptyText = "Nothing here yet.",
}: SimpleListProps) {
  if (items.length === 0) {
    return <p className="text-muted-foreground">{emptyText}</p>;
  }

  const hasDates = items.some((item) => item.date);

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={`${item.date ?? "item"}-${item.title}`}
          className={cn(
            "grid gap-x-4 gap-y-1",
            hasDates ? "sm:grid-cols-[7rem_1fr]" : "sm:grid-cols-1",
          )}
        >
          {hasDates ? (
            item.date ? (
              <time className="text-muted-foreground tabular-nums">
                {item.date}
              </time>
            ) : (
              <span aria-hidden="true" className="hidden sm:block" />
            )
          ) : null}
          <div>
            <p>
              <ListLink item={item} />
              {item.credit ? (
                <span className="text-muted-foreground">, {item.credit}</span>
              ) : null}
            </p>
            {item.description ? (
              <p className="mt-1 text-muted-foreground">{item.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

function ListLink({ item }: { item: SimpleListItem }) {
  if (!item.href) {
    return <span>{item.title}</span>;
  }

  if (item.href.startsWith("http")) {
    return <a href={item.href}>{item.title}</a>;
  }

  return <Link href={item.href}>{item.title}</Link>;
}

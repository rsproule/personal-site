import type { ReactNode } from "react";

export function PageHeading({ children }: { children: ReactNode }) {
  return <h1 className="mb-4 text-base font-semibold leading-6">{children}</h1>;
}

export function PageSubheading({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-sm italic leading-6 text-muted-foreground">
      {children}
    </p>
  );
}

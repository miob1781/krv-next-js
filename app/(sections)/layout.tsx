import { PropsWithChildren } from "react";
import IsPrivate from "@/app/ui/section/IsPrivate";

export default function SectionLayout({ children }: PropsWithChildren) {
  return (
    <IsPrivate>
      {children}
    </IsPrivate>
  );
}
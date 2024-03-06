import { HStack } from "@/styled-system/jsx";
import { Button } from "@three/ui/button";

export default function Home() {
  return (
    <main>
      <HStack gap={12}>
        <p>hello</p>
        <Button appName="lp-1">button</Button>
      </HStack>
    </main>
  );
}

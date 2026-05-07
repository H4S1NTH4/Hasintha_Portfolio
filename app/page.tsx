import portfolioData from "@/data/data.json";
import { PortfolioShell } from "@/components/PortfolioShell";

export default function Home() {
  return <PortfolioShell data={portfolioData} />;
}

import HomeCard from "./HomeCard";
import PublicationsCard from "./PublicationsCard";
import CardsSpacer from "@/components/CardsSpacer";

export default function Index() {
  return (
    <>
      <HomeCard />
      <CardsSpacer />
      <PublicationsCard />
    </>
  );
}

import CardContent from "@/profile/CardContent";
import CardHeader from "@/profile/CardHeader";
import ProfilePhoto from "@/profile/ProfilePhoto";

export default function Home() {
  return (
    <>
      <CardHeader>
        <ProfilePhoto />
      </CardHeader>
      <CardContent />
    </>
  );
}

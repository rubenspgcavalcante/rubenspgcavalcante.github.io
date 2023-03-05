import Card from "@/components/Card";
import CardHeader from "@/profile/CardHeader";
import ProfileContent from "@/profile/ProfileContent";
import ProfilePhoto from "@/profile/ProfilePhoto";

export default function HomeCard() {
  return (
    <Card>
      <CardHeader>
        <ProfilePhoto />
      </CardHeader>
      <ProfileContent />
    </Card>
  );
}

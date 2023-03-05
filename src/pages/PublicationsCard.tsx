import React from "react";
import styled from "@emotion/styled";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardBody from "@/components/CardBody";

type PublicationsCardProps = {};

const ContainerDiv = styled.div``;

export default function PublicationsCard({}: PublicationsCardProps) {
  return (
    <Card>
      <CardBody>
        <CardTitle title="Publications" />
      </CardBody>
    </Card>
  );
}

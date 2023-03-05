import Card from "@/components/Card";
import CardBody from "@/components/CardBody";
import CardTitle from "@/components/CardTitle";
import styled from "@emotion/styled";
import React from "react";

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

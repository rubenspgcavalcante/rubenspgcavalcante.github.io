import profilePic from "@/static/profile-pic.png";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { up } from "styled-breakpoints";

type ProfilePhotoProps = {};

const HeaderSlot = styled.div`
  height: 128px;
  width: 128px;
`;

const PhotoContainer = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  border: 12px solid #fff;

  ${up("sm")} {
    margin-top: 72px;
  }
`;

const ProfileImage = styled(Image)`
  position: relative;
  height: 128px;
  width: 128px;
`;

export default function ProfilePhoto({}: ProfilePhotoProps) {
  return (
    <HeaderSlot>
      <PhotoContainer>
        <ProfileImage src={profilePic} alt="Rubens Profie Picture" />
      </PhotoContainer>
    </HeaderSlot>
  );
}

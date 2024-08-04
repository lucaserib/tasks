"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

function Sidebar() {

  const {theme}  = useGlobalState();

  
  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav`
    width: ${props => props.theme.sidebarWidth};
`;
export default Sidebar;
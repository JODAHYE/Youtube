import React from "react";
import styled from "styled-components";

const Play = () => {
    return <Wrap>플레이</Wrap>;
};

export default Play;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    background: ${(props) => props.theme.colors.lightGray};
`;

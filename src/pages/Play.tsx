import React from "react";
import styled from "styled-components";

import PlayMainContainert from "../components/play/PlayMainContainert";
import PlaySubContainer from "../components/play/PlaySubContainer";

const Play = () => {
    return (
        <Wrap>
            <PlayMainContainert />
            <PlaySubContainer />
        </Wrap>
    );
};

export default Play;

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    gap: 30px;

    background: ${(props) => props.theme.colors.lightGray};
    padding: 30px 0;
`;

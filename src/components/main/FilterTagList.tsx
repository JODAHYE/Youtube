import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { mainTagState } from "../../states/filter";
import styled from "styled-components";

const FilterTagList = () => {
    const setMainTagState = useSetRecoilState(mainTagState);

    const onFilter = useCallback(
        (e) => {
            if (e.target.innerText === "예능") {
                setMainTagState("PLVbV9mqtfzKfge1I-S01Kw6HcP-j1E9Gr");
            } else if (e.target.innerText === "동물") {
                setMainTagState("PLNIjMXUSckVHnCINxUx0Al3iRRXkEDz_u");
            }
        },
        [mainTagState]
    );
    return (
        <Wrap>
            <Tag onClick={onFilter}>예능</Tag>
            <Tag>애니메이션</Tag>
            <Tag onClick={onFilter}>동물</Tag>
        </Wrap>
    );
};

export default FilterTagList;

const Wrap = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 10px;

    border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
    padding: 8px;
    background: #fff;
`;

const Tag = styled.button`
    border: 1px solid ${(props) => props.theme.colors.mainGray};
    border-radius: 20px;
    padding: 6px 10px;
    background: ${(props) => props.theme.colors.middleGray};
    transition: 0.3s;

    &:hover {
        background: ${(props) => props.theme.colors.mainGray};
    }

    &:active {
        background: ${(props) => props.theme.colors.darkGray};
    }
`;

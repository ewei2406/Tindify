import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    font-family: ${p => p.theme.headingFont};
    font-weight: ${p => p.theme.headingWeight};
    font-size: 1.75rem;
`

const Heading = ({ text }: { text: string }) => <Wrapper>
    {text}
</Wrapper>

export default Heading
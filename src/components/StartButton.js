import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton onClick = {callback}>Start Game</StyledStartButton>
    // console.log({callback});
)
export default StartButton;
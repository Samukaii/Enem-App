import styled from 'styled-components';
import {HideFormButton as HideButton} from './functionalStyles';

export const HideFormButton = HideButton;
export const CollapseForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-top: 10px;
  width:100%;
  background-color:#fff;
  border: 1px;
  height: 0px;
  transform: scaleY(0);
  align-items: center;
`;

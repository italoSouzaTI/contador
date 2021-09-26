import styled from 'styled-components/native';
import ColorDefault from '../StyledDefault';

export const Container = styled.View`
  flex: 1;
  background: ${ColorDefault.color.backGround};
  padding: 15px;
`;

export const ViewRow = styled.View<{orientacao: string}>`
  justify-content: ${props => props.orientacao};
  align-items: ${props => props.orientacao};
`;

export const BtnHistorico = styled.TouchableOpacity<{color: string}>`
  background: ${props => props.color};
  padding: 15px;
  border-radius: ${ColorDefault.btn.border}px;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${ColorDefault.color.text_color};
  text-transform: uppercase;
  font-weight: ${ColorDefault.btn.text_bold};
  font-size: ${ColorDefault.btn.font_size}px;
`;

export const ContainerCont = styled.View`
  padding: 10px;
  width: 24.5%;
  height: 143px;
  background: ${ColorDefault.color.container_count};
  justify-content: center;
  align-items: center;
`;
export const LabelCont = styled.Text`
  color: ${ColorDefault.color.text_color};
  text-transform: uppercase;
  font-weight: ${ColorDefault.btn.text_bold};
  font-size: 38px;
`;
export const BtnAction = styled.TouchableOpacity<{colorAction: string}>`
  background: ${props => props.colorAction};
  padding: 15px;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

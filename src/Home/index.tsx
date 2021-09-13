import React, {useState} from 'react';
import {View} from 'react-native';
import ColorDefault from '../StyledDefault';

import {
  Container,
  ViewRow,
  BtnHistorico,
  Label,
  ContainerCont,
  LabelCont,
  BtnAction,
} from './styles';

const Home: React.FC = () => {
  const [contUm, setContUm] = useState(0);
  const [contDois, setContDois] = useState(0);
  const [contTres, setContTres] = useState(0);
  const [contQuatro, setContQuatro] = useState(0);
  return (
    <Container>
      <ViewRow orientacao="flex-end">
        <BtnHistorico onPress={() => {}} color={`${ColorDefault.btn.blue}`}>
          <Label>Histórico</Label>
        </BtnHistorico>
      </ViewRow>
      <ViewRow orientacao="center">
        <BtnHistorico
          style={{
            width: '30%',
          }}
          onPress={() => {}}
          color={`${ColorDefault.btn.reset}`}>
          <Label>reset</Label>
        </BtnHistorico>
      </ViewRow>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <ContainerCont
          style={{
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}>
          <LabelCont>{contUm}</LabelCont>
        </ContainerCont>
        <ContainerCont>
          <LabelCont>{contDois}</LabelCont>
        </ContainerCont>
        <ContainerCont>
          <LabelCont>{contTres}</LabelCont>
        </ContainerCont>
        <ContainerCont
          style={{
            borderTopEndRadius: 4,
            borderBottomEndRadius: 4,
          }}>
          <LabelCont>{contQuatro}</LabelCont>
        </ContainerCont>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <BtnAction
          style={{
            width: '30%',
            height: 80,
          }}
          onPress={() => {}}
          colorAction={ColorDefault.btn.submit}>
          <LabelCont>-</LabelCont>
        </BtnAction>
        <BtnAction
          style={{
            width: '40%',
            height: 100,
          }}
          onPress={() => {
            setContUm(+1);
          }}
          colorAction={ColorDefault.btn.red}>
          <LabelCont>+</LabelCont>
        </BtnAction>
      </View>
    </Container>
  );
};

export default Home;

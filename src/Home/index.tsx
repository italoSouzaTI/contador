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

  const contador = () => {
    if (contQuatro <= 2) {
      console.log('entrei no 1');
      let n4 = contQuatro + 1;
      setContQuatro(n4);
    }
    if (contQuatro === 2) {
      console.log('entrei no 2');
      setContQuatro(0);
      if (contTres <= 2) {
        let n3 = contTres + 1;
        setContTres(n3);
      }
    }

    if (contTres === 2) {
      console.log('entrei no 3');
      setContTres(0);
      setContQuatro(0);
      if (contDois <= 2) {
        let n2 = contDois + 1;
        setContDois(n2);
      }
    }

    if (contDois === 2) {
      setContDois(0);
      setContTres(0);
      setContQuatro(0);
      let n1 = contUm + 1;
      setContUm(n1);
    }
    if (contUm === 2) {
      resertCount();
    }
  };
  const resertCount = () => {
    console.log('zerou');
    setContUm(0);
    setContDois(0);
    setContTres(0);
    setContQuatro(0);
  };
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
          onPress={() => {
            resertCount();
          }}
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
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <BtnAction
          style={{
            width: 120,
            height: 120,
          }}
          onPress={() => {}}
          colorAction={ColorDefault.btn.submit}>
          <LabelCont>-</LabelCont>
        </BtnAction>
        <BtnAction
          onPress={() => {
            contador();
          }}
          colorAction={ColorDefault.btn.red}>
          <LabelCont>+</LabelCont>
        </BtnAction>
      </View>
    </Container>
  );
};

export default Home;

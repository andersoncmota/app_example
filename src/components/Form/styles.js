import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '../../styles';

export const ContainerInput = styled.View`
  padding: 0 20px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
  margin-right: 12px;
  font-size: 16px;
  color: ${colors.dark};
`;

export const TextLabel = styled.Text`
  color: ${colors.grey};
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export const TextError = styled.Text`
  color: ${colors.error};
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 3px;
  text-align: left;
`;

export const Container = styled(RectButton)`
  height: 50px;
  background: ${colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 16px;
  padding: 4px 12px;
  width: 100%;
  color: ${colors.white};
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;

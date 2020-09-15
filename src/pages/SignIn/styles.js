import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: ${colors.white};
`;

export const FormContent = styled.View`
  align-items: flex-start;
  padding: 20px;
  background: ${colors.white};
`;

export const TitleForm = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  color: ${colors.dark};
`;

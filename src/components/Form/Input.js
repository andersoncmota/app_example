import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { ContainerInput, InputText, TextError, TextLabel } from './styles';

function Input({ name, onChangeText, rawValue, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  const handleOnChange = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',

      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },

      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },

      getValue(ref) {
        return rawValue || ref.value;
      },
    });
  }, [fieldName, rawValue, registerField]);

  return (
    <ContainerInput>
      {label && <TextLabel>{label}</TextLabel>}
      <InputText
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={handleOnChange}
        {...rest}
      />
      {error && <TextError>{error}</TextError>}
    </ContainerInput>
  );
}

Input.defaultProps = {
  onChangeText: null,
  rawValue: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  rawValue: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Input;

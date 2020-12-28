import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  className,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocus(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <Container isFilled={isFilled} isFocus={isFocus}>
        {Icon && <Icon size={20} />}
        <input
          className={className}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
          ref={inputRef}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#c53030" />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;

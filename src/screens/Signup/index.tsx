import React, { ChangeEventHandler, FocusEventHandler, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { InputField } from '../../components/InputField';
import { FlexCenter, FlexCol, H1 } from '../../styles';
import { StyledLink } from '../../styles/components/link';
import { IBaseProps } from '../../types/fc';
import { validateEmail, validatePassword } from '../../utils/validators';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

interface IFieldValue {
  value: string;
  error: string;
}

const AlreadyHaveAcctLink = styled(StyledLink)`
  display: block;
  margin-top: 12px;
  font-size: 0.8rem;
`;

const ButtonsContainer = styled.div`
  ${FlexCol}
  justify-content: flex-end;

  & > * {
    align-self: flex-end;
  }
`;

const SignupContainer = styled(Screen)`
  ${FlexCenter}
`;

const SignupFieldContainer = styled(InputField)`
  margin-bottom: 12px;
`;

const SignupForm = styled.form`
  margin-top: 12px;
`;

const SignupFormContainer = styled(Card)`
  width: 94vw;
  max-width: 530px;
`;

export const Signup: React.FC<IProps> = ({
  className = '',
}) => {
  const [email, setEmail] = useState<IFieldValue>({ value: '', error: '' });
  const [password, setPassword] = useState<IFieldValue>({ value: '', error: '' });
  const [passwordConfirm, setPasswordConfirm] = useState<IFieldValue>({ value: '', error: '' });
  const [processing, setProcessing] = useState(false); // TODO - replace with mobx model busy state

  const disableSignup = () => {
    return !email.value || !!email.error || !password.value || !!password.error || !passwordConfirm.value || !!passwordConfirm.error || password.value !== passwordConfirm.value;
  };

  const onEmailBlur: FocusEventHandler<InnerHTML> = useCallback(() => {
    const { error } = validateEmail(email.value, true);
    setEmail({ ...email, error });
  }, [email]);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setEmail({ value: e.target.value.trim(), error: '' });
  }, []);

  const onPasswordBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    const { error } = validatePassword(password.value);
    setPassword({ ...password, error });
  }, [password]);

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setPassword({ value: e.target.value.trim(), error: '' });
  }, []);

  const onPasswordConfirmBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    let error = '';

    if (password.value !== passwordConfirm.value) error = 'Passwords do not match.';

    setPasswordConfirm({ ...passwordConfirm, error });
  }, [password, passwordConfirm]);

  const onPasswordConfirmChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setPasswordConfirm({ value: e.target.value.trim(), error: '' });
  }, []);

  const onSignupClick = useCallback(() => {
    setProcessing(true);

    // eslint-disable-next-line no-console
    console.log('>>>>> signing up', email, password);
  }, [email, password, passwordConfirm]);

  return (
    <SignupContainer className={ className }>
      <SignupFormContainer>
        <H1>Sign Up for Coin Purse</H1>
        <SignupForm>
          <SignupFieldContainer
            error={ email.error }
            inputProps={ {
              onBlur: onEmailBlur,
              onChange: onEmailChange,
              value: email.value,
            } }
            label='Email'
          />
          <SignupFieldContainer
            error={ password.error }
            inputProps={ {
              onBlur: onPasswordBlur,
              onChange: onPasswordChange,
              type: 'password',
              value: password.value,
            } }
            label='Password'
          />
          <SignupFieldContainer
            error={ passwordConfirm.error }
            inputProps={ {
              onBlur: onPasswordConfirmBlur,
              onChange: onPasswordConfirmChange,
              type: 'password',
              value: passwordConfirm.value,
            } }
            label='Confirm Password'
          />
          <ButtonsContainer>
            <Button
              type='button'
              kind='primary'
              dataCy='signup-cta'
              processing={ processing }
              disabled={ disableSignup() }
              onClick={ onSignupClick }
            >
              Sign Up
            </Button>
            <AlreadyHaveAcctLink to='/login'>Already have an account?</AlreadyHaveAcctLink>
          </ButtonsContainer>
        </SignupForm>
      </SignupFormContainer>
    </SignupContainer>
  );
};

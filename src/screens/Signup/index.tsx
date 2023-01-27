import { observer } from 'mobx-react';
import React, { ChangeEventHandler, FocusEventHandler, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ErrorText } from '../../components/ErrorText';
import { InputField } from '../../components/InputField';
import { useUserSession } from '../../contexts/user-session';
import { MainRoutes } from '../../routers/config';
import { FlexCenter, FlexCol, H1 } from '../../styles';
import { StyledLink } from '../../styles/components/link';
import { IBaseProps } from '../../types/fc';
import { validateEmail, validatePassword } from '../../utils/validators';
import { Screen } from '../Screen';

const dataCy = 'signup';

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

const FormErrorText = styled(ErrorText)`
  display: block;
  text-align: center;
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

export const SignupBase: React.FC<IProps> = ({
  className = '',
}) => {
  const navigate = useNavigate();
  const userSession = useUserSession();
  const [email, setEmail] = useState<IFieldValue>({ value: '', error: '' });
  const [password, setPassword] = useState<IFieldValue>({ value: '', error: '' });
  const [passwordConfirm, setPasswordConfirm] = useState<IFieldValue>({ value: '', error: '' });
  const [formError, setFormError] = useState('');

  const disableSignup = () => {
    return !email.value ||
      !!email.error ||
      !password.value ||
      !!password.error || 
      !passwordConfirm.value || 
      !!passwordConfirm.error || 
      password.value !== passwordConfirm.value ||
      !!formError;
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

  const onSignupClick = useCallback(async () => {
    if (disableSignup()) return;

    try {
      await userSession.signup(email.value, password.value);
      navigate(MainRoutes.DASHBOARD);
    } catch (err: any) {
      setFormError(err.message as string);
    }
  }, [email, password, passwordConfirm, disableSignup]);

  return (
    <SignupContainer className={ `${className} signup-screen` } dataCy={ dataCy }>
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
            dataCy={ `${dataCy}-email` }
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
            dataCy={ `${dataCy}-password` }
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
            dataCy={ `${dataCy}-confirm-password` }
          />
          { formError && <FormErrorText>{ formError }</FormErrorText> }
          <ButtonsContainer>
            <Button
              type='button'
              kind='primary'
              dataCy={ `${dataCy}-cta` }
              processing={ userSession.loading }
              disabled={ disableSignup() }
              onClick={ onSignupClick }
            >
              Sign Up
            </Button>
            <AlreadyHaveAcctLink
              to='/login'
              data-cy={ `${dataCy}-already-have-acct-link` }
            >
              Already have an account?
            </AlreadyHaveAcctLink>
          </ButtonsContainer>
        </SignupForm>
      </SignupFormContainer>
    </SignupContainer>
  );
};

export const Signup = observer(SignupBase);

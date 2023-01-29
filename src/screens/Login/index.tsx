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
import { ApiError } from '../../utils/api-error';
import { validateEmail } from '../../utils/validators';
import { Screen } from '../Screen';

const dataCy = 'login';

interface IProps extends IBaseProps {}

interface IFieldValue {
  value: string;
  error: string;
}

const ButtonsContainer = styled.div`
  ${FlexCol}
  justify-content: flex-end;

  & > * {
    align-self: flex-end;
  }
`;

const DontHaveAcctLink = styled(StyledLink)`
  display: block;
  margin-top: 12px;
  font-size: 0.8rem;
`;

const FormErrorText = styled(ErrorText)`
  display: block;
  text-align: center;
`;

const LoginContainer = styled(Screen)`
  ${FlexCenter}
`;

const LoginFieldContainer = styled(InputField)`
  margin-bottom: 12px;
`;

const LoginForm = styled.form`
  margin-top: 12px;
`;

const LoginFormContainer = styled(Card)`
  width: 94vw;
  max-width: 530px;
`;

export const Login: React.FC<IProps> = ({
  className = '',
}) => {
  const navigate = useNavigate();
  const userSession = useUserSession();
  const [email, setEmail] = useState<IFieldValue>({ value: '', error: '' });
  const [password, setPassword] = useState<IFieldValue>({ value: '', error: '' });
  const [formError, setFormError] = useState('');
  
  const disableLogin = () => {
    return !email.value ||
      !!email.error ||
      !password.value ||
      !!password.error || 
      !!formError;
  };

  const onEmailBlur: FocusEventHandler<InnerHTML> = useCallback(() => {
    const { error } = validateEmail(email.value, true);
    setEmail({ ...email, error });
  }, [email]);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setFormError('');
    setEmail({ value: e.target.value.trim(), error: '' });
  }, []);

  const onPasswordBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    let error = '';
    if (!password.value) error = 'Password is required.';
    setPassword({ ...password, error });
  }, [password]);

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setFormError('');
    setPassword({ value: e.target.value.trim(), error: '' });
  }, []);

  const onLoginClick = useCallback(async () => {
    if (disableLogin()) return;

    try {
      await userSession.login(email.value, password.value);
      navigate(MainRoutes.DASHBOARD);
    } catch (err: unknown) {
      if (err instanceof ApiError) {
        switch (err.field) {
          case 'email':
            setEmail({ ...email, error: err.message });
            break;
          case 'password':
            setPassword({ ...password, error: err.message });
            break;
          default:
            setFormError(err.message);
            break;
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setFormError((err as any).message);
      }
    }
  }, [email, password, disableLogin]);

  return (
    <LoginContainer
      hideNav
      className={ className }
      dataCy={ dataCy }
    >
      <LoginFormContainer>
        <H1>Login</H1>
        <LoginForm>
          <LoginFieldContainer
            error={ email.error }
            inputProps={ {
              onBlur: onEmailBlur,
              onChange: onEmailChange,
              value: email.value,
            } }
            label='Email'
            dataCy={ `${dataCy}-email` }
          />
          <LoginFieldContainer
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
          { formError && <FormErrorText dataCy={ `${dataCy}-form-error` }>{ formError }</FormErrorText> }
          <ButtonsContainer>
            <Button
              type='button'
              kind='primary'
              dataCy={ `${dataCy}-cta` }
              processing={ userSession.busy }
              disabled={ disableLogin() }
              onClick={ onLoginClick }
            >
              Login
            </Button>
            <DontHaveAcctLink
              to='/signup'
              data-cy={ `${dataCy}-dont-have-acct-link` }
            >
              Don't have an account?
            </DontHaveAcctLink>
          </ButtonsContainer>
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
};

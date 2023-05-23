import { ErrorMessage, Form, Formik } from 'formik';
import PrimaryButton from '../buttons/PrimaryButton';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import Spinner from '../spinners/Spinner';
import Input from '../forms/generic/Input';
import * as Yup from 'yup';

export default observer(function LoginForm() {
  const { userStore } = useStore();

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is Required'),
    password: Yup.string().required('Password is Required'),
  });

  return (
    <div className="flex flex-col items-center mt-24  h-full">
      <h3 className="mb-8">Welcome Back</h3>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '', error: null }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          console.log('submitting!', values);
          await userStore
            .login(values)
            .catch((error) =>
              setErrors({ error: 'Invalid email or password' })
            );
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, errors }) => (
          <Form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
            />
            <ErrorMessage
              name="error"
              render={() => {
                return (
                  <div className="text-xs text-red-500 p-1">{errors.error}</div>
                );
              }}
            />
            <div>
              <PrimaryButton type="submit">
                {isSubmitting ? <Spinner size={20} /> : <span>Login</span>}
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});

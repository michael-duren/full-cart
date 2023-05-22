import { Field, Form, Formik } from 'formik';
import PrimaryButton from '../buttons/PrimaryButton';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import Spinner from '../spinners/Spinner';

export default observer(function LoginForm() {
  const { userStore } = useStore();

  return (
    <div className="flex flex-col items-center mt-24  h-full">
      <h3 className="mb-8">Welcome Back</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log('submitting!', values);
          await userStore.login(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <Field
                type="text"
                className="border-2 rounded-md p-1"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <Field
                type="password"
                className="border-2 rounded-md p-1"
                placeholder="Password"
                name="password"
              />
            </div>
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

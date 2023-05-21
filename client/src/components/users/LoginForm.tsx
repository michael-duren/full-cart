import { Form, Formik } from 'formik';
import PrimaryButton from '../buttons/PrimaryButton';

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            className="border-2"
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            className="border-2"
            placeholder="Password"
            name="password"
          />
          <PrimaryButton content="login" type="submit" />
        </Form>
      )}
    </Formik>
  );
}

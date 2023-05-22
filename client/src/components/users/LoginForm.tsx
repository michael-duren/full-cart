import { Form, Formik } from 'formik';
import PrimaryButton from '../buttons/PrimaryButton';

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center mt-24  h-full">
      <h3 className="mb-8">Welcome Back</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <input
                type="text"
                className="border-2 rounded-md p-1"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 rounded-md p-1"
                placeholder="Password"
                name="password"
              />
            </div>
            <div>
              <PrimaryButton content="Login" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

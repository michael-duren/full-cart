import axios from 'axios';
import PrimaryButton from '../buttons/PrimaryButton';

export default function TestErrors() {
  const baseUrl = 'http://localhost:5000/api/';

  function handleNotFound() {
    axios
      .get(baseUrl + 'buggy/not-found')
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + 'buggy/bad-request')
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + 'buggy/server-error')
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + 'buggy/unauthorised')
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseUrl + 'activities/notaguid')
      .catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios
      .post(baseUrl + 'activities', {})
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="h-full w-full">
      <h1>Test Error component</h1>
      <div className="flex space-y-4 items-center justify-center flex-col">
        <div className="mt-4">
          <PrimaryButton onClick={handleNotFound} content="Not Found" />
        </div>
        <div>
          <PrimaryButton onClick={handleBadRequest} content="Bad Request" />
        </div>
        <div>
          <PrimaryButton
            onClick={handleValidationError}
            content="Validation Error"
          />
        </div>
        <div>
          <PrimaryButton onClick={handleServerError} content="Server Error" />
        </div>
        <div>
          <PrimaryButton onClick={handleUnauthorised} content="Unauthorised" />
        </div>
        <div>
          <PrimaryButton onClick={handleBadGuid} content="Bad Guid" />
        </div>
      </div>
    </div>
  );
}

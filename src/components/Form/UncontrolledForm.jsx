import { useRef } from 'react';

const UncontrolledForm = () => {
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(ref.current.value);
  };
  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          {' '}
          <input type="text" ref={ref} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default UncontrolledForm;

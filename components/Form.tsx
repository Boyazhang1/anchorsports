import { sampleStudent } from './samplestudent';
import axios from 'axios';

const Form = () => {
  const registerStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post('/api/register', sampleStudent)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));

    // const res = await fetch('/api/register', {
    //   body: JSON.stringify({
    //     name: e.target.name.value,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // });
    // result.user => 'Ada Lovelace'
  };

  return (
    <form onSubmit={registerStudent}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  );
};
export { Form };

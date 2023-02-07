import axios from 'axios';
class AuthViewModel {
  constsignInWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<void> => {
    const data = {
      email: email,
      password: password,
    };

    const url: string = `${Endpoints.BaseEndpoint}${Endpoints.User}${Endpoints.Login}`;
    try {
      const respones = await axios.post(url, data);
    } catch (e) {}
  };
}

import axios from "axios";
import { API_KEY } from "@env";

export async function createUser(phone, password) {
  await axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoBnp6O9noa_c0Oux_r3wSXOYH0a8VmNY`,
      {
        email: phone,
        password: password,
        returnSecureToken: true,
      }
    )
    .then((res) => {
      // console.log(res.data);
      return res.json();
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
}

export async function signinUser(phone, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      phone,
      password,
      returnSecureToken: true,
    }
  );

  const token = response.data;
}

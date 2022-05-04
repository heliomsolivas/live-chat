import { ref } from "vue";
import { projectAuth, createUserWithEmailAndPassword, updateProfile } from "../firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password);
    if (!res) {
      throw new Error("Could not complete the signup");
    }
    await updateProfile(projectAuth.currentUser, { displayName });

    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;

import { ref } from "vue";
import { projectAuth, onAuthStateChanged } from "../firebase/config";

const user = ref(projectAuth.currentUser);

onAuthStateChanged(projectAuth, (_user) => {
  console.log("User state changed. Current user is:", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;

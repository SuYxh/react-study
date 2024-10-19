// src/stores/userStore.ts
import { create } from "zustand";
import axios from "axios";

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  userData: UserData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  fetchUser: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  userData: {
    id: 0,
    name: "",
    email: "",
  },
  status: "idle",
  error: null,
  fetchUser: async () => {
    set({ status: "loading" });
    try {
      const response = await axios.get<UserData>(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      set({ userData: response.data, status: "succeeded" });
    } catch (error: any) {
      set({ status: "failed", error: error.message });
    }
  },
}));

export default useUserStore;

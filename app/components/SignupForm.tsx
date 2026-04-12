"use client";
import { useState, SubmitEvent } from "react";
import { createUserWithEmailAndPassword, AuthError, updateProfile } from "firebase/auth";
import { auth } from "@/util/firebase";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/util/store";
import { createUser } from "@/service/firebase_crud";

export default function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const createUserData = async () => createUser({
        User_ID: `${auth.currentUser?.uid}`,
        user_email: `${auth.currentUser?.email}`,
        user_name: `${name}`,
      })

  const handleSignUp = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if(result.user){
        updateProfile(result.user, {displayName: name})
        
      }
      console.log("User created:", result.user);
      setUser(result.user.displayName || result.user.email || "Unknown User", result.user.uid);  
      
      router.push("/");
    } catch (err) {
      const authError = err as AuthError;

      // Handle common Firebase Auth errors
      switch (authError.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        case "auth/invalid-email":
          setError("Please provide a valid email address.");
          break;
        default:
          setError("Failed to create an account. Please try again.");
      }
    
    } finally {
      createUserData();
      
      if(auth.currentUser) {
        console.log("user added:", auth.currentUser.displayName)
      }
      setLoading(false);
    }
  };

  return (
    
    <div className="bg-black">
      <h2 className="text-2xl font-bold mb-4 text-white">Create Account</h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-white">User Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded text-white outline-blue-500"
            placeholder="what should we call you?"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-white outline-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-white outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded text- outline-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </div>
    
  );
}

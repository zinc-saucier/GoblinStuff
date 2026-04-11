import SignUpForm from "../components/SignupForm";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function SignUpPage() {
  return (
    <main>
      <div>
            <Header/>
      </div>
      <main className="flex w-full flex-3 flex-row justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex w-full flex-col items-center justify-center py-32 px-16 bg-black">
        <div>
          <SignUpForm />
        </div>
        <div>
          <p className="mt-4 text-white">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-medium"
        >
          Log In
        </Link>
      </p>
        </div>
      </div>
    </main>
    
    <div>
          
          <Footer/>
        </div>
        </main>
  );
}
import Image from "next/image";
import GoogleIcon from "../images/google_logo.svg"

export default function GoogleSignup() {
    return (
        <button className={"flex justify-center border px-4 py-3 w-full border-indigo-200 gap-2"}>
            <Image src={GoogleIcon} alt="Google Icon"/>
            <p className={"text-indigo-700 font-bold"}>Sign Up with Google</p>
        </button>
    );
}
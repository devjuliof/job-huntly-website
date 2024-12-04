import Header from "../components/Header";
import Image from "next/image";
import personFeedbackImage from "../images/person_feedback_image.svg"
import FormSignup from "@/src/app/auth/components/FormSignup";


export default function SignUpPage() {
  return (
    <>
        <section className={'flex bg-slate-50 relative min-h-screen'}>
            <div className={'flex-1'}>
                <Header />
                <Image className={'px-1 absolute bottom-0 left-0 right-0'} height={1000} src={personFeedbackImage} alt={'Adam Sandler - Lead Engineer at Canva image'} />
            </div>
            <div className={'flex-1 bg-white'}>
                <FormSignup />
            </div>
        </section>
    </>
  );
}

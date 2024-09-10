
import LoginFind from "../loginpage/LoginFind";
import LoginForm from "../loginpage/LoginForm";
import Social from "../loginpage/Social";
import StartButton from "../loginpage/StartButton";
import Footer from "../page/Footer";
import Header from "../page/Header";

export default async function Home() {
    return (
        <div className="w-80 mx-auto flex mt-10 flex-col items-center ">
            <Header />
            <LoginForm />
            <LoginFind />
            <StartButton />
            <Social />
            <Footer />
        </div>
    );
}

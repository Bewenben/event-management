import Logo from "../Images/logo-no-background.png";

export default function Header() {

    return (
        <article className="flex flex-col justify-center items-center h-screen homeheader">
            <div className="w-96">
                <img src={Logo} alt="Logo" />
            </div>
            <span className="font-bold flex justify-center items-center text-3xl">The event is just one click away</span>
        </article>
    );
}
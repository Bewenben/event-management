import Lottie from "./Lottie";

export default function ReverseSectionHeader(props) {

    return (
        <article className="flex flex-col justify-center items-center py-12">
            <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center">
                    <div className="pr-36"><Lottie animation={props.animation}/></div>
                </div>
                <div className="flex flex-col justify-center pr-20">
                    <div className="font-bold text-4xl py-4">{props.title}</div>
                    <div className="text-2xl">{props.desc}</div>
                </div>
            </div>
        </article>
    );
}
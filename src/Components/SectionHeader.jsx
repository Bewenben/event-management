import Lottie from "./Lottie";

export default function SectionHeader(props) {

    return (
        <article className="flex flex-col justify-center items-center py-12">
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center pl-20">
                    <div className="font-bold text-4xl py-4">{props.title}</div>
                    <div className="text-2xl">{props.desc}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="pl-36">
                        <Lottie animation={props.animation} />
                    </div>
                </div>
            </div>
        </article>
        // {/* <article className="flex flex-col justify-center items-center h-screen">
        //     <div className="grid grid-cols-2">
        //     <div className="flex flex-col justify-center items-center h-screen">
        //             <div className="pr-36"><Lottie animation={LottieGroup}/></div>
        //         </div>
        //         <div className="flex flex-col justify-center h-screen pl-20">
        //             <div className="font-bold text-4xl py-4">Title</div>
        //             <div className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis ex ut lacus dignissim rutrum. Phasellus sit amet luctus ante, a dapibus nisi. Suspendisse vitae risus nunc. Vivamus viverra ex ex. Aliquam ex libero, iaculis ut libero ac, pulvinar aliquam tortor. Ut vulputate laoreet rutrum. Suspendisse ac pulvinar ex, in convallis tellus.</div>
        //         </div>
        //     </div>
        // </article> */}
    );
}
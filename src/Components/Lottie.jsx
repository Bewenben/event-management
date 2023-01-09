import { useLottie } from "lottie-react";

export default function Lottie(props) {
    const options = {
        animationData: props.animation,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="w-96">{View}</div>
    );
}
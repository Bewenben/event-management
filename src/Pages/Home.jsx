import Navbar from "../Components/Navbar";
import LottieCalendar from "../JSON/Screen 1.json"
import LottieGroup from "../JSON/group.json"
import SectionHeader from "../Components/SectionHeader";
import ReverseSectionHeader from "../Components/ReverseSectionHeader";
import Header from "../Components/Header";
import LatestEvents from "../Components/LatestEvents";

export default function Home() {

    return (
        <section>
            <Navbar />
            <Header />
            <SectionHeader title="Who are we?" desc="We are one of the biggest organizations that specialize in the creation of successful events. We plan, organize, and prepare multiple events based on your Interests. We have successfully organized over 83 events in various categories such as wedding ceremonies, birthday parties, technical sessions and workshops, and soft skills sessions. We always aim to help you accomplish the vision you have for your event." animation={LottieCalendar}/>
            <ReverseSectionHeader title="Why attend our events?" desc="Our events are known for always being diverse and of high quality, whether the event is educational or for entertainment purposes, it is guaranteed to be unique." animation={LottieGroup}/>
            <div className="h-1 bg-[#3d6aff] mb-20"></div>
            <LatestEvents />
        </section>
    );
}
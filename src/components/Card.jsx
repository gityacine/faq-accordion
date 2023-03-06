import data from "../data";
import Accordion from "./Accordion";

export default function Card() {
    return (
        <div className="flex bg-white w-full max-w-lg rounded-2xl p-8">
            <div className="flex flex-col w-full">
                {data.map((item, index) => (
                    <Accordion
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>

        </div>
    );
}
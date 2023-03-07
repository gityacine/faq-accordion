import data from "../data";
import Accordion from "./Accordion";

export default function Card() {
    return (
        <div className="flex flex-col items-center bg-white rounded-2xl">
            <div className="flex w-full items-center">
                <picture>
                    <source media="(min-width: 640px)" srcSet="" />
                    <img className="absolute ml-11 w-52" src="bg-pattern-mobile.svg" alt="background" />
                </picture>
            </div>
            <div>
                <picture>
                    <source media="(min-width: 640px)" srcSet="" />
                    <img className="-mt-24 w-52" src="illustration-woman-online-mobile.svg" alt="illustration-woman-online" />
                </picture>
            </div>
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
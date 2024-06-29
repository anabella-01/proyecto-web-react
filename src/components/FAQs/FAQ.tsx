import {IFAQ} from "../../types/faqs";

export function FAQ({question,answer}:IFAQ){
    return(
        <div className="shadow-md cursor-pointer">
            <details className="bg-white p-5 rounded">
                <summary className="bg-white text-lg font-semibold marker:text-primary-color">{question}</summary>
                <p>{answer}</p>
                </details>
            </div>
    )
}
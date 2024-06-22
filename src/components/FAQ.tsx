import {IFAQ} from "../types/faqs";

export function FAQ({question,answer}:IFAQ){
    return(
        <div className="faqs-item">
            <details>
                <summary>{question}</summary>
                <p>{answer}</p>
                </details>
            </div>
    )
}
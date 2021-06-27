import React from "react";

import "../../styles/FAQ.css"

function FaqItems({ faqQuestion }) {

    const toggleCollapsible = function showOnClick (
        event
    ) {
        const answer = event.target.nextElementSibling;
        event.target.classList.toggle('active');
        event.target.querySelector("img").classList.toggle("rotate180");
        answer.classList.toggle("faq__answer_visible");
        if (answer.style.display === 'block') {
        answer.style.display = 'none'
      } else {answer.style.display = 'block'}
    };


    return (
        <>
            <button
                className="faq__collapsible-button"
                aria-label="Show/hide question"
                onClick={toggleCollapsible}
            >
                {faqQuestion.question}
                <img className="faq__collapsible-icon" src={"src/assets/img/arrow.svg"} alt="Arrow icon"/>
            </button>
            <div className="faq__collapsible-content">{faqQuestion.answer}</div>
        </>
    );
}

export default FaqItems;
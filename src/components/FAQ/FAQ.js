import React from "react";

import "../../styles/FAQ.css"
import FaqItems from "./FaqItems";


function FAQ() {

        const faqQuestions = [
        {
            question: "Могу ли я отменить бронь?",
            answer: "Здесь должен быть ответ на очень частый ворос... бла бла бла :)",
        },
        {
            question: "Могу ли я вернуть деньги, если не подошёл автомобиль?",
            answer: "Здесь должен быть ответ на очень частый ворос... бла бла бла :)",
        },
        {
            question: "Что делать, если случилось ДТП?",
            answer: "Здесь должен быть ответ на очень частый ворос... бла бла бла :)",
        },
        {
            question: "Могу ли я оставить автомобиль в добном для меня месте?",
            answer: "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.",
        },
        {
            question: "Что делать, если собственник просит заплатить ему напрямую?",
            answer: "Здесь должен быть ответ на очень частый ворос... бла бла бла :)",
        },
        {
            question: "Должен ли я заправлять автомобиль?",
            answer: "Здесь должен быть ответ на очень частый ворос... бла бла бла :)",
        },
    ];


	return (

		<section className="faq__frame">

                <div className="content__container is-align-center">

                    <img className="is-desktop" src={"src/assets/img/faq.svg"} alt="Image of pepople" />

                    <h1 className="faq__frame-h1">Частые вопросы</h1>
                    <p className="faq__frame-p">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                    
                </div>
            
                <div className="faq__collapsible">
                    {faqQuestions.map((faqQuestion, index) => (
                        <FaqItems key={index} faqQuestion={faqQuestion} />
                    ))}
                </div>

            </section>

	)

}

export default FAQ;
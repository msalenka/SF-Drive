import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import "../../styles/Reg.css"
import Name from "./Name";
import Birthday from "./Birthday";
import Email from "./Email";
import TelNumber from "./TelNumber";
import PassLicNumber from "./PassLicNumber";
import PassLicDate from "./PassLicDate";
import PassEmit from "./PassEmit";
import PassEmitNum from "./PassEmitNum";
import Password from "./Password";
import PasswordConfirm from "./PasswordConfirm";

function Signup () {

    const validationsSchema = yup.object({
        name: yup.string().typeError('Неверный формат').required('Обязательное поле'),
        birthday: yup.date().typeError('Неверный формат').required('Обязательное поле'),
        email: yup.string().email('Введите правильную почту').required('Обязательное поле'),
        telNumber: yup.string().matches(/\+7\d{3}\d{3}\d{2}\d{2}/, 'Номер телефона введён неправильно').max(12, 'Номер телефона состоит из 12 символов').required('Обязательное поле'),
        passNumber: yup.string().matches(/\d{10}/, 'Номер паспорта состоит из 10 цифр').max(10, 'Номер паспорта состоит из 10 цифр').required('Обязательное поле'),
        passDate: yup.date().typeError('Неверный формат').required('Обязательное поле'),
        passEmit: yup.string().typeError('Неверный формат').required('Обязательное поле'),
        passEmitNum: yup.string().matches(/\d{3}\-\d{3}/, 'Код подразделения состоит из 10 цифр в формате 000-000').max(7, 'Код подразделения состоит из 6 цифр').required('Обязательное поле'),
        licNumber: yup.string().matches(/\d{10}/, 'Номер водительского удостоверения состоит из 10 цифр').max(10, 'Номер водительского удостоверения состоит из 10 цифр').required('Обязательное поле')
    });

    return (
        <Formik
        initialValues={{
            name: '',
            birthday: '',
            email: '',
            telNumber: '',
            passNumber: '',
            passDate: '',
            passEmit: '',
            passEmitNum: '',
            licNumber: '',
            licDate: '',
            password: '',
            passwordConfirm: ''
        }}
            validateOnBlur
            onSubmit={(values) => { console.log(values) }}
            validationSchema={validationsSchema}
        
        >
            {formik => (
                <>
                    <p className="reg-step">Шаг 1 из 3</p>
                    <h1 className="page-title">Расскажите о себе</h1>
                    {console.log(formik.values)}
                    <Form>
                        <h2 className="info-title">Информация о вас</h2>

                        <Name label='ФИО' name='name' type='text' placeholder='ФИО полностью'/>
                        <Birthday label='Дата рождения' name='birthday' type='date'/>
                        <Email label='Электронная почта' name='email' type='email' placeholder='mail@example.com'/>
                        <TelNumber label='Телефон' name='telNumber' type='text' placeholder='+79000000000'/>

                        <h2 className="block-title">Паспорт</h2>

                        <PassLicNumber label='Серия и номер' name='passNumber' type='text' placeholder='0000000000'/>
                        <PassLicDate label='Дата выдачи' name='passDate' type='date'/>
                        <PassEmit label='Кем выдан' name='passEmit' type='text' placeholder='Название органа выдавшего паспорт'/>
                        <PassEmitNum label='Код подразделения' name='passEmitNum' type='text' placeholder='000-000'/>

                        <h2 className="block-title">Водительское удостоверение</h2>

                        <PassLicNumber label='Серия и номер' name='licNumber' type='text' placeholder='0000000000'/>
                        <PassLicDate label='Дата выдачи' name='licDate' type='date'/>

                        <h2 className="block-title">Пароль</h2>

                        <Password label='Придумайте пароль' name='password' type='password' placeholder="•••••••••••••••••••"/>
                        <PasswordConfirm label='Повторите пароль' name='passwordConfirm' type='password' placeholder="•••••••••••••••••••"/>



                        <div className='sub-button-wrapper'>
                            <button 
                            className='sub-button isDisabled'
                            type='submit'
                            >Продолжить</button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default Signup;
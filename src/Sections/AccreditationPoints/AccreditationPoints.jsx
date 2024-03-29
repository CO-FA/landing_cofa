import React from 'react'
import './AccreditationPoints.css'
import { FiCheckCircle } from "react-icons/fi";


const AccreditationPoints = () => {
  return (
    <>
        <section className='accreditation-container' id='acreditacion'>
            <div className='div-info'>
                <h1>
                    Acreditación de los Puntos COFA
                </h1>
                <p>
                    A cada participante del programa Puntos COFA, se le otorgará una cuenta personal,  donde se depositarán los puntos que vaya sumando. Cada forma de conseguir puntos es independiente de las demás, por lo que podés acumularlos de manera individual La acreditación de dichos puntos se realizará a los 15 días hábiles de realizadas las siguientes acciones:
                </p>
            </div>
            
            <div className='div-cards'>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>El referido haya firmado el primer contrato del crédito adquirido.</p>
                </div>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>El referido haya abonado la 3° cuota de la primer asistencia contratada.</p>
                </div>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>Se haya completado y enviado la encuesta de satisfacción, una vez adquirido un producto.</p>
                </div>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>Se haya finalizado el pago de un préstamo en el plazo acordado y sin atrasos mayores a 30 días del vencimiento de cada cuota.</p>
                </div>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>Tengas un producto activo el día de tu cumpleaños y  estés al día con el pago del mismo.</p>
                </div>
                <div className='accreditation-info'>
                    <FiCheckCircle />
                    <p>La fecha en que el cliente informe que comenzó a seguir a COFA en las redes sociales Instagram y/o Facebook.</p>
                </div>
            </div> 
            
        </section>
        
    </>
  )
}

export default AccreditationPoints
import React from "react";
import Button from "../../components/buttons/Button.jsx";


const Dashboard = () => {
    return (
        <section className="flex flex-col w-screen  items-center justify-center">
            <header className='w-full flex flex-col items-center'>
                <img
                    className={'mb-4'}
                    src="images/logoRed2.png"
                    alt="Logo da marca"
                />
                <h1 className="font-bold text-3xl text-violet-300">Faça o seu pedido</h1>
            </header>
            <div className={'mt-6 w-full flex flex-row justify-center items-center gap-3'}>
                <Button blank url="https://wa.me/21970002611?text=Olá%20gostaria%20de%20fazer%20uma%20compra" text={'WhatsApp'} nameClass="purpleWrite"/>
                <Button url="/cardapio" text={'Site'} nameClass="writePurple"/>
            </div>
        </section>
    );
};

export default Dashboard;

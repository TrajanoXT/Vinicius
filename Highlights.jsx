function Highlights(){


    return(

        <div>
            <section className="bg-black py-20 px-6" id="desing">
                <div className="max-w-7xl m, mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl text-gray-400 ">Desing Revolucionario</h2>
                        <p>Cada detalhe foi pensado foi pensado para criar a melhor experiencia</p>
                    </div>

                    
                    <div className="grid grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-900 rounded-3xl p-8">
                            <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="Titanium desing"></img>
                            <h3 className="font-bold mb-2 text-3xl">Titanium Premium</h3>
                            <p className="text-gray-300">Estrutura de titanio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>
                    
                        <div className="bg-gray-900 rounded-3xl p-8">
                            <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg"></img>
                            <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
                            <p className="text-gray-300">O sistema operacional mais avancado do mundo com ia integrada.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradiente">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="Chip A18"></img>

                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rapida</li>
                        <li> GPU 25% mais eficente</li>
                        <li>Neural Engine com 16 nucleos</li>
                        <li>Ray Tracing acelerado por hardware </li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sitema de camera Pro avancado</h3>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2" >Princial</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automatico</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2" >Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visao de 120 com modo noturno</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2" >Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom optico de 5x com estabilizacao</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Highlights
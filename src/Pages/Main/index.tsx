import './style.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

export function Main(){
    return (
    <>
        <div className='main-container'>
            <div className='body-main-container'>
                <div style={{display: 'flex',justifyContent:'center', flexDirection:'column'}}>
                    <h1 className='title'>Um futuro à vista:</h1>
                    <h2 className='subtitle'> Delivery com drones! </h2>
                </div>
                <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                    <Carousel className='w-50' >
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src='https://i.imgur.com/U95Z963.jpg'
                            alt="Second slide"

                            />

                            <Carousel.Caption>
                            <h3 style={{color:'#363636'}}>Direto pelos ares!</h3>
                            <p style={{color:'#363636'}}>O drone sai direto da loja até a porta da sua casa</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src='https://i.imgur.com/Lym4ZVn.jpg'
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{color:'#363636'}}>Entregas de maneira ágil e sustentável!</h3>
                            <p style={{color:'#363636'}}>Emissões baixas de carbono</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'center', marginTop:'50px'}}>

                    <div className='text-container'>
                        <div className='drone-text-box'>
                            <h2><b>Atualidade</b></h2>
                            <span>Não se sabe ao certo quando foi inventado o serviço de delivery, o que se sabe é que as entregas de comida existem há muitos séculos pela necessidade, mas a consolidação desse serviço é um acontecimento recente. A tecnologia é uma grande aliada que auxiliou o crescimento do delivery primeiramente por telefone, depois sites e hoje muito forte nos aplicativos. 

                                Hoje o serviço de delivery é fundamental na nossa sociedade, seja por necessidade ou por praticidade. O desenvolvimento das embalagens e a velocidade dos entregadores fizeram com que a comida fosse entregue com maior qualidade. Seja em casa, no trabalho, é um costume que entrou na rotina de muita gente. 

                                Porém, com esse crescimento de pedidos também houve um aumento da poluição gerada pelos veículos automotores utilizados para realizar as entregas, pois esses são os principais emissores dos gases do efeito estufa. 

                                Segundo o Painel Intergovernamental sobre Mudanças Climáticas, o sistema climático pode ser alterado devido à aceleração do efeito estufa, o que pode trazer danos irreversíveis, como: 
                            </span>
                            <br></br>
                            <br></br>

                            <li>Derretimento das calotas polares, aumentando o nível do mar. </li>
                            <li>Agravamento da segurança alimentar, prejudicando colheitas e pescas. </li>
                            <li>Extinção de espécies e danos a diversos ecossistemas. </li>

                        </div>

                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <h2>Vídeo do Guia</h2>
                       <iframe width="860" height="315" src="https://www.youtube.com/embed/n0oHCDAX6pM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>

                        <div className='drone-text-box'>
                            <h2><b>Projeto</b></h2>
                            <span>Uma boa notícia é que ultimamente a tecnologia vem avançando com rapidez e a preocupação com o meio ambiente é constantemente levada em consideração. Portanto, com a ascensão dos drones, nossa equipe pensou em fazer das entregas de delivery, em Araranguá, uma prática mais sustentável e barata a longo prazo. 

A nossa ideia é que cada restaurante tenha posse de uma pequena frota de drones autônomos, os quais teriam como objetivo realizar as entregas de pedidos não tão distantes. Desta forma, reduziríamos a quantidade de entregas realizadas por veículos automotores, uma vez que esses só entregariam os pedidos mais distantes. 

Além de diminuir a poluição, essa prática também diminuiria o preço das entregas, se pensarmos a longo prazo, e agilizaria o envio de pedidos, uma vez que o trânsito não influenciaria. 
                            </span>

                            <br></br>
                            <br></br>
                            <br></br>
                            <h2><b>Orçamento</b></h2>
                            <span>Para os nossos protótipos, escolhemos o drone Aurelia X6 Standard, da UAV Systems. E para a sua automação, acrescentamos sensores de proximidade e uma placa para conexão 4G. No total, o custo do drone ficaria em R$ 37.842,37. </span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3><b>Detalhes do orçamento: </b></h3>
                            <ol>
                                <li><i>Valor do drone com Estação Terrestre Herelink: R$32.760,00 </i></li>
                                <li><i>Aurelia Assist: R$ 3.143,003</i></li>
                                <li><i>Mecanismo de liberação de carga: R$ 1.512,004 </i></li>
                                <li><i>Sensor de proximidade infravermelho E18-d80nk OEM (4): R$ 166,325 </i></li>
                                <li><i>IM7000E Placa Quad-band FDD-LTE: R$ 261,05 </i></li>
                            </ol>

                            <br></br>
                            <h2><b>Comparação com o sistema de entregas atual </b></h2>
                            <span>O sistema de entregas atual, realizado majoritariamente por motocicletas, gera, além de custos maiores, uma maior emissão de CO2. De modo geral, levando em consideração os dados levantados pelo Instituto de Pesquisa Econômica Aplicada (Ipea), o fator de emissão média de CO2 é de 0,07 kg por quilômetro rodado para motocicletas, considerando um consumo de combustível de 30 km/l. Isso não ocorre com os drones! 

                                    Segundo pesquisas realizadas pela Apollo 2 na cidade de Araranguá, Santa Catarina, a quilometragem média de uma entrega realizada pelo sistema atual é de 3,42 km, o que resulta em um tempo estimado de 6,06 minutos. Portanto, considerando o valor médio da gasolina no estado de Santa Catarina (SC) no período da pesquisa, que é de R$ 6,60 por litro, é possível calcular o custo médio por entrega, resultando em R$ 0,72. Em comparação, com os drones o cenário é bem diferente: as entregas são diretas, ou seja, podem seguir uma linha reta, não havendo, também, influência do trânsito da cidade, o que economiza tempo e reduz os custos. No caso, a quilometragem média encontrada para os drones foi de 1,84 km, o que implica, considerando os valores relacionados às especificações de consumo de energia do drone vendido pela Apollo 2, em um custo por entrega de R$ 0,032. Além do custo, o tempo de entrega também é bem menor: 1,97 minuto! 

                                    Surpreendentemente, os drones são 22,5 x mais baratos e 3,08 x mais rápidos! 
                            </span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2><b>Conclusão</b></h2>
                            <span>Com a evolução da tecnologia, nós, seres humanos, vamos cada vez mais se adaptar e evoluir para mudanças, tornando o mundo mais prático e desenvolvido. Neste âmbito, nos veio à mente a entrega de comidas por drone (drone delivery), o qual mudará o ramo de delivery, tornando-o mais eficiente em tempo e custo de entrega, sustentabilidade e preservação da comida. Em análise final, é notável que a sua empresa, ao adotar o drone delivery, só terá a ganhar. Venha conosco para um futuro promissor! </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <span>Obrigado!</span>
            <span>Feito com carinho pela equipe Apollo 2 🚀❤️👨🏿‍🚀</span>
            <a href='https://github.com/matheus1103/apollo2'>GitHub - Matheus</a>

        </div>
        </>
    )
}


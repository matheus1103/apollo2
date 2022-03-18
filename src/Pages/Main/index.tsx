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
                            src='src/img/https___d1e00ek4ebabms.cloudfront.net_production_45e9d39d-e090-479c-8090-33172a020927.webp'
                            alt="Second slide"

                            />

                            <Carousel.Caption>
                            <h3 style={{color:'#363636'}}>Direto pelos ares!</h3>
                            <p style={{color:'#363636'}}>O drone sai direto da loja até a porta da sua casa!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src='src/img/drone-delivery-entrega-1552078516271_v2_1920x1080.jpg'
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'center', marginTop:'50px'}}>

                    <div className='text-container'>
                        <div className='drone-text-box' style={{width: '400px'}}>
                            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam massa neque, rutrum id cursus non, hendrerit id ipsum. 
                                Nam hendrerit, turpis et auctor venenatis, libero augue malesuada eros, 
                                in sollicitudin risus ipsum in nunc. In pretium eleifend eleifend. 
                                Nulla vel gravida lacus. Nunc id rhoncus velit, in semper sapien. 
                                Nunc blandit lorem erat, at convallis nunc porttitor eu. Donec vel tempor elit. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                per inceptos himenaeos. Pellentesque mollis arcu sed laoreet cursus. 
                                Nam quis lectus quis purus vehicula blandit. 
                                Vestibulum sit amet auctor urna, vitae mollis leo. Phasellus urna ex, 
                                condimentum eget magna eget, sollicitudin sodales felis.
                            </text>
                        </div>

                        <Image

                        style={{maxWidth:'500px', margin:'100px'}}

                        src='https://cdn.shopify.com/s/files/1/0253/9057/9791/products/AureliaX6StandardMotors-1290-860_1024x1024.jpg?v=1627489447' />

                        <div className='drone-text-box' style={{width: '400px'}}>
                            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam massa neque, rutrum id cursus non, hendrerit id ipsum. 
                                Nam hendrerit, turpis et auctor venenatis, libero augue malesuada eros, 
                                in sollicitudin risus ipsum in nunc. In pretium eleifend eleifend. 
                                Nulla vel gravida lacus. Nunc id rhoncus velit, in semper sapien. 
                                Nunc blandit lorem erat, at convallis nunc porttitor eu. Donec vel tempor elit. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                per inceptos himenaeos. Pellentesque mollis arcu sed laoreet cursus. 
                                Nam quis lectus quis purus vehicula blandit. 
                                Vestibulum sit amet auctor urna, vitae mollis leo. Phasellus urna ex, 
                                condimentum eget magna eget, sollicitudin sodales felis.
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


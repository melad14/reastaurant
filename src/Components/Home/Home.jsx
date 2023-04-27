import React, { Fragment } from 'react'
import Header from './Header';
import './Home.css'
import pic from '../../images/1.png'
import pict from '../../images/2.png'
import { Data } from './../Data/Data';
import { Carousel } from 'react-bootstrap';
import slid1 from '../../images/1 (1).jpg'
import slid2 from '../../images/2.jpg'
export default function Home() {
  return <>
    <Fragment>
      <Header />
      <section className='numbers'id='about'>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-3 ">
              <h2>2156+</h2>
              <h6>SAVING</h6>
            </div>
            <div className="col-md-3">
              <h2>1256+</h2>
              <h6>  PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>5624+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>7554+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className='my-5 sc4n'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img">
                <img src={pic} className='w-100 photoo' alt="" />
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.   </p>
              <button className='my-5 boton'>learn more</button>

            </div>
          </div>
        </div>
      </section>


      <section className='my-5 sc4n'>
        <div className="container">
          <div className="row">

            <div className="col-md-6 pt-5">
              <h2 className='pt-5 pb-3 my-3'>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className='my-4'>
                <li className='my-3'>
                  Etiam sed dolor ac diam volutpat.
                </li>
                <li className='my-3'>
                  Erat volutpat aliquet imperdiet.
                </li>
                <li className='my-3'>
                  purus a odio finibus bibendum.
                </li>
              </ul>
              <button className='mt-3 boton'>learn more</button>

            </div>
            <div className="col-md-6 ">
              <div className="img">
                <img src={pict} className='w-100 photoo' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='paralex d-flex justify-content-center align-items-center sc4n'>
        <div className="container  ">
          <div className="row  text-center">
            <div className="col-lg-12 col-md-12">

              <h2 className='my-5'>When a man's stomach is full it makes no <br />
                difference whether he is rich or poor.</h2>
              <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit .Etiam et purus a odio <br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <a href=""><i class="fa-solid fa-play mx-auto"></i>  watch our story !</a>
            </div>

          </div>
        </div>
      </section>
      <section className='blog d-flex justify-content-center align-items-center sc4n' id='explore'>
        <div className="container  ">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12">

              <h2 className='mt-5'>Explore Our Foods</h2>
              <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br />
                leo.  Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia   and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className="row">
              {Data.map((elm) => <div className="col-md-4">
                <img src={elm.image} alt="" className='w-100' />
                <h4>{elm.title}</h4>
                <p>TIME:{elm.time} Minute|Service:1</p>
                <h3>{elm.price}</h3>
                <hr />
                <button className='my-5 boton'>order now</button>

              </div>
              )}
            </div>

          </div>
        </div>
      </section>
      <section className='slider my-5 'id='review'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className='text-light fw-bold h1'>Testimonials</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 text-center p-5  "></div>
            <Carousel className='cars'>
              <Carousel.Item  >

                <img
                  src={slid2}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className='mt-5'> behind the word mountains, "</p>
                  <h3>simon dave - web devolepor </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={slid1}
                  alt="First slide"
                />

                <Carousel.Caption>
                  <p> far from the countries Vokalia and Consonantia</p>
                  <h3>john doe  ux|ui designer</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  >
                <img
                  src={slid2}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className='mt-5'>" there live the blind texts. "</p>
                  <h3>maram -front end</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      <section className='questions my-4 sc4n'id='faq'>
        <div className="container ">
          <div className="title text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row my-5">
            <div className="col-md-6">
              <h3>~ Is Foodera Bread really baked fresh each day?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h3>~ Do you bake breads containing animal fats ?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>~ Is Foodera Bread really baked fresh each day?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h3>~ Do you bake breads containing animal fats ?</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </div>
          </div>
        </div>

      </section>



      <section className="backgr my-5 ">
        <div className="parent ">
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">

              <div className="col-md-6 text-center text-light">
                <h2 className='fw-bold' >Baked fresh daily by bakers with passion.</h2>
              </div>
              <div className="col-md-6 text-center">
                <button className='my-5 boton'>learn more</button>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='questions my-5 sc4n' >
        <div className="container ">
          <div className="title text-center">
            <h2>Hurry up! Subscribe our newsletter <br /> and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
          </div>
          <div className="contact">
            <form action="" className='my-5'>
              <div className="row ">
                <div className="col-md-12 ps-5 d-flex justify-content-center align-items-center">
                  <input className="email mx-3" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email" />

                  <button className='boton'> Subscribe</button>

                </div>
                <div className="col-md-4 ms-0">

                </div>
              </div>
            </form>

          </div>
        </div>

      </section>
      <footer className="footer " id="footer">
        <div className="container">
          <div className="row">
            <div className="mb-3 col-md-12 lnk text-center">
              <a href="#">Register</a>
              <a href="#">Forum</a>
              <a href="#">Affiliate</a>
              <a href="#">FAQ</a>
            </div>
            <div className="my-4 footer-social  text-center">
              <a href="#" className="fa-brands fa-facebook fs-4"></a>
              <a href="#" className="fa-brands fa-twitter fs-4"></a>
              <a href="#" className="fa-brands fa-youtube fs-4"></a>
              <a href="#" className="fa-brands fa-dribbble fs-4"></a>
              <a href="#" className="fa-brands fa-linkedin fs-4"></a>
              <a href="#" className="fa-brands fa-instagram fs-4"></a>
            </div>
            <div className=" mb-5 footer-copy text-center text-light">

              © 2023. Melad Shehata. All rights reserved.

            </div>
          </div>
        </div>
      </footer>



    </Fragment>

  </>
}

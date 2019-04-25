import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Game from '../components/gameCard'

class List extends Component {
    render() {
      return (
          <div>
          <Header />

        <div className="cntr">
      <Game 
      image="https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_SuperSmashBrosUltimate_02_image420w.jpg"
      gameName="Super Smash Bros. Ultimate"
      sinopsis="A fighting game where you can fight with any of Nintendo's Characters!!"
      company="Nintendo"
      console="Nintendo Switch"
      director="Masahiro Sakurai"
      releaseYear="December 7, 2018"
      rate="9.5"
      />

      <Game 
      image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg"
      gameName="God of War"
      sinopsis="Living as a man outside the shadow of the gods, Kratos, along with his son Atreus, must venture into the brutal Norse wilds as they fight to fullfil a deeply personal quest."
      company="Sony Santamonica"
      console="Playstation 4"
      director="Cory Barlog"
      releaseYear="April 20, 2018"
      rate="9.5"
      />

<Game 
      image="https://cl.buscafs.com/www.levelup.com/public/uploads/images/279293_256x327.jpg"
      gameName="Gears of War 4"
      sinopsis="A new saga begins for one of the most acclaimed video game franchises in history. After narrowly escaping an attack on their village, JD Fenix and his friends, Kait and Del, must rescue the ones they love and discover the source of a monstrous new enemy."
      company="Black Tusk Studios"
      console="Xbox one / PC"
      director="	Ramin Djawadi"
      releaseYear="Octouber 11, 2016"
      rate="9.5"
      />
      </div>
  
        <Footer className="bottom"/>
        </div>
      );
    }
  }
  
  export default List;
  
import React from 'react';
import MediaCard from './MediaCard';
import gato from './gato.jpg';

class MediaList extends React.Component {
    render () {
        return (
            <section>
                <h1>Mi lista de componentes</h1>
                <ul>
                    <li><MediaCard name="Pepe Pérez" date="6 junio 2019" img={gato} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={27} heart='fas fa-heart' /></li>

                    <li><MediaCard name="Antonio Elquemola" date="5 mayo 2019" img='http://d3u67r7pp2lrq5.cloudfront.net/product_photos/42023475/007-starters-squirtle_large.jpg' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={47} heart='far fa-heart' /></li>

                    <li><MediaCard name="Eva María Sefue" date="24 julio 2019" img='http://fanaru.com/gravity-falls/image/217151-gravity-falls-mabel-avatar-3.png' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={62} heart='fas fa-heart' /></li>
                </ul>
            </section>
        )
    }
}


export default MediaList;
import React from 'react';
import Head from '../components/Head';
import Nav from '../components/Nav';

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium eius officiis quisquam sunt. Cupiditate maiores nulla perspiciatis placeat ullam. Amet autem earum enim est libero, molestiae nostrum odio quae, recusandae similique sit suscipit tempora. Aliquid, cupiditate enim eveniet fugit hic minima, minus numquam odio, praesentium quis saepe voluptas voluptates!</p>
  </div>
);
export default (props) => (
  <div>
    <Head title="Blog"/>
    <Nav/>
    <Content url={props.url}/>
  </div>
);
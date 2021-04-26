import React from 'react';
import { Card } from './Card';

const config = {
  title: 'Card',
  component: Card
};

export default config;

export const CardSB: React.FC = () => (
  <div
    style={{
      backgroundColor: '#eeeeee',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Card>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dicta
        nesciunt fugit? Tenetur cupiditate repudiandae quos nihil maiores
        commodi eum. Temporibus amet omnis fuga maiores dignissimos delectus
        voluptas blanditiis alias!
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dicta
        nesciunt fugit? Tenetur cupiditate repudiandae quos nihil maiores
        commodi eum. Temporibus amet omnis fuga maiores dignissimos delectus
        voluptas blanditiis alias!
      </p>
    </Card>
  </div>
);

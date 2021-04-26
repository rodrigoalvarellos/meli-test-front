import React from 'react';
import { Button } from './Button';

const config = {
  title: 'Buttton Primary',
  component: Button
};

export default config;

export const ButtonPrimarySB: React.FC = () => (
  <div style={{ width: '150px' }}>
    <Button>Comprar</Button>
  </div>
);

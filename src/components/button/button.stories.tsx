import React from 'react';
import { Button } from './Button';

const config = {
  title: 'Buttton Primary',
  component: Button
};

export default config;

export const buttonPrimary: React.FC = () => <Button>Comprar</Button>;

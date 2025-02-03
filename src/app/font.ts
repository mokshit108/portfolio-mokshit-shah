import { Acme, Inter, Roboto_Mono, Poppins ,Palanquin } from 'next/font/google';

export const acme = Acme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-acme',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const poppins = Poppins({
    weight: ['600', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

export  const palanquin = Palanquin({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-palanquin',
  });
import qExtractor from '../index';

const demoContent = `[:en]Discover our range of vegetable tanned leather wallets.
Handcrafted in Spain by the best artisans.
Europe & Worldwide Delivery. Free shipping orders over 150€.[:es]Descubre nuestras carteras de piel Premium hechas a mano en Ubrique.
Envío gratis en España en pedidos superiores a 60€.[:]`;
test('Dummy test', () => {
  console.log(qExtractor(demoContent));
  expect(true).toBe(true);
});

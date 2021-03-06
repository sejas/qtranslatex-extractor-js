import qExtractor from '../index'

const demoContent = `[:en]Discover our range of vegetable tanned leather wallets.
Handcrafted in Spain by the best artisans.
Europe & Worldwide Delivery. Free shipping orders over 150€.[:es]Descubre nuestras carteras de piel Premium hechas a mano en Ubrique.
Envío gratis en España en pedidos superiores a 60€.[:]`

test('Check length extracted equal to 2', () => {
  const contentExtracted1 = qExtractor(demoContent)
  expect(Object.keys(contentExtracted1).length).toBe(2)
})

test('Check languages extracted ["en", "es"]', () => {
  const contentExtracted2 = qExtractor(demoContent)
  expect(Object.keys(contentExtracted2)[0]).toBe('en')
  expect(Object.keys(contentExtracted2)[1]).toBe('es')
})

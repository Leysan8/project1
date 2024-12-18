export const PRODUCTS = [
  // Процессоры
  {
    id: 'cpu-1',
    category: 'cpu',
    name: 'AMD Ryzen 5 5600X',
    price: 25000,
    description: '6-ядерный процессор для игр и работы',
    specs: {
      cores: 6,
      threads: 12,
      baseFrequency: 3.7,
      maxFrequency: 4.6,
      socket: 'AM4'
    },
    manufacturer: 'AMD',
    compatibility: ['motherboard-amd-1', 'motherboard-amd-2'],
    image: '/images/ryzen-5600x.jpg'
  },
  // Новый процессор
  {
    id: 'cpu-3',
    category: 'cpu',
    name: 'AMD Ryzen 7 5800X',
    price: 35000,
    description: '8-ядерный процессор для высокопроизводительных задач',
    specs: {
      cores: 8,
      threads: 16,
      baseFrequency: 3.8,
      maxFrequency: 4.7,
      socket: 'AM4'
    },
    manufacturer: 'AMD',
    compatibility: ['motherboard-amd-1', 'motherboard-amd-2'],
    image: '/images/ryzen-5800x.jpg'
  },
  // Материнские платы
  {
    id: 'motherboard-amd-1',
    category: 'motherboard',
    name: 'ASUS ROG Strix B550-F Gaming',
    price: 15000,
    description: 'Игровая материнская плата для AMD Ryzen',
    specs: {
      socket: 'AM4',
      formFactor: 'ATX',
      chipset: 'B550',
      memorySlots: 4,
      maxMemory: 128
    },
    compatibility: ['cpu-1', 'cpu-3', 'ram-1', 'ram-2'],
    image: '/images/asus-b550.jpg'
  },
  // Добавьте другие продукты аналогично
];

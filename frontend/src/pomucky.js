const db = {
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    telefon: '',
    cisloBytu: 13,
    vlastnik: true,
    spotreba: {
      cez: {
        VT: [{ 
          x: '2024-01-06', y: 10 },
        { x: '2024-02-06', y: 20 },
        { x: '2024-02-26', y: 35 },
        { x: '2024-04-01', y: 40 },
        { x: '2024-05-15', y: 70 },
        { x: '2024-07-04', y: 50 }
      ],
        NT: [{ x: '2024-01-06', y: 110 },
        { x: '2024-02-06', y: 120 },
        { x: '2024-02-26', y: 135 },
        { x: '2024-04-01', y: 140 },
        { x: '2024-05-15', y: 170 },
        { x: '2024-07-04', y: 10 }]
      },
      voda: [{ x: '2024-01-06', y: 20 },
      { x: '2024-02-06', y: 21 },
      { x: '2024-02-26', y: 25 },
      { x: '2024-04-01', y: 40 },
      { x: '2024-05-15', y: 49 },
      { x: '2024-07-04', y: 90 }]
    },
    tvralyPobyt: ['Alexey Latyshev', 'Svetlana Arlt', "Anna Maslak"]

  }
}




export default db
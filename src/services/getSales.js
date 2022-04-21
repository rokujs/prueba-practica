const JSON = {
  today: {
    totalAmount: 1560000,
    dateStart: 'Wed Apr 20 2022 12:02:04',
    transactions: [
      {
        id: 1,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 2,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 3,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      }
    ]
  },
  week: {
    totalAmount: 2565000,
    dateStart: 'Wed Apr 20 2022 12:02:04',
    transactions: [
      {
        id: 1,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 2,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 3,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 4,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 5,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 6,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      }
    ]
  },
  month: {
    totalAmount: 156000000,
    dateStart: 'Wed Apr 20 2022 12:02:04',
    transactions: [
      {
        id: 1,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 2,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 3,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 7,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 8,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 9,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 4,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 25000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      },
      {
        id: 5,
        paymentMethod: { numbers: 7712, name: 'visa' },
        amount: 35000,
        transaction: true,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 15000
      },
      {
        id: 6,
        paymentMethod: { numbers: 7712, name: 'mastercard' },
        amount: 45000,
        transaction: false,
        date: 'Wed Apr 20 2022 12:02:04',
        deduction: 0
      }
    ]
  }
}

export default function getSales () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON)
    }, 2000)
  })
}

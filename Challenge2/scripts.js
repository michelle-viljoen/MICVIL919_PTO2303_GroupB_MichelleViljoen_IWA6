const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line


  if ((hourOfDay && minuteOfDay !== null) || (hourOfDay == 00) && (minuteOfDay == 00)) {
     const taxValue = ((parseInt(tax) * salary) * 0.01)
     const startingAfterTax = salary - taxValue
     const balance = (startingAfterTax - (transport + food + rent))
     console.log('R',balance.toFixed(2))
  }




 
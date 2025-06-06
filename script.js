function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('years').textContent = String(years).padStart(2, '0');
  document.getElementById('months').textContent = String(months).padStart(2, '0');
  document.getElementById('days').textContent = String(days).padStart(2, '0');
}

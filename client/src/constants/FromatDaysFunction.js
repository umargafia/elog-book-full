function formatDaysFunction(inputDays) {
  if (!Array.isArray(inputDays)) {
    return [];
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const formattedDays = daysOfWeek.map((dayOfWeek) => {
    const matchingDay = inputDays.find(
      (day) => day.day.toLowerCase() === dayOfWeek.toLowerCase()
    );

    if (matchingDay) {
      return { ...matchingDay, formattedDay: matchingDay.day };
    } else {
      return { formattedDay: `${dayOfWeek} (Weekend)` };
    }
  });

  return formattedDays;
}

export default formatDaysFunction;

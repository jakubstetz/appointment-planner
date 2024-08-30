const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input id="title" value={title} type="text" placeholder="Enter title."></input>
      <input id="date" value={date} type="date" placeholder="Enter date." min={getTodayString()}></input>
      <input id="time" value={time} type="time" placeholder="Enter time."></input>
      <ContactPicker contacts={contacts} />
      <input type='submit'></input>
    </form>
  );
};
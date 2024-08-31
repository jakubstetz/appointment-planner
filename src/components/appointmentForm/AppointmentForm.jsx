import {ContactPicker} from '../contactPicker/ContactPicker';

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
      <input name="title" value={title} onChange={({target: {value}}) => setTitle(value)} type="text" placeholder="Enter title."></input>
      <input name="date" value={date} onChange={({target: {value}}) => setDate(value)} type="date" placeholder="Enter date." min={getTodayString()}></input>
      <input name="time" value={time} onChange={({target: {value}}) => setTime(value)} type="time" placeholder="Enter time."></input>
      <ContactPicker name='contact' value={contact} contacts={contacts} changeHandler={({target: {value}}) => setContact(value)} />
      <input type='submit'></input>
    </form>
  );
};
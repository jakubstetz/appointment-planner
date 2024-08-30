export const ContactPicker = (contacts, changeHandler, value, name) => {
  return (
    <select>
      <option value="">No Contact Selected</option>
      {contacts.map(({name}, _) => <option>{name}</option>)}
    </select>
  );
};
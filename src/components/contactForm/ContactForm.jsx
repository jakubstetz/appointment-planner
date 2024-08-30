export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input id="name" value={name} type="text" placeholder="Enter name."></input>
      <input id="phone" value={phone} type="text" placeholder="Enter phone number." pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"></input>
      <input id="emial" value={email} type="text" placeholder="Enter email."></input>
      <input type="submit"></input>
    </form>
  );
};
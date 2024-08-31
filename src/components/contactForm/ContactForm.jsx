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
      <input name="name" value={name} onChange={({target: {value}}) => setName(value)} type="text" placeholder="Enter name." />
      <input name="phone" value={phone} onChange={({target: {value}}) => setPhone(value)} type="text" placeholder="Enter phone number." pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" />
      <input name="email" value={email} onChange={({target: {value}}) => setEmail(value)} type="text" placeholder="Enter email." />
      <input type="submit" />
    </form>
  );
};
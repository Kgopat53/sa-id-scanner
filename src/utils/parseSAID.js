export default function parseSAID(text) {
  const parts = text.split("|");
  if (parts.length < 4) return null;

  const [id, surname, name, nationality] = parts;
  const dob = id.substring(0, 6);

  const birthYear = parseInt(dob.substring(0, 2), 10);
  const fullYear = birthYear > 25 ? 1900 + birthYear : 2000 + birthYear;

  return {
    idNumber: id,
    surname,
    name,
    dateOfBirth: `${fullYear}-${dob.substring(2, 4)}-${dob.substring(4, 6)}`,
    nationality,
  };
}

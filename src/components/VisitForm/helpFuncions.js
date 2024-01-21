export const transformToNormalDate =(data)=>{
  const dateString = data.message.split(
    "Tienes agendada una cita el "
  )[1];
  const appointmentDate = new Date(dateString);

  // Format the date in a human-readable format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = appointmentDate.toLocaleDateString(
    "es-ES",
    options
  );

  return formattedDate
}
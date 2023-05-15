export default function withDateTimePretty(Component) {
  return function Wrapper(props) {
    const dateNow = new Date();
    const dateVideo = new Date(props.date);
    const dateDiff = ((dateNow - dateVideo) / 1000 / 60 / 60).toFixed(1);
    let currentDate;

    if (dateDiff < 1) {
      currentDate = '12 минут назад'
    } else if (dateDiff < 24) {
      currentDate = '5 часов назад'
    } else {
      currentDate = `${(dateDiff / 24).toFixed()} дней назад`
    }

    return (
      <Component date={currentDate} />
    )
  }
}
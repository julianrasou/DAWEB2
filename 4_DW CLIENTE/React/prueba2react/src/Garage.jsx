import Car from './Car'

function Garage(props) {
    const carName = "Ford";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={carName} color={props.color} />
      </>
    );
  }

export default Garage
import PropTypes from 'prop-types';

function Square({value , onSquareClick}) {

    return <button className="square" onClick={onSquareClick}>{value}</button>;
  }

  //We need to specify That props are reciened are od which dataType and to do this we install prop-types dependencies and set propTypes properties
  Square.propTypes = {
    value: PropTypes.string.isRequired
  }
  Square.propTypes = {
    onSquareClick: PropTypes.func.isRequired
  }

export default Square
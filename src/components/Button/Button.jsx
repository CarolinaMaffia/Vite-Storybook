import PropTypes from 'prop-types';

const Button = ({label, backgroundColor = "green", handleClick, size = 'md'}) => {
    let buttonWidth = '150px';
    if (size === 'sm') buttonWidth = '100px'
    if (size === 'lg') buttonWidth = '200px'
    const style = {
        backgroundColor,
        border: 'none',
        padding: '10px',
        borderRadius: '10px',
        width: buttonWidth,
        color: '#ffffff'
    }

  return (
    <button 
        style={style}
        onClick={handleClick}    
    >{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func,
}

export default Button
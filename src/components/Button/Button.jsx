import PropTypes from 'prop-types';
import './button.css';

const Button = ({ primary, backgroundColor, label, size, isDisabled, handleClick, ...props}) => {
    const mode = primary ? 'storybook-btn--primary' : 'storybook-btn--secondary';
    const disabled = isDisabled ? 'disabled' : '';
  return (
    <button
        type="button"
        className={['storybook-btn', `storybook-btn--${size}`, disabled, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        disabled={isDisabled}
        onClick={handleClick}
        {...props}
    >
        {label}
    </button>
  )
}

Button.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'md',
    onClick: undefined,
    isDisabled: false,
}


export default Button;
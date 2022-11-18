import PropTypes from 'prop-types';
import './button.css';

const Button = ({ primary, label, size, isDisabled, handleClick }) => {
    const mode = primary ? 'storybook-btn--primary' : 'storybook-btn--secondary';
    const disabled = isDisabled ? 'disabled' : '';
  return (
    <button
        type="button"
        className={['storybook-btn', `storybook-btn--${size}`, disabled, mode].join(' ')}
        disabled={isDisabled}
        onClick={handleClick}
    >
        {label}
    </button>
  )
}

Button.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}

Button.defaultProps = {
    primary: false,
    size: 'md',
    onClick: undefined,
    isDisabled: false,
}


export default Button;
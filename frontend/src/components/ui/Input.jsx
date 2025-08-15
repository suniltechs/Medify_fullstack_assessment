import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Input = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  multiline = false,
  rows = 3,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium mb-1 ${
            error ? 'text-red-600' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <motion.div
        animate={{
          borderColor: error
            ? '#dc2626'
            : isFocused
              ? '#4f46e5'
              : '#d1d5db',
          boxShadow: error
            ? '0 0 0 0 rgba(0,0,0,0)'
            : isFocused
              ? '0 0 0 3px rgba(79, 70, 229, 0.1)'
              : '0 0 0 0 rgba(0,0,0,0)',
        }}
        className="relative rounded-md border transition-all duration-200"
      >
        {multiline ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`block w-full px-3 py-2 rounded-md bg-white ${
              error ? 'border-red-300' : 'border-gray-300'
            } shadow-sm focus:outline-none sm:text-sm`}
            {...props}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`block w-full px-3 py-2 rounded-md bg-white ${
              error ? 'border-red-300' : 'border-gray-300'
            } shadow-sm focus:outline-none sm:text-sm`}
            {...props}
          />
        )}
      </motion.div>

      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Input;

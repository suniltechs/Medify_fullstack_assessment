import { useState } from 'react';
import { motion } from 'framer-motion';

export const FileUpload = ({ onChange, preview }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange({ target: { files: e.dataTransfer.files } });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
        isDragging ? 'border-accent-light bg-accent-light/10' : 'border-secondary-dark'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {preview ? (
        <div className="flex flex-col items-center">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-32 object-contain mb-4 rounded-lg"
          />
          <label className="cursor-pointer bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary-default transition-colors duration-200">
            Change Image
            <input 
              type="file" 
              className="hidden" 
              onChange={onChange}
              accept="image/*"
            />
          </label>
        </div>
      ) : (
        <div>
          <svg className="mx-auto h-12 w-12 text-primary-light mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="text-sm text-primary-light mb-2">
            {isDragging ? 'Drop image here' : 'Drag & drop an image here, or click to select'}
          </p>
          <label className="cursor-pointer text-sm bg-primary-dark text-white px-3 py-1 rounded-lg hover:bg-primary-default transition-colors duration-200">
            Browse Files
            <input 
              type="file" 
              className="hidden" 
              onChange={onChange}
              accept="image/*"
            />
          </label>
        </div>
      )}
    </motion.div>
  );
};

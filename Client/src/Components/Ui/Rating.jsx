import React from 'react';

const Rating = ({rating}) => {
    return (
        <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-400 ${
                          i < rating ? "" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
    );
};

export default Rating;
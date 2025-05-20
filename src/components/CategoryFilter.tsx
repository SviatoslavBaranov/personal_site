import React from 'react';

type CategoryFilterProps = {
    categories: string [];
    selected: string | null;
    onSelect: (category: string | null) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selected, onSelect }) => {
    return (
        <div className='flex gap-2 flex-wrap mb-4'>
            <button 
            onClick={() => onSelect(null)}
            className={`px-4 py-2 rounded-full border ${selected === null ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
                Все
            </button>
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => onSelect(cat)}
                className={`px-4 py-2 rounded-full border ${selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
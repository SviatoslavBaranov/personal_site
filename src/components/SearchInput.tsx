import React from 'react';

type SearchInputProps = {
    value: string;
    onChange: (val: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange}) => {
    return (
        <input 
        type="text"
        placeholder='Поиск по постам...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full px-4 py-2 mb-4 border rounded-lg shadow-sm'
        />
    );
};

export default SearchInput;
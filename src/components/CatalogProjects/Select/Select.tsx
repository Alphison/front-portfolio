import ReactSelect from "react-select";

const customStyles = {
    control: (base:any, state:any) => ({
      ...base,
      color: 'red',
      border: '1px solid white',
      padding: '20px 50px 15px 50px',
      background: 'transparent',
      borderRadius: '4px',
      boxShadow: state.isFocused ? '0 0 3px #cccccc' : null,
      '&:hover': {
        borderColor: '#aaa',
      },      
    }),
    option: (styles:any, { isSelected, isFocused }: {isSelected: any, isFocused: any}) => {
        return {
          ...styles,
          color: isSelected ? 'white' : 'black', // Цвет текста выбранных или выделенных опций
          backgroundColor: isSelected ? 'black' : isFocused ? 'lightblue' : 'white', // Цвет фона выбранных или выделенных опций
        };
      },
    singleValue: (provided:any, state:any) => ({
        ...provided,
        color: 'white',
        fontSize: '20px',
    }),
    placeholder: (provided:any) => ({
        ...provided,
        color: 'white',
        fontSize: '15px',  
    }),
  };

export default function Select({placeholder, options, handleChange}: {placeholder: string, options: any, handleChange: (selectedOption: {value: number, label: string}) => void}) {
    
    return (
        <ReactSelect styles={customStyles} placeholder={placeholder} options={options} onChange={(e:any) => handleChange(e)}/>
    )
}
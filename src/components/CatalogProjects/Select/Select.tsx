import ReactSelect from "react-select";

const options = [
    {
        value: 'asdasd',
        label: 'asdasdas'
    },
    {
        value: '123123',
        label: '123123'
    },
    {
        value: '321321',
        label: '321321'
    },
]

export default function Select() {
    
    return (
        <ReactSelect options={options}/>
    )
}
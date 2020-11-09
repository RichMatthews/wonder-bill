import React from 'react'
import ReactSelect from 'react-select'

export const customReactSelectStyles = {
    control: (base: any, state: any) => ({
        ...base,
        background: '#fff',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '0',
        color: 'blue',
        height: 40,
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 10,
        paddingLeft: 10,
        outline: 'none',
        boxShadow: 'none',
        width: '94%',
    }),
    placeholder: (base: any) => ({
        ...base,
        color: 'blue',
        borderRight: 'none',
    }),
    valueContainer: (provided: any, state: any) => ({
        paddingLeft: 0,
    }),
    singleValue: (provided: any) => {
        return { ...provided, color: '#757575' }
    },
    option: (base: any, state: any) => ({
        ...base,
        height: 40,
        fontSize: 13,
        paddingLeft: 0,
    }),
}

const options = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Annually', label: 'Annually' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Daily', label: 'Daily' },
]

export const Select = ({ frequency, setFrequency }: any) => {
    return (
        <ReactSelect
            onChange={({ value }: any) => setFrequency(value)}
            options={options}
            placeholder="Frequency"
            styles={customReactSelectStyles}
            // @ts-ignore
            value={{ label: frequency }}
            components={{
                IndicatorSeparator: () => null,
            }}
        />
    )
}

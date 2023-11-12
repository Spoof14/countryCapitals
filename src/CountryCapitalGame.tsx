import { useState } from 'react';


type Data = Record<string, string>;
const defaultData = {
    Germany: 'Berlin',
    Azerbaijan: 'Baku',
    Denmark: 'Copenhagen',
    Kazakhstan: 'Astana',
}

const getBiDirectionalMap = (data: Record<string, string>) => {
    const biDirectionalMap: Record<string, string> = {};
    for (const key of Object.keys(data)) {
        biDirectionalMap[key] = data[key];
        biDirectionalMap[data[key]] = key;
    }
    return biDirectionalMap
}

const CountryCapitalGame = ({ data = defaultData }: { data?: Data; }) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const biDirectionalMap = getBiDirectionalMap(data)
    const [randomizedData, setRandomizedData] = useState(() => Object.keys(biDirectionalMap).sort(() => Math.random() - 0.5));

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const key: string = (e.target as HTMLButtonElement).name;
        const value = biDirectionalMap[key];
        if (selected[value]) {
            setRandomizedData(prev => prev.filter(item => item !== key && item !== value));
            setSelected({});
        } else {
            setSelected(prev => {
                if (Object.keys(prev).length === 2) return { [key]: true };
                else return { ...prev, [key]: true };
            });
        }
    };

    const style = Object.keys(selected).length === 2 ? { backgroundColor: '#FF0000' } : { backgroundColor: '#009bff' };
    return <div>
        {randomizedData.map(key => <button key={key} name={key} style={selected[key] ? style : {}} onClick={onClick}>{key}</button>)}
        {randomizedData.length === 0 && 'Congratulations'}
    </div>;
};
export default CountryCapitalGame